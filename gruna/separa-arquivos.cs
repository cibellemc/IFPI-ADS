#include <iostream>
#include <filesystem>
#include <string>
#include "itkImageSeriesReader.h"
#include "itkGDCMImageIO.h"
#include "itkGDCMSeriesFileNames.h"
#include <gdcmTrace.h>

int main() {
    std::string diretorio = "C:\\OP\\Images\\20230714\\20230714\\12270004";
    //std::string diretorio = "C:\\OP\\Images\\20230714\\teste";

    try {
        gdcm::Trace trace;
        trace.DebugOff();
        trace.WarningOff();
        trace.ErrorOff();

        // Verifique se o diretório existe
        if (std::filesystem::is_directory(diretorio)) {
            for (const auto& entry : std::filesystem::directory_iterator(diretorio)) {
                if (entry.is_regular_file()) {
                    std::string filePath = entry.path().string();
                    std::cout << "Processando arquivo: " << filePath << std::endl;

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
                        continue; // Continue para o próximo arquivo em caso de erro
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
                    std::filesystem::path patientFolder = std::filesystem::path(diretorio) / patientName;
                    if (!std::filesystem::exists(patientFolder)) {
                        std::filesystem::create_directory(patientFolder);
                    }

                    // Mova o arquivo DICOM para a pasta do paciente com um novo nome
                    std::filesystem::path newFilePath = patientFolder / entry.path().filename();
                    std::filesystem::copy(filePath, newFilePath);
                    std::filesystem::remove(filePath);
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

    return 0;
}