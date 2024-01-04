function hitungluas(){
    alas=document.getElementById("input-alas").value;
    tinggi=document.getElementById("input-tinggi").value;
    luas = 1/2*alas*tinggi;
   document.getElementById('luas').value = luas;}

function hitungkeliling(){
    sisi1=+document.getElementById("input-sisi1").value;
    sisi2=+document.getElementById("input-sisi2").value;
    sisi3=+document.getElementById("input-sisi3").value;
    keliling = sisi1 + sisi2 + sisi3;
   document.getElementById('keliling').value = keliling;}

function resetForm1(){
    document.getElementById("luas").textContent=" ";
    document.getElementById("input-alas").textContent="input";
    document.getElementById("input-tinggi").textContent=" ";
}

function resetForm2(){
    document.getElementById("keliling").textContent=" ";
    document.getElementById("input-sisi3").textContent=" ";
    document.getElementById("input-sisi2").textContent=" ";
    document.getElementById("input-sisi1").textContent=" ";
}