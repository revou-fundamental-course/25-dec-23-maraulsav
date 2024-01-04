function hitungluas(){
    alas=document.getElementById("alas").value;
    tinggi=document.getElementById("tinggi").value;
    luas = 1/2*alas*tinggi;
   document.getElementById('luas').value = luas;}


function hitungkeliling(){
    sisi1=document.getElementById("sisi1").value;
    sisi2=document.getElementById("sisi2").value;
    sisi3=document.getElementById("sisi3").value;
    kelliling = sisi1 + sisi2 + sisi3;
   document.getElementById('keliling').value = keliling;}
