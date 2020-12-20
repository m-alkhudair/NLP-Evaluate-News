# About the App

This app analyzes text based on:
- polarity (strong positive, positive, neutral, negative, strong negative, without sentiment),
- whether there is agreement or disagreement between elements within the text (this only appears when there are two sentences or more),
- wherther the text is subjective or objective,
- and confidence (score is out of 100).

When at text is entered in the text area and submitted, a short text analysis will appear bellow the form box. The text analysis will include the parameters mentioned above.


# Text Input

For the text input to be valid, it must be in English. MeaningCloudAPI will detect whether the inputted text is valid English or not. In the case it is not, a red text will appear indicating the invalid input.

If no text is provided before hitting the submit button, an alert will show and the event will stop.


# Running the App on Production Mode

There is no need to alter anything in the code for this mode to work.
`npm run build-prod`
`npm start`

In this build, a get request will fetch my API key from the server code. My API key is stored as an environment variable in the .env file but is referenced in the server code.


# Running the App on Development Mode

Because in this mode we don't have access to the express server, two small changes must be made:
in src/client/js/postDataToMeaningCloud.js:
- Uncomment the apiKey variable and paste in an API key.
- Comment out the variable with the same name inside the postDataToMeaningCloud() function.

Then: `npm run build-dev`


# Service Workers

When the app is disconnected from the server, the webpage will still appear but server requests cannot be made. If the submit button is clicked while the server is disconnected an alert message will appear.



## Notes from reviewer:

Great Declaring Client Library to both production and development modes :clap: , if you don't know :point_up:, if you didn't declare this Library :confused:, it would be each time press submit button :point_right:, the server refresh :astonished: and route the page to root again!

src/client/js/getKey.js 
Great Interacting with server Endpoint Successfully :star: this is because maybe the server is not even on localhost, it may be the actual link of an online server, so we should fetch data from the whole link of our server, not only from local server endpoint such as /key, this is not to practice!