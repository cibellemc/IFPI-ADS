import re
import requests
import requests_cache
from bs4 import BeautifulSoup

# https://sites.pitt.edu/~naraehan/python3/re.html

requests_cache.install_cache('cache')

def main():
    print("--- Buscador Online ---\n")

    site = input("Site de busca: ")
    chave = input("Palavra-chave: ").strip()
    palavrachave = " "+chave+" "
    profundidade = int(input("Profundidade da busca: "))

    search(palavrachave, site, profundidade)

def search(keyword, url, depth):
    page = requests.get(f"{url}", verify=False)
    soup = BeautifulSoup(page.content, 'html.parser').text
    result = re.findall(keyword, str(soup))
    print(result) #print de array

main()


