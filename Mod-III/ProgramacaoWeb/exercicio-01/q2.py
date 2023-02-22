# 2) Baixe uma página e exiba o conteúdo de uma determinada tag lida pelo 

import requests
from bs4 import BeautifulSoup

page = requests.get("https://pt.wikipedia.org/wiki/Python")
soup = BeautifulSoup(page.content, 'html.parser')
nomeTag = input("Tag que deseja buscar: ")

tags = soup.findAll(f'{nomeTag}')
for tag in tags:
    print("- ", (tag.text))


    
