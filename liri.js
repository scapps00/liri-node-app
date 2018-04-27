var keys = require("./keys.js");
var twitter = require("twitter");
var spotify = require("spotify");
var request = require("request");
var fs = require("fs");

var keyList = keys.twitterKeys;

if (process.argv[3] !== undefined) {
	fs.appendFile("log.txt", "\n" + process.argv[2] + ", " + process.argv[3], function (error) {
		if (error) {
			console.log("ERROR");
		}
	});
} else {
	fs.appendFile("log.txt", "\n" + process.argv[2], function (error) {
		if (error) {
			console.log("ERROR");
		}
	});
}

if (process.argv[2] == "my-tweets") {
	var client = new twitter (
		keyList
	);

	var params = {screen_name: "SamAtUNC"};
	client.get("statuses/user_timeline", params, function(error, tweets, response) {
		if (!error) {
			for (var i = 0; i<20; i++) {
				console.log(tweets[i].text);
				console.log(tweets[i].created_at);
				fs.appendFile("log.txt", "\n" + tweets[i].text, function (error) {
					if (error) {
						console.log("ERROR");
					}
				});
				fs.appendFile("log.txt", "\n" + tweets[i].created_at, function (error) {
					if (error) {
						console.log("ERROR");
					}
				});
			}
		} else {
			console.log("ERROR!!!!");
		}
	});
} else if (process.argv[2] == "spotify-this-song") {
	if (process.argv[3] == undefined) {
		process.argv[3] = "The Sign";
		spotify.search({
		type: "track",
		query: process.argv[3] },
		function(err, data) {
			if (!err) {
				console.log("Artist(s): " + data.tracks.items[3].artists[0].name);
				console.log("Song Name: " + data.tracks.items[3].name);
				console.log("Preview Link: " + data.tracks.items[3].href);
				console.log("Album: " + data.tracks.items[3].album.name);
				fs.appendFile("log.txt", "\n" + "Artist(s): " + data.tracks.items[3].artists[0].name, function (error) {
					if (error) {
						console.log("ERROR");
					}
				});
				fs.appendFile("log.txt", "\n" + "Song Name: " + data.tracks.items[3].name, function (error) {
					if (error) {
						console.log("ERROR");
					}
				});
				fs.appendFile("log.txt", "\n" + "Preview Link: " + data.tracks.items[3].href, function (error) {
					if (error) {
						console.log("ERROR");
					}
				});
				fs.appendFile("log.txt", "\n" + "Album: " + data.tracks.items[3].album.name, function (error) {
					if (error) {
						console.log("ERROR");
					}
				});
			} else {
				console.log("ERROR!!!");
			}
		})
	} else {
		spotify.search({
		type: "track",
		query: process.argv[3] },
		function(err, data) {
			if (!err) {
				console.log("Artist(s): " + data.tracks.items[0].artists[0].name);
				console.log("Song Name: " + data.tracks.items[0].name);
				console.log("Preview Link: " + data.tracks.items[0].href);
				console.log("Album: " + data.tracks.items[0].album.name);
				fs.appendFile("log.txt", "\n" + "Artist(s): " + data.tracks.items[0].artists[0].name, function (error) {
					if (error) {
						console.log("ERROR");
					}
				});
				fs.appendFile("log.txt", "\n" + "Song Name: " + data.tracks.items[0].name, function (error) {
					if (error) {
						console.log("ERROR");
					}
				});
				fs.appendFile("log.txt", "\n" + "Preview Link: " + data.tracks.items[0].href, function (error) {
					if (error) {
						console.log("ERROR");
					}
				});
				fs.appendFile("log.txt", "\n" + "Album: " + data.tracks.items[0].album.name, function (error) {
					if (error) {
						console.log("ERROR");
					}
				});
			} else {
				console.log("ERROR!!!");
			}
		})
	}
} else if (process.argv[2] == "movie-this") {
	if (process.argv[3] == undefined) {
		var movieName = "Mr.+Nobody";
	} else {
		var movieName = process.argv[3].split(" ");
		movieName = movieName.join("+");
	}
	request("http://www.omdbapi.com/?t=" + movieName + "&tomatoes=true", function(error, response, body) {
		if (!error) {
			var movieInfo = JSON.parse(body);
			console.log("Title: " + movieInfo.Title);
			console.log("Release Year: " + movieInfo.Year);
			console.log("IMDB Rating: " + movieInfo.Ratings[0].Value);
			console.log("Country of Origin: " + movieInfo.Country);
			console.log("Language: " + movieInfo.Language);
			console.log("Plot: " + movieInfo.Plot);
			console.log("Actors: " + movieInfo.Actors);
			console.log("Rotten Tomatoes: " + movieInfo.tomatoURL);
			fs.appendFile("log.txt", "\n" + "Title: " + movieInfo.Title, function (error) {
				if (error) {
					console.log("ERROR");
				}
			});
			fs.appendFile("log.txt", "\n" + "Release Year: " + movieInfo.Year, function (error) {
				if (error) {
					console.log("ERROR");
				}
			});
			fs.appendFile("log.txt", "\n" + "IMDB Rating: " + movieInfo.Ratings[0].Value, function (error) {
				if (error) {
					console.log("ERROR");
				}
			});
			fs.appendFile("log.txt", "\n" + "Country of Origin: " + movieInfo.Country, function (error) {
				if (error) {
					console.log("ERROR");
				}
			});
			fs.appendFile("log.txt", "\n" + "Language: " + movieInfo.Language, function (error) {
				if (error) {
					console.log("ERROR");
				}
			});
			fs.appendFile("log.txt", "\n" + "Plot: " + movieInfo.Plot, function (error) {
				if (error) {
					console.log("ERROR");
				}
			});
			fs.appendFile("log.txt", "\n" + "Actors: " + movieInfo.Actors, function (error) {
				if (error) {
					console.log("ERROR");
				}
			});
			fs.appendFile("log.txt", "\n" + "Rotten Tomatoes: " + movieInfo.tomatoURL, function (error) {
				if (error) {
					console.log("ERROR");
				}
			});
		} else {
			console.log("ERROR!!!");
		}
	});
} else if (process.argv[2] == "do-what-it-says") {
	fs.readFile("random.txt", "utf8", function(error, data) {
		var doThis = data.split(",");
		process.argv[2] = doThis[0];
		process.argv[3] = doThis[1];
		if (process.argv[3] !== undefined) {
			fs.appendFile("log.txt", process.argv[2] + ", " + process.argv[3], function (error) {
				if (error) {
					console.log("ERROR");
				}
			});
		} else {
			fs.appendFile("log.txt", process.argv[2], function (error) {
				if (error) {
					console.log("ERROR");
				}
			});
		}

		if (process.argv[2] == "my-tweets") {
			var client = new twitter (
				keyList
			);

			var params = {screen_name: "SamAtUNC"};
			client.get("statuses/user_timeline", params, function(error, tweets, response) {
				if (!error) {
					for (var i = 0; i<20; i++) {
						console.log(tweets[i].text);
						console.log(tweets[i].created_at);
						fs.appendFile("log.txt", "\n" + tweets[i].text, function (error) {
							if (error) {
								console.log("ERROR");
							}
						});
						fs.appendFile("log.txt", "\n" + tweets[i].created_at, function (error) {
							if (error) {
								console.log("ERROR");
							}
						});
					}
				} else {
					console.log("ERROR!!!!");
				}
			});
		} else if (process.argv[2] == "spotify-this-song") {
			if (process.argv[3] == undefined) {
				process.argv[3] = "The Sign";
				spotify.search({
				type: "track",
				query: process.argv[3] },
				function(err, data) {
					if (!err) {
						console.log("Artist(s): " + data.tracks.items[3].artists[0].name);
						console.log("Song Name: " + data.tracks.items[3].name);
						console.log("Preview Link: " + data.tracks.items[3].href);
						console.log("Album: " + data.tracks.items[3].album.name);
						fs.appendFile("log.txt", "\n" + "Artist(s): " + data.tracks.items[3].artists[0].name, function (error) {
							if (error) {
								console.log("ERROR");
							}
						});
						fs.appendFile("log.txt", "\n" + "Song Name: " + data.tracks.items[3].name, function (error) {
							if (error) {
								console.log("ERROR");
							}
						});
						fs.appendFile("log.txt", "\n" + "Preview Link: " + data.tracks.items[3].href, function (error) {
							if (error) {
								console.log("ERROR");
							}
						});
						fs.appendFile("log.txt", "\n" + "Album: " + data.tracks.items[3].album.name, function (error) {
							if (error) {
								console.log("ERROR");
							}
						});
					} else {
						console.log("ERROR!!!");
					}
				})
			} else {
				spotify.search({
				type: "track",
				query: process.argv[3] },
				function(err, data) {
					if (!err) {
						console.log("Artist(s): " + data.tracks.items[0].artists[0].name);
						console.log("Song Name: " + data.tracks.items[0].name);
						console.log("Preview Link: " + data.tracks.items[0].href);
						console.log("Album: " + data.tracks.items[0].album.name);
						fs.appendFile("log.txt", "\n" + "Artist(s): " + data.tracks.items[0].artists[0].name, function (error) {
							if (error) {
								console.log("ERROR");
							}
						});
						fs.appendFile("log.txt", "\n" + "Song Name: " + data.tracks.items[0].name, function (error) {
							if (error) {
								console.log("ERROR");
							}
						});
						fs.appendFile("log.txt", "\n" + "Preview Link: " + data.tracks.items[0].href, function (error) {
							if (error) {
								console.log("ERROR");
							}
						});
						fs.appendFile("log.txt", "\n" + "Album: " + data.tracks.items[0].album.name, function (error) {
							if (error) {
								console.log("ERROR");
							}
						});
					} else {
						console.log("ERROR!!!");
					}
				})
			}
		} else if (process.argv[2] == "movie-this") {
			if (process.argv[3] == undefined) {
				var movieName = "Mr.+Nobody";
			} else {
				var movieName = process.argv[3].split(" ");
				movieName = movieName.join("+");
			}
			request("http://www.omdbapi.com/?t=" + movieName + "&tomatoes=true", function(error, response, body) {
				if (!error) {
					var movieInfo = JSON.parse(body);
					console.log("Title: " + movieInfo.Title);
					console.log("Release Year: " + movieInfo.Year);
					console.log("IMDB Rating: " + movieInfo.Ratings[0].Value);
					console.log("Country of Origin: " + movieInfo.Country);
					console.log("Language: " + movieInfo.Language);
					console.log("Plot: " + movieInfo.Plot);
					console.log("Actors: " + movieInfo.Actors);
					console.log("Rotten Tomatoes: " + movieInfo.tomatoURL);
					fs.appendFile("log.txt", "\n" + "Title: " + movieInfo.Title, function (error) {
						if (error) {
							console.log("ERROR");
						}
					});
					fs.appendFile("log.txt", "\n" + "Release Year: " + movieInfo.Year, function (error) {
						if (error) {
							console.log("ERROR");
						}
					});
					fs.appendFile("log.txt", "\n" + "IMDB Rating: " + movieInfo.Ratings[0].Value, function (error) {
						if (error) {
							console.log("ERROR");
						}
					});
					fs.appendFile("log.txt", "\n" + "Country of Origin: " + movieInfo.Country, function (error) {
						if (error) {
							console.log("ERROR");
						}
					});
					fs.appendFile("log.txt", "\n" + "Language: " + movieInfo.Language, function (error) {
						if (error) {
							console.log("ERROR");
						}
					});
					fs.appendFile("log.txt", "\n" + "Plot: " + movieInfo.Plot, function (error) {
						if (error) {
							console.log("ERROR");
						}
					});
					fs.appendFile("log.txt", "\n" + "Actors: " + movieInfo.Actors, function (error) {
						if (error) {
							console.log("ERROR");
						}
					});
					fs.appendFile("log.txt", "\n" + "Rotten Tomatoes: " + movieInfo.tomatoURL, function (error) {
						if (error) {
							console.log("ERROR");
						}
					});
				} else {
					console.log("ERROR!!!");
				}
			});
		}
	});
}