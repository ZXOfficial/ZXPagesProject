let viewPagesBtn = document.querySelector("#b2");


const openGallery = async() => {
    window.open("../views/gallery.html", "_blank");
};
document.openGallery = openGallery;


document.addEventListener("mousemove", function(event) {
    var logo = document.getElementById("logo");
    var clogocont = document.getElementById("mDHC");
    var bu1 = document.getElementById("b1");
    var bu2 = document.getElementById("b2");

    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var centerX = windowWidth / 2;
    var centerY = windowHeight / 2;

    var distanceFromCenterX = centerX - mouseX;
    var distanceFromCenterY = centerY - mouseY;
    var distanceFromCenterX2 = centerX - mouseX;
    var distanceFromCenterY2 = centerY - mouseY;

    var maxOffset = 10;
    var maxOffset2 = 20;
    var offsetX = (distanceFromCenterX / centerX) * maxOffset;
    var offsetY = (distanceFromCenterY / centerY) * maxOffset;
    var offsetX2 = (distanceFromCenterX2 / centerX) * maxOffset2;
    var offsetY2 = (distanceFromCenterY2 / centerY) * maxOffset2;

    logo.style.transform = "translate(" + offsetX + "px, " + offsetY + "px)";
    
    bu1.style.transform = "translate(" + offsetX2 + "px, " + offsetY2 + "px)";
    bu2.style.transform = "translate(" + offsetX2 + "px, " + offsetY2 + "px)";
    clogocont.style.transform = "translate(" + offsetX2 + "px, " + offsetY2 + "px)";
});