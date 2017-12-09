# Book store

small project with Angular JS and Node.js

## Feature available
* get a list of books from the database
* add a new book
* search book with google search book API

___
## To do
* add a book from the search results on google search book API
* update a book
* ...
___

## install the project: 
```
  > git clone https://github.com/loantruong/book-store.git
  > cd book-store
  > npm install
```
create MySQL database
```
  CREATE database bookStore;
```
create an environment variable (.zshrc or .bashrc)
```
  > export BOOK_STORE_DEV_URI=mysql://yourNameUser:yourPassword@localhost/bookStore
  > relaunch your IDE and your terminal
```
launch the server to create the database
```
  > node server
```
stop the server to run seeders
```
  > stop server: ctrl + c
  > npm run seed
```
start the project
```
  > npm run start || npm run mon
```