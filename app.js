var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (
    tooltipTriggerEl
) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

//afficher année en cours sur le copyright

function displayYear (){
    let date = new Date();
    let copyright = document.getElementById('copyright');

    date = date.getFullYear();

    return copyright.innerText = date;
}

displayYear();