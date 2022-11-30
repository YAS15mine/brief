let form = document.getElementById("form");
let nom = document.getElementById("nom");
let marque = document.getElementById("marque");
let price = document.getElementById("price");
let desc = document.getElementsByName("M");
let date = document.getElementById("date");
let type = document.getElementById("type");
let mis1 = document.querySelector(".mis1");
var promo;
var arrow = [];
function checkinputs() {
  arrow.length = 0;
  let nomValue = nom.value;
  let marValue = marque.value;
  let priceValue = price.value;
  let dtValue = date.value;
  let typvalue =  type.value;
  let table = [nomValue,marValue,priceValue,dtValue,promar(desc),typvalue,`<button id="edit${id}" onclick="edit(this)">edit</button><button id="delet${id}"  onclick="onDelete(this)">Delete</button>`]
  if (nomValue === "") {
    setErrorFor(nom, "nom is required");
  } else if (nomValue.length < 3 || nomValue.length > 30) {
    setErrorFor(nom, "nom is invalid");
  } else {
    setSuccessFor(nom, "GREAT!!!!");
    arrow.push(true);
  }
  if (marValue === "") {
    setErrorFor(marque, "marque is required");
  } else if (marValue.length < 3 || marValue.length > 30) {
    setErrorFor(marque, "marque is invalid");
  } else {
    setSuccessFor(marque, "GREAT!!!");
    arrow.push(true);
  }
  if (priceValue == "") {
    setErrorFor(price, "prix is required");
  } else {
    setSuccessFor(price, "GREAT!!!");
    arrow.push(true);
  }
  if (dtValue == "") {
    setErrorFor(date, "Date is required");
  } else {
    setSuccessFor(date, "GREAT!!!");
    arrow.push(true);
  }
  if (typvalue == "") {
    setErrorFor(type, "choose one");
  } else {
    setSuccessFor(type, "GREAT!!!");
    arrow.push(true);
  }

  if (desc[0].checked) {
    mis1.innerHTML = "GREAT!!!";
    arrow.push(true);
    mis1.style.color = "green";
    promo = document.getElementById("D").value;
  } else if (desc[1].checked) {
    arrow.push(true);
    mis1.innerHTML = "Great!!!";
    mis1.style.color = "green";

    promo = document.getElementById("S").value;
  } else {
    mis1.innerHTML = "Choose one";
    mis1.style.color = "red";
  }
  return table;
}
function setErrorFor(input, message) {
  let formControl = input.parentElement;
  let small = formControl.querySelector("small");
  formControl.className = "inputbox-error";
  small.innerHTML = message;
  console.log(formControl);
}
function setSuccessFor(input, message) {
  let formControl = input.parentElement;

  console.log(formControl);

  let samp = formControl.querySelector("small");

  formControl.className = "inputbox-success";
  samp.innerHTML = message;
}

function promar(check) {
  for (let i = 0; i < check.length; i++) {
    if (check[i].cheked) {
      return check[i].value;
    }
  }
}
let id = 0;
function addelem() {
  id++;
  let table = document.getElementById("controlist");
  let tr = document.createElement("tr");
  tr.setAttribute("id", "tr" + id);
  table.appendChild(tr);
  for (let i = 0; i < checkinputs().length; i++) {
    let td = document.createElement("td");
    td.setAttribute("id", "td" + id + i);
    document.getElementById("tr" + id).appendChild(td);
    document.getElementById("td" + id + i).innerHTML = checkinputs()[i];
  }
  // resetform();
}
function onDelete(product) {
  product.closest("tr").remove();
}
function boom() {
  checkinputs();
  console.log(arrow);
  if (arrow.length == 6) {
    addelem()
    resetform()
  }
}
function resetform() {
  let nom = document.getElementById("nom").value = "";
  let marque = document.getElementById("marque").value = "";
  let price = document.getElementById("price").value = "";
  let date = document.getElementById("date").value = "";
  let type = document.getElementById("type").value = "";
  let desc = document.getElementsByName("M");
  desc[0].checked = desc[0].unchecked;
  desc[1].checked = desc[1].unchecked;
}
// edit 
let button =  document.getElementById('button')
function edit(that) {
  button.value = "save"
  let data = that.closest('tr')
  let td = data.querySelectorAll('td')
  let input = document.querySelectorAll('form input:not(last-child)');
  let inputtabl = []
  input.forEach(e=> {inputtabl.push(e)})
  let datatable = []
  td.forEach(e=>{datatable.push(e.innerHTML)})
  for (let i = 0; i < inputtabl.length; i++) {
    inputtabl[i].value = datatable[i]    
  }
  if (datatable[5] === "OUI") {
    document.getElementById('D').checked
  }else{
    document.getElementById('S').checked
  }
}
