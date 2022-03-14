const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const getUrl = "localhost:8081/hospital/php/addapt.php?ApptID=2&DoctorID=2&PatientID=2";

$(document).ready(function(){
  $loginButton.click(function(){
    $.post(getUrl,
    {
      ApptID: "3",
      DoctorID: "3",
      PatientID: "3"
    },
    function(data,status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  });
});

/*loginButton.addEventListener('click', makeRequest);
var httpRequest;
function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('POST', getUrl);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send('ApptID=' + encodeURIComponent(userName) + encodeURIComponent("&") 
        + 'DoctorID=' + encodeURIComponent(userName) + encodeURIComponent("&") 
        + 'PatientID=' + encodeURIComponent(userName));
    httpRequest.send();
}

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }

function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            alert(httpRequest.responseText);
        } else {
            alert('There was a problem with the request.');
        }
    }
}*/

/*loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    if (username === "user" && password === "1") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
}*/
)
