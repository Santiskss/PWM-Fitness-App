
function load()
{
    loadHeader()
    fetch("../JSON/routines_pull.json").then(function(res)
    {
        return res.json();
    })
        .then(function (json)
        {
            document.querySelector(".exercise-title").textContent = json[0].exercises[0].name
            document.querySelector(".description-box").textContent = json[0].description
        })
    loadFooter()
}