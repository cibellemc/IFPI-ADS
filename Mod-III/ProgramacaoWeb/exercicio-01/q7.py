# Crie um script que lê um CEP e pesquise o endereço completo em alguma API aberta.

import requests
import json

"""
{
      "cep": "01001-000",
      "logradouro": "Praça da Sé",
      "complemento": "lado ímpar",
      "bairro": "Sé",
      "localidade": "São Paulo",
      "uf": "SP",
      "ibge": "3550308",
      "gia": "1004",
      "ddd": "11",
      "siafi": "7107"
    }
"""

def pesquisa_endereco(cep):
    navegador = requests.get(f'https://viacep.com.br/ws/{cep}/json/')

    try:
        # converte json em dicionário
        endereco = json.loads(navegador.content)
        info = f'corresponde à {endereco["logradouro"]}, {endereco["bairro"]} - {endereco["localidade"]}/{endereco["uf"]}'
        return info
    except:
            return ("é inválido.")


cep = input("CEP: ")
endereco = pesquisa_endereco(cep)
print(f"O CEP informado {endereco}")

