import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

const galeriaElem = document.getElementsByClassName("tartalom")[0];
console.log(galeriaElem);
const tartalomElem = document.getElementsByClassName("kivalasztott")[0];

galeriaElem.innerHTML = htmlOsszeAllit(KEPEK);


const nagykepImg = document.querySelector(".tartalom img");
const nagykepElem = document.querySelector(".tartalom");

const kiskepElemek = document.querySelectorAll(".kep");
//Amikor az egyes html elemek fölé viszem az egeret, akkor változzon meg az elem háttérszíne. JS-sel oldd meg! Ehhez használd a css-ben elkészített .kiv szelektort. 

for (let index = 0; index < kiskepElemek.length; index++) {
    kiskepElemek[index].addEventListener("click", katt)
    
}

function katt(event){
    console.log(event.target.src)
    nagykepElem.classList.add("kiv")
}


const gombElem = document.querySelectorAll(".gomb");

for (let index = 0; index < gombElem.length; index++) {
    gombElem[index].addEventListener("click", function() {
        let txt = "<ul>";
        for (let i = 0; i < KEPEK.length; i++) {
            txt += `<li>${KEPEK[i].faj} ${KEPEK[i].kep} Származási hely: ${KEPEK[i].szhely} Szőrzet: ${KEPEK[i].szorzet}</li>`;
        }
        txt += "</ul>";
        tartalomElem.innerHTML = txt; 
    });
}

