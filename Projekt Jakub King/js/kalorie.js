let $ = document;
const weightInput = $.querySelector('#weight');
const heightInput = $.querySelector('#height');
const latInput = $.querySelector('#lat');
const plecInput = $.querySelector('#plec_select');
const activInput1 = $.querySelector('#activ_select1');
const activInput2 = $.querySelector('#activ_select2');
const planInput = $.querySelector('#plan_select');
const weightVal = $.querySelector('#weight-val');
const heightVal = $.querySelector('#height-val');
const latVal = $.querySelector('#lat-val');
const kalorieResult = $.querySelector('#result');

function Actualizer () {
    let weightInputValue = weightInput.value;
    let heightInputValue = heightInput.value;
    let latInputValue = latInput.value;
    weightVal.innerHTML = weightInputValue + " kg";
    heightVal.innerHTML = heightInputValue + " cm";
    latVal.innerHTML = latInputValue + " lat";
}

function policz() {
    let weightInputValue = weightInput.value;
    let heightInputValue = heightInput.value;
    let latInputValue = latInput.value;
    let plecInputValue = plecInput.value;
    let activInputValue1 = activInput1.value;
    let activInputValue2 = activInput2.value;
    let planInputValue = planInput.value;

    var ppm = 0; // podstawowa przemiana materi
    var cpm = 0; // całkowita przemiana materii
    var a = parseFloat(weightInputValue) + 0.001;// zmienna od wagi
    var b = parseFloat(heightInputValue) + 0.001;// zmienna od wzrostu
    var c = parseFloat(latInputValue) + 0.001;// zmienna od wieku
    var r = 0;//zmienna przyjmuje ilość kalorii przeznaczonych do redukcji 
    var m = 0;//zmienna przyjmuje ilość kalorii przeznaczonych do zwiekszania masy 

    if (plecInputValue == "M") {
      var p = 88.362;
      ppm = p + (13.397 * a) + (4.799 * b) - (5.677 * c);
    } else if (plecInputValue == "K") {
      var p = 447.593;
      ppm = p + (9.247 * a) + (3.098 * b) - (4.330 * c);
    }else {
      console.log("bład płeć");
    }

    var pal = [ [1.3,1.4,1.5,1.6,1.7], [1.4,1.5,1.6,1.7,1.8], [1.5,1.6,1.7,1.8,1.9],
     [1.6,1.7,1.8,1.9,2.0], [1.7,1.8,1.9,2.0,2.1] ];

    cpm = ppm * pal[activInputValue1][activInputValue2];

    if (planInputValue == "S4" ) {
       r = 1120;
    }else if (planInputValue == "S3") {
       r = 840;
    }else if (planInputValue == "S2") {
       r = 560;
    }else if (planInputValue == "S1") {
       r = 280;
    }else if (planInputValue == "Z") {
       r = 0;
       m = 0;
    }else if (planInputValue == "P1") {
       m = 280;
    }else if (planInputValue == "P2") {
       m = 560;
    }else if (planInputValue == "P3") {
       m = 840;
    }else if (planInputValue == "P4") {
       m = 1120;
    }else {
      console.log("bład przy redukcji i przyroście masy");
    }

    cpm = ((cpm - r) + m);
    if (cpm <= ppm) {
      cpm = ppm;
    }else {
      cpm = cpm
    }
      kalorieResult.innerHTML = Math.ceil(cpm) + " Kalorii";
}

weightInput.addEventListener('input', Actualizer)
heightInput.addEventListener('input', Actualizer)
latInput.addEventListener('input', Actualizer)
