# Liri

My first node.js app, a very simplified version of Siri, called Liri

## Getting Started

Made sure you have node.js installed on your system. You will also need to get your own API keys and secrets for your Twitter account. Details on that below. Then run "node liri.js" in your terminal or console.

### Prerequisites

node.js needs to be installed. You will also need to get your own Twitter API keys and secrets for your account, which you can get [here](https://apps.twitter.com/).

### Installing

After you get your Twitter API key and secret, create a file called keys.js as so with the secrets and keys in the proper place:

```
console.log("this is loaded");

exports.twitterKeys = {
	consumer_key: "",
	consumer_secret: "",
	access_token_key: "",
	access_token_secret: ""	
}
```

Make sure keys.js is in the same folder as liri.js. Then you're good to go!

Commands:

* my-Tweets - shows my recent Tweets
* spotify-this-song <SONG NAME> - pulls info on song from Spotify
* movie-this <MOVIE NAME> - pulls info about movie from OMDB
* do-what-it-says - do what the random.txt file says

## Built With

* [node.js](https://nodejs.org/en/) - JavaScript runtime
* JavaScript

## Authors

* **Samantha Capps** (https://github.com/scapps00) with guidance from the UNC Coding Bootcamp 2017

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to the UNC Coding Bootcamp for the assignment
* Thanks to [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) for the README template