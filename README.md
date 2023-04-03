## Getting started with the backend services:
- Create a mongodb database in local or on https://cloud.mongodb.com/
- Change the directory:
```
cd api
```
- Define the mongo connection url in an environment varible called `MONGO_CONNECTION_STRING`.
- To start the backend server, execute the following from the repo root:
```
npm run build && npm start
```
## Getting started with the frontend app:
- Change the directory:
```
cd client
```
- Define this address on which the app is running to an env var `API_HOST`
- To launch client, execute the following from the repo root:
```
npm start
```

## Fronte App Screenshots:

Tickets page (To list all the available tickets.)
<img width="782" alt="image" src="https://user-images.githubusercontent.com/3909648/229488701-21b92fc1-77eb-4658-b926-b3aa3e958a8e.png">

Ticket Info Page (To show the ticket informations)
<img width="676" alt="image" src="https://user-images.githubusercontent.com/3909648/229488758-cd8d6d89-024e-44e2-8399-5bea5221e970.png">

Ticket Status option dropdown (It shows the previous or the next status with the current status)
<img width="662" alt="image" src="https://user-images.githubusercontent.com/3909648/229488808-7359c285-6324-41fc-aa85-535441bdecb5.png">
