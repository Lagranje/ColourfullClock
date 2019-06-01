define(['time'], function(time){
    return {
        refreshTime: function() {
            setInterval(() => {
                var clock  = document.getElementById("clock");
                if (clock) {
                    var currentTime = time.getStringCurrentTime();
                    clock.innerText = currentTime;
                } else {
                    throw err;
                }
            }, 1000);
        }
    }
})