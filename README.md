# Aviation-WX

## Projeto feito com ReactJS (CRA)
## Biblioteca utilizada: Styled-Components
## Requisição: Axios

</br>

## Executar o projeto:

</br>

# npm install

# npm start

## Deploy: https://aviation-wx-react.vercel.app/

</br>

## Entenda um pouco sobre o meu projeto:

pt-BR

O projeto foi desenvovido para ser utilizado em ambiente real na aviação, os pilotos podem consultar de forma instântanea as mensagens meteorológicas (METAR e TAF) de um determinado aeroporto através do código ICAO do aeroporto em específico, com a finalidade de promover a segurança operacional. 

</br>

## Para buscar rodar a aplicação com as mensagens meteorológicas:
</br>

Abaixo o link com a lista de aeroportos brasileiros com seus respectivos códigos ICAO para a consulta:

https://pt.wikipedia.org/wiki/Lista_de_aeroportos_do_Brasil_por_c%C3%B3digo_aeroportu%C3%A1rio_ICAO

</br>

PS: Basta colocar no input o código ICAO e clicar em buscar que a requisição irá ocorrer.

Todos os dados são cansumidos da API: https://www.checkwxapi.com/

</br>

O que é o METAR? 

METAR (Meteorological Aerodrome Report) é um relatório meteorológico de um determinado aeroporto, interpretado através de alfabeto fonético,
e é utilizado diariamente na aviação mundial, é mandatória as consultas das condições, para a segurança de voo.

O que é o TAF?

TAF (Terminal Aerodrome Forecast) assim como o METAR o TAF também serve para consulta, a principal diferença é que a mensagem tem uma validade maior, enquanto o METAR é emitido a cada 60 minutos, o TAF é emitido para valer por períodos maiores, em alguns aeroportos o TAF tem validade de até 72 horas.


Informações detalhadas sobre o METAR: https://skybrary.aero/articles/meteorological-terminal-air-report-metar

Informações detalhadas sobre o TAF : https://skybrary.aero/articles/weather-forecast


