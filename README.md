# Frontend Exercise

This project is developed with relay-starter-kit, which is used for Access interviews.

# Get started

```sh
$ yarn install
$ yarn app:start

```

# Which techniques to use for practice?

## User List

> `app/routes/dashboard/detail.tsx`

- MUI Component implementation
- Add query for searching
- UI Layout implementation

> `app/queries/DashboardUsersQuery.graphql.ts`

- Generate ts file of graphql query

## User Detail

> `app/routes/dashboard/detail.tsx`

- Extract data by functional programming library (RamdaJS)
- UI Layout implementation
- Add dialog for editing name of user temporarily

# Brief description of the development process

1. My approach is to first go to Github Explorer to observe the corresponding data return format, and search the docs on the right to determine the available data materials.

2. First download the data by copying and transfer it into a json file to use as mock data and design the corresponding component interface to save time.

3. Then convert the json files into types in batches with automated tools to achieve the effect of making the project type safe as soon as possible

4. First observe the design draft to preliminarily confirm the components that can be used in MUI, and first try to make a basic prototype to confirm the feasibility.

5. Then start to use the method provided by relay, and try to download the schema that github will use, write the corresponding query and try to run relay to automatically generate GraphQL ts files.

6. In the end, some UI details were adjusted, and some details and experience tests were added as much as possible.
