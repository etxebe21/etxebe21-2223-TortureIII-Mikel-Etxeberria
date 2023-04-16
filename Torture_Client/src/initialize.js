import globals from "./globals.js";

// window.onload = init;

function initHTMLelements() {
    
    //Buttons
    globals.btnStart = document.getElementById('btnStart');
    document.getElementById('btnStart').style.display = "block";
    
    document.getElementById('potion').style.display = "none";
}

function initElements() {
    globals.btnStart = document.getElementById('btnStart');
    globals.sectionStart = document.getElementById('btnStart');
    globals.sectionPotion = document.getElementById('potion');
    globals.btnStart.addEventListener("mousedown", startGameButtonDown, false);
    
    
    // globals.btnStart.style.display = "block";
    // globals.sectionPotion.style.display = "none";
    // globals.btnStart.addEventListener("mousedown", getDataBase, false);
}

function initEvents() {


    //startGameButton Events
    globals.btnStart.addEventListener("mousedown", startGameButtonDown, false);
    
}

function startGameButtonDown(event) {

    getDataBase();

    document.getElementById('potion').style.display = "block";
    document.getElementById('btnStart').style.display = "none";
}

function getDataBase()
{
    console.log("Send button pressed");
  //Ruta o absoluta o elativa al fivchero que hace la peticion(HTML)
  const url =  "https://raw.githubusercontent.com/zsiciarz/skyrim-alchemy-toolbox/master/data/ingredients.json"
  const request = new XMLHttpRequest();

  request.onreadystatechange = function()
  {
      if(this.readyState == 4)
      {
          if(this.status == 200)
          {
              if(this.responseText != null)
              {
                  const resultJSON = JSON.parse(this.responseText);
                  
                  console.log("datos recibidos")

                    globals.dataBd = resultJSON;
                    console.log(globals.dataBd);

                    createPotions();
              }
              else
                  alert("Communication erro: No data received");
          }
          else
              alert("Communication error: " + this.statusText);
      }
  }
  request.open('GET', url, true);
  request.responseType = "text";
  request.send();
}

function createPotions() {

    for (let i = 0; i < 4; i++) {
        document.write("Ingredientes" + dataBd[Math.floor(Math.random())] * 4);
    }
}




export {

    initHTMLelements,
    initElements,
    initEvents,

}