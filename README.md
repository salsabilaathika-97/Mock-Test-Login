# To-do Website Test

This is a simple to-do list website using [fake REST API](https://jsonplaceholder.typicode.com/) as a part of implementing CRUD (Create, Read, Update, Delete). **For live preview:** [https://to-do-website-test.vercel.app/](https://to-do-website-test.vercel.app/).

## Questions
1. **What is the Use of JSON in REST APIs?** JSON is the standard for transferring data. Almost every networked technology can use JSON. REST APIs should accept JSON for request payload and also send responses to JSON.


2. **Explain how REST API works!** A REST API works essentially the same way that any website does. A call is made from a client to a server, and data is received back over the HTTP protocol. The most common HTTP method used for client request are GET, POST, PUT, DELETE.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install node modules.

```bash
npm install
```

## Features

### 1. Login Page
User can login by input their username. For example is: Samantha. If the login is successful, the website will redirect to the home page and show login status from alert window.

![Login Page](https://user-images.githubusercontent.com/85387669/204955326-788e11fb-3e5b-4108-9bf0-f7471703aa73.png)

The alert will show the user's real name. For example is: Clementine Bauch. The window will close automatically in seconds.

![Login Alert](https://user-images.githubusercontent.com/85387669/204955438-2dc6caf9-443b-4a1e-ad55-30eac534383f.png)

### 2. Home Page
This is the page that displays all to-do lists based on user. User can create to-do list, update to-do list, and delete to-do list. The page also has navigation bar and a logout button on top-left to switch user account.

![Home Page](https://user-images.githubusercontent.com/85387669/204956022-49980459-a49f-4f43-8b71-858a65270f93.png)

When the user click ``Create a new to-do list`` button, the modal will appear and user can write what they want to do as a new to-do list. **Important:** resource will not be really updated on the server but it will be faked as if.

![Create To-do List](https://user-images.githubusercontent.com/85387669/204956251-41094730-dd94-4cc5-add2-99e66c4df9be.png)

If the user want to edit their to-do list, they can click ``Edit`` button, the modal will also appear just like before but as an edit form. **Important:** resource will not be really updated on the server but it will be faked as if.

![Edit List](https://user-images.githubusercontent.com/85387669/204956667-a6af2ed8-1ae5-4fe5-b748-ab3d36f48f04.png)

A to-do list can be deleted by pressing ``Delete`` button. The alert will appear after the data is removed. **Important:** resource will not be really updated on the server but it will be faked as if.

![Delete List](https://user-images.githubusercontent.com/85387669/204956972-5211a2a4-f106-4bb5-96d5-e6e8ebf90286.png)

## Tools and Libraries

1. React Framework
2. HTML
3. CSS
4. Javascript
5. Axios
6. Redux
7. React Bootstrap