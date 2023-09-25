let $ = document
const weightInput = $.querySelector('#weight');
const heightInput = $.querySelector('#height');
const latInput = $.querySelector('#lat');
const plecInput = $.querySelector('#plec_select');
const weightVal = $.querySelector('#weight-val');
const heightVal = $.querySelector('#height-val');
const latVal = $.querySelector('#lat-val');
const bmiResult = $.querySelector('#result');
const categoryElem = $.querySelector('#category');

function bmiCalculator () {
    let weightInputValue = weightInput.value;
    let heightInputValue = heightInput.value;
    let latInputValue = latInput.value;
    let plecInputValue = plecInput.value;
    weightVal.innerHTML = weightInputValue + " kg";
    heightVal.innerHTML = heightInputValue + " cm";
    latVal.innerHTML = latInputValue + " lat";

    let bmiValue = (weightInputValue / (Math.pow(heightInputValue/100, 2))).toFixed(1);

    if (plecInputValue == "F") {
        if (latInputValue == 10) {
          if (bmiValue < 14.9) {
              categoryElem.innerHTML = 'Niedowaga';
              bmiResult.style.color = '#ffc44d';
          } else if (bmiValue >= 14.9 && bmiValue < 19.9) {
              categoryElem.innerHTML = 'Normalna waga';
              bmiResult.style.color = '#0be881';
          } else if (bmiValue >= 19.9 && bmiValue < 24.1) {
              categoryElem.innerHTML = 'Nadwaga';
              bmiResult.style.color = '#ff884d';
          } else if (bmiValue >= 24.2 && bmiValue < 29.2) {
              categoryElem.innerHTML = 'Otyłść';
              bmiResult.style.color = '#ff5e4d';
          }else {
              categoryElem.innerHTML = 'Ciężka otyłość';
              bmiResult.style.color = '#9b0000';
          }
        }
        else if (latInputValue == 11) {
          if (bmiValue < 15.7) {
              categoryElem.innerHTML = 'Niedowaga';
              bmiResult.style.color = '#ffc44d';
          } else if (bmiValue >= 15.7  && bmiValue < 20.7) {
              categoryElem.innerHTML = 'Normalna waga';
              bmiResult.style.color = '#0be881';
          } else if (bmiValue >= 20.7 && bmiValue < 25.4) {
              categoryElem.innerHTML = 'Nadwaga';
              bmiResult.style.color = '#ff884d';
          } else if (bmiValue >= 25.4 && bmiValue < 30.4) {
              categoryElem.innerHTML = 'Otyłść';
              bmiResult.style.color = '#ff5e4d';
          }else {
              categoryElem.innerHTML = 'Ciężka otyłość';
              bmiResult.style.color = '#9b0000';
          }
        }
        else if (latInputValue == 12) {
          if (bmiValue < 16.7) {
              categoryElem.innerHTML = 'Niedowaga';
              bmiResult.style.color = '#ffc44d';
          } else if (bmiValue >= 16.7  && bmiValue < 21.7) {
              categoryElem.innerHTML = 'Normalna waga';
              bmiResult.style.color = '#0be881';
          } else if (bmiValue >= 21.7 && bmiValue < 26.7) {
              categoryElem.innerHTML = 'Nadwaga';
              bmiResult.style.color = '#ff884d';
          } else if (bmiValue >= 26.7 && bmiValue < 31.7) {
              categoryElem.innerHTML = 'Otyłść';
              bmiResult.style.color = '#ff5e4d';
          }else {
              categoryElem.innerHTML = 'Ciężka otyłość';
              bmiResult.style.color = '#9b0000';
          }
        }
        else if (latInputValue == 13) {
          if (bmiValue < 17.6) {
              categoryElem.innerHTML = 'Niedowaga';
              bmiResult.style.color = '#ffc44d';
          } else if (bmiValue >= 17.6  && bmiValue < 22.6) {
              categoryElem.innerHTML = 'Normalna waga';
              bmiResult.style.color = '#0be881';
          } else if (bmiValue >= 22.6 && bmiValue < 27.8) {
              categoryElem.innerHTML = 'Nadwaga';
              bmiResult.style.color = '#ff884d';
          } else if (bmiValue >= 27.8 && bmiValue < 32.8) {
              categoryElem.innerHTML = 'Otyłść';
              bmiResult.style.color = '#ff5e4d';
          }else {
              categoryElem.innerHTML = 'Ciężka otyłość';
              bmiResult.style.color = '#9b0000';
          }
        }
        else if (latInputValue == 14) {
          if (bmiValue < 18.3) {
              categoryElem.innerHTML = 'Niedowaga';
              bmiResult.style.color = '#ffc44d';
          } else if (bmiValue >= 18.3  && bmiValue < 23.3) {
              categoryElem.innerHTML = 'Normalna waga';
              bmiResult.style.color = '#0be881';
          } else if (bmiValue >= 23.3 && bmiValue < 28.6) {
              categoryElem.innerHTML = 'Nadwaga';
              bmiResult.style.color = '#ff884d';
          } else if (bmiValue >= 28.6 && bmiValue < 33.6) {
              categoryElem.innerHTML = 'Otyłść';
              bmiResult.style.color = '#ff5e4d';
          }else {
              categoryElem.innerHTML = 'Ciężka otyłość';
              bmiResult.style.color = '#9b0000';
          }
        }
        else if (latInputValue == 15) {
          if (bmiValue < 18.9) {
              categoryElem.innerHTML = 'Niedowaga';
              bmiResult.style.color = '#ffc44d';
          } else if (bmiValue >= 18.9  && bmiValue < 23.9) {
              categoryElem.innerHTML = 'Normalna waga';
              bmiResult.style.color = '#0be881';
          } else if (bmiValue >= 23.9 && bmiValue < 29.1) {
              categoryElem.innerHTML = 'Nadwaga';
              bmiResult.style.color = '#ff884d';
          } else if (bmiValue >= 29.1 && bmiValue < 34.1) {
              categoryElem.innerHTML = 'Otyłść';
              bmiResult.style.color = '#ff5e4d';
          }else {
              categoryElem.innerHTML = 'Ciężka otyłość';
              bmiResult.style.color = '#9b0000';
          }
        }
        else if (latInputValue == 16) {
          if (bmiValue < 19.4) {
              categoryElem.innerHTML = 'Niedowaga';
              bmiResult.style.color = '#ffc44d';
          } else if (bmiValue >= 19.4  && bmiValue < 24.4) {
              categoryElem.innerHTML = 'Normalna waga';
              bmiResult.style.color = '#0be881';
          } else if (bmiValue >= 24.4 && bmiValue < 29.4) {
              categoryElem.innerHTML = 'Nadwaga';
              bmiResult.style.color = '#ff884d';
          } else if (bmiValue >= 29.4 && bmiValue < 34.4) {
              categoryElem.innerHTML = 'Otyłść';
              bmiResult.style.color = '#ff5e4d';
          }else {
              categoryElem.innerHTML = 'Ciężka otyłość';
              bmiResult.style.color = '#9b0000';
          }
        }
        else if (latInputValue == 17) {
          if (bmiValue < 19.7) {
              categoryElem.innerHTML = 'Niedowaga';
              bmiResult.style.color = '#ffc44d';
          } else if (bmiValue >= 19.7  && bmiValue < 24.7) {
              categoryElem.innerHTML = 'Normalna waga';
              bmiResult.style.color = '#0be881';
          } else if (bmiValue >= 24.7 && bmiValue < 29.7) {
              categoryElem.innerHTML = 'Nadwaga';
              bmiResult.style.color = '#ff884d';
          } else if (bmiValue >= 29.7 && bmiValue < 34.7) {
              categoryElem.innerHTML = 'Otyłść';
              bmiResult.style.color = '#ff5e4d';
          }else {
              categoryElem.innerHTML = 'Ciężka otyłość';
              bmiResult.style.color = '#9b0000';
          }
        }
        else if (latInputValue >= 18 && latInputValue <= 24) {
          if (bmiValue < 19) {
              categoryElem.innerHTML = 'Niedowaga';
              bmiResult.style.color = '#ffc44d';
          } else if (bmiValue >= 19 && bmiValue < 23.9) {
              categoryElem.innerHTML = 'Normalna waga';
              bmiResult.style.color = '#0be881';
          } else if (bmiValue >= 24 && bmiValue < 28.9) {
              categoryElem.innerHTML = 'Nadwaga';
              bmiResult.style.color = '#ff884d';
          } else if (bmiValue >= 29 && bmiValue < 39) {
              categoryElem.innerHTML = 'Otyłść';
              bmiResult.style.color = '#ff5e4d';
          }else {
              categoryElem.innerHTML = 'Ciężka otyłość';
              bmiResult.style.color = '#9b0000';
          }
        }else if (latInputValue >= 25 && latInputValue <= 34) {
          if (bmiValue < 20) {
              categoryElem.innerHTML = 'Niedowaga';
              bmiResult.style.color = '#ffc44d';
          } else if (bmiValue >= 20 && bmiValue < 24.9) {
              categoryElem.innerHTML = 'Normalna waga';
              bmiResult.style.color = '#0be881';
          } else if (bmiValue >= 25 && bmiValue < 29.9) {
              categoryElem.innerHTML = 'Nadwaga';
              bmiResult.style.color = '#ff884d';
          } else if (bmiValue >= 30 && bmiValue < 40) {
              categoryElem.innerHTML = 'Otyłść';
              bmiResult.style.color = '#ff5e4d';
          }else {
              categoryElem.innerHTML = 'Ciężka otyłość';
              bmiResult.style.color = '#9b0000';
          }
        }else if (latInputValue >= 35 && latInputValue <= 44) {
          if (bmiValue < 21) {
              categoryElem.innerHTML = 'Niedowaga';
              bmiResult.style.color = '#ffc44d';
          } else if (bmiValue >= 21 && bmiValue < 25.9) {
              categoryElem.innerHTML = 'Normalna waga';
              bmiResult.style.color = '#0be881';
          } else if (bmiValue >= 26 && bmiValue < 30.9) {
              categoryElem.innerHTML = 'Nadwaga';
              bmiResult.style.color = '#ff884d';
          } else if (bmiValue >= 31 && bmiValue < 41) {
              categoryElem.innerHTML = 'Otyłść';
              bmiResult.style.color = '#ff5e4d';
          }else {
              categoryElem.innerHTML = 'Ciężka otyłość';
              bmiResult.style.color = '#9b0000';
          }
        }else if (latInputValue >= 45 && latInputValue <= 54) {
          if (bmiValue < 22) {
              categoryElem.innerHTML = 'Niedowaga';
              bmiResult.style.color = '#ffc44d';
          } else if (bmiValue >= 22 && bmiValue < 26.9) {
              categoryElem.innerHTML = 'Normalna waga';
              bmiResult.style.color = '#0be881';
          } else if (bmiValue >= 27 && bmiValue < 31.9) {
              categoryElem.innerHTML = 'Nadwaga';
              bmiResult.style.color = '#ff884d';
          } else if (bmiValue >= 32 && bmiValue < 42) {
              categoryElem.innerHTML = 'Otyłść';
              bmiResult.style.color = '#ff5e4d';
          }else {
              categoryElem.innerHTML = 'Ciężka otyłość';
              bmiResult.style.color = '#9b0000';
          }
        }else if (latInputValue >= 55 && latInputValue <= 64) {
          if (bmiValue < 23) {
              categoryElem.innerHTML = 'Niedowaga';
              bmiResult.style.color = '#ffc44d';
          } else if (bmiValue >= 23 && bmiValue < 27.9) {
              categoryElem.innerHTML = 'Normalna waga';
              bmiResult.style.color = '#0be881';
          } else if (bmiValue >= 28 && bmiValue < 32.9) {
              categoryElem.innerHTML = 'Nadwaga';
              bmiResult.style.color = '#ff884d';
          } else if (bmiValue >= 33 && bmiValue < 43) {
              categoryElem.innerHTML = 'Otyłść';
              bmiResult.style.color = '#ff5e4d';
          }else {
              categoryElem.innerHTML = 'Ciężka otyłość';
              bmiResult.style.color = '#9b0000';
          }
        }else {
          if (bmiValue < 24) {
              categoryElem.innerHTML = 'Niedowaga';
              bmiResult.style.color = '#ffc44d';
          } else if (bmiValue >= 24 && bmiValue < 28.9) {
              categoryElem.innerHTML = 'Normalna waga';
              bmiResult.style.color = '#0be881';
          } else if (bmiValue >= 29 && bmiValue < 33.9) {
              categoryElem.innerHTML = 'Nadwaga';
              bmiResult.style.color = '#ff884d';
          } else if (bmiValue >= 34 && bmiValue < 44) {
              categoryElem.innerHTML = 'Otyłść';
              bmiResult.style.color = '#ff5e4d';
          }else {
              categoryElem.innerHTML = 'Ciężka otyłość';
              bmiResult.style.color = '#9b0000';
          }
        }
    }else if (plecInputValue == "M") {
      if (latInputValue == 10) {
        if (bmiValue < 14.8) {
            categoryElem.innerHTML = 'Niedowaga';
            bmiResult.style.color = '#ffc44d';
        } else if (bmiValue >= 14.8 && bmiValue < 19.8) {
            categoryElem.innerHTML = 'Normalna waga';
            bmiResult.style.color = '#0be881';
        } else if (bmiValue >= 19.8 && bmiValue < 24.0) {
            categoryElem.innerHTML = 'Nadwaga';
            bmiResult.style.color = '#ff884d';
        } else if (bmiValue >= 24.0 && bmiValue < 29.0) {
            categoryElem.innerHTML = 'Otyłść';
            bmiResult.style.color = '#ff5e4d';
        }else {
            categoryElem.innerHTML = 'Ciężka otyłość';
            bmiResult.style.color = '#9b0000';
        }
      }
      else if (latInputValue == 11) {
        if (bmiValue < 15.6) {
            categoryElem.innerHTML = 'Niedowaga';
            bmiResult.style.color = '#ffc44d';
        } else if (bmiValue >= 15.6  && bmiValue < 20.6) {
            categoryElem.innerHTML = 'Normalna waga';
            bmiResult.style.color = '#0be881';
        } else if (bmiValue >= 20.6 && bmiValue < 25.1) {
            categoryElem.innerHTML = 'Nadwaga';
            bmiResult.style.color = '#ff884d';
        } else if (bmiValue >= 25.1 && bmiValue < 30.1) {
            categoryElem.innerHTML = 'Otyłść';
            bmiResult.style.color = '#ff5e4d';
        }else {
            categoryElem.innerHTML = 'Ciężka otyłość';
            bmiResult.style.color = '#9b0000';
        }
      }
      else if (latInputValue == 12) {
        if (bmiValue < 16.2) {
            categoryElem.innerHTML = 'Niedowaga';
            bmiResult.style.color = '#ffc44d';
        } else if (bmiValue >= 16.2  && bmiValue < 21.2) {
            categoryElem.innerHTML = 'Normalna waga';
            bmiResult.style.color = '#0be881';
        } else if (bmiValue >= 21.2 && bmiValue < 26.0) {
            categoryElem.innerHTML = 'Nadwaga';
            bmiResult.style.color = '#ff884d';
        } else if (bmiValue >= 26.0 && bmiValue < 31.0) {
            categoryElem.innerHTML = 'Otyłść';
            bmiResult.style.color = '#ff5e4d';
        }else {
            categoryElem.innerHTML = 'Ciężka otyłość';
            bmiResult.style.color = '#9b0000';
        }
      }
      else if (latInputValue == 13) {
        if (bmiValue < 16.9) {
            categoryElem.innerHTML = 'Niedowaga';
            bmiResult.style.color = '#ffc44d';
        } else if (bmiValue >= 16.9  && bmiValue < 21.9) {
            categoryElem.innerHTML = 'Normalna waga';
            bmiResult.style.color = '#0be881';
        } else if (bmiValue >= 21.9 && bmiValue < 26.8) {
            categoryElem.innerHTML = 'Nadwaga';
            bmiResult.style.color = '#ff884d';
        } else if (bmiValue >= 26.8 && bmiValue < 31.8) {
            categoryElem.innerHTML = 'Otyłść';
            bmiResult.style.color = '#ff5e4d';
        }else {
            categoryElem.innerHTML = 'Ciężka otyłość';
            bmiResult.style.color = '#9b0000';
        }
      }
      else if (latInputValue == 14) {
        if (bmiValue < 17.6) {
            categoryElem.innerHTML = 'Niedowaga';
            bmiResult.style.color = '#ffc44d';
        } else if (bmiValue >= 17.6  && bmiValue < 22.6) {
            categoryElem.innerHTML = 'Normalna waga';
            bmiResult.style.color = '#0be881';
        } else if (bmiValue >= 22.6 && bmiValue < 27.6) {
            categoryElem.innerHTML = 'Nadwaga';
            bmiResult.style.color = '#ff884d';
        } else if (bmiValue >= 27.6 && bmiValue < 32.6) {
            categoryElem.innerHTML = 'Otyłść';
            bmiResult.style.color = '#ff5e4d';
        }else {
            categoryElem.innerHTML = 'Ciężka otyłość';
            bmiResult.style.color = '#9b0000';
        }
      }
      else if (latInputValue == 15) {
        if (bmiValue < 18.3) {
            categoryElem.innerHTML = 'Niedowaga';
            bmiResult.style.color = '#ffc44d';
        } else if (bmiValue >= 18.3  && bmiValue < 23.3) {
            categoryElem.innerHTML = 'Normalna waga';
            bmiResult.style.color = '#0be881';
        } else if (bmiValue >= 23.3 && bmiValue < 28.3) {
            categoryElem.innerHTML = 'Nadwaga';
            bmiResult.style.color = '#ff884d';
        } else if (bmiValue >= 28.3 && bmiValue < 33.3) {
            categoryElem.innerHTML = 'Otyłść';
            bmiResult.style.color = '#ff5e4d';
        }else {
            categoryElem.innerHTML = 'Ciężka otyłość';
            bmiResult.style.color = '#9b0000';
        }
      }
      else if (latInputValue == 16) {
        if (bmiValue < 18.9) {
            categoryElem.innerHTML = 'Niedowaga';
            bmiResult.style.color = '#ffc44d';
        } else if (bmiValue >= 18.9  && bmiValue < 23.9) {
            categoryElem.innerHTML = 'Normalna waga';
            bmiResult.style.color = '#0be881';
        } else if (bmiValue >= 23.9 && bmiValue < 28.9) {
            categoryElem.innerHTML = 'Nadwaga';
            bmiResult.style.color = '#ff884d';
        } else if (bmiValue >= 28.9 && bmiValue < 33.9) {
            categoryElem.innerHTML = 'Otyłść';
            bmiResult.style.color = '#ff5e4d';
        }else {
            categoryElem.innerHTML = 'Ciężka otyłość';
            bmiResult.style.color = '#9b0000';
        }
      }
      else if (latInputValue == 17) {
        if (bmiValue < 19.5) {
            categoryElem.innerHTML = 'Niedowaga';
            bmiResult.style.color = '#ffc44d';
        } else if (bmiValue >= 19.5  && bmiValue < 24.5) {
            categoryElem.innerHTML = 'Normalna waga';
            bmiResult.style.color = '#0be881';
        } else if (bmiValue >= 24.5 && bmiValue < 29.4) {
            categoryElem.innerHTML = 'Nadwaga';
            bmiResult.style.color = '#ff884d';
        } else if (bmiValue >= 29.4 && bmiValue < 34.3) {
            categoryElem.innerHTML = 'Otyłść';
            bmiResult.style.color = '#ff5e4d';
        }else {
            categoryElem.innerHTML = 'Ciężka otyłość';
            bmiResult.style.color = '#9b0000';
        }
      }
      else if (latInputValue >= 18 && latInputValue <= 24) {
        if (bmiValue < 20) {
            categoryElem.innerHTML = 'Niedowaga';
            bmiResult.style.color = '#ffc44d';
        } else if (bmiValue >= 20 && bmiValue < 24.9) {
            categoryElem.innerHTML = 'Normalna waga';
            bmiResult.style.color = '#0be881';
        } else if (bmiValue >= 25 && bmiValue < 29.9) {
            categoryElem.innerHTML = 'Nadwaga';
            bmiResult.style.color = '#ff884d';
        } else if (bmiValue >= 30 && bmiValue < 40) {
            categoryElem.innerHTML = 'Otyłść';
            bmiResult.style.color = '#ff5e4d';
        }else {
            categoryElem.innerHTML = 'Ciężka otyłość';
            bmiResult.style.color = '#9b0000';
        }
      }else if (latInputValue >= 25 && latInputValue <= 34) {
        if (bmiValue < 21) {
            categoryElem.innerHTML = 'Niedowaga';
            bmiResult.style.color = '#ffc44d';
        } else if (bmiValue >= 21 && bmiValue < 25.9) {
            categoryElem.innerHTML = 'Normalna waga';
            bmiResult.style.color = '#0be881';
        } else if (bmiValue >= 26 && bmiValue < 30.9) {
            categoryElem.innerHTML = 'Nadwaga';
            bmiResult.style.color = '#ff884d';
        } else if (bmiValue >= 31 && bmiValue < 41) {
            categoryElem.innerHTML = 'Otyłść';
            bmiResult.style.color = '#ff5e4d';
        }else {
            categoryElem.innerHTML = 'Ciężka otyłość';
            bmiResult.style.color = '#9b0000';
        }
      }else if (latInputValue >= 35 && latInputValue <= 44) {
        if (bmiValue < 22) {
            categoryElem.innerHTML = 'Niedowaga';
            bmiResult.style.color = '#ffc44d';
        } else if (bmiValue >= 22 && bmiValue < 26.9) {
            categoryElem.innerHTML = 'Normalna waga';
            bmiResult.style.color = '#0be881';
        } else if (bmiValue >= 27 && bmiValue < 31.9) {
            categoryElem.innerHTML = 'Nadwaga';
            bmiResult.style.color = '#ff884d';
        } else if (bmiValue >= 32 && bmiValue < 42) {
            categoryElem.innerHTML = 'Otyłść';
            bmiResult.style.color = '#ff5e4d';
        }else {
            categoryElem.innerHTML = 'Ciężka otyłość';
            bmiResult.style.color = '#9b0000';
        }
      }else if (latInputValue >= 45 && latInputValue <= 54) {
        if (bmiValue < 23) {
            categoryElem.innerHTML = 'Niedowaga';
            bmiResult.style.color = '#ffc44d';
        } else if (bmiValue >= 23 && bmiValue < 27.9) {
            categoryElem.innerHTML = 'Normalna waga';
            bmiResult.style.color = '#0be881';
        } else if (bmiValue >= 28 && bmiValue < 32.9) {
            categoryElem.innerHTML = 'Nadwaga';
            bmiResult.style.color = '#ff884d';
        } else if (bmiValue >= 33 && bmiValue < 43) {
            categoryElem.innerHTML = 'Otyłść';
            bmiResult.style.color = '#ff5e4d';
        }else {
            categoryElem.innerHTML = 'Ciężka otyłość';
            bmiResult.style.color = '#9b0000';
        }
      }else if (latInputValue >= 55 && latInputValue <= 64) {
        if (bmiValue < 24) {
            categoryElem.innerHTML = 'Niedowaga';
            bmiResult.style.color = '#ffc44d';
        } else if (bmiValue >= 24 && bmiValue < 28.9) {
            categoryElem.innerHTML = 'Normalna waga';
            bmiResult.style.color = '#0be881';
        } else if (bmiValue >= 29 && bmiValue < 33.9) {
            categoryElem.innerHTML = 'Nadwaga';
            bmiResult.style.color = '#ff884d';
        } else if (bmiValue >= 34 && bmiValue < 44) {
            categoryElem.innerHTML = 'Otyłść';
            bmiResult.style.color = '#ff5e4d';
        }else {
            categoryElem.innerHTML = 'Ciężka otyłość';
            bmiResult.style.color = '#9b0000';
        }
      }else {
        if (bmiValue < 25) {
            categoryElem.innerHTML = 'Niedowaga';
            bmiResult.style.color = '#ffc44d';
        } else if (bmiValue >= 25 && bmiValue < 29.9) {
            categoryElem.innerHTML = 'Normalna waga';
            bmiResult.style.color = '#0be881';
        } else if (bmiValue >= 30 && bmiValue < 34.9) {
            categoryElem.innerHTML = 'Nadwaga';
            bmiResult.style.color = '#ff884d';
        } else if (bmiValue >= 35 && bmiValue < 45) {
            categoryElem.innerHTML = 'Otyłść';
            bmiResult.style.color = '#ff5e4d';
        }else {
            categoryElem.innerHTML = 'Ciężka otyłość';
            bmiResult.style.color = '#9b0000';
        }
      }
    }
    bmiResult.innerHTML = bmiValue;

}
weightInput.addEventListener('input', bmiCalculator)
heightInput.addEventListener('input', bmiCalculator)
latInput.addEventListener('input', bmiCalculator)
plecInput.addEventListener('input', bmiCalculator)


