/*creare una todolist
form a sinistra con task e data ( 2 campi input) + bottone di aggiunta.a
-elenco delle task a Destra.
ogni task deve riportare:
-Checkbox spuntabile per indicarne il completamento (opz. al check. la task viene sbarrata)
-nome della task a descrizione
-coppia di bottoni "edit e delete"
-edit riporta nei campi del form il nome della task e la data permettendo di aggiornarli.
-delete elimina la task.

Deve ovviamente essere presentabile oppure bisogna offrire occhiali molto scuri agli insegnanti. ( per i vostri contattarmi dopo le 18:00)

opzionale: utilizzare icone per i bottoni e animazioni per l'aggiunta delle classi
-icone: https://fontawesome.com/
-animazione: https://animate.style.com/ */

//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer"/>

//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" referrerpolicy="no-referrer" />

//LATO SX
let elSx = document.querySelector("#containerSx");
let elItem = document.querySelector("#item");
let elData = document.querySelector("#data");
let elBtn = document.querySelector("#btn");
let elInput1 = document.querySelector("#input1");
let elInput2 = document.querySelector("#input2");

//LATO DX
let elDx = document.querySelector("#containerDx");
let elUl1 = document.querySelector("#ul1");

function stampaForm() {
  let nuovoLi = document.createElement("li");
  nuovoLi.className = "task";
  let valore1 = elInput1.value;
  let valore2 = elInput2.value;
  if (!valore1 == "" && !valore2 == "") {
    nuovoLi.innerHTML += `<input type="checkbox" id="checkbox"> <span>${valore1}</span> <span class="span2">${valore2}</span>  <button class="bottoneEdit">Edit</button> <button class="bottoneDelete">Delete</button>`;
    elUl1.appendChild(nuovoLi);
    elInput1.value = "";
    elInput2.value = "";
  }
}
elBtn.addEventListener("click", stampaForm);

elUl1.addEventListener("click", function (event) {
  let elementoCliccato = event.target;
  console.log(elementoCliccato);
  if (elementoCliccato.matches(".bottoneEdit")) {
    let task = elementoCliccato.closest(".task");
    let valoreTask = task.querySelector("span").textContent;
    let valoreData = task.querySelector(".span2").textContent;
    console.log(valoreData);
    elInput1.value = valoreTask;
  //elInput2.value = dataArray[0].trim() + "-" +dataArray[1]+ "-" +dataArray[2];
  elInput2.value = valoreData;
    task.remove();
  } else if(elementoCliccato.matches(".bottoneDelete")){
    elementoCliccato.closest(".task").remove();
  } else if(elementoCliccato.matches('#checkbox')){
    let spanDaSbarrare = elementoCliccato.closest(".task").querySelector('span');
    spanDaSbarrare.classList.toggle('classeXSbarrare');
  }
});

