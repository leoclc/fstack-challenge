> **Note**: This repo is no longer officially maintained as of Jan, 2023.
> Feel free to use it, fork it and patch it for your own needs.

## Fullstack challenge ( Backend repository )

This repository is inteded to be the backend server for the frontend to backend solution of the challenge.

The repository contains the following tools that are configured to kickstart an application:

- Express
- Typescript
- Jest
- Husky
- pg-mem **( In memory database )**

Among with many other smaller packages.

## Common setup

Clone the repo and install the dependencies.

```bash
npm install
```

## Steps for read-only access

To start the express server, run the following

```bash
npm run start
```

or for development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and take a look around.

## Database

**pg-mem** is an in memory database that was setup with a provided example under 'src/databases/example.ts'

It should allow writing functions with SQL queries to maintain any kind of data


