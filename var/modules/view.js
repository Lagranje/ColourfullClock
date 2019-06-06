define(['clock', 'background'], function(clock, background){
    return {
        generateView: function() {
            clock.refreshTime();
            background.setBackground(15);
        }
    }
})