# Rover React Assignment

This is a take home assignment in React and GraphQL. This is the first time I've ever used GraphQL. It was challenging to learn it in a week but I had fun building this. I built a custom hook called useForm to manage the login form.

## Screenshots

-   Home (/)

-   Login (/login)

-   Products (/products)

## Reuseable components

-   Input
-   Button
-   Layout
-   Nav

## Running the stack

```
docker-compose up
```

You can now access the frontend via http://localhost:3000.

## Challenges

-   I had a hard time testing the session epxiry due to a port error:

```
psql: error: connection to server on socket "/var/run/postgresql/.s.PGSQL.5432" failed: No such file or directory
	Is the server running locally and accepting connections on that socket?
```

I spent a good few hours fixing this port issue on my computer but I was unsuccessful.

```

```
