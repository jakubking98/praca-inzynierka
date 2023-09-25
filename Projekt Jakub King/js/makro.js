function Makro() {

  let dieta1 = document.getElementById('dieta1');
  let dieta2 = document.getElementById('dieta2');
  let dieta3 = document.getElementById('dieta3');
  let dieta4 = document.getElementById('dieta4');
  const kalorie = document.getElementById('kalorie');
  const posilek = document.getElementById('posilki');
  let dzienW = document.getElementById('dzienW');
  let posilekW = document.getElementById('posilekW');
  let dzienB = document.getElementById('dzienB');
  let posilekB = document.getElementById('posilekB');
  let dzienT = document.getElementById('dzienT');
  let posilekT = document.getElementById('posilekT');


  let value_kalorie = kalorie.value;//wartość Kalorii
  let value_posilek = posilek.value;//ilość posiłków
  var w = 0; //wartość węglowodanów
  var b = 0; // wartość białka
  var t = 0;  //watość tłuszczy
  var dayW = 0; //wartość węglowodanów na dzień
  var dayB = 0; //wartość białka na dzień
  var dayT = 0; //wartość tłuszczy na dzień
  var posW = 0; //wartość węglowodanów na posiłek
  var posB = 0; //wartość białka na posiłek
  var posT = 0; //wartość tłuszczy na posiłek

   if(dieta1.checked){
      w = 55;
      b = 25;
      t = 20;
   }else if (dieta2.checked) {
     w = 25;
     b = 45;
     t = 30;
   }else if (dieta3.checked) {
     w = 20;
     b = 20;
     t = 60;
   }else if (dieta4.checked) {
     w = 40;
     b = 30;
     t = 30;
   }else {
     console.log("żadna dieta nie została wybrana");
   }
     dayW = value_kalorie * (w / 100 ) /4;
     posW = dayW / value_posilek;
     dayB = value_kalorie * (b / 100 ) /4;
     posB = dayB / value_posilek;
     dayT = value_kalorie * (t / 100 ) /9;
     posT = dayT / value_posilek;

     dzienW.innerHTML = Math. ceil(dayW);
     posilekW.innerHTML = Math. ceil(posW);
     dzienB.innerHTML = Math. ceil(dayB);
     posilekB.innerHTML = Math. ceil(posB);
     dzienT.innerHTML = Math. ceil(dayT);
     posilekT.innerHTML = Math. ceil(posT);

     $("#slider").roundSlider({
       width: 10,
       handleSize: "+16",
       radius: 80,
       circleShape: "dot",
       sliderType: "min-range",
       value: w,
       })
     $("#slider1").roundSlider({
       width: 10,
       handleSize: "+16",
       radius: 80,
       circleShape: "dot",
       sliderType: "min-range",
       value: b,
       })
     $("#slider2").roundSlider({
       width: 10,
       handleSize: "+16",
       radius: 80,
       circleShape: "dot",
       sliderType: "min-range",
       value: t,
       })
}
