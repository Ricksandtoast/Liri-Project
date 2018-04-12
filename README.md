# Liri-Project

LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back spotify, twitter, or movie data.

Download node Js 8.11
To retrieve the appropriate data you will need to send requests to Twitter, Spotify, and OMdb.
Install these node packages using the Node Package Manager

  * Twitter: https://www.npmjs.com/package/twitter
  * Spotify: https://www.npmjs.com/package/node-spotify-api
  * Use request to retrive data from Omdb
      Request: https://www.npmjs.com/package/request
      Omdb: http://www.omdbapi.com/
  
  Instructions:
  
    Navigate to the root directory of the Liri project and run NPM init -y in your console
    this will create your package.json file
    
 Create a .env file and add the following. Reaplce the values with your API keys
 
 
    # Spotify API keys

    SPOTIFY_ID=your-spotify-id
    SPOTIFY_SECRET=your-spotify-secret

    # Twitter API keys

    TWITTER_CONSUMER_KEY=your-twitter-consumer-key
    TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
    TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
    TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret
    
    
Get your Twitter API keys by following these steps:

Step One: Visit https://apps.twitter.com/app/new

Step Two: Fill out the form with dummy data. Type http://google.com in the Website input. Don't fill out the Callback URL input. Then submit the form.

Step Three: On the next screen, click the Keys and Access Tokens tab to get your consumer key and secret.

Copy and paste them into your .env file, replacing the your-twitter-consumer-key and your-twitter-consumer-secret placeholders.
Step Four: At the bottom of the page, click the Create my access token button to get your access token key and secret.

Copy the access token key and secret displayed at the bottom of the next screen. Paste them into your .env file, replacing the placeholders for your-twitter-access-token-key and your-twitter-access-token-secret.

Get your Spotify API by following  these steps:

* Like the Twitter API, the Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a client id and client secret:

* Step One: Visit https://developer.spotify.com/my-applications/#!/

* Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

* Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

* Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values into your .env file
    
# Commands
  node liri.js my-tweets
  * this will show your last 20 tweets and the times they were posted
  
  node liris.js spotify-this-song <enter song name here>
  * this will display the artist, song name, album, and a preview of the song
 
  node liri.js movie <enter movie name here>
  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
 
 node liri.js do-what-it-says
  This will run what ever is written in the .txt file
