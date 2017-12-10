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

create an environment variable (.zshrc or .bashrc)
```
  > export BOOK_STORE_DEV_URI=mysql://yourNameUser:yourPassword@localhost/bookStore
  > relaunch your IDE and your terminal
```

install the database and the fixtures
```
  > npm run init
```

start the project on localhost 3002
```
  > npm run start || npm run dev # will use nodemon
```