# 1) Baixe uma página e exiba seus links. Para isso, extraia o atributo href das tags 

import requests
from bs4 import BeautifulSoup

page = requests.get("https://pt.wikipedia.org/wiki/Python")
soup = BeautifulSoup(page.content, 'html.parser')
tagsA = soup.findAll('a')

for tag in tagsA:
    print("- ", tag.get("href"))
