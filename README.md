# FullCycle Class

This project was taken from the FullCycle youtube class, and this class covers several topics about prisma, some of the topics are:

- **Schema**: The Schema refers to the definition of the database structure and tables. It is a representation of the entities and relationships that will be modeled in the database.

- **Automatic Migration**: Automatic migration is a feature of Prisma that allows for the automatic updating of the database schema based on changes made in the code. This simplifies the process of evolving the database alongside the application code.

- **Enum**: Enum is short for "enumeration." In the context of Prisma, an Enum is a data type that allows for defining a fixed set of values for a specific property.

- **Relationships**: Prisma allows for defining relationships between tables, such as one-to-one, one-to-many, or many-to-many relationships. These relationships are used to model the interconnection between database entities.

- **Indices**: Indices in Prisma are used to optimize data search and retrieval in the database. They help speed up queries by allowing more efficient access to records.

- **Unique Fields**: Unique fields are those in which each value must be unique within a table. They are used to ensure data integrity by preventing duplicates.

- **Optional Fields**: Optional fields are those that can contain a value or be empty. They are not mandatory and allow for flexibility in the data stored in the database.

- **Map**: In Prisma, the map function allows for transforming query results into a desired data structure. It is useful for performing manipulations on the returned data before using it in the application.

- **Pivot Table**: A pivot table is an intermediate table used to establish many-to-many relationships between other tables. It stores the identifiers of the related tables and enables efficient queries.

- **Introspect**: The "introspect" command is a Prisma feature that analyzes an existing database and automatically generates the corresponding schema. This facilitates the integration of a pre-existing database with Prisma.

Class Link: https://www.youtube.com/watch?v=C8Oc31uk2Hw&t=2280s

### Technologies!

![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![VSCode](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

#### Installation

```bash
$ npm install
```

### Running the app

```bash
$ npx prisma migrate dev

$ npx prisma studio

# development
$ yarn dev
```

### Enviroment

```bash
DATABASE_URL=
```
