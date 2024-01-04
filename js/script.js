function hitungluas(){
    const alas   = document.getElementById("input-alas").value;
    const tinggi = document.getElementById("input-tinggi").value;
   document.getElementById('luas').value = 0.5*alas*tinggi;
}
function hitungkeliling(){
    const sisi1 = +document.getElementById("sisi1").value;
    const sisi2 = +document.getElementById("sisi2").value;
    const sisi3 = +document.getElementById("sisi3").value;
   document.getElementById('keliling').value = sisi1 + sisi2 + sisi3;
}