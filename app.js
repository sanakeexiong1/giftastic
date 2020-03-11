$(document).ready(function () {

    var topics = ["Honeybadger", "Bumblebee", "Panda", "Dog", "Chicken", "Shark"];

    //creating a button and adding a class for each item in the array
    function makeButtons(buttonArray) {
        for (let i = 0; i < buttonArray.length; i++) {
            var differentButton = $("<button class='btn-outline-success m-3'>");
            differentButton.addClass("topicButtons");
            differentButton.attr("data-name", buttonArray[i]);
            differentButton.text(buttonArray[i]);
            $("#buttonSpace").append(differentButton);
        }
    }
    //Rendering the buttons
    makeButtons(topics);

    function getGif() {
        var topic = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=LblY3O4psUAecTqrUYsFv8dMiotbr3Tm&limit=10";
        console.log(queryURL)

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
        console.log(response.data[0].rating);

        //Create for loop to cycle through each result
        for (let i = 0; i < response.data.length; i++) {
            //Add the result rating
            $("#giphySpace").prepend("<p>Rating is: "+ response.data[i].rating + "</p>");
            //Add the image
            $("#giphySpace").prepend("<img src='" + response.data[i].images.downsized.url + "'>");
        }

        });
    }
    //Adding an event listener to the button
    $(document).on("click", ".topicButtons", getGif);



});