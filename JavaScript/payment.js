
function load()
{
    loadHeader()
    fetch("../JSON/data.json").then(function(res)
    {
        return res.json();
    })
        .then(function (json)
        {
            document.querySelector(".rectangle").innerHTML = "<img src='../Resources/pago.png'>"
        })
    loadFooter()
}