define([], function(){
    return {
        getCurrentTime: function() {
            var date = new Date();
            var time = this.formatTime([date.getHours(), date.getMinutes(), date.getSeconds()]);
            return time;
        },
        getStringCurrentTime: function() {
            var time = this.getCurrentTime();
            var result = [time[0], ":", time[1], ":", time[2]];
            return result.join("");
        },
        formatTime: function(time) {
            var formattedTime = [];
            for (var i = 0; i < time.length; i++) {
                var el = time[i].toString();
                if (el.length === 1) {
                    el = '0' + el;
                }
                formattedTime.push(el);
            }
            return formattedTime;
        }
    }
})