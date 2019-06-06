define(['color'], function(color){
    return {
        setBackground: function(period) {
            color.init(period);
            setInterval(() => {
                document.body.style.background = color.getCurrentColor();
            }, period);
        },
    }
})