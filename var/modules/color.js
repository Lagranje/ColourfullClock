define(["colorPicker"], function(colorPicker) {
    return {
        currentColor: [],
        init: function(period) {
            this.currentColor = colorPicker.generateRandomColourArray();
            this.runColorChanger(period);
        },
        getCurrentColor: function() {
            var result = ["rgb(", this.currentColor[0], ",", this.currentColor[1], ",", this.currentColor[2],")"];
            return result.join("");
        },
        //change color according to the rule
        //*rule: all the values of RGB models moves up by 1 point from left to right untill it 
        // reaches 255, 255, 255. Theen it moves down, untill it reaches 0, 0, 0
        // In one iteration moves one value to the one point
        runColorChanger: function(period) {
            var up = true;
            setInterval(() => {
                if (this.up) {
                    if (this.currentColor[0] !== 255) {
                        this.currentColor[0] = ++this.currentColor[0];
                    } else if (this.currentColor[1] !== 255) {
                        this.currentColor[1] = ++this.currentColor[1];
                    } else if (this.currentColor[2] !== 255){
                        this.currentColor[2] = ++this.currentColor[2];
                    }
                } else {
                    if (this.currentColor[2] !== 0) {
                        this.currentColor[2] = --this.currentColor[2];
                    } else if (this.currentColor[1] !== 0) {
                        this.currentColor[1] = --this.currentColor[1];
                    } else if (this.currentColor[0] !== 0) {
                        this.currentColor[0] = --this.currentColor[0];
                    }
                }
                if (JSON.stringify(this.currentColor) == JSON.stringify([255, 255, 255]) || 
                    JSON.stringify(this.currentColor) == JSON.stringify([0, 0, 0] )) {
                    this.up = !this.up;
                }
            }, period, this);
            
        }
    }
});



