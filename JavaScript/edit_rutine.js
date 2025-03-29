
function load()
{
    loadHeader()
    fetch("../JSON/routines_pull.json").then(function(res)
    {
        return res.json();
    })
        .then(function (json)
        {
            document.querySelector("#ejercicios").innerHTML = "<div id='ejercicio1' class='ejercicio'></div>" +
                "<div id='ejercicio2' class='ejercicio'></div>"


            Promise.all([
                loadTemplate("/Templates/Edit_and_Delete.html", "ejercicio1"),
                loadTemplate("/Templates/Edit_and_Delete.html", "ejercicio2")
            ]).then(() => {
                const botones = document.querySelectorAll(".ejercicio")
                console.log(botones)
                for (let i = 0; i <botones.length; i++) {
                    let edit = botones[i].querySelectorAll(".boton")
                    botones[i].querySelector(".info_rutine").textContent = json[i*3].name
                    edit[0].textContent = "Edit"
                    edit[1].textContent = "Delete"
                }
            });



        })
    loadFooter()
}