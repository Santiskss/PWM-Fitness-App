
function load()
{
    loadHeader()
    fetch("../JSON/routines_core.json").then(function(res)
    {
        return res.json();
    })
        .then(function (json)
        {
            let exercises = json[0].exercises
            document.querySelector("#ejercicios").innerHTML = "<div id='info_exercise1'></div><div id='info_exercise2'></div>" +
                "<div id='info_exercise3'></div><div id='info_exercise4'></div>"
            Promise.all([loadTemplate("/Templates/info_exercise.html", "info_exercise1"),
            loadTemplate("/Templates/info_exercise.html", "info_exercise2"),
            loadTemplate("/Templates/info_exercise.html", "info_exercise3"),
            loadTemplate("/Templates/info_exercise.html", "info_exercise4")]
            ).then(() =>
            {
                for (let i = 0; i < exercises.length; i++) {
                    document.querySelectorAll(".name_exercise")[i].textContent = exercises[i].name
                    document.querySelectorAll(".reps")[i].textContent = exercises[i].reps
                }
            })
        })
    loadFooter()
}