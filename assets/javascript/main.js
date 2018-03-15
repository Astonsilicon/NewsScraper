var config = {
	apiKey: "AIzaSyB9GWaGjIZGrKoHZ0qFTe363xTTg5RkwJ8",
	authDomain: "groupap-d8463.firebaseapp.com",
	databaseURL: "https://groupap-d8463.firebaseio.com",
	projectId: "groupap-d8463",
	storageBucket: "groupap-d8463.appspot.com",
	messagingSenderId: "10550599206"
};
firebase.initializeApp(config);

var select;	
var query2URL = "http://api.sqoot.com/v2/deals?api_key=c2aos";


$( document ).ready(susTimer);


$(".navLogo").on("click", function() {

	if( this.id == "bloom"){
		select = "bloomberg"
	}else if( this.id == "jazeera"){
		select = "al-jazeera-english"
	}else if( this.id == "cnn"){
		select = "cnn"
	}else if( this.id == "google"){
		select = "google-news"
	}else if( this.id == "hacker"){
		select = "hacker-news"
	}else if( this.id == "nation"){
		select = "national-geographic"
	}else if( this.id == "bi"){
		select = "business-insider"
	}else if( this.id == "lad"){
		select = "the-lad-bible"
	}else if( this.id == "nfl"){
		select = "nfl-news"
	}else if( this.id == "huff"){
		select = "the-huffington-post"
	}else if( this.id == "time"){
		select = "time"
	}else if( this.id == "techRadar"){
		select = "techradar"
	}else if( this.id == "verge"){
		select = "the-verge"
	}else if( this.id == "reddit"){
		select = "reddit-r-all"
	}else if( this.id == "sci"){
		select = "new-scientist"
	};

	var query1URL = "https://newsapi.org/v1/articles?source=" + select + "&apiKey=e5da89b57ee347a1a1da306427dc5fa7"
	
	function callNews(){
		$.ajax({
		  url: query1URL,
		  method: "GET"
		}).done(function(response) {
		  console.log(response);

		  	for(var i = 0; i < 5; i++){

		  		var newDiv = $("<div>");
				$("#silo").prepend(newDiv);
				newDiv.addClass("info");
				newDiv.addClass("pure-g");

				var title = JSON.stringify(response.articles[i].title);
				var t = $("<h6>").text(title);
				t.addClass("pure-u-1")
				newDiv.append(t);

				var article = JSON.stringify(response.articles[i].description);
				var a = $("<p>").text(article);
				a.addClass("pure-u-1");
				newDiv.append(a);

				var link = JSON.stringify(response.articles[i].url);
				var linkString = new String();
				linkString = link.toString().replace(/"/g, "")
				var l = $("<a>").text("Find the orignal article here!");
				l.addClass("pure-u-1")
				l.addClass("mainLink")
				l.attr("href", linkString)
				newDiv.append(l);

				var pic = JSON.stringify(response.articles[i].urlToImage);
				var picString = new String();
				picString = pic.toString().replace(/"/g, "")
				var p = $("<img>")
				p.addClass("articleImg");
				p.addClass("pure-u-1")
				p.attr("src", picString);
				newDiv.append(p);

			};

		});
	};

	callNews();

});

function susTimer(){
	setInterval(callSus, 120000);
}


function callSus(){
    $.ajax({
        url: query2URL,
        method: "GET"
    }).done(function(response) {
        console.log(response); 

		var coo = Math.floor(Math.random() * 10);

		var newDiv = $("<div>");
		$("#dump").prepend(newDiv);
		newDiv.addClass("ad");
		
		var deel = JSON.stringify(response.deals[coo].deal.title);
		console.log(deel);
		var d = $("<h3>").text(deel);
		d.addClass("pure-u-1")
		d.addClass("deal")
		newDiv.append(d);

		var descrip = JSON.stringify(response.deals[coo].deal.description);
		var de = $("<p>").text(descrip);
		de.addClass("pure-u-1")
		newDiv.append(de);

		var fine = JSON.stringify(response.deals[coo].deal.fine_print);
		var f = $("<h4>").text(fine);
		f.addClass("print");
		newDiv.append(f);

		setTimeout(function(){ 
			newDiv.hide() 
		}, 15000);
  		  
    });
};