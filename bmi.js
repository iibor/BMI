function bmi() {
  var height = document.getElementById('pituus').value;
  var weight = document.getElementById('paino').value;
  var BMI = (weight/Math.pow(height, 2)) * 10000;
  var tulos = BMI.toPrecision(3);

  if (tulos < 15) {
    window.alert("Painoindeksisi on " + tulos +
    " eli olet sairaalloisen alipainoinen");
  } else if (tulos >= 15 && tulos <= 17) {
    window.alert("Painoindeksisi on " + tulos + " eli olet " +
    "merkittävästi alipainoinen");
  } else if (tulos >= 17 && tulos <= 18.5) {
    window.alert("Painoindeksisi on " + tulos + " eli sinulla on normaalia" +
    "alhaisempi paino");
  } else if (tulos >= 18.5 && tulos <= 25) {
    window.alert("Painoindeksisi on " + tulos + " eli olet normaali painoinen");
  } else if (tulos >= 25 && tulos <= 30) {
    window.alert("Painoindeksisi on " + tulos + " eli olet lievästi ylipainoinen");
  } else if (tulos >= 30 && tulos <= 35) {
    window.alert("Painoindeksisi on " + tulos + " eli olet merkittävästi ylipainoinen");
  } else if (tulos >= 35 && tulos <= 40) {
    window.alert("Painoindeksisi on " + tulos + " eli olet vaikeasti ylipainoinen");
  } else {
    window.alert("Painoindeksisi on " + tulos + " eli olet sairaalloisen ylipainoinen");
  }



}
