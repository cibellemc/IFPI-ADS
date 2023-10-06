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

        // Obtém o nome do paciente (tag DICOM 0010|0020)
        std::string patientID;
        auto patientIDItr = dictionary.Find("0010|0020");
        if (patientIDItr != dictionary.End()) {
            itk::MetaDataObjectBase::Pointer entry = patientIDItr->second;
            MetaDataStringType::Pointer entryvalue = dynamic_cast<MetaDataStringType*>(entry.GetPointer());
            if (entryvalue) {
                patientID = entryvalue->GetMetaDataObjectValue();
            }
        }

        // Construa o caminho de destino com base no ID do paciente
        std::filesystem::path patientFolder = std::filesystem::path(diretorioPai) / patientID;
        if (!std::filesystem::exists(patientFolder)) {
            std::filesystem::create_directory(patientFolder);
        }

        // Construa o caminho de destino final
        std::filesystem::path newFilePath = patientFolder / std::filesystem::path(filePath).filename();

        // Verifique se o arquivo já existe na pasta do paciente
        if (!std::filesystem::exists(newFilePath)) {
            // Mova o arquivo DICOM para a pasta do paciente
            std::filesystem::rename(filePath, newFilePath);
        }
        else {
            std::cerr << "Arquivo já existe na pasta do paciente: " << newFilePath << std::endl;
        }
    }
    catch (const std::filesystem::filesystem_error& ex) {
        std::cerr << "Erro ao acessar o diretório: " << ex.what() << std::endl;
    }
}

// Função para mover todos os arquivos de subdiretórios para um único diretório
void MoverArquivosDeSubdiretorios(const std::string& diretorioPrincipal, const std::string& pastaDestino) {
    for (const auto& entry : std::filesystem::directory_iterator(diretorioPrincipal)) {
        if (entry.is_directory()) {
            std::string subdiretorio = entry.path().string();
            for (const auto& arquivoEntry : std::filesystem::directory_iterator(subdiretorio)) {
                if (arquivoEntry.is_regular_file()) {
                    std::string filePath = arquivoEntry.path().string();
                    std::filesystem::path novoCaminho = std::filesystem::path(pastaDestino) / arquivoEntry.path().filename();
                    std::filesystem::rename(filePath, novoCaminho);

                    // Após mover o arquivo para a pasta de destino, processe-o
                    ProcessarArquivoDICOM(novoCaminho.string(), pastaDestino);
                }
            }
        }
    }
}

int main() {
    std::string diretorioPrincipal = "C:\\OP\\Images\\20230714"; // Diretório principal
    std::string pastaDestino = "C:\\OP\\Images\\Pacients"; // Diretório de destino

    // Crie a pasta de destino, se ainda não existir
    if (!std::filesystem::exists(pastaDestino)) {
        std::filesystem::create_directory(pastaDestino);
    }

    // Mova todos os arquivos de subdiretórios para a pasta de destino e processe-os
    MoverArquivosDeSubdiretorios(diretorioPrincipal, pastaDestino);

    return 0;
}
