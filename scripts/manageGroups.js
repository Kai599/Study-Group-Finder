let usereingabe;

onload = (e) => {
  usereingabe = document.getElementById('search');
}

//groups
function group(name, fach){
  this.name = name;
  this.fach = fach;
}

var group1 = new group("Die Informierer", "Informatik");
var group2 = new group("G", "Wirtschaftsinformatik");
var group3 = new group("Meisdas", "Informatik");
var group4 = new group("Biwis", "BWL");
var group5 = new group("Speakers", "Spanisch");

var groups = [group1,group2,group3,group4,group5];


function add(element){
  groups.push(element);
}
function create(name,fach){
  var group = new group(name,fach);
  add(group);
}

//Sucht die Gruppen nach namen und fächern durch
function searchGroup(){
  const input = usereingabe.value;
  let h = document.getElementById('search').value;
  if(h.length == 0){
    console.log('1');
    deleteLI();
  }

  if(groups.filter(x => x.name.toUpperCase() === input.toUpperCase()) || groups.filter(x => x.fach.toUpperCase() === input.toUpperCase())){
    const name = groups.filter(x => x.name.toUpperCase() === input.toUpperCase());
    const fach = groups.filter(x => x.fach.toUpperCase() === input.toUpperCase());
    if(name.length > 0 || fach.length > 0){
      addListeUI(name);
      addListeUI(fach);
    }
  }else{
    console.log("Keine Gruppe/Fach vorhanden");
  }
}

//Fügt automatisch die Gruppen im UI hinzu
function addListeUI(element){
  console.log(element);
  let group = element;

  for (var g of group) {
    listNode = document.getElementById('list');
    liNode = document.createElement("LI");
    txtNode = document.createTextNode(g.name + " " + g.fach);
    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);
  }
}

//Entfernt die Liste im UI, wenn in der Suchleiste nichts steht
function deleteLI(){
var g = document.getElementById('list');
g.innerHTML = '';
}
