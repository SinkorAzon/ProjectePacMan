var navName = window.navigator.appName;
var navVersion = window.navigator.appVersion;
var navInfoSO = window.navigator.appVersion.toLowerCase();
var so = window.navigator.platform;
var lastModidyDate = document.lastModified;
var navIdioma = window.navigator.language;
var hostIp = location.hostname;
var hostUrl = location.host;

function info(){
  window.alert(
      "Navegador: " + navName + "\n" +
      "Versió Navegador: " + navVersion + "\n" +
      "SO Navagador: " + so + "\n" +
      "Ultima Modificació: " + lastModidyDate + "\n" +
      "Idioma: " + navIdioma + "\n" +
      "Ip HostName: " + hostIp + "\n" +
      "Url HostName: http://" + hostUrl + "\n"
    );
}

function infGame(){
  window.alert(
      "Manual Pac-Man.\n" +
      "La condició per guanyar es netejar el menjar que apareix\n" +
      "al mapa i finalitzar el joc amb 1 vida o més." +
      "Les cireres ens agreguem 1 vida + 10 segons de joc.\n" +
      "La jugabilitat es amb les tecles Up, Down, Right i Left.\n" +
      "Hi ha 4 modes de joc: \n" +
      "Mode Easy = 10 Vides + 300 seg\n" +
      "Mode Standard = 5 Vides + 180 seg\n" +
      "Mode Hard = 3 Vides + 120 seg\n" +
      "Mode Hell = 1 Vida + 90 seg\n"
    );
}

function saveUser(){
  var user = document.getElementById("user").value;
  var email = document.getElementById("email").value;
  var dif;
  if(document.getElementById("easy").checked == true) {
    dif = document.getElementById("easy").value;
  } else if(document.getElementById("stan").checked == true) {
    dif = document.getElementById("stan").value;
  } else if(document.getElementById("hard").checked == true) {
    dif = document.getElementById("stan").value;
  } else if(document.getElementById("hell").checked == true) {
    dif = document.getElementById("hell").value;
  }


  //Save Inf user
  localStorage.setItem('nomUsuariKey', user);
  localStorage.setItem('emailKey', email);
  localStorage.setItem('difKey', dif);
}
