define(['random'], function(random){
    return {
        setBackground: function() {
            setInterval(() => {
                var colorPicker = random.ColorPicker;
                document.body.style.background = colorPicker.generateRandomStringColour();
            }, 500);
            
        }
    }
})