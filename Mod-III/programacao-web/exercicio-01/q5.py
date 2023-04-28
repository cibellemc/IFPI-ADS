# 5) Crie um script que busque no google. Utilize a url:
# http://www.google.com/search. Além disso, passe um parâmetro chamado “q” com o valor a ser buscado.

import requests
from bs4 import BeautifulSoup

busca = input("Conteúdo a ser pesquisado: ")

def buscador(q):
    navegador = requests.get(f"https://www.google.com/search?q={q}")
    soup = BeautifulSoup(navegador.content, "html.parser")
    h3 = soup.findAll("h3")
    print("Principais resultados: ")
    for h in h3:
        print("-", h.get_text())

buscador(busca)



