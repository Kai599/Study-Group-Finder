let usereingabe;

onload = (e) => {
  usereingabe = document.getElementById('search');
}

//Local-Storage verwaltung

function storage(){
  console.log(localStorage);
  if(localStorage.length != 0){
    let name = localStorage.getItem('name');
    let fach = localStorage.getItem('fach');
    let anzahl = localStorage.getItem('anzahl');
    let beschreibung = localStorage.getItem('beschreibung');


    var groupa = new group(name,fach,beschreibung,"1/"+anzahl);
    groups.push(groupa);
    localStorage.removeItem('name');
    localStorage.removeItem('fach');
    localStorage.removeItem('anzahl');
    localStorage.removeItem('beschreibung');
  }
}

//groups
function group(name, fach,beschreibung,anzahl){
  this.name = name;
  this.fach = fach;
  this.beschreibung = beschreibung;
  this.anzahl = anzahl;
}
var group1 = new group("Die Informierer", "Informatik",
"Hi, wir sind die Informierer und suchen noch hoffnungsvoll nach neuen Mitgliedern!",
"3/5"
);
var group2 = new group("G", "Wirtschaftsinformatik",
 "Wenn es bei dir auch nicht fuer ein richtiges Informatik Studium gereicht hat, dann komm in unsere Hoffnungslose Gruppe",
"4/12"
);
var group3 = new group("Proggers", "Informatik", "Wir programmieren", "4/6");
var group4 = new group("Biwis", "BWL", "Kann bitte jemand meiner Gruppe beitreten?", "1/12");
var group5 = new group("Speakers", "Spanisch", "Hola, aprendamos espanol.", "8/8");
var group6 = new group("Infos", "Informatik", "Informatik Infos", "30/32");
var group7 = new group("Anas", "Mathe", "Wer Spaß hasst kommt hier her", "1/16");

var groups = [group1,group2,group3,group4,group5,group6,group7];


function add(element){
  groups.push(element);
}
function create(name,fach,beschreibung,anzahl){
  const group = new group(name,fach,beschreibung,anzahl);
  add(group);
}

//Sucht die Gruppen nach namen und fächern durch

function searchGroup(){

  storage();

  for (var s of groups) {
    console.log(s.name);
  }

for (var i = 0; i < groups.length; i++) {
    if(groups[i] === null){
      groups.splice(i,1);

    }
}
  const input = usereingabe.value.toUpperCase();
  let h = document.getElementById('search').value;
  if(h.length == 0 || input.trim().length == 0){
    deleteLI();
    schließeFenster();
    return;
  }
  if(groups.filter(x => x.name.toUpperCase() === input.toUpperCase())){
    const name = groups.filter(x => x.name.toUpperCase().search(".*" + input + ".*") != -1);
    if(name.length > 0){
      addListeUI(name);
    }
  }
  if(groups.filter(x => x.fach.toUpperCase() === input.toUpperCase())){
    const fach = groups.filter(x => x.fach.toUpperCase().search(".*" + input + ".*") != -1);
    if(fach.length > 0){
      addListeUI(fach);
    }
  }
}

//Fügt automatisch die Gruppen im UI hinzu
function addListeUI(element){

const tabelle = document.getElementById('tabelle');
let stuff = '';
for (var s of element) {
  stuff += `<tr id="change" onclick="getInformation(this)" ><td id="s">${s.name}</td><td>${s.fach}</td></tr>`;
}

tabelle.innerHTML = stuff;
}

//Entfernt die Liste im UI, wenn in der Suchleiste nichts steht
function deleteLI(){
var g = document.getElementById('tabelle');
g.innerHTML = '';
}

//Zeigt die infos der Gruppe, wenn man auf sie drückt
let tabe = document.getElementById('tabelle');
let dialog = document.getElementById('infos');
let abbruch = document.getElementById('abbrechen');
abbruch.addEventListener('click',schließeFenster);


function schließeFenster() {
  dialog.style.display = "none";
}

function getInformation(element){
  let info = document.getElementById('groupinfo');
  let anzahl = document.getElementById('anzahl');
  let buttonYes = document.getElementById('beitreten');
  let name = element.children[0].innerText;
  for (var v of groups) {
    if(name === v.name){
      anzahl.innerHTML = v.anzahl;
      info.innerHTML = v.beschreibung;
      dialog.style.display = "block";
      buttonYes.disabled = false;
    }
  }
}

function beitreten(){
  let buttonYes = document.getElementById('beitreten');
  buttonYes.addEventListener('click',alert("Sie sind erfolgreich beigetreten"));
  buttonYes.disabled = true;
}
