function load()
{
    loadHeader()
    fetch("../JSON/routines_core.json").then(function(res)
    {
        return res.json();
    })
        .then(function (json)
        {
            const rutinas = document.querySelectorAll("#info")
            for (let i = 0; i < rutinas.length; i++)
            {
                rutinas[i].textContent = json[i*3].description
                document.querySelectorAll("#picture")[i].src = "/Resources/today_image.webp"

            }
        })
    loadFooter()
}