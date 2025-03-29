
function load()
{
    loadHeader()
    fetch("../JSON/data.json").then(function(res)
    {
        return res.json();
    })
        .then(function (json)
        {
            document.querySelector("h1").textContent = json.day_info.date
            document.querySelector(".square").querySelector("p").textContent = json.day_info.rutine
        })
    loadFooter()
}