# Express Backend CLI

## Overview
The **Express Backend CLI** (`npx create-backend-app`) is a command-line tool designed to quickly scaffold an Express.js backend with TypeScript. It provides following templates:

- **Basic Template**: A simple Express.js + TypeScript setup.
- **Standard Template**: An Express.js + TypeScript setup, configured with packages used for writing quality code.
- **Auth Template**: Standard template that includes authentication features.

This tool allows developers to generate a backend boilerplate without cloning a GitHub repository, keeping all templates within the NPM package.

## Features
- Generates an **Express + TypeScript** backend.
- Option to include **authentication**.
- Pre-configured **ESLint, Prettier**, and **nodemon**.
- Supports **dotenv** for environment variables.
- Simple and fast setup.

## Installation
You can use `npx` to run the CLI without installing it globally:

```sh
npx create-backend-app
```

Or install it globally:

```sh
npm install -g create-backend-app
```

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
After running the CLI, your project will have the following structure:

```
my-express-app/
├── app/
│   ├── common/
│       ├── dto/
│       ├── helper/
│       ├── middleware/
│       ├── services/
├── .eslintrc.js
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
```

## Available Scripts
Once your project is set up, you can use the following commands:

```sh
npm run dev   # Start the development server
npm run build # Compile TypeScript
npm start     # Run the compiled JavaScript
```

## Contributing
Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request.