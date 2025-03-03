# Express Backend App

## Overview
A simple Express.js + TypeScript backend app.

## Features
- Generates an **Express + TypeScript** backend.

## Usage
Run the CLI with:

```sh
npx create-backend-app my-express-app
```

You will be prompted to choose between:
- `Basic Template`
- `Standard Template`
- `Auth Template`

Alternatively, you can specify the template directly:

```sh
npx create-backend-app my-express-app --template basic
npx create-backend-app my-express-app --template standard
npx create-backend-app my-express-app --template auth
```

## Project Structure
This project has the following minimalistic structure:

```
my-express-app/
├── index.ts
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
```

## Available Scripts
Once the project is set up, you can use the following commands:

```sh
npm run dev   # Start the development server
npm run build # Compile TypeScript
npm start     # Run the compiled JavaScript
```

## Contributing
Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request.