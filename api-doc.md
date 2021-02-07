# user

List of available endpoints:
- `POST /login-user`
- `POST /user`

### POST /login-user

Request:

- data:
```json
{
  "username": "string",
  "password": "string"
}
```

Response:
- status: 201
- body:

```json
{
  "_id": "string",
  "full_name": "string",
  "age": "integer",
  "city":"string",
  "username": "string",
  "password": "string",
  "role": "string",
  "access_token": "jwt string"
}
```

Response:
- status: 400 (Bad request)
- body:
```json
{
  "name": "bad request",
  "message": "login failed"
}
```

- status: 500 (Internal service error)

### POST /user

Request:
- headers: access_token (string)
- data:
```json
{
    "full_name": "string",
    "age": "integer",
    "city":"string",
    "username": "string",
    "password": "string",
    "role": "string",
}
```

Response:
- status: 201
- body:
```json
{
    "_id": "string",
    "full_name": "string",
    "age": "integer",
    "city":"string",
    "username": "string",
    "password": "string",
    "role": "string",
}
```

- status: 403 (Unauthorized)
- body:
```json
{
  "name": "unauthorized",
  "message": "cannot access"
}
```

- status: 500 (Internal service error)