# Receba uma página como entrada e um termo a ser buscado e liste as
# ocorrências dentro dessa página. Atente para extrair o texto da página sem as
# tags e, ao encontrar uma ocorrência do termo, exiba os 20 caracteres antes e
# 20 caracteres depois.

# https://cursos.alura.com.br/forum/topico-busca-de-palavras-em-uma-pagina-web-100618

from urllib.request import urlopen

def busca_termo(url, termo):
    navegador = urlopen(url)
    pagina = navegador.read().decode("UTF-8")
    quantidade = pagina.lower().count(termo.lower())
    print(f'"{termo}" aparece {pagina.lower().count(termo.lower())} vezes.')

def main():
    url = input("Informe o endereço da página: ")
    chave = input("Termo a ser pesquisado: ")
    busca_termo(url, chave)

main()
    
