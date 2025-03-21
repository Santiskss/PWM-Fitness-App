function loadTemplate(templatePath, elementId) {
    fetch(templatePath)
        .then(resp => resp.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(`Error cargando ${templatePath}:`, error));
}
