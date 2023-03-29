import globals from "./globals";

function getDataBase()
{
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
                  
                  console.log("Data from DB regarding cards loaded Successfully")

                    globals.dataBd = resultJSON;

                    initGame();
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

function initHTMLelements() {
    
    //Buttons
    globals.btnStart = document.getElementById('btnStart');
    document.getElementById('Start').style.display = "none";
    
    document.getElementById('chooseOpponent').style.display = "none";
}

function initElements() {
    globals.btnStart = document.getElementById('btnStart');
    globals.inputEmail = document.getElementById('email');
    globals.inputPassword = document.getElementById('password');
    globals.sectionPlay = document.getElementById('sectionPlay');
    globals.sectionAdmin = document.getElementById('adminView');
    
    globals.sectionAdmin.style.display = "none";
    globals.btnStart.addEventListener("mousedown", getDataBase, false);
}

export {

    initHTMLelements,
    initElements,
}