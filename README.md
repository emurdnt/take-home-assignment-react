# Rover React Assignment

This is a take-home assignment in React and GraphQL. It's my first time ever using GraphQL. It was not a breeze to learn it in a week but I want to challenge myself and prove that I can learn anything. I built a custom hook called useForm to manage the login form. I also added basic error handling to the login and product pages.

## Screenshots

-   Home (/) - I added a nav bar where the users can go to the Products or Login.
    ![home page](https://github.com/emurdnt/take-home-assignment-react/blob/master/app/src/assets/ss-home.png)

-   Login (/login)
    ![login](https://github.com/emurdnt/take-home-assignment-react/blob/master/app/src/assets/ss-login.png)

-   Products (/products) - I added a logout function to clear the cookies.
    ![products](https://github.com/emurdnt/take-home-assignment-react/blob/master/app/src/assets/ss-product.png)

-   Nav - Users can navigate between all the pages
    ![nav](https://github.com/emurdnt/take-home-assignment-react/blob/master/app/src/assets/ss-nav.png)

-   Login Error - created a subtle error messaging in the login page
    ![error login](https://github.com/emurdnt/take-home-assignment-react/blob/master/app/src/assets/ss-error-login.png)
    
-   Product Page Error - added messaging for when the app fails to grab the products.
    ![error products](https://github.com/emurdnt/take-home-assignment-react/blob/master/app/src/assets/ss-error-product.png)
    
-  Login Loading - added a loader to the sign in screen
  ![loader](https://github.com/emurdnt/take-home-assignment-react/blob/master/app/src/assets/ss-login-loading.png)

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

You can now access the front end via http://localhost:3000.
Use the following accounts to login:
`email: bob@example.com password:password `

## Challenges

-   I had a hard time testing the session epxiry due to a port error:

```
psql: error: connection to server on socket "/var/run/postgresql/.s.PGSQL.5432" failed: No such file or directory
	Is the server running locally and accepting connections on that socket?
```

I spent a good few hours fixing this port issue on my computer but I was unsuccessful. So the session-expiring task is untested but I implemented the task. 

## Assumptions

-   There is a measurement provided for the logo on the Login which is 143 x 24px. The resulting image looked wonky so I decided to just leave it.

![logo](https://github.com/emurdnt/take-home-assignment-react/blob/master/app/src/assets/ss-login-logo.png)
