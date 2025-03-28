function loadHeader()
{
    console.log("carga");
    fetch("../JSON/data.json").then(function(response) {
        return response.json();
    })
        .then(function (myJson)
        {
            let navega = document.getElementsByClassName("enlaces")
            for (let i=0; i<navega.length; i++)
            {
                navega[i].textContent = myJson.nav_items_header[i]
            }
            let logeo = document.getElementsByClassName("logs")
            for (let i=0; i<logeo.length; i++)
            {
                logeo[i].textContent = myJson.logeo_header[i]
            }


        })
}
