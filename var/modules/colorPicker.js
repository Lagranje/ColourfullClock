define([], function() {
    return {
        //returns array with 3 values of RGB model
        generateRandomColourArray: function () {
            return [this.randomInteger(0, 255), this.randomInteger(0, 255), this.randomInteger(0, 255)];
        },

        //return random integer from range min, max
        randomInteger: function(min, max) {
            var rand = min - 0.5 + Math.random() * (max - min + 1);
            return Math.round(rand);
        },
        
        //returns colour in string like rbg(val, val, val) model
        generateRandomStringColour: function() {
            var randomColour = this.generateRandomColourArray();
            var result = ["rgb(", randomColours[0], ",", randomColours[1], ",", randomColours[2],")"];
            return result.join("");
        }
    }
});
