import re
from time import sleep
import requests
import requests_cache
from bs4 import BeautifulSoup
requests_cache.install_cache('cache')
from urllib.request import urlopen
import urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# https://sites.pitt.edu/~naraehan/python3/re.html
# https://python-forum.io/thread-16722.html
# https://www.handtalk.me/br/blog/leis-de-acessibilidade/ -> site teste
# se encontra do lado direito da sua tela e conhe

def ask_depth():
    profundidade = int(input("Profundidade da busca: "))

    while profundidade < 0:
        profundidade = int(input("Profundidade da busca: "))

    return profundidade


def search(keyword, url, depth):  
    print(f"Página {depth} - {url}")
    page = requests.get(f"{url}", verify=False) # entra na página
    soup = BeautifulSoup(page.content, 'html.parser') # pega html

    dicionario_links

    getchar(keyword, soup.text) # palavra chave no "texto"

    tagsA = soup.find_all('a', attrs={'href': re.compile("^http.*")}) # procura todos os links clicáveis
    novo_link = ''
    for tag in tagsA:
        l = tag.get('href')
        links.append(l)

    if depth > 1:
        # pra cada link na página atual
        for link in links: 
            if link not in sites_visitados:
                novo_link = link # erro, pegando último

        search(keyword, novo_link, depth - 1)
    

# prioridade positiva: quantidade de ocorrências
def busca_termo(url, termo):
    navegador = urlopen(url)
    pagina = navegador.read().decode("UTF-8")
    quantidade = pagina.lower().count(termo.lower())
    return quantidade

            
def getchar(keyword, soup):
        # ignora palavras que não têm os 20 antes/depois
        # 19 porque adicionei os espaços antes de passar o parâmetro
        result = re.findall(f'.{{19}}{keyword}.{{19}}', str(soup), re.IGNORECASE)

        for r in result:
            print(r)

links = [] # auxiliar p/ permitir recursividade
sites_visitados = [] # array de links que o buscador entra

print("--- Buscador Online ---\n")

site = input("Site de busca: ")
dicionario_links = {site:0} # dicionário de referências
key = input("Palavra-chave: ").strip()
keyword = " "+key+" "
profundidade = ask_depth()

search(keyword, site, profundidade)

print(dicionario_links)




