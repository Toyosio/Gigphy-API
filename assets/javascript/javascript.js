var eighties = ["80s movies", "80s fashion", "80s shows", "80s music", "80s hair", "alfie", "80s electronics", "80s commercials", "80s art", "80s comedy", "80s dance", "80s horor", "80s toys", "80s jokes"]

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=hAzUG1kNyCQotsbFDUbozNHAA3eGGibO&q=80s&limit=10&offset=0&rating=PG-13&lang=en";

// Create buttons
function toyFunction() {
    $("#decadebutton").empty();
    for (var i = 0; i < eighties.length; i++) {
        var e = $("<button>");

        e.addClass("btn btn-dark");
        e.attr("data-name", eighties[i]);
        e.text(eighties[i]);
        $("#decadebutton").append(e);
    }
}

//add button when keyword is entered into search box
$("#addone").on("click", function (event) {
    event.preventDefault();
    var one = $("#eighties-input").val().trim();
    eighties.push(one);
    console.log(one);
    toyFunction();
    queryNewKeyword();
})

//Give button it's data state (Attribute still and animated state to each button??)
$(".button").on("click", function (event) {
    var gifValue = $(this).attr("data-state");
    if ("state === still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});


//Search key word when button is clicked
function queryNewKeyword() {
    $(".btn").on("click", function () {
        $("#eighties").html(" ");
        queryURL = "https: //api.giphy.com/v1/gifs/search?q=" + $(this).text() + "api_key=hAzUG1kNyCQotsbFDUbozNHAA3eGGibO&q=80s&limit=10&offset=0&rating=PG-13&lang=en";

        $.ajax({

            url: queryURL,
            method: "GET"
        }).done(function(response) {
            for (var i = 0; i < response.data.length; i+=10) {
                $("#eighties").append('<p>Rating: '+response.data[i].rating+'</p><br><img src="'+response.data[i].images.fixed_height_still.url+'"data-still="'+response.data[i].images.fixed_height_still.url+'" data-animate="'+response.data[i].images.fixed_height.url+'" data-state="still"class="gif"onclick="'+clickOnImgs()+'">');
            };
        });
    });
}


$(document).ready(function () {

    toyFunction();
    queryNewKeyword();

})
