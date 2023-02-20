# 5) Crie um script que busque no google. Utilize a url:
# http://www.google.com/search. Além disso, passe um parâmetro chamado “q” com o valor a ser buscado.

from selenium import webdriver

busca = input("Conteúdo a ser pesquisado: ")

def buscador(q):
    navegador = webdriver.Chrome()
    navegador.get(f"https://www.google.com/search?q={q}")

buscador(busca)



