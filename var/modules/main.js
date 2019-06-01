requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'var/modules',
});
requirejs(['random', 'time'],
    function(random, time) {
    var colorPicker = random.ColorPicker;
    
});