import re
import time
import warnings
import requests
import requests_cache
from bs4 import BeautifulSoup
warnings.filterwarnings('ignore')
requests_cache.install_cache('cache')
from urllib.request import Request, urlopen

# https://sites.pitt.edu/~naraehan/python3/re.html
# https://python-forum.io/thread-16722.html
# https://www.handtalk.me/br/blog/leis-de-acessibilidade/ -> site teste

# enquanto a busca for menor que 0, pede novamente profundidade
def ask_depth():
    profundidade = int(input("Profundidade da busca: "))

    while profundidade < 0:
        profundidade = int(input("Profundidade da busca: "))

    return profundidade


def search(keyword, url, depth):  
    dicionario_links[url] = 0 # cada site visitado adiciona ao rank

    page = requests.get(url, allow_redirects=True, verify=False) 
    soup = BeautifulSoup(page.content, 'html.parser') 

    print(f"\n> URL - {url}") 
    getchar(keyword, soup.text) # palavra chave no "texto"
    rankeamento(url, keyword) # insere no dicionário

    if depth > 0:
        try:
            tagsA = soup.find_all('a', attrs={'href': re.compile("^http.*")}) # procura todos os links clicáveis
            links_pagina_atual = getlinks(tagsA)

            # para cada link salvo no dicionário, verifica se ele foi mencionado na página atual
            for link in dicionario_links:
                if link in links_pagina_atual:
                    rankeamento(link, keyword)
            
            # paga cada link da página atual, se ele já foi visitado, continua buscando
            for link in links_pagina_atual:
                if link in dicionario_links.values():
                    continue
                search(keyword, link, depth - 1)

        except:
            pass


def rankeamento(url, word):
    dicionario_links[url] += 1 # se faz referência

    if busca_termo(url,word) > 9:
        dicionario_links[url] += 5 # rank positivo: achar mais de 5 da palavra chave

    subtracao = busca_termo(url, negativa) 
    if subtracao >= 1: 
        dicionario_links[url] -= subtracao # rank negativo: achar pelo menos uma vez a palavra negativa


def mostrar_rank(dicionario):
    print('\n--- Rank de páginas ---')

    index = 1
    for chave, valor in sorted(dicionario.items(), key=lambda item: item[1], reverse=True):
        print(f"{index}º: '{chave}' - {valor:.0f}")
        
        index += 1


def getlinks(html):
    links_pagina_atual = []
    for tag in html:
        l = tag.get('href') 
        links_pagina_atual.append(l)
    return links_pagina_atual


# prioridade positiva: quantidade de ocorrências
def busca_termo(url, termo):
    req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    pagina = urlopen(req).read().decode("UTF-8")
    quantidade = pagina.lower().count(termo.lower())
    return quantidade

            
def getchar(keyword, soup):
        # ignora palavras que não têm os 20 antes/depois
        # 19 porque adicionei os espaços antes de passar o parâmetro
        result = re.findall(f'.{{19}}{keyword}.{{19}}', str(soup), re.IGNORECASE)

        for r in result:
            print(r)


print("--- Buscador Online ---\n")

site = input("Site de busca: ")
dicionario_links = {site:0} # dicionário de referências

key = input("Palavra-chave: ").strip()
keyword = " "+key+" "

profundidade = ask_depth()

negativa = input("Palavra que não deseja encontrar nas buscas: ")

tempo_inicial = time.time() # em segundos
search(keyword, site, profundidade)
tempo_final = time.time() # em segundos

mostrar_rank(dicionario_links)

print(f"\n--- Tempo de busca ---\nAproximadamente {round(tempo_final - tempo_inicial,1)} segundos")
