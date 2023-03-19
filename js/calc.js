function tambah() {
    var angka1 = parseFloat(document.calculator.angka1.value);
    var angka2 = parseFloat(document.calculator.angka2.value);
  
    if (isNaN(angka1) || isNaN(angka2)) {
      alert("Maaf yang Anda Input bukan Angka");
    } else {
      var hasil = angka1 + angka2;
      document.calculator.hasil.value = hasil;
    }
  } 
  function kurang() {
    var angka1 = parseFloat(document.calculator.angka1.value);
    var angka2 = parseFloat(document.calculator.angka2.value);
  
    if (isNaN(angka1) || isNaN(angka2)) {
      alert("Maaf yang Anda Input bukan Angka");
    } else {
      var hasil = angka1 - angka2;
      document.calculator.hasil.value = hasil;
    }
  }
  function kali() {
    var angka1 = parseFloat(document.calculator.angka1.value);
    var angka2 = parseFloat(document.calculator.angka2.value);
  
    if (isNaN(angka1) || isNaN(angka2)) {
      alert("Maaf yang Anda Input bukan Angka");
    } else {
      var hasil = angka1 * angka2;
      document.calculator.hasil.value = hasil;
    }
  } function bagi() {
    var angka1 = parseFloat(document.calculator.angka1.value);
    var angka2 = parseFloat(document.calculator.angka2.value);
  
    if (isNaN(angka1) || isNaN(angka2)) {
      alert("Maaf yang Anda Input bukan Angka");
    } else {
      var hasil =  angka1 / angka2;
      document.calculator.hasil.value = hasil;
    }
  }
 function pangkat() {
    var angka1 = parseFloat(document.calculator.angka1.value);
    var angka2 = parseFloat(document.calculator.angka2.value)
  
    if (isNaN(angka1) || isNaN(angka2)) {
      alert("Maaf yang Anda Input bukan Angka");
    } else {
      var hasil =  Math.pow(angka1,angka2) ;
      document.calculator.hasil.value = hasil;
    }
 }
// function tambah(){
//     var angka1=parseFloat(document.calculator.angka1.value);
//     var angka2=parseFloat(document.calculator.angka2.value);
//     if (isNaN(angka1) || isNaN(angka2)) {
//         alert("Maaf yang Anda Input bukan Angka");
//       } else {
//         var hasil = angka1 + angka2;
//         document.calculator.hasil.value = hasil;
//       }
//     }
//     var hasil= angka1+angka2;
//     document.calculator.hasil.value=hasil;
//    }
//    function kurang(){
//     var angka1=parseFloat(document.calculator.angka1.value);
//     var angka2=parseFloat(document.calculator.angka2.value);
//     var hasil= angka1-angka2;
//     document.calculator.hasil.value=hasil;
//    }
//    function kali(){
//     var angka1=parseFloat(document.calculator.angka1.value);
//     var angka2=parseFloat(document.calculator.angka2.value);
//     var hasil= angka1*angka2;
//     document.calculator.hasil.value=hasil;
//    }
//    function bagi(){
//     var angka1=parseFloat(document.calculator.angka1.value);
//     var angka2=parseFloat(document.calculator.angka2.value);
//     var hasil= angka1/angka2;
//     document.calculator.hasil.value=hasil;
//    }