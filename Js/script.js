var submitit = function () {
  var daysOfTheWeek = [
    "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
  ];
  var maleNames = [
    "Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"
  ];
  var femaleNames = [
    "Akosua"," Adwoa","Abenaa","Akua","Yaa","Afua","Ama"
  ];
  var month = document.getElementById("Month").value
  var name = document.getElementById("Name").value
  var year = document.getElementById("Year").value
  var day = document.getElementById("Day").value
  
  var dateOfBirth = new Date(year + "/" + month + "/" + day);
  var find = dateOfBirth.getDay();
  var Display = document.getElementById("Display");
  var male = document.getElementById("Male");
  var female = document.getElementById("Female");
};