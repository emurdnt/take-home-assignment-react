# Rover React Assignment

This is a take home assignment in React and GraphQL. It's my first time ever using GraphQL. It was challenging to learn it in a week but I had fun building this. I built a custom hook called useForm to manage the login form.

## Screenshots

-   Home (/) - I added a nav bar where the users can go to the Products or Login.
    ![home page](https://github.com/emurdnt/take-home-assignment-react/blob/master/app/src/assets/ss-home.png)

-   Login (/login)
    ![login](https://github.com/emurdnt/take-home-assignment-react/blob/master/app/src/assets/ss-login.png)

-   Products (/products) - I added a logout function to clear the cookies.
    ![products](https://github.com/emurdnt/take-home-assignment-react/blob/master/app/src/assets/ss-product.png)

-   Login Error - created a subtle error messaging in the login page
    ![error login](https://github.com/emurdnt/take-home-assignment-react/blob/master/app/src/assets/ss-error-login.png)
-   Product Page Error - added messaging for when the app fails to grab the products.
    ![error products](https://github.com/emurdnt/take-home-assignment-react/blob/master/app/src/assets/ss-error-product.png)

## Reuseable components

-   Input:

```
/**
 *
 * @param type accepts ''text' | 'number' | 'email' | 'password'
 * @param label
 * @param value
 * @param name
 * @param placeholder
 * @param error
 * @param disabled
 * @param onChange input callback function
 * @returns
 */
```

-   Button:

```
/**
 *
 * @param onClick callback function for button
 * @param color accepts 'primary' or 'secondary'
 * @param disabled disabled button
 * @param loading shows loading icon when the process is on-going
 * @param label button label
 * @returns React.ReactNode
 */
```

-   Layout

```
/**
 * Layout component to set wrapper of the page
 * @param backgroundColor accepts 'light', 'dark', or 'grey'
 * @param align accepts 'left', 'center', or 'right'
 * @param children children elements
 * @returns React component
 */
```

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
