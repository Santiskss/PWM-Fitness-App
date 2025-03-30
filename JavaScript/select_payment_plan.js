
function load()
{
    loadHeader()
    fetch("../JSON/data.json").then(function(res)
    {
        return res.json();
    })
        .then(function (json)
        {
            let rectangles = document.querySelector(".rectangles")
            rectangles.innerHTML = "<div class='sub' id='subscription1'></div><div class='sub' id='subscription2'></div><div class='sub' id='subscription3'></div>"
            Promise.all([loadTemplate("/Templates/subscription.html", "subscription1"),
            loadTemplate("/Templates/subscription.html", "subscription2"),
            loadTemplate("/Templates/subscription.html", "subscription3")]
            ).then(() => {
                let questions = document.querySelectorAll("th");
                let prices = document.querySelectorAll("#price");
                for (let i = 0; i < prices.length; i++) {
                    document.querySelectorAll("#price")[i].textContent = json.suscripciones.planes[i].precio
                    document.querySelectorAll("#foto")[i].src = `/Resources/sub${i + 1}.png`
                }
                for (let i = 0; i < questions.length; i++) {
                    questions[i].textContent = json.suscripciones.preguntas[i].pregunta
                }
            })
        })
    loadFooter()
}

