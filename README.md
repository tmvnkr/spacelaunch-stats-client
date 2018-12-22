<p align="center"><img src="https://spacenews.com/wp-content/uploads/2018/02/20180206004RP-879x485.jpeg"></p>

<h1 align="center">Spacelaunch Stats</h1>

<p align="center">
<a href="https://github.com/vaneker/spacelaunch-stats-client/releases"><img src="https://img.shields.io/badge/version-0.1.0-brightgreen.svg"></a>
<a href="https://github.com/vaneker/spacelaunch-stats-client/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-red.svg"></a>

</p>

<h3 align="center">Web application covering every SpaceX launch in-depth</h3>

## Data Sources

A majority of the data is currently sourced from [r-spacex/SpaceX-API](https://github.com/r-spacex/SpaceX-API) and [Open Weather Map API](https://openweathermap.org) using the [Apollo GraphQL Client](https://www.apollographql.com/). On the server side [spacelaunch-stats-server](https://github.com/vaneker/spacelaunch-stats-server) is used. The server utilizes the Apollo GraphQL server middleware handeling all REST API calls and providing the front-end with a clean and easy to use GraphQL API.

## Usage

For the client to be able to retrieve information it needs the [spacelaunch-stats-server](https://github.com/vaneker/spacelaunch-stats-server) See the spacelaunch-stats-server GitHub page on any information regarding the server.

### Available Scripts

In the project directory, you can run:

**`npm start`**

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

**`npm test`**

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

**`npm run build`**

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
