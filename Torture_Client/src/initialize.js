function getDataBase()
{
  //Ruta o absoluta o elativa al fivchero que hace la peticion(HTML)
  const url = "http://localhost/serverClient/server/routes/getAllHighscores.php"
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
                  console.log (resultJSON);
                  console.log("entra");
                  //Iniciamos los datos del juego
                  initScores(resultJSON);
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