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
