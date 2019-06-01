requirejs.config({
    baseUrl: 'var/modules',
});
requirejs(['clock'],
    function(clock) {
    clock.refreshTime();   
});