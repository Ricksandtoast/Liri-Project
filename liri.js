require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var keys = require("./keys");
var request = require('request');
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var fs = require("fs");

var spotify = new Spotify(keys.spotify);

var client = new Twitter(keys.twitter);

var get_Tweets = function (handleName) {
var allTweets = [];
  var params = {
    screen_name: "@" + handleName,
    count: "50"
  };
  client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
      for(var i =0; i< 10; i++){
        allTweets.push(tweets[i]);
      console.log(i+1);
      console.log("Num of Favorites: " + tweets[i].favorite_count);
      console.log("Text from Tweet" + tweets[i].text);
      console.log("============");
      // console.log(allTweets[i]);

      }
      function compare(a,b) {
        if (a.favorite_count > b.favorite_count)
          return -1;
        if (a.favorite_count < b.favorite_count)
          return 1;
        return 0;
      }
      allTweets.sort(compare);
      console.log("Tweet with the most favorites:")
      console.log("Text from tweet: " + allTweets[0].text);
      console.log("Num of favorites: " + allTweets[0].favorite_count);
      // console.log(tweets[0].created_at);
    }
  });
}

var spotify_this_song = function (songTitle) 
{
 
  if (songTitle == null) {
    spotify.search({
      type: 'track',
      query: 'The sign',
      count: 4
    }, function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      console.log(data.tracks.items[5].album.artists[0].name);
      console.log("======================");
      console.log(data.tracks.items[5].name);
      console.log("======================");
      console.log(data.tracks.items[5].album.name);
      console.log("======================");
      console.log(data.tracks.items[5].preview_url);

    });

  } else {
    
    spotify.search({
      type: 'track',
      query: songTitle,
      count: 10
    }, function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      else{
     
      for(var i = 0; i < 10; i++)
      {
        
        if(data.tracks.items[i] == undefined)
        {
          break;
        }
        else{
        console.log(i);
        
      console.log("Artist Name: " + data.tracks.items[i].artists[0].name);
     
      console.log("Track name: " + data.tracks.items[i].name);
     
      console.log("Album name: " + data.tracks.items[i].album.name);
      
      console.log("Song url link: " + data.tracks.items[i].preview_url);
      console.log("======================");
        }
      }
    }

    });

  }
}

var movie = function (movieTitle) {
  console.log(movieTitle);
  if (movieTitle == null) {
    movieTitle = "Mr. Nobody"
  }
  request("http://www.omdbapi.com/?i=tt3896198&apikey=a72c974b&t=" + movieTitle, function (error, response, body) {
    console.log(JSON.parse(body).Title);
    console.log("============");
    console.log(JSON.parse(body).imdbRating);
    console.log("============");
    console.log(JSON.parse(body).Ratings[1]);
    console.log("============");
    console.log(JSON.parse(body).Country);
    console.log("============");
    console.log(JSON.parse(body).Language);
    console.log("============");
    console.log(JSON.parse(body).Plot);
    console.log("============");
    console.log(JSON.parse(body).Actors);



  });
}



var doWwhatItSays = function () {
  fs.readFile("random.txt", "utf8", function (err, data) {
    if (err) {
      return console.log(error);
    }
    var output = data.split(",");
    var command = output[0];
    var parameter = output[1];
    if (command == "my_Tweets") {
      my_Tweets();
    }
    if (command == "spotify-this-song") 
    {
      
      spotify_this_song(parameter);
    }
    if (command == "movie") {

      movie(parameter);
    }

  });


}

if (process.argv[2] == "get_Tweets") {
  
  var handleName;
  rl.question(' Type the twitter handle name ', function (handleName){
    // TODO: Log the answer in a database
  
    rl.close();
  
  get_Tweets(handleName);
  })
}

if (process.argv[2] == "spotify-this-song") {

  var songName = process.argv[3];
  var count = 4;
  while(process.argv[count] != null)
  {
    songName = songName + " " + process.argv[count];
    
    // console.log(process.argv[count]);
    count++;
  }
  // console.log(songName);
  spotify_this_song(songName);
}

if (process.argv[2] == "movie") {
 
  var movieName = process.argv[3];
  var count = 4;
  
  while(process.argv[count] != undefined)
  {
    
    movieName = movieName + " " + process.argv[count];
    console.log(process.argv[count]);
    count++;
  }
 
  movie(movieName);
}
if (process.argv[2] == "do-what-it-says") {
  doWwhatItSays();
}