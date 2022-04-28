console.log("adminPaitent");
function FormatData(mydata){
  if(mydata==null) {
    return;
  }

  var outputhtml = "<table>";
  var arrayLength = mydata["info"].length;

  for (var i = 0; i < arrayLength; i++) {
    console.log(mydata["info"][i]);
    outputhtml += "<tr>";
    outputhtml += "<td>" + mydata["info"][i]["First Name"] + " " + mydata["info"][i]["Middle Name"] + " " + mydata["info"][i]["Last Name"] + "</td>";
    outputhtml += "<td>" + mydata["info"][i]["Email"] + "</td>";
    outputhtml += "<td>" + mydata["info"][i]["DOB"] + "</td>";
    outputhtml += "<td>" + mydata["info"][i]["Gender"] + "</td>";
    outputhtml += "<td>" + mydata["info"][i]["Address"] + "</td>";
    

    
    outputhtml += "<td>" + "<button type='button' onclick='EditPatient(" + mydata["info"][i]["ID"] + ")'>Edit Patient</button>";
    outputhtml += "<button type='button' onclick='deletepatient(" + mydata["info"][i]["ID"] + ")'>Delete Patient</button>" + "</td>";
    outputhtml += "</tr>";
  }
  outputhtml += "</table>";
  const appData = document.getElementById("appData");
  const mytable = document.getElementById("appTable");

  appData.innerHTML=outputhtml;
}

function getPatient() {

  
        $.ajax({
            type: "POST",
            dataType: "JSON",
            url: "../php/getallpatients.php",
            error: function(xhr, status, error) {
              alert(xhr.responseText);
            },
            success: function(response){
                console.log(response);
                FormatData(response);
          
            }
        });
    }
    getPatient();

    function deletepatient(PatientID) {
      //alert(ApptID);
            $.ajax({
                type: "POST",
                dataType: "JSON",
                url: "../php/deletepatient.php",
                data: {
                  "PatientID": PatientID
                },
                error: function(xhr, status, error) {
                  alert(xhr.responseText);
                },
                success: function(response){
                    console.log(response);
                    location.reload(response);
              
                }
            });
        }
        function CreatePatient(){
          location.href="Create-Patient.html";
        }

        function EditPatient(PatientID) {
          sessionStorage.setItem("PatientID",PatientID);
          location.href="Edit-Patient.html?PatientID="+PatientID;

        }