
let erstellen = document.getElementById('erstellen');

function s(){
let usereingabe = document.getElementById('gruppenname').value;
let anzahl = document.getElementById('anzahl').value;
let fach = document.getElementById('fach').value;
let beschreibung = document.getElementById('beschreibung').value;

if(usereingabe != null && anzahl != null && fach != null){
  localStorage.setItem('name',usereingabe);
  localStorage.setItem('anzahl',anzahl);
  localStorage.setItem('fach',fach);
  localStorage.setItem('beschreibung',beschreibung);
}
}
