document.addEventListener("DOMContentLoaded", () => {
    const username = document.querySelector("#UserName").value
    const password = document.querySelector("#Password").value
    const loginButton = document.querySelectorAll("input")[2]

    loginButton.addEventListener("click",  event => {
        event.preventDefault()
    })
    console.log(username)
    console.log(password)
})
