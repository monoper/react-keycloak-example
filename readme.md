# React/Keycloak Simple Example

A simple example of using react with Keycloak

## Description

This is just a handy reference for a simple example of using react & keycloak with a postgres db. I wouldn't use this in production without a bunch of changes.

## Getting Started

1. Install NodeJS
2. Install Docker

## Running the Example
1. From the root directory run the following
    ```bash
    docker-compose up
    ```
2. Navigate to http://localhost:8889 and login using the admin credentials located in the .end file.
3. Create a new realm in keycloak
4. Create a new client and set the root/home/web origins urls to http://localhost:3000 and the valid redirect uris/post logout redirect uris/admin url to http://localhost:3000/
5. Create a group and a user to test the application. For the user, just set their password in the keycloak admin portal.
6. cd into the frontend directory and run the following command
    ```bash
    npm run start    
   ```
7. Login with test user created earlier.

## Additional Information

- I used http://localhost:8889 for keycloak as something else on my system was using 8080 and I didnt want to change it. It can be changed in the .env file if you want
- 


## Resources used to make this example

1. https://blog.logrocket.com/implement-keycloak-authentication-react/
2. https://medium.com/@vishal.sharma./run-postgresql-and-pgadmin-using-docker-compose-34120618bcf9
3. https://www.npmjs.com/package/keycloak-js