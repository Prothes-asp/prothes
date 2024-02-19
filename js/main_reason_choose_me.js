let toggle_mrtcm = document.querySelector('.toggle_mrtcm');
let menu_mrtcm = document.querySelector('.menu_mrtcm');
toggle_mrtcm.onclick = function() {
    menu_mrtcm.classList.toggle('active')
}



// This Section is Animated Text Circle
const text_mrtcm = document.querySelector('.text_mrtcm h4');
text_mrtcm.innerHTML = text_mrtcm.innerText.split('').map(
    (char, i) =>
    `<span style="transform:rotate(${i * 10.1}deg)">${char}</span>`).join('');




// Right side JavaScript

function changeIconReason0(x0) {
    // This Line uses for play to pause
    x0.classList.toggle("fa-pause");
    // There Line Uses For Change Text Color Style
    var element0 = document.getElementById('mfw0');
    element0.classList.toggle('jsitemscolor_0');
  }

function changeIconReason1(x1) {
    // This Line uses for play to pause
    x1.classList.toggle("fa-pause");
    // There Line Uses For Change Text Color Style
    var element1 = document.getElementById('mfw1');
    element1.classList.toggle('jsitemscolor_1');
  }


function changeIconReason2(x2) {
    // This Line uses for play to pause
    x2.classList.toggle("fa-pause");
    // There Line Uses For Change Text Color Style
    var element2 = document.getElementById('mfw2');
    element2.classList.toggle('jsitemscolor_2');
  }

function changeIconReason3(x3) {
    // This Line uses for play to pause
    x3.classList.toggle("fa-pause");
    // There Line Uses For Change Text Color Style
    var element3 = document.getElementById('mfw3');
    element3.classList.toggle('jsitemscolor_3');
  }

function changeIconReason4(x4) {
    // This Line uses for play to pause
    x4.classList.toggle("fa-pause");
    // There Line Uses For Change Text Color Style
    var element4 = document.getElementById('mfw4');
    element4.classList.toggle('jsitemscolor_4');
  }

function changeIconReason5(x5) {
    // This Line uses for play to pause
    x5.classList.toggle("fa-pause");
    // There Line Uses For Change Text Color Style
    var element5 = document.getElementById('mfw5');
    element5.classList.toggle('jsitemscolor_5');
  }

