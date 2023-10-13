
# Blogs App - Documentation

This is a basic blogs app, where user can login, and after authentication and authorization, user can get acces to protected routes with his privilages to add, view, and delete blogs. User can also add, view and delete comments on blogs. There is also role based privilages for admin and user. All these frontend functionality is being done in React, Backend in Node Express Js with Database in Postgresql.

## Tech Stack
Server Language: Node version v20.5.0                               
Framework: Express.js  
Backend: Postgresql 15.4  
Frontend: React Js 18.2.0
## Installation

Install my-project with npm

```bash
npm install i
```

## API Reference
#### Base URL: http://localhost:3001/Parameter
###  User API
#### User Sign Up

```http
 POST localhost:3001/signup
```

| Parameter | Type     | Returns                |
| :-------- | :------- | :------------------------- |
| `signup` | `string` |  returns token to user |

#### User Login

```http
 POST localhost:3001/login
```

| Parameter | Type     | Returns                       |
| :-------- | :------- | :-------------------------------- |
| `login`      | `string` |  returns token to user |

### Token API
#### Base URL: http://localhost:3001/Parameter
#### Verify Token

```http
 GET localhost:3001/verify-token
```

| Parameter | Type     | Returns                       |
| :-------- | :------- | :-------------------------------- |
| `verify-token`      | `string` |  returns user data |

### Blogs API
#### Base URL: http://localhost:3001/Parameter
#### GET Blogs

```http
 GET localhost:3001/blogs
```

| Parameter | Type     | Returns                       |
| :-------- | :------- | :-------------------------------- |
| `blogs`      | `string` | returns all blogs data|

#### GET Blog By ID
```http
 GET localhost:3001/blogs/:id
```

| Parameter | Type     | Returns                      |
| :-------- | :------- | :-------------------------------- |
| `blogs/:id`      | `integer` | returns blog with id |

#### DELETE Blog

```http
 Delete localhost:3001/blogs/:id
```

| Parameter | Type     | Returns                       |
| :-------- | :------- | :-------------------------------- |
| `blogs/:id`      | `integer` | delete blog with id |

#### Create Blog

```http
 POST localhost:3001/create
```

| Parameter | Type     | Returns                      |
| :-------- | :------- | :-------------------------------- |
| `create`      | `string` | returns new blog |


### Comments API
#### Base URL: http://localhost:3001/Parameter
#### POST Comments

```http
 POST localhost:3001//blogs/:blogId/comments
```

| Parameter | Type     | Returns                       |
| :-------- | :------- | :-------------------------------- |
| `/blogs/:blogId/comments`      | `string` | returns new comment |

#### GET Comments

```http
 GET localhost:3001//blogs/:blogId/comments
```

| Parameter | Type     | Returns                       |
| :-------- | :------- | :-------------------------------- |
| `/blogs/:blogId/comments`      | `string` |  returns all comments |

#### DELETE Comments

```http
 DELETE localhost:3001/comments/:commentId
```

| Parameter | Type     | Returns                       |
| :-------- | :------- | :-------------------------------- |
| `/comments/:commentId`      | `string` |  returns new comment |

## Features
- User Management: The System allows to create user accouts with some information like valid name, email and password. A registered user can login with his provided credentials, to get access to protected routes upon authentication and authorization.

- User Authentication with JWT Tokens: The system allows a secure user authentication upon login with JSON Web Token (JWT) to allow access to protected routes. This is being done with token verification.

- Blogs Management: To Authenticated users, system allows to manage blogs. User can add new blogs, view blogs and also can delte his blogs as well as can comment on all blogs.

- User-Blog Association: There is also associations between user and blogs. As a user can have many blogs, and every blog have a user. This will enhance the functionality of personalized blogs management.

- Comments Management: The system also allows comment management, user can view, add and delete his comments. There is also associations between user, blogs and comments.

- Role Based Privilages: There are also roles based privilages for better management of blogs and comments, admin can erform all operations on all blogs, whereas a user can comment, and view every blog, but can delete only his own blogs and comments.

- Password Encryption: To enhance the system security, it stores users passwords in an encrypted format. It will make difficult to compromise system security.

- Auth Context: The whole App on frontend is wrapped in a context provider, which makes authentication and authorization more scalable and easy to maintain.








## Environment Variables
### Backend

To run this project, you will need to add the following environment variables to your .env file

`DB_PORT`, `SECRET_KEY`, `DB_USERNAME`, `DB_PASSWORD`, `DB_DATABASE`, `DB_HOST`, `PORT`, `ALLOWED_ORIGINS`

### Frontend
`REACT_APP-BASE_URL`
## Running Tests

- Backend: To run backend first, move to server folder and run the following commands
```bash
  node server.js
```
-Frontend-: For frontend, run the following command
``` bash  
npm start
```


