import { initElements, initHTMLelements } from "./initialize.js";
import globals from "./globals.js";


window.onload = init;

function init() {


    //Inicializar elementos html
    initHTMLelements();

    //Inicializar elementos por id
    initElements();

    // //Inicializar variables
    // initVars();

    // //Initialize events
    // initEvents();
}