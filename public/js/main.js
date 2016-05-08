require.config({
    baseUrl: '/components/jquery/dist/'
});

define(['jquery'], function($) {
    $(function() {
        console.log('hello world!');
    });
});