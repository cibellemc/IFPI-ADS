import re
import urllib3
import requests
import requests_cache
from bs4 import BeautifulSoup
requests_cache.install_cache('cache')
from requests.exceptions import MissingSchema
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

from urllib.request import urlopen

# https://sites.pitt.edu/~naraehan/python3/re.html
# https://python-forum.io/thread-16722.html
# https://www.handtalk.me/br/blog/leis-de-acessibilidade/ -> site teste

# enquantto a busca for menor que 0, pede novamente profundidade
def ask_depth():
    profundidade = int(input("Profundidade da busca: "))

    while profundidade < 0:
        profundidade = int(input("Profundidade da busca: "))

    return profundidade


def search(keyword, url, depth):  
    sites_visitados.append(url) # cada site visitado (recebido como argumento)
    dicionario_links[url] = 0 # cada site visitado

    print(f"\nPágina {depth} - {url}") 
    try:
        page = requests.get(url, allow_redirects=True, verify=False) 
        soup = BeautifulSoup(page.content, 'html.parser') 

        getchar(keyword, soup.text) # palavra chave no "texto"

        if depth > 1:
            tagsA = soup.find_all('a', attrs={'href': re.compile("^http.*")}) # procura todos os links clicáveis

            for tag in tagsA:
                l = tag.get('href') # extrai todos os sites para um array externo
                links.append(l)
            # pra cada link na página atual

            for link in links: 
                if link in dicionario_links: # se o link ainda não foi buscado
                    continue
                search(keyword, link, depth - 1)

    except:
        pass

def rankeamento(url):
    if url in sites_visitados:
        dicionario_links[url] += 1 # se faz referência

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





