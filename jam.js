function startTime()
{
    var hari=new Date();
    var jam=hari.getHours();
    var menit=hari.getMinutes();
    var detik=hari.getSeconds();
    ///tambah angka 0 jika jam kurang dari 10
    jam=checkTime(jam);
    menit=checkTime(menit);
    detik=checkTime(detik);
    document.getElementById('jam').innerHTML=jam+":"+menit+":"+detik;
    t=setTimeout('startTime()', 500);
}
function checkTime(i)
{
    if(i<10)
    {
        i="0" + i;
    }
    return i;
}
function start()
{
    startTime();
    alert('Selamat Datang di Website Pemerintah Kabupaten Manggari Barat.');
}

    /*XML*/
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xhttp.open("GET", "cd_catalog.xml", true);
    xhttp.send();
  }
  function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Artist</th><th>Title</th></tr>";
    var x = xmlDoc.getElementsByTagName("CD");
    for (i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
  }
    /*XML*/
    function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
          }
        };
        xhttp.open("GET", "cd_catalog.xml", true);
        xhttp.send();
      }
      function myFunction(xml) {
        var i;
        var xmlDoc = xml.responseXML;
        var table="<tr><th>Artist</th><th>Title</th></tr>";
        var x = xmlDoc.getElementsByTagName("CD");
        for (i = 0; i <x.length; i++) { 
          table += "<tr><td>" +
          x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
          "</td><td>" +
          x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
          "</td></tr>";
        }
        document.getElementById("demo").innerHTML = table;
    }