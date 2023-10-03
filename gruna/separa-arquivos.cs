#include <iostream>
#include <filesystem>
#include <string>
#include "itkImageSeriesReader.h"
#include "itkGDCMImageIO.h"
#include "itkGDCMSeriesFileNames.h"
#include <gdcmTrace.h>

constexpr int MAX_RECURSION_LEVEL = 1; // Define o número máximo de níveis de recursão permitidos

// Função para processar um arquivo DICOM
void ProcessarArquivoDICOM(const std::string& filePath, const std::string& diretorioPai) {
    try {
        // Crie um leitor DICOM da ITK
        using PixelType = signed short;
        constexpr unsigned int Dimension = 3;
        using ImageType = itk::Image<PixelType, Dimension>;
        using ReaderType = itk::ImageSeriesReader<ImageType>;
        auto reader = ReaderType::New();
        using ImageIOType = itk::GDCMImageIO;
        auto dicomIO = ImageIOType::New();
        reader->SetImageIO(dicomIO);

        // Configure o leitor com o arquivo DICOM atual
        reader->SetFileNames({ filePath });

        // Execute a leitura do arquivo DICOM
        try {
            reader->Update();
        }
        catch (const itk::ExceptionObject& ex) {
            std::cerr << "Erro ao ler o arquivo DICOM: " << ex.GetDescription() << std::endl;
            return; // Retorne em caso de erro
        }

        // Obtenha as tags DICOM do arquivo
        const itk::MetaDataDictionary& dictionary = dicomIO->GetMetaDataDictionary();
        using DictionaryType = itk::MetaDataDictionary;
        using MetaDataStringType = itk::MetaDataObject<std::string>;

        // Obtém o nome do paciente (tag DICOM 0010|0010)
        std::string patientName;
        auto patientNameItr = dictionary.Find("0010|0020");
        if (patientNameItr != dictionary.End()) {
            itk::MetaDataObjectBase::Pointer entry = patientNameItr->second;
            MetaDataStringType::Pointer entryvalue = dynamic_cast<MetaDataStringType*>(entry.GetPointer());
            if (entryvalue) {
                patientName = entryvalue->GetMetaDataObjectValue();
            }
        }

        // Crie a pasta do paciente com base no nome (se ainda não existir)
        std::filesystem::path patientFolder = std::filesystem::path(diretorioPai) / patientName;
        if (!std::filesystem::exists(patientFolder)) {
            std::filesystem::create_directory(patientFolder);
        }

        // Mova o arquivo DICOM para a pasta do paciente com um novo nome
        std::filesystem::path newFilePath = patientFolder / std::filesystem::path(filePath).filename();

        // Verifique se o arquivo já existe na pasta do paciente
        if (!std::filesystem::exists(newFilePath)) {
            std::filesystem::copy(filePath, newFilePath);
        }
        else {
            std::cerr << "Arquivo ja existe na pasta do paciente: " << newFilePath << std::endl;
        }
    }
    catch (const std::filesystem::filesystem_error& ex) {
        std::cerr << "Erro ao acessar o diretorio: " << ex.what() << std::endl;
    }
}

// Função recursiva para processar um diretório e seus subdiretórios
void ProcessarDiretorioRecursivamente(const std::string& diretorio, int nivelRecursao) {
    try {
        gdcm::Trace trace;
        trace.DebugOff();
        trace.WarningOff();
        trace.ErrorOff();

        // Verifique se o nível de recursão está dentro do limite
        if (nivelRecursao > MAX_RECURSION_LEVEL) {
            std::cout << "Limite de recursao atingido. Saindo do diretorio: " << diretorio << std::endl;
            return;
        }

        // Verifique se o diretório existe
        if (std::filesystem::is_directory(diretorio)) {
            for (const auto& entry : std::filesystem::directory_iterator(diretorio)) {
                if (entry.is_directory()) {
                    std::string subDiretorio = entry.path().string();
                    std::cout << "Processando subdiretorio: " << subDiretorio << std::endl;

                    // Chamada recursiva para processar subdiretório com nível de recursão incrementado
                    ProcessarDiretorioRecursivamente(subDiretorio, nivelRecursao + 1);
                }
                else if (entry.is_regular_file()) {
                    // Processar apenas arquivos DICOM
                    std::string filePath = entry.path().string();
                    std::cout << "Processando arquivo DICOM: " << filePath << std::endl;

                    // Chame a função para processar o arquivo DICOM e movê-lo para a pasta do paciente
                    ProcessarArquivoDICOM(filePath, diretorio);
                }
            }
        }
        else {
            std::cerr << "O diretorio nao existe." << std::endl;
        }
    }
    catch (const std::filesystem::filesystem_error& ex) {
        std::cerr << "Erro ao acessar o diretorio: " << ex.what() << std::endl;
    }
}

int main() {
    std::string diretorioPrincipal = "C:\\OP\\Images\\20230714";

    // Chame a funcao para processar o diretorio principal com nivel de recursao inicial 0
    ProcessarDiretorioRecursivamente(diretorioPrincipal, 0);

    return 0;
}