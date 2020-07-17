# Udacity: Evaluate a news article with Natural Language Processing

## Overview

This app is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. Using an exciting new api called Aylien. This tool can give us back pertinent information about the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

Node and express will be used for the webserver and routing, and webpack is the build tool of choice. The app has dev and prod environments, each with their own set of tools and commands.

## Getting started

Fork, clone, or download this repo and begin your project setup.

Remember that once you clone, you may need to install some packages:

### Step 1: Signup for an API key

You will need to go [here](https://developer.aylien.com/signup) to get Aylien credentials. Signing up will get you an API key. You will enter this API key information into the `sever/index.js` file.

### To Run Project

**(Currently, prod mode allows you to see the results of the API fetch)**:

- cd into your new folder and run in prod mode
- `npm install`
- `npm run build-prod (to generate a dist folder for prod)`
- `npm run start (to run the Express server on port 3000)`

## Dependencies

- HTML
- CSS
- Sass
- JavaScript
- Webpack
- Express
- Babel
- Aylien API
- valid-url
