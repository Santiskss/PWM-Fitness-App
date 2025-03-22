document.addEventListener("DOMContentLoaded", () =>
{
    document.getElementById("formulario").addEventListener("submit", async event =>
    {
        event.preventDefault()

        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const check_password = document.getElementById("check_password").value

        const response = await fetch("http://localhost:1337/api/user-app/register",
            {
                method: "POST",
                headers:
                    {
                        "Content-Type": "application/json"
                    },
                body: JSON.stringify({name, email, password})
            })

        const data = await response.json()
        console.log(data)
        if (response.ok)
        {
            alert("Cuenta creada correctamente")
            //localStorage.setItem("jwt", data.token)
            location.replace("http://localhost:63342/PWM-Fitness-App/Pages/first_page.html")
        }
        else
        {
            alert("Datos incorrectos")
        }
    })
})