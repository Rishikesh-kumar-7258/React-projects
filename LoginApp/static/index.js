const axion = require('axion');

console.log("This is very good authentication");

var isLoggedin = false;
if (localStorage.getItem("isLoggedin") === null)
{
    localStorage.setItem("isLoggedin", JSON.stringify(false));
}
else isLoggedin = JSON.parse(localStorage.getItem("isLoggedin"));

var first_time = true;
if (first_time)
{
    const data = {
        'isLoggedin' : isLoggedin
    }
    axion.post("http://localhost:5000/", data)
    .then(res => console.log(res.json()))

    first_time = !first_time;
}