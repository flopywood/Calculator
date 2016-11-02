$(document).ready(function() {

    var onScreen = "";

    $('.c').click(function() {
        onScreen = "";
        document.getElementById('screen').innerHTML = "<p class='onscreen'>" + onScreen + "</p>";
    });

    $('.dot').click(function() {
        onScreen += this.value;
        document.getElementById('screen').innerHTML = "<p class='onscreen'>" + onScreen + "</p>";
    });

    $('.num').click(function() {
        onScreen += this.value;
        document.getElementById('screen').innerHTML = "<p class='onscreen'>" + onScreen + "</p>";
    });

    $('.add').click(function(a, b) {
        onScreen += this.value;
        document.getElementById('screen').innerHTML = "<p class='onscreen'>" + onScreen + "</p>";
    });

    $('.subtract').click(function() {
        onScreen += this.value;
        document.getElementById('screen').innerHTML = "<p class='onscreen'>" + onScreen + "</p>";
    });

    $('.multiply').click(function() {
        onScreen += this.value;
        document.getElementById('screen').innerHTML = "<p class='onscreen'>" + onScreen + "</p>";
    });

    $('.divide').click(function() {
        onScreen += this.value;
        document.getElementById('screen').innerHTML = "<p class='onscreen'>" + onScreen + "</p>";
    });

    $('.equal').click(function() {
        onScreen = eval(onScreen);
        document.getElementById('screen').innerHTML = "<p class='onscreen'>" + onScreen + "</p>";
    });

});
