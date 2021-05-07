# Lumen-React-Login-Panel
Un semplice pannello di Registrazione e Log In sviluppato in Lumen/React.

## Istruzioni

Avviare il pacchetto docker e fare il build.
`docker-compose up --build`

## Backend
Installare le dependencies
<br>
`cd backend/ && composer install`

Effettuare la migrazione
<br>
`php artisan migrate`

## Frontend
Installare le dependencies
<br>
`cd frontend/ && npm install`

## Infine:
Avviare il container con `docker-compose up -d` e visitare http://localhost.3000 per l'accesso al frontend.
