var event = "keyword=capitals";
var APIKey = "&apikey=wtztcTScnQ65ngHSXYQy3GRyXD1pU1Mg";
var queryURL =
  "https://app.ticketmaster.com/discovery/v2/events.json?" + event + APIKey;

$.ajax({
  type: "GET",
  url: queryURL,
  async: true,
  dataType: "json",
  success: function(json) {
    console.log(json);
    // Parse the response.
    // Do other things.
    console.log(json._embedded.events[3].name);
    console.log(json._embedded.events[3].dates.start.localDate);
    console.log(json._embedded.events[3].dates.start.localTime);
    console.log(json._embedded.events[3].dates.timezone);
    console.log(json._embedded.events[3]._embedded.venues[0].name);
    //console.log(json._embedded.events[3].promoter.name);
    console.log(json._embedded.events[3].url);

    for (var i = 0; i < json._embedded.events.length; i++) {
      //$(".events").empty();
      var eventsButton = $("<button>");
      eventsButton.addClass("btn btn-secondary btn-lg");
      eventsButton.text(
        json._embedded.events[i].dates.start.localDate +
          "     " +
          json._embedded.events[i].dates.start.localTime +
          "     " +
          json._embedded.events[i].name
      );
      $(".events").append(eventsButton);
      /////////////////////////
      function loadEvent() {
        var gameInfo = $("<div>");
        gameInfo.addClass("gamedetail");
        gameInfo.text("Time-Zone: " + json._embedded.events[i].dates.timezone);
        $(".singleevent").append(gameInfo);
      }

      $(".btn").on("click", function(event) {
        event.preventDefault();
        window.open("eventpage.html");
        //return false;
        loadEvent();
      });

      /////////////////////////
    }
  }
});
