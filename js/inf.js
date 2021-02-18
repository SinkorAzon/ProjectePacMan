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