const taliaInput = $.querySelector('#talia');
const biodraInput = $.querySelector('#biodra');
const WhrResult = $.querySelector('#result1');
const categoryElem1 = $.querySelector('#category1');

function whr () {
        let taliaInputValue = taliaInput.value;
        let biodraInputValue = biodraInput.value;
        let plecInputValue = plecInput.value;
        var whr = taliaInputValue / biodraInputValue;

        if (plecInputValue == "F") {
            if (whr > 0.85) {
                WhrResult.innerHTML = "Wynik wskaźnika WHR = " + whr.toFixed(3);
                categoryElem1.innerHTML = "Rodzaj Figury: Rodzaj Androidalny, Typu Jabłko";
            } else if (whr < 0.85) {
                WhrResult.innerHTML = "Wynik wskaźnika WHR = " + whr.toFixed(3);
                categoryElem1.innerHTML = "Rodzaj Figury: Rodzaj Gynoidalny, Typu Gruszka";
            } else {
                console.log("wystąpił bład przy wpisywaniu wartości");
            }
        } else if (plecInputValue == "M") {
            if (whr > 0.9) {
                WhrResult.innerHTML = "Wynik wskaźnika WHR = " + whr.toFixed(3);
                categoryElem1.innerHTML = "Rodzaj Figury: Rodzaj Androidalny, Typu Jabłko";
            }else if (whr < 0.9) {
                WhrResult.innerHTML = "Wynik wskaźnika WHR = " + whr.toFixed(3);
                categoryElem1.innerHTML = "Rodzaj Figury: Rodzaj Gynoidalny, Typu Gruszka";
            } else {
                console.log("wystąpił bład przy wpisywaniu wartości");
            }
        } else {
            console.log("wystąpił bład przy zaznaczeniu płci");
        }
         
}
taliaInput.addEventListener('input', whr)
biodraInput.addEventListener('input', whr)