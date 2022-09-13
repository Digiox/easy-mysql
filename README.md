
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


Optional variables:

`MYSQL_DATABASE`

`MYSQL_USER`

`MYSQL_PASSWORD`



## Installation

Install the package

```bash
  npm install @digioxdigiox/easy-mysql
```

Create a .env file and specify the environment variables that you need

    
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

