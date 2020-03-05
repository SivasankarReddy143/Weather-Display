$(document).ready(function () {
    $("#getWeatherForcast").click(function () {
        var city = $("#city").val();
        var key = 'e81f8707fca7fecb8e3d9523fadf6a17';

        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?',
            datatype: 'json',
            type: 'GET',
            data: { q: city, appid: key, units: '_metric' },
            success: function (data) {
                var wf = ""
                $.each(data.weather, function (index, val) {
                    wf = '_<p><b>' + data.name + "<b/><img src=" + val.icon + ".png></p>" +
                        data.main.temp + '&deg;C' + '|' + val.main + "," + val.description
                });
                $("#showWeatherForcast").html(wf)
            }
        })
    })
})




