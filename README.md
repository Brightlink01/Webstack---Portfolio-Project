
# Rest API for blog post

## Introduction

This is an api that is going to manage the backend logic of a blog post. It handles the signup, login, and blog creation, updation, deletion and search.

## Features
- Signing up
- logging in
- Getting all blogs
- Getting a specific blog
- Adding a blog
- updating a blog
- deleting a blog
## Usage


### For using as a base to other projects

This can be used to make the API customizable.

First clone the repostiory using one of the links provided below.

For https clone
~~~
https://github.com/daydream-skybreak/webStack-portfolio.git
~~~

For ssh clone
~~~
git@github.com:daydream-skybreak/webStack-portfolio.git
~~~

Afterwards set up your environmental variables as follows:
~~~
export USER=<your mongo username> PASSWORD=<your_mongo_password> PORT=<the port you want to run your server in>
~~~

Before starting the server, run `npm install` to install all the dependencies that are needed for the API.

Then run the following code to run the server
~~~
npm start
~~~
Then the sky is the limit

### Use as API endpoint

If you wish to use this models as an endpoint, you can setup the program in a separate server and, by providing a root domain, use the endpoints that are provided by the program.

#### API endpoints

- <root_domain>/api/users/signup - to sign up a new user
- <root_domain>/api/users/login - to login to your account
- <root_domain>/api/blogs/ - to see all blogs
- <root_domain>/api/blogs/:id - get blog by its id
- <root_domain>/api/blogs/add - add a blog
- <root_domain>/api/blogs/update/:id - update a blog by its id
- <root_domain>/api/blogs/delete/:id - delete a blog by its id


## Technologies Used
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white(https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white))](https://www.mongodb.com/) [![Expressjs](https://img.shields.io/badge/express-green?style=for-the-badge&logo=express)](https://expressjs.com/) [![Mongoose](https://img.shields.io/badge/mongoose-green?style=for-the-badge&logo=mongoose)](https://mongoosejs.com/) [![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![vs code](https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white)](https://code.visualstudio.com/)
## Authors
### Tsedal Tsegaye Lombebo

[![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/anem_achiso) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mulugeta-wodebo-843118170)     [![Github](https://img.shields.io/badge/Github-black?style=for-the-badge&logo=github)](https://www.linkedin.com/in/adonay-desta-63096b237)






Authors
Tsedal Tsegaye
