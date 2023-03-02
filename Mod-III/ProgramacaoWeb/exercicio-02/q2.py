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
    chave = input("Palavra-chave: ").strip()
    palavrachave = " "+chave+" "
    profundidade = int(input("Profundidade da busca: "))

    search(palavrachave, site, profundidade)

def search(keyword, url, depth):
    page = requests.get(f"{url}", verify=False)
    soup = BeautifulSoup(page.content, 'html.parser').text

    # ignora palavras que não têm os 20 antes/depois
    result = re.findall(f'.{{20}}{keyword}.{{20}}', str(soup), re.IGNORECASE)

    for r in result:
        print(r)

"""def contains_word(text):
    return text and the_word in text
 
soup = BeautifulSoup(html, 'lxml')
the_word = 'python'
tags_found = soup.find_all(re.compile(".*"), text=contains_word)
print(tags_found)
print('-' * 15)
print([s.text for s in tags_found])
"""
main()


