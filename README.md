# Image Processing API

> Steps to run the application:

- `npm i` (To install all the node packages)
- `npm run test` (To test the application)
- `npm start` (To start the application)

> Provided API

End-point: `GET /api/images?filename={filename}&width={width}&height={height}`

Responses based on cases:

- Valid Input: Resized Image (200 status code)
- Invalid Input: Invalid file name (404 Not Found)
- Invalid Input: Invalid query params(401 Bad Request)
