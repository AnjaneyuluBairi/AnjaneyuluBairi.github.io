var contactMeDiv = document.getElementById("contactme");
var aboutMeDiv = document.getElementById("aboutme");
var homeDiv = document.getElementById("home");
var dateTime = document.getElementById("datetime");
var picDiv = document.getElementById("picdiv");
var rightIcons = document.getElementsByClassName("Left");

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];



function displayDateTime() {
    setInterval(function() {
        var date = new Date();
        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59
        var s = date.getSeconds(); // 0 - 59
        var i = date.getMonth();
        var m1 = months[i];
        var d = date.getDay();
        var y = date.getFullYear();
        var valDate = d + " / " + m1 + " / " + y + " ";
        var session = "AM";
        if (h == 0) {
            h = 12;
        }
        if (h > 12) {
            h = h - 12;
            session = "PM";
        }
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        var time = h + " : " + m + " : " + s + " " + session;
        dateTime.innerHTML = valDate + ' ' + time;

    }, 250);
}


function showHideDiv(value) {

    if (value == 1) { //home
        rightIcons[0].classList.add("RightUnderline");
        rightIcons[1].classList.remove("RightUnderline");
        rightIcons[2].classList.remove("RightUnderline");
        homeDiv.style.display = 'block';
        aboutMeDiv.style.display = 'none';
        contactMeDiv.style.display = 'none';
        if (screen.width <= 800) {
            picDiv.style.display = "block";
        }
    } else if (value == 2) { //about me
        rightIcons[1].classList.add("RightUnderline");
        rightIcons[0].classList.remove("RightUnderline");
        rightIcons[2].classList.remove("RightUnderline");
        homeDiv.style.display = 'none';
        aboutMeDiv.style.display = 'block';
        contactMeDiv.style.display = 'none';
        if (screen.width <= 800) {
            picDiv.style.display = "none";
        }
    } else { //contact me 
        rightIcons[2].classList.add("RightUnderline");
        rightIcons[0].classList.remove("RightUnderline");
        rightIcons[1].classList.remove("RightUnderline");
        homeDiv.style.display = 'none';
        aboutMeDiv.style.display = 'none';
        contactMeDiv.style.display = "block";
        if (screen.width <= 800) {
            picDiv.style.display = "none";
        }
    }
}

var ECheaders = document.getElementsByClassName("ECheader");
var i;
var ECs = document.getElementsByClassName("EC");
for (i = 0; i < ECheaders.length; i++) {

    ECheaders[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var parent = this.parentNode;
        parent.classList.toggle("AddBorderBottom");
        var childrens = this.childNodes;
        this.classList.toggle("AddBorderBottom");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            childrens[3].style.display = "none";
            childrens[1].style.display = "block";
            content.style.display = "none";
        } else {
            childrens[1].style.display = "none";
            childrens[3].style.display = "block";
            content.style.display = "block";
        }
    });
}