## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm start
```

Go to: [http://localhost:3000/graphql](http://localhost:3000/graphql) for GraphQL Playground
<br>
<br>

## What was implemented:

1. Generate boilerplate CRUD code for universitites and users `(nest g resource)`
1. Translate dummy data to three entites: University, City, State
1. Impelement query to get all Universities and get one university by id
1. Impelement mutation to create a new university, two methods were created depending on what we want to do on the frontend
   - create a new university by city id (e.g. user select city from auto suggest)
   - create a new university by adding a new city using city name and state id (e.g. choosing state from 50 options)
1. Update an existing university (name only)
1. Create user dummy data
1. Implement user login with passport local and passport jwt
1. Guard university mutations by adding a JWT guard
   <br>
   <br>

## To Do List

- Update an existing university's city
- Error handlding (e.g. avoid internal server error when query doesn't find anything)
- Authrorization on mutation (e.g. add isAdmin to User and guard to check isAdmin in canActivate)
- bcrypt the password
- Move jwt secret to safer place (e.g. If deploy to Heroku, add to Config Vars and access using process.env)
  <br>
  <br>

## Example Playground Queries

Go to: [http://localhost:3000/graphql](http://localhost:3000/graphql) for GraphQL Playground

### Get All Universities

```
{
  universities {
    id,
    name,
    city {
      id,
      name
      state {
        id,
        name
      }
    }
  }
}

```

### Get One Univeristy

```
{
  university(id: 1){
    id,
    name,
    city {
      id,
      name
      state {
        id,
        name
      }
    }
  }
}
```

### User Login (gets jwt token)

```
mutation{
  login(loginInput:{
    username: "user1",
    password: "password"
  }){
  	access_token
  }
}
```

### Send query with authentication header

```
{"Authorization": "Bearer <access_token>"}
```

### Create University with cityId (Authentication needed)

```
mutation {
  createUniversity(createUniversityInput: {
    name: "New+Uni",
    cityId: 8,
  }) {
		id,
    name,
     city{
      name,
      id
      state{
        name,
        id
      }
    }
  }
}
```

### Create University with cityName + stateId (Authentication needed)

```
mutation {
  createUniversityWithNewCity(createUniversityWithNewCityInput: {
    name: "New University",
    cityName: "Bellevue",
    stateId:1,
  }) {
		id,
    name,
    city{
      name,
      id
      state{
        name,
        id
      }
    }
  }
}
```

### Update University name (Authentication needed)

```
mutation {
  updateUniversity(updateUniversityInput: {
    id: 1,
    name: "Updated University",
  }) {
		id,
    name,
    city{
      name,
      id
      state{
        name,
        id
      }
    }
  }
}
```
