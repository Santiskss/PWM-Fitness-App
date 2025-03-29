
function load()
{
    loadHeader()
    fetch("../JSON/routines_pull.json").then(function(res)
    {
        return res.json();
    })
        .then(function (json)
        {
            document.querySelector("#calendar").src = "../Resources/calendar.png"
        })
    loadFooter()
}