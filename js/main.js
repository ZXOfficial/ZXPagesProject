document.addEventListener("mousemove", function(event) {
    var logo = document.getElementById("logo");
    var clogocont = document.getElementById("mDHC");

    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var centerX = windowWidth / 2;
    var centerY = windowHeight / 2;

    var distanceFromCenterX = centerX - mouseX;
    var distanceFromCenterY = centerY - mouseY;
    var distanceFromCenterX2 = mouseX - centerX;
    var distanceFromCenterY2 = mouseY - centerY;

    var maxOffset = 20;
    var maxOffset2 = 10;
    var offsetX = (distanceFromCenterX / centerX) * maxOffset;
    var offsetY = (distanceFromCenterY / centerY) * maxOffset;
    var offsetX2 = (distanceFromCenterX2 / centerX) * maxOffset2;
    var offsetY2 = (distanceFromCenterY2 / centerY) * maxOffset2;

    logo.style.transform = "translate(" + offsetX + "px, " + offsetY + "px)";
    clogocont.style.transform = "translate(" + offsetX2 + "px, " + offsetY2 + "px)";
});