function munculhargabarang(){
  var tujuan = (document.form.input_barang.value);
  if (tujuan == "baju"){hargabarang = 75000;}
  else if(tujuan == "jacket"){hargabarang = 350000;}
  else if(tujuan == "kemeja"){hargabarang = 150000;}
  else if(tujuan == "sweater"){hargabarang = 120000;}
  else if(tujuan == "celana"){hargabarang = 100000;}
  else if(tujuan == "sepatu"){hargabarang = 250000;}
  else if(tujuan == "sandal"){hargabarang = 15000;}
  document.form.output_hargabarang.value=eval(hargabarang);
}
function apakahmember(){
  if(document.form.memberbukan.checked == true){diskon = 0.10;}
  else{
    diskon = 0;
  }
  document.form.output_diskon.value=eval(diskon)*(eval(document.form.output_hargabarang.value));
}
