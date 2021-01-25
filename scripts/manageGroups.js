let usereingabe;

onload = (e) => {
  usereingabe = document.getElementById('search');
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
 "Wenn es bei dir auch nicht fuer ein richtige Informatik Studium gereicht hat, dann komm in unsere Hoffnungslose Gruppe",
"4/12"
);
var group3 = new group("Progers", "Informatik");
var group4 = new group("Biwis", "BWL");
var group5 = new group("Speakers", "Spanisch");
var group6 = new group("Infos", "Informatik");
var group7 = new group("Anas", "Mathe");

var groups = [group1,group2,group3,group4,group5,group6,group7];


function add(element){
  groups.push(element);
}
function create(name,fach,beschreibung){
  var group = new group(name,fach,beschreibung);
  add(group);
}

//Sucht die Gruppen nach namen und fächern durch
function searchGroup(){
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
  stuff += `<tr id="change"><td onclick="getInformation(this)" id="s">${s.name}</td><td>${s.fach}</td></tr>`;
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
tabe.addEventListener('click',getInformation);
abbruch.addEventListener('click',schließeFenster);


function schließeFenster() {
  dialog.style.display = "none";
}

function getInformation(element){
  let info = document.getElementById('groupinfo');
  let anzahl = document.getElementById('anzahl');
  let buttonYes = document.getElementById('beitreten');
let name = element.innerText;
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
