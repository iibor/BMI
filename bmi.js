function bmi() {
  var height = document.getElementById('pituus').value;
  var weight = document.getElementById('paino').value;
  var BMI = (weight/Math.pow(height, 2)) * 10000;
  var tulos = BMI.toPrecision(3);




  if (tulos < 15) {
    document.getElementById('bmi').innerHTML = "<h3 id='sairas'>" + "Painoindeksisi on " + tulos + " , olet sairaalloisen alipainoinen" + "</h3>";
  } else if (tulos >= 15 && tulos < 17.5) {
  document.getElementById('bmi').innerHTML = "<h3 id='sairas'>" + "Painoindeksisi on " + tulos +
    ", eli olet merkittävästi alipainoinen" + "</h3>";
  } else if (tulos >= 17.5 && tulos < 19) {
  document.getElementById('bmi').innerHTML = "<h3 id='lieva'>" + "Painoindeksisi on " + tulos +
    ", sinulla on normaalia alhaisempi paino" + "</h3>";
  } else if (tulos >= 19 && tulos < 26) {
    document.getElementById('bmi').innerHTML = "<h3 id='normaali'>" + "Painoindeksisi on " + tulos + " eli olet normaalipainoinen" + "</h3>";
  } else if (tulos >= 26 && tulos < 31) {
    document.getElementById('bmi').innerHTML = "<h3 id='lieva'>" + "Painoindeksisi on " + tulos + " eli olet lievästi ylipainoinen" + "</h3>";
  } else if (tulos >= 31 && tulos < 36) {
    document.getElementById('bmi').innerHTML = "<h3 id='lieva'>" + "Painoindeksisi on " + tulos + " eli olet merkittävästi ylipainoinen" + "</h3>";
  } else if (tulos >= 36 && tulos < 41) {
    document.getElementById('bmi').innerHTML = "<h3 id='sairas'>" + "Painoindeksisi on " + tulos + " eli olet vaikeasti ylipainoinen"+ "</h3>";
  } else {
    document.getElementById('bmi').innerHTML = "<h3 id='sairas'>" + "Painoindeksisi on " + tulos + " eli olet sairaalloisen ylipainoinen" + "</h3>";
  }



}
