# Workout Log Application

## INTRODUCTION

This is my first server based application! I am building as a part of Eleven Fifty Academy's Web Development course.

## ENDPOINT TESTING

### users/register POST request

- **Register a new user**
  ![postman user/register test](./testImages/postmanUserRegisterTest.png)
  ![postgres user/register result](./testImages/postgresRegisterUserResult.png)

### users/login POST request

- **Successful Login**
  ![postman user/login success](./testImages/postmanUserLoginSuccess.png)

- **Incorrect Password**
  ![postman user/login wrong password](./testImages/postmanUserLoginWrongPassword.png)

- **Incorrect Email Address**
  ![postman user/login wrong email](./testImages/postmanUserLoginWrongEmail.png)

### logs/log POST request

- **Create a log entry for a logged in user**
  ![postman logs/log POST success](./testImages/postmanLogCreateSuccess.png)
  ![postgres logs/log POST result](./testImages/postgresLogCreateResult.png)

### logs/log GET request

- **Get all logs for a logged in user**
  ![postman logs/log GET success](./testImages/postmanLogGetAllSuccess.png)
