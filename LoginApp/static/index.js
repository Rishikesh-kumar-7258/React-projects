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
    
    fetch("http://localhost:5000/",{
        'method' : 'POST',
        'headers' : {
            'Content-type' : 'application/json',
        },
        'body' : JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => console.log(res))

    first_time = !first_time;
}