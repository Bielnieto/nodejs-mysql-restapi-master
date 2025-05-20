# REST API Documentation

## Overview

This API allows you to manage clients for a travel agency. It provides basic CRUD operations (Create, Read, Update, Delete) to handle client data.

## Endpoints

### 1. GET /api/clients

**Description:** Returns a list of all clients or filters clients by destination.

#### Parameters:

- **Query Params:**
  - `destination` (optional): Filters clients by destination (e.g., `?destination=Lisbon`).

#### Example Request:

```bash
GET /api/clients?destination=Lisbon
```

#### Example Response (success):

```json
[
  {
    "ID": 2,
    "Nom": "Maria",
    "Cognoms": "Lopez",
    "Telefon": "987654321",
    "Correu_electronic": "maria@example.com",
    "Desti_de_viatge": "Lisbon",
    "Data_de_creacio": "2025-03-15T17:07:43.000Z"
  }
]
```

#### Example Response (no results):

```json
{
  "message": "No clients found"
}
```

---

### 2. GET /api/clients/:id

**Description:** Returns the details of a specific client by their ID.

#### Parameters:

- **URL Params:**
  - `id` (required): The ID of the client.

#### Example Request:

```bash
GET /api/clients/2
```

#### Example Response (success):

```json
{
  "ID": 2,
  "Nom": "Maria",
  "Cognoms": "Lopez",
  "Telefon": "987654321",
  "Correu_electronic": "maria@example.com",
  "Desti_de_viatge": "New York",
  "Data_de_creacio": "2025-03-15T17:07:43.000Z"
}
```

#### Example Response (error):

```json
{
  "message": "Client not found"
}
```

---

### 3. POST /api/clients

**Description:** Creates a new client.

#### Parameters:

- **Body (JSON):**
  - `nom` (required): The client's first name.
  - `cognoms` (required): The client's last name.
  - `telefon` (required): The client's phone number.
  - `correu_electronic` (required): The client's email.
  - `desti_de_viatge` (required): The client's travel destination.

#### Example Request:

```bash
POST /api/clients
```

**Body:**

```json
{
  "nom": "Alex",
  "cognoms": "Garcia",
  "telefon": "123456789",
  "correu_electronic": "alex@example.com",
  "desti_de_viatge": "Paris"
}
```

#### Example Response (success):

```json
{
  "id": 11,
  "nom": "Alex",
  "cognoms": "Garcia",
  "telefon": "123456789",
  "correu_electronic": "alex@example.com",
  "desti_de_viatge": "Paris"
}
```

---

### 4. PUT /api/clients/:id

**Description:** Updates an existing client's data.

#### Parameters:

- **URL Params:**
  - `id` (required): The ID of the client.
- **Body (JSON):**
  - `nom` (optional): The client's first name.
  - `cognoms` (optional): The client's last name.
  - `telefon` (optional): The client's phone number.
  - `correu_electronic` (optional): The client's email.
  - `desti_de_viatge` (optional): The client's travel destination.

#### Example Request:

```bash
PUT /api/clients/2
```

**Body:**

```json
{
  "desti_de_viatge": "London"
}
```

#### Example Response (success):

```json
{
  "ID": 2,
  "Nom": "Maria",
  "Cognoms": "Lopez",
  "Telefon": "987654321",
  "Correu_electronic": "maria@example.com",
  "Desti_de_viatge": "London",
  "Data_de_creacio": "2025-03-15T17:07:43.000Z"
}
```

#### Example Response (error):

```json
{
  "message": "Client not found"
}
```

---

### 5. DELETE /api/clients/:id

**Description:** Deletes a client by their ID.

#### Parameters:

- **URL Params:**
  - `id` (required): The ID of the client.

#### Example Request:

```bash
DELETE /api/clients/2
```

#### Example Response (success):

```
Status: 204 No Content
```

#### Example Response (error):

```json
{
  "message": "Client not found"
}
```

---

## Tools for Testing

You can test the API using tools like:

- **Hoppscotch**
- **Postman**

---

## How to Run Locally

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```
4. Access the API at `http://localhost:3000`.
