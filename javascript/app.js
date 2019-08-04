
var topics = ['dog, fish, duck, cat, bird']

  $("button").on("click", function() {
  
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "a8b7822be808d89fa6982cef985b27d5";

   
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    
    .then(function(response) { 
      var results = response.data;
      for (var i = 0; i < results.length; i++) 

            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
    
                var personImage = $("<img>");
                personImage.attr("src", results[i].images.fixed_height.url);
                gifDiv.append(p);
                gifDiv.append(personImage);
                $("#gifs-appear-here").prepend(gifDiv);
          
      }
    }); 
}
}); 

//still 
$(".gif").on("click", function() {
   
    var state = $(this).attr("data-state");

    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });


  //search function 
 
  $(".submit").on("click",funtion ()){
      event.preventDefault();
      console.log("here");
      var newSearch = $('input').eq(O).val();
      searchChanel.push(newSearch);
      populateButtons(searchChanel, "searchButton", "#buttonArea"); 
  }