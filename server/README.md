# Workout Log Application

## INTRODUCTION

This is my first server based application! I am building as a part of Eleven Fifty Academy's Web Development course.

## ENDPOINT TESTING

### user/register POST request

- **Register a new user**
  ![postman user/register test](./testImages/postmanUserRegisterTest.png)
  ![postgres user/register result](./testImages/postgresRegisterUserResult.png)

### user/login POST request

- **Successful Login**
  ![postman user/login success](./testImages/postmanUserLoginSuccess.png)

- **Incorrect Password**
  ![postman user/login wrong password](./testImages/postmanUserLoginWrongPassword.png)

- **Incorrect Email Address**
  ![postman user/login wrong email](./testImages/postmanUserLoginWrongEmail.png)

### log/ POST request

- **Create a log entry for a logged in user**
  ![postman log POST success](./testImages/postmanLogCreateSuccess.png)
  ![postgres log POST result](./testImages/postgresLogCreateResult.png)

### log/ GET request

- **Get all logs for a logged in user**
  ![postman log GET success](./testImages/postmanLogGetAllSuccess.png)

### log/:id GET request

- **Get a single log for a signed in user**
  ![postman logs/log GET success](./testImages/postmanLogGetSingleSuccess.png)

### log/:id PUT request

- **Update a specified log for a logged in user**
  ![postman log/:id PUT success](./testImages/postmanLogUpdateSuccess.png)

  - _Before updating table_
    ![postgres log/:id before update](./testImages/postgresBeforeUpdate.png)
  - _After updating table_
    ![postgres log/:id after update](./testImages/postgresAfterUpdate.png)

### log/:id DELETE request

- **Delete a specified log for a logged in user**
  ![postman log/:id DELETE success](./testImages/postmanLogDeleteSuccess.png)
  ![postgres log/:id after deletion](./testImages/postgresAfterDelete.png)
