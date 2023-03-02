import re
import requests
import requests_cache
from bs4 import BeautifulSoup
requests_cache.install_cache('cache')

# https://sites.pitt.edu/~naraehan/python3/re.html
# https://python-forum.io/thread-16722.html

def main():
    print("--- Buscador Online ---\n")

    site = input("Site de busca: ")
    key = input("Palavra-chave: ").strip()
    keyword = " "+key+" "
    profundidade = ask_depth()

    print("\n")

    search(keyword, site, profundidade)


def ask_depth():
    profundidade = int(input("Profundidade da busca: "))

    while profundidade < 0:
        profundidade = int(input("Profundidade da busca: "))

    return profundidade


def search(keyword, url, depth):  
    page = requests.get(f"{url}", verify=False) # entra na página
    soup = BeautifulSoup(page.content, 'html.parser') # pega html

    if depth == 0:
        getchar(keyword, soup.text) # palavra chave no "texto"
    else:
        tagsA = soup.findAll('a') # procura todos os links

        for i in range(depth + 1): # pega os que estão na profundidade
            getchar(keyword, tagsA[i])
            print("- ", tagsA[i].get("href"))
            

def getchar(keyword, soup):
        # ignora palavras que não têm os 20 antes/depois
        # 19 porque adicionei os espaços antes de passar o parâmetro
        result = re.findall(f'.{{19}}{keyword}.{{19}}', str(soup), re.IGNORECASE)

        for r in result:
            print(r)

main()


