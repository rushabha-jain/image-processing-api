# Image Processing API

> Steps to run the application:
- `npm i` (To install all the node packages)
- `npm run test` (To test the application)
- `npm start` (To start the application)

> Provided API

End-point: `GET /api/images?filename={filename}&width={width}&height={height}`
Response:

- Resized Image (200 status code)
- Invalid file name (404 Not Found)
- Invalid query params(401 Bad Request)