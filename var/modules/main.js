requirejs.config({
    baseUrl: 'var/modules',
});
requirejs(['view'],
    function(view) {
        view.generateView();   
});