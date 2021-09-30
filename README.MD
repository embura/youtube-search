
# Projeto
    Busca vídeos no youtube a partir de um termo escolhi e distribui conforme disponibilidade diário do visualizador.


  - System:
    - OS: Linux 4.4 Ubuntu 20.04.1 LTS (Focal Fossa)
    - CPU: (8) x64 AMD FX(tm)-8320 Eight-Core Processor
  - Binaries:
    - Node: 14.16.1 - ~/.nvm/versions/node/v14.16.1/bin/node
    - npm: 6.14.12 - ~/.nvm/versions/node/v14.16.1/bin/npm
  npmPackages:
    - jest: ^27.2.2 => 27.2.2

# Execução

```sh
npm start
```


## Lista cronograma
```sh
curl --location --request POST 'http://localhost:3000/v1/search' \
--header 'Content-Type: application/json' \
--data-raw '{
    "weeklyTime":[20, 100, 30, 50, 70, 10, 130],
    "term":"filtro de aguá",
    "maxAmountOfVideos": 50
}'
```

```json
{
    "topWord": [
        "água",
        "de",
        "filtro",
        "da",
        "e"
    ],
    "daysTotal": 8,
    "days": [
        {
            "day": 1,
            "videos": [
                {
                    "title": "Saiba como funciona um filtro de água",
                    "description": null,
                    "duration": "2:47",
                    "url": "https://www.youtube.com/watch?v=FCRJcWRj5Xg",
                    "durationInMinutes": 2.783333333333333
                },
                {
                    "title": "Por que TODO MUNDO compra ESSES PURIFICADORES DE ÁGUA?? | Electrolux PE11X e IBBL FR600",
                    "description": null,
                    "duration": "6:31",
                    "url": "https://www.youtube.com/watch?v=EjsPvCJ5f5s",
                    "durationInMinutes": 6.516666666666667
                },
                {
                    "title": "FILTRO DE ÁGUA: Qual o Melhor para a Saúde? Como Produzir Água Alcalina? || Dr. Moacir Rosa",
                    "description": null,
                    "duration": "8:24",
                    "url": "https://www.youtube.com/watch?v=BfIomnBCEGs",
                    "durationInMinutes": 8.4
                }
            ],
            "dailyTimeAvailable": 20,
            "timeLeft": 2.3000000000000025
        },
        .
        .
        .
        {
            "day": 8,
            "videos": [
                {
                    "title": "Filter for capturing rainwater.",
                    "description": null,
                    "duration": "8:48",
                    "url": "https://www.youtube.com/watch?v=y_OvlFUP4Co",
                    "durationInMinutes": 8.8
                }
            ],
            "dailyTimeAvailable": 20,
            "timeLeft": 11.2
        }
    ]
}
```