# Showcase of nodejs cluster

This is an example how to use native nodejs cluster to build resilient apis that can handle more trafic with better response time and less fail.

## This can be easely aplied in you project. 

Usually express aplications are started with a server.js, you just have to implement a index.js file that manages the cluster creating intances of your server.js in different process.

See for yourself:

1. Clone this repo

2. Install dependecies and create .env file from example
```
npm i && cp .env.example .env
```
3. Start the server without cluster
```
npm run server
```
4. On other console run the tests
```
npm t
```
5. Take notes on the result test

6. Stop the running server

7. Run the server in cluster mode with
```
npm run cluster
```

8. Run the test again
```
npm t
```
9. Compare the results