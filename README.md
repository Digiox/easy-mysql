# easy-mysql

Adding mysql to your project has never been so easy

## Installation

Install via npm


```bash
npm i @digioxdigiox/easy-mysql
```

Install via yarn

```bash
yarn add @digioxdigiox/easy-mysql
```

## Usage

import the db instance

```javascript
const { db } = require("@digioxdigiox/easy-mysql/mysql-connect");

// Usage example

db.query(
    'SELECT * FROM `users` ',
    function(err, results, fields) {
        if (err) {
            console.error(err)
        }
      console.log(results);
    }
  );
```


You can now use the database instance as you would do with the package [mysql2](https://www.npmjs.com/package/mysql2)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)




# Easy-mysql

Implementing mysql to your project has never been so easy


## Authors

- [@Digiox](https://www.github.com/Digiox)


## Acknowledgements

 - [Install docker (Required)](https://docs.docker.com/get-docker/)
 - [Learn about .env files](https://github.com/motdotla/dotenv)



## Environment Variables

To run this project, you will need to create an .env file in your project root

Required variables:

`MYSQL_ROOT_PASSWORD`

`MYSQL_USER`

`MYSQL_PASSWORD`

`MYSQL_DATABASE`


Optional variables:





## Installation

You must have docker installed to use the package

Don't forget to create a .env file at the root of your project

Install via npm


```bash
npm i @digioxdigiox/easy-mysql
```

Install via yarn

```bash
yarn add @digioxdigiox/easy-mysql
```

## Usage

import the db instance

```javascript
const { db } = require("@digioxdigiox/easy-mysql/mysql-connect");

// Usage example

db.query(
    'SELECT * FROM `users` ',
    function(err, results, fields) {
        if (err) {
            console.error(err)
        }
      console.log(results);
    }
  );
```


You can now use the database instance as you would do with the package [mysql2](https://www.npmjs.com/package/mysql2)


    
## Features

Commands

- start mysql with phpmyadmin 
`npx go`
- stop mysql with phpmyadmin (delete all your databases) 
`npx stop`

More features

- You can access and manage your databases via phpmyadmin on port 8081


## Roadmap

- Add command to stop mysql without loosing databases

- Add command to clear all containers and their volumes

- Add phpmyadmin port environment variable


## License

[MIT](https://github.com/Digiox/easy-mysql/blob/dev/LICENSE)

