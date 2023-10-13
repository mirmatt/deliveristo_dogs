This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Web Application to obtain a random dog image from a list of breeds and sub-breeds
All images and breeds are provided by https://dog.ceo/dog-api/

## Initializing web-app
- After cloning the project either run 'npm install' while in the root folder, or see the Docker section
- Run the web app using 'npm start'. By default the app will be served on http://localhost:3000/

## Building Docker Container
- cd into the root of the folder
- run docker build . -t "name-of-the-image" to build the image itself, docker-run "name-of-the-image" to start the container itself
- the image while building will download automatically the required packages and it will default to http://localhost:3000/ aswell

## Building the application
- While in the root, run "npm run build". This will create a "build" directory containing the optimized code
- execute "serve -s .\build\" to launch the app
- if the serve command has not been found, install it via "npm install -g serve"

## Structure of the app
- The app all resides inside the .\src folder
- inside it, you can find
	- components -> contains the various React sub-components, used to assemble the page. There is an additional division between components used in structuring the page (so used as a baseline) and other components with a specific function (AlphabetFilter -> The button that act as a letter filter)
	- data -> Holds all the static data used by the application
	- icons -> small images destined to be used inside components as a minor part
	- pages -> base routes for the web app
	- utils -> composed of types (for Typescript) and functions. Used as a deposit for more complex functionality, so not to clutter the components

## Tests
- the webapp offer tests coverage using a combination of Jest and Testing Library
- It astracts the impletation to focus more on correct passing of data and display of the components
- For configuration issues, the tests doesn't work via CLI, but do work via tests explorer