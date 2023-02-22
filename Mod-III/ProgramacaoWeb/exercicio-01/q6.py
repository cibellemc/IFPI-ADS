import pandas as pd
import requests
from bs4 import BeautifulSoup

navegador = requests.get("https://www.undp.org/pt/brazil/idh-global-2014")

def find_tab():
    web = BeautifulSoup(navegador.text, 'html.parser')
    tabela = web.find('table', {'class':'tableizer-table'})
    return (tabela)

df = pd.read_html(find_tab())