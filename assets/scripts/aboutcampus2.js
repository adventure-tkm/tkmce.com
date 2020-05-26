function openNav1() {
  document.getElementById("myNav1").style.width = "100%";
}

function closeNav1() {
  document.getElementById("myNav1").style.width = "0%";
}

function openNav2() {
  document.getElementById("myNav2").style.width = "100%";
}

function closeNav2() {
  document.getElementById("myNav2").style.width = "0%";
}

function subtopics(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
