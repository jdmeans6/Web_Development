// var colors = ['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1']

function zero(i) {
    if(i < 10) {
        i = "0" + i;
    }
    return i;
}
function time() {
    var date = new Date();
    var clockwork = document.getElementById("clock");
    var hour = zero(date.getHours());
    var minute = zero(date.getMinutes());
    var second = zero(date.getSeconds());
    clockwork.innerHTML = hour + ":" + minute + ":" + second;
}
setInterval(time, 1000);

// var i = 0;
// function colorTime() {
//     var body = document.querySelector("body");
//     
//     body.style.backgroundColor = colors[i];
//     i = (i + 1) % colors.length;
// }
// setInterval(colorTime, 1000);

var i = 0;
setInterval(function colorTime() {
    var body = document.querySelector("body");
    var colors = ['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1']
    body.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;
}, 1000);