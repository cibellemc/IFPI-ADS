# Pesquise alguma página com uma tabela de classificação e extraia dessa
# página a tabela. Um exemplo desse tipo de tabela segue abaixo:
# https://www.meutimao.com.br/tabela-de-classificacao/campeonato_brasileiro/

# aula: https://www.youtube.com/watch?v=r1q5uv53Rlk&ab_channel=NovoCientistadeDados
# aula1: https://www.youtube.com/watch?v=0YX0_GZeQwU&ab_channel=Programa%C3%A7%C3%A3oDin%C3%A2mica

import pandas as pd
import requests
from bs4 import BeautifulSoup

navegador = requests.get("https://www.undp.org/pt/brazil/idh-global-2014")

def find_tab():
    # se recurso obtido com sucesso
    if navegador.status_code == 200:
        # se usar .content tem o mesmo efeito
        soup = BeautifulSoup(navegador.text, 'html.parser')
        # sem a especificação da classe também dá certo
        tabela = soup.find('table', {'class':'tableizer-table'})
        # se não transformar pra str não dá certo no pandas
        return str(tabela)

print(find_tab())
df = pd.read_html(find_tab())

""" 
utilizando somente pd
import pandas as pd
df = pd.read_html("https://www.undp.org/pt/brazil/idh-global-2014")
print(df[0])
"""

