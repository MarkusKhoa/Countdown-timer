var start = document.getElementById('start');
var reset = document.getElementById('reset');

var h = document.getElementById("hour");
var min = document.getElementById("minute");
var sec = document.getElementById("second");

var starting_time = null;

start.addEventListener('click', function(){
    function startInterval(){
        starting_time = setInterval(function() {
            count_down();
        }, 1000);
    }
    startInterval();
})


reset.addEventListener('click', function(){
    h.value = 0;
    min.value = 0;
    sec.value = 0;
    stopClock();
})

function count_down(){
    if(h.value == 0 && min.value == 0 && sec.value == 0)
    {
        h.value = 0;
        min.value = 0;
        sec.value = 0;
    }
    else if(sec.value != 0)
    {
        sec.value--;
    }
    else if(min.value != 0 && sec.value == 0)
    {
        sec.value = 59;
        min.value--;
    }
    else if(h.value != 0 && min.value == 0)
    {
        min.value = 60;
        h.value--;
    }
    return;
}


function stopClock()
{
    clearInterval(starting_time);
}