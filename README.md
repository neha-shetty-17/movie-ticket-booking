
# Movie Booking API

This is a simple Express.js application that provides an API for booking movie seats. It allows users to make seat reservations for movies and view all the current bookings. The data is stored in a local `bookings.json` file.

## Features

- **Book a Movie Seat:** Users can book a seat by providing the movie title, row, and column for the desired seat.
- **View Bookings:** Users can view all the current bookings made through the API.

## API Endpoints

### `POST /api/book`

**Description:** This endpoint allows users to book a movie seat.

**Request Body:**
```json
{
  "movieTitle": "Movie Name",
  "row": "Row number",
  "col": "Column number"
}
```

**Response:**
- **200 OK:** Booking successful.
  ```json
  {
    "message": "Booking successful!"
  }
  ```
- **400 Bad Request:** If any booking information is missing.
  ```json
  {
    "message": "Missing booking information."
  }
  ```

### `GET /api/book`

**Description:** This endpoint returns a list of all the current bookings.

**Response:**
```json
[
  {
    "movieTitle": "Movie Name",
    "row": "Row number",
    "col": "Column number"
  },
  ...
]
```

## Installation

To run the project locally, follow these steps:

### 1. Clone the repository
```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the server
```bash
npm start
```

The server will be running on `http://localhost:5000`.

## Dependencies

- `express`: The web framework used for building the API.
- `cors`: Middleware for enabling Cross-Origin Request Sharing (CORS).
- `fs`: The Node.js File System module used to read and write the `bookings.json` file.

## File Storage

All bookings are stored in a local JSON file named `bookings.json`. If the file does not exist, it will be created automatically when the first booking is made.

## Usage

### Making a Booking

To make a booking, send a `POST` request to `/api/book` with the following JSON body:
```json
{
  "movieTitle": "Movie Name",
  "row": 1,
  "col": 3
}
```

