// DOM BASICO 
let divMessage = document.getElementById("message");
// console.log(typeof(divMessage), divMessage);
// divMessage.innerText = "Sevagoth.";
// divMessage.innerHTML = "The <b>captain.</b>";


let nome = "Fulano";
let urlImgProfile = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd2EDAi65GsMoW_x2oenHF57cjHbjoVXevOw&s";

divMessage.innerHTML = `<p>${nome}</p><img src="${urlImgProfile}" alt= "gauss in action glyph"/>`;