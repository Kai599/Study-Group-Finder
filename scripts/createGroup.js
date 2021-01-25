let erstellen = document.getElementById('erstellen');
let usereingabe = document.getElementById('gruppenname').value;
let anzahl = document.getElementById('anzahl').value;
let fach = document.getElementById('fach').value;

function check(){

  if(usereingabe == null || anzahl == null || fach == null){
    erstellen.disabled = true;
  }else{
    erstellen.disabled = true;
  }
}

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
}else{
  alert("Bitte geben Sie Name, Anzahl und die Fachrichtung an")
}
}
