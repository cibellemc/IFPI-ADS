# 6) Dado um endereço de uma imagem na internet, baixe o arquivo e salve-o localmente.

#  para abrir e ler URLs
import urllib.request as ur

# https://s2.glbimg.com/ZnzfgTpi8WIHpSj1XGTQd_490oY=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_7d5b9b5029304d27b7ef8a7f28b4d70f/internal_photos/bs/2022/h/k/RACBH1SHaBKfUOt4KjTQ/hans-jurgen-mager-qqwv91ttbre-unsplash.jpg
url = input("URL da imagem: ")

ur.urlretrieve(url, "exercicio-01/img-q3.jpg")