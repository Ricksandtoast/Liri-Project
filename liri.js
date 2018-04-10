require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var keys = require("./keys");
var request = require('request');

var spotify = new Spotify(keys.spotify);

var client = new Twitter(keys.twitter);

var my_Tweets = function(){
var params = {screen_name: '@ricksNode', count :"20"};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) 
  {
    console.log(tweets[0].text);
    console.log(tweets[0].created_at);
  }
});
}

var spotify_this_song = function()
{
  var songName = process.argv[3];
  if(process.argv[3] == null)
  {
    process.argv[3] = "";
  }
  spotify.search({ type: 'track', query: songName }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    
    console.log(data.tracks.items[0].artists[0].name); 
    console.log("======================");
    console.log(data.tracks.items[0].name);
    console.log("======================");
    console.log(data.tracks.items[0].album.name);
    console.log("======================");
    console.log(data.tracks.items[0].preview_url);


});

}

var movie = function(){
request("http://www.omdbapi.com/?i=tt3896198&apikey=a72c974b&t=The+matrix",function(error,response,body)
{
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


if(process.argv[2] == "my_Tweets")
{
  my_Tweets();
}
if(process.argv[2]== "spotify-this-song")
{
  spotify_this_song();
}
if(process.argv[2] == "movie")
{
  movie();
}

