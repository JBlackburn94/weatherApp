# Jason Blackburn - Milestone Project 2 Weather App

This site is to be used by the user to find out what the weather is in various locations around the globe.

# Table of Contents

1. [Business](#business)
2. [Colour Scheme](#color-scheme)
3. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
5. [Testing](#testing)
6. [Deployment](#deployment)
7. [Credits](#credits)
8. [Media](#media)

# Business <a name="business"></a>

The business goals of this page are to provide accurate weather information to the user.

## External Users Goals

The external users goals of this page are to provide accurate weather information for any location around the globe. Including humidity, wind speed and temperature.

## Site Owners Goals

The site owners goals of this page are to provide clear weather data using the Open Weather API.

# Colour Scheme <a name="color-scheme"></a>

The site uses a background image of a city skyline at night. I've also added a dark border with a low opacity around the div containing the weather information. To make this stand out I've included a bright green border around the div, buttons and input fields. On hover these turn bright green.

## Body Colour

The body for this site uses an image of a city skyline. This fills the entire page with no repeats and is scalable on large and small screens including mobile.

## Font Family

![image](readMeImgs/Screenshot%202023-02-23%20at%2012.09.48.png)

I have used a font from Google Fonts named Outfit. Outfit is clean and easy to read and makes for a better alternative to the standard fonts in my opinion.

# Wireframes <a name="wireframes"></a>

I have made wire frames for desktop and mobile. These can be seen below. This app has basically the same layout on mobile and desktop due to the simplicity of the UI.

![image](<readMeImgs/milestoneProject2%20Desktop%20Wireframe%20(1).png>)

# Technologies Used <a name="technologies-used"></a>

During the build for this page I used:

[HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)

The project uses HTML to create the content.

[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

The project uses CSS to style some of the elements, and also makes some of the elements responsive.

[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

The project uses JavaScipt to make the project interactive.

[OpenWeatherAPI](https://openweathermap.org/)

This project uses the Open Weather Map API to pull JSON data relevant to the users search value.

[GitHub](https://github.com/)

Project Repository.

VSCode

I used VS Code to build this project.

[GitHub](https://github.com/JBlackburn94/weatherApp)

I have used GitHub to push and deploy this project.

# Testing <a name="testing"></a>

“PLEASE NOTE - There is an error showing. The error claims that some external font/icon files have not been loaded. But having investigated this with my mentor, we can clearly see all items have loaded and this error is incorrect. There is also an error should an incorrect location or spelling mistake entered. However, I have accounted for this by using a catch statement, upon entering a mistake the user will be prompted with an alert to make them aware there were no results found. -”

This project was tested using:

[W3 HTML Validator](https://validator.w3.org/)

The W3 Schools HTML Validator - returning 0 errors.

[W3 CSS Validator](https://jigsaw.w3.org/css-validator/)

The W3 Schools CSS Validator - returning 0 errors.

[Google Chrome Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)

Google Chrome Lighthouse was used to score the performance and accesibility of this site.

The code was also ran through JSLint, a number of errors were present but they were mainly due to empty white space etc. After fixing the layout issues I was only left with errors that weren't major issues.

I also ran manual tests on this project and worked towards fixing any errors I found. The main problem I found was upon entering an incorrect location name or a spelling mistake, an error 404 would be present in the console. I fixed this by implementing error handling, using a catch statement to alert the user when they're search returned no data, the alert will then ask them to reset, check again and finally check their spelling.

| User Story                                                                                              | User Case                                                                                                                                                      | Pass/Fail |     |     |
| ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | --- | --- |
| User Story 001 - (Consumer) As a consumer I want to be able to access weather data by location name.    | User case 001-001 Easily access any weather data for any location by typing the name into the input field and pressing search or enter.                        | Pass      |     |     |
|                                                                                                         | User case 001-002 Locations can also be searched by post code.                                                                                                 | Pass      |     |     |
| User Story 002 - (Consumer) As a consumer I want to be able to quickly reset the data and search again. | User case 002 - 001 The data is easily reset using the clearly labelled reset button at the bottom of the container. This will also reset clear the input box. | Pass      |     |     |

# Deployment <a name="deployment"></a>

GitPod -> GitHub -> GitHub Pages

## GitHub

Create GitHub Repository using VS Code. Commited and pushed all content from VS Code to Github.

## GitHub Pages

Completed site deployed to GitHub Pages.

# Credits <a name="credits"></a>

[Stack Overflow](https://stackoverflow.com/)

I used Stack Overflow to research ways to reset the data and clear the input field.

# Media <a name="media"></a>

[Background Image](https://unsplash.com/)

## Fonts

[Outfit](https://fonts.google.com/specimen/Outfit)
