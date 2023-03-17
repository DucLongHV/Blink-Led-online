//den 01

  var btnOn = document.getElementById('btbOnId_01');
  var btnOff = document.getElementById('btnOffId_01');

  btnOn.onclick = function() {
    document.getElementById('light').src = "./image/Light_On.jpg"
    database.ref('/').update({
        'LED_STATUS' : 'hello world',
    })
  }
  btnOff.onclick = function() {
    document.getElementById('light').src = "./image/Light_Off.jpg"
    database.ref('/').update({
        'LED_STATUS' : 'OFF',
    })
  }

