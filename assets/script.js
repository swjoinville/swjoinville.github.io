const registrationLink = "https://www.sympla.com.br/meetup-metodos-de-ideacao--techstarts-startup-weekend-mega-joinville__2481540";

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    elmnt.removeAttribute("include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
}

function startCountdown(eventDate) {
    const countDownDate = new Date(eventDate).getTime();
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.querySelector(".countdown-time .d").innerHTML = days;
        document.querySelector(".countdown-time .h").innerHTML = hours;
        document.querySelector(".countdown-time .m").innerHTML = minutes;
        document.querySelector(".countdown-time .s").innerHTML = seconds;

        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".countdown-time").innerHTML = "O evento começou!";
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
    includeHTML();
    startCountdown("Sep 27, 2024 18:00:00");
    document.querySelectorAll(".registration-link").forEach(link => {
        link.href = registrationLink;
    });
});
