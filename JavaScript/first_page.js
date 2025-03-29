
function load()
{
    loadHeader()
    fetch("../JSON/data.json").then(function(res)
    {
        return res.json();
    })
        .then(function (json)
        {
            document.querySelectorAll("#info")[0].textContent = json.first_page.today
            document.querySelectorAll("#info")[1].textContent = json.first_page.calendar
        })
    loadFooter()
}