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
        $("body").append("<p>Rating is: "+ response.data[0].rating + "</p>");
        });
    }
    //Adding an event listener to the button
    $(document).on("click", ".topicButtons", getGif);



});