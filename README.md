# Todos-api

This is an application created with Next.js, which seeks to create a Todo app with the advantages of server-side rendering. In addition, two implementation schemes were created.

## category page:

Use an application with rest services.

## server actions page:

apply server actions to create a more direct flow between the server side and the client side

## Considerations development

### Run the project

Command:

```
npm install
```

```
npm run dev
```

### To up the database in develop:

#### 1. Up data base

```
docker compose up -d
```

#### 2. Create a copy of the .env.template and rename to .env

#### 3. Replace the variable environment

#### 4. Execute the command:

```
npx prisma migrate dev
```

```
npx prisma generate
```

#### 5. To create a seed of the local data base execute the endpoint:

```
localhost:3000/api/seed
```

### Prisma commands

```
npx prisma init
```

If you do some change in database to see the effect run de command

```
npx prisma migrate dev
```

To generate the client that manipulate the data base

```
npx prisma generate
```
