function hitungKeliling() {
    var sisiKeliling = parseFloat(document.getElementById("sisi-keliling").value);
    var keliling = 4 * sisiKeliling;
    document.getElementById("output_keliling").innerHTML = "Keliling: " + keliling;
}

function hitungLuas() {
    var sisiLuas = parseFloat(document.getElementById("sisi-luas").value);
    var luas = sisiLuas * sisiLuas;
    document.getElementById("output_luas").innerHTML = "Luas: " + luas;
}

function hitungLuasPersegiPanjang() {
    var panjang = document.getElementById("pp-panjang").value;
    var lebar = document.getElementById("pp-lebar").value;
    var luas = panjang * lebar;
    document.getElementById("pp-luas").innerHTML = "Luas: " + luas;
  }
  
  function hitungKelilingPersegiPanjang() {
    var panjang = document.getElementById("pp-panjang").value;
    var lebar = document.getElementById("pp-lebar").value;
    var keliling = 2 * (parseInt(panjang) + parseInt(lebar));
    document.getElementById("pp-keliling").innerHTML = "Keliling: " + keliling;
  }


  function resetForm() {
    document.getElementById("sisi-keliling").value = "";
    document.getElementById("sisi-luas").value = "";
    document.getElementById("output_luas").innerHTML = "";
    document.getElementById("output_keliling").innerHTML = "";
    document.getElementById("pp-panjang").value = "";
    document.getElementById("pp-lebar").value = "";
    document.getElementById("pp-luas").innerHTML = "";
    document.getElementById("pp-keliling").innerHTML = "";
  }