# Trip Counselor

> Our Front-End Capstone (FEC) project replicates sections of the Trip Advisor website. This repo consists of a service server hosting my React components `<Category>` and `<Event>` for our team's website. The repo also includes a database containing mock data for my components.

![screenshot](https://github.com/motunui/gary-proxy/blob/master/2019-02-23%2017.03.58.gif)

## Related Projects

  - https://github.com/motunui/gary-proxy
  - https://github.com/motunui/grahn-service
  - https://github.com/motunui/sidebar-service
  - https://github.com/motunui/grahn-proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> To run service server

Open terminal and go to root directory of this project

Run `npm start` in production mode, or `npm run server-dev` in development mode.

In browser, visit 'localhost:3016'

> To seed mock database with new data

In terminal, change directory to server/db. Run `node seed.js`.

> To edit the database's schema tables

Open server/db/schema.sql in a code editor. Make changes and save.

Open terminal and change directory to server/db. Run `sqlite3 events.db` to open the mock database inside the sqlite3 terminal. (See instructions below in "Development" for installing sqlite3.)

In sqlite3 terminal, run `.read schema.sql`. This updates the database's table structures.

Run `.quit` to close the sqlite3 terminal. Be sure to seed the database with new data; see instructions above.

> Once you deploy your server to an AWS EC2 instance

Go to `client/src/config.js` and change the `AWS_URL`'s IP to your AWS instance's IPv4 Public IP.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install -g sqlite3
npm install
```
