var WeatherApp = {};

(function ($, ns, navigator) {
    ns.getWeather = function () {
        var zipcode = $('#zip-code-input').val();

        // get weather using zip code
        var queryString =
            'http://api.openweathermap.org/data/2.5/weather?q='
            + zipcode + '&units=metric&APPID=ce6a2c4ede27ce584cfbd36373ca1675';

        $.getJSON(queryString, function (results) {
            if (results) {
                $('#error-msg').hide();
                $('#weather-data').show();

                var weather = results;
                $('#title').text(weather.name);

                var wind = weather.wind;
                $('#temperature').text(weather.main.temp);
                $('#wind').text(wind.speed);

                //var atmosphere = weather.atmosphere;
                //$('#humidity').text(atmosphere.humidity);
                //$('#visibility').text(atmosphere.visibility);

                //var astronomy = weather.astronomy;
                //$('#sunrise').text(astronomy.sunrise);
                //$('#sunset').text(astronomy.sunset);

                $('#summary img').attr('src', 'http://openweathermap.org/img/w/'+weather.weather[0].icon+'.png');

            } else {
                $('#weather-data').hide();
                $('#error-msg').show();
                $('#error-msg').text("Error retrieving data. " + results.query.results.channel.item.title);
            }
        }).fail(function (jqXHR) {
            $('#error-msg').show();
            $('#error-msg').text("Error retrieving data. " + jqXHR.statusText);
        });

        return false;
    }

})($, WeatherApp, navigator);
