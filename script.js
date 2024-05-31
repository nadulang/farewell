function myFunction() {
    var x = document.getElementById("main-menu");
    if (x.className === "main-nav") {
      x.className += " responsive";
    } else {
      x.className = "main-nav";
    }
  }

$(document).on('scroll', function(){
    if ( $(window).scrollTop() > 30) {
        $('#main-menu').addClass('active');
    } else {
        $('#main-menu').removeClass('active');
    }
});

var words = ['Dear bestie, makasi banyak atas bantuan dan kerja samanya selama iniii. Selamat dan semoga sukses terus dimanapun beradaaa. Tetap jalin komunikasi seperti ini yaaa, you\'ll be missed ({}) Ditunggu part 2 nyaaa~',
'Dear Gambler, terima kasih atas kenang-kenangannya, walaupun kebanyakan pahit yang diceritakan bersama, marilah mengambil hal positipnya. Semoga sukses, dan selamat menempuh hidup baru yaa. Jgn lupa lokernya  🙂', 
'Mas Bagas, makasih yaaa udah dibantuin dan disupport dengan best effortnya selama hampir 2 taun kita bersama, sekarang saatnya melepas dirimu buat dapet yang lebih baik lagi. yang terbaik buatmu yaaa, segala yang diusahakan segera tercapai yaa, jadi nanti kalo kita ketemu lagi, yang ada cerita happy aja, jangan yang sedih sedih lagi. will be miss you 🙁',
'Dek Bagas, terima kasih atas kebersamaannya selama ini. Semoga di tempat yang baru, bisa ngegym rutin, sayang udah bayar setaun tp ga dipake. Semoga makin gacor, makin banyak duitnya, biar kalo kita jalan-jalan lagi ada donaturnya 🙂 You will be missed. Godspeed!',
'Menyalaaa Babangkuu di tempat baru!!!, thank you babangkuu udah berkorban dari pengalaman sedihmu itu, ceritanya kita jadiin pelajaran ya. tapi gebleknya masih kena juga gimana dong 🙁. lulus dari sini kita ganti topik ya mas!!, sekalian jan lupa ganti batik juga wkwk. dan sangaat berterima kasih udah bantuinku selama di aab. Semua yang terbaik untukmu ya mas baagaaas, tolong badminton aktifin lagi, jangan mentang2 udah ada temen baru di goa kita ga diajakin... #keepcontact',
'Mas Bagas, ga kerasa udah keluar duluan aja, perasaan masih kemarin main bareng - bareng, sukses terus mas, kurang kurangin buang uangnya, mending di investasikan aja mas, terima kasih mas Bagas selalu support dan dibimbing selama di AAB. Bonne continuation ! Bon courage et que la santé soit toujours avec toi. #keepcontact.',
'halo gas, kayaknya baru kemarin  aku chat nanyain tanggal 31 mei udh makin deket aja, eh hari ini udh tgl 31 mei aja ya. Btw, makasih untuk kebersamaannya selama kurang lebih 2 thn ini ya, makasih udh saling support dan sharing-nya jg selama ini. Semoga sukses di tempat yang baru, dan jangan lupain kita-kita ya.',
'lho kak Bagas kok meninggalkan adek dev nya? wkwkw ngga terasa udah 2 tahun aja sih ya kak Bagas. Thank you yaa udah mau support dev baru ini dengan segala kekurangannya 😄 semoga sukses dan tetap gokil di tempat yang baru yaa, dan terima kasih atas support nya yaa selama ini 😁',
'Dear Sobat Cilangkap, walopun kita baru kenal bentar, tp si super seru ini udah harus lulus dari AAB. Thank You atas keseruan dan kebersamaannya. Bakal rindu liat lu debat sama Nadya wkwkwk. Semoga betah sama lingkungan dan dikerjaan baru nya yezzz. Enjoyy. Tetap sakses dimanapun mengudaraa. Mau ikutan tp disuruh setaun dulu awkwkkw, chandyaa. See Ya at The Top Bruuhh.',
'Halooo Bagasss, selamat menjalani kerjaan di tempat baru yaaaa semoga dirimu selalu sukses dimanapun berada. maafin gw ya kalau ada salah. terima kasih selama ini sudah banyak ngebantuin, banyak kasih saran, dirimu juga ga pernah ngeluh semua dijalanin bahkan uat sampe malem jam 12 gassss aj ya hahhahha. tetap menjadi pribadi yang menyenangkan dan baik hati. semangat bagasssss.',
'My pisces brother dan sekaligus pasangan ganda putra yang udah ngebawa lt 17 juara ke 4, padahal tahun ini bisa nih kita juara 1 wkwk. Terima kasih atas ramalan ramalan weton nya gas. Semoga ditempat baru ketemu orang yg lahirnya hari sabtu juga atau jumat malem dah minimal. Sukses terus gas dimanapun berada',
'Mas Bagasss, kyknya baru kemaren masih nyari2 tempat eh tiba2 udah mau pergi ajaa. Makasih atas kerja samanya selama inii. Sukses terus di tempat barunya semoga makin sukses. Kl kita bikin part 2 tetep ikut yaaa.....',
'Baca aja suratnya, capek ngetik lagi',
'Makasih udah jadi sahabat di tempat kerja yang biasanya cuman dapet co-worker aja. Semoga urusan di hidupmu dilancarkan dan tidak diberikan banyak cobaan lg wkwkwkwk'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.farewell').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});