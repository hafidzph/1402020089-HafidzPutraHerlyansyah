function switch_tab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}


$(document).ready(function(){
  $(".no-telp").on("input", function(e){
    if($(".no-telp").val().length > 3){
      $(".nominal").removeAttr("disabled");
      $(".nominal").css("background-color", "white");
      $(".btn").removeAttr("disabled");
      $(".btn").css("background-color", "#ff991c");
    }else{
      $(".nominal").prop("disabled", true);
      $(".btn").prop("disabled", true);
      $(".nominal").css("background-color", "#e0dcdc");
      $(".btn").css("background-color", "#e0dcdc");

    }
  });
});

$(document).ready(function(){
  $(".btn").click(function(e) {
    var nominalPulsa = $('#nominal').find(":selected").text();
    var nominal = parseInt(nominalPulsa) * 1000;
    var nomorPulsa = $(".no-telp").val();
    var verif = confirm("Pembelian pulsa sebesar " + nominalPulsa + " ke nomor " + nomorPulsa);
    if(nominal >= 10000){
      nominal += 2000;
    }else{
      nominal += 3000;
    }
    if(verif){
      alert("Total harga pulsa Rp. " + nominal +",- ke nomor " + nomorPulsa + " sedang diproses. Terima Kasih:)");
    } 
  });
});

$(document).ready(function(){
  $(".no-telp-pkt").on("input", function(e){
    if($(".no-telp-pkt").val().length > 3){
      $(".nominal-pkt").removeAttr("disabled");
      $(".nominal-pkt").css("background-color", "white");
      $(".btn2").removeAttr("disabled");
      $(".btn2").css("background-color", "#ff991c");
    }else{
      $(".nominal-pkt").prop("disabled", true);
      $(".btn2").prop("disabled", true);
      $(".nominal-pkt").css("background-color", "#e0dcdc");
      $(".btn2").css("background-color", "#e0dcdc");
    }
  });
});

$(document).ready(function(){
  $(".btn2").click(function(e) {
    var nominalPaket = $('#nominal-pkt').find(":selected").text();
    var sub = $('#nominal-pkt').find(":selected").text().substring(nominalPaket.length - 6);

    console.log(nominal)
    var nomorPaket = $(".no-telp-pkt").val();
    var verif = confirm("Pembelian paket data " + nominalPaket.substring(0, nominalPaket.length - 7) + " ke nomor " + nomorPaket);
    if(verif){
      alert("Total harga paket data Rp. " + sub +",- ke nomor " + nomorPaket + " sedang diproses. Terima Kasih:)");
    } 
  });
});