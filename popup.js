document.addEventListener('DOMContentLoaded', function() {
    d = document;
    $.getJSON('https://i.doit.im/api/tasks/today', { }, function(data) {
        var summ = 0;
        $.each(data["entities"], function(index, element) {
            var days = Math.floor(((new Date).getTime() - element["start_at"])/(86400*1000));
            summ += days + 1;
        //    d.body.innerHTML += "<br>" + element["title"] + days + "<br>";
        });
        d.body.innerHTML += "<h1>" + summ + "</h1>";
    });
}, false); // document.addEventListener
