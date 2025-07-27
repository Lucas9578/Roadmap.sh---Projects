let firstTab = document.getElementById("1");
let secondTab = document.getElementById("2");
let thirdTab = document.getElementById("3");
let fourthTab = document.getElementById("4");

function cambiarDisplay(tabId) {
    const todasLasTabs = document.querySelectorAll('.container__tabs');
    
    // Ocultar todas
    todasLasTabs.forEach(tab => tab.hidden = true);
    
    // Mostrar la que corresponde
    const tabMostrada = document.getElementById(tabId);
    if (tabMostrada) {
        tabMostrada.hidden = false;
    }
}