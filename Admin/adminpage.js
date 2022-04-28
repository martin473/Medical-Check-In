console.log("getadmin");
function FormatData(mydata){
  if(mydata==null) {
    return;
  }

  var outputhtml = "<table>";
  var arrayLength = mydata["info"].length;

  for (var i = 0; i < arrayLength; i++) {
    console.log(mydata["info"][i]);
    outputhtml += "<tr>";
    outputhtml += "<td>" + mydata["info"][i]["pFirst Name"] + " " + mydata["info"][i]["pMiddle Name"] + " " + mydata["info"][i]["pLast Name"] + "</td>";
    outputhtml += "<td>" + mydata["info"][i]["Gender"] + "</td>";
    outputhtml += "<td>" + mydata["info"][i]["Email"] + "</td>";
    outputhtml += "<td>" + mydata["info"][i]["Date"] + "</td>";
    outputhtml += "<td>" + mydata["info"][i]["Visit Time"] + "</td>";
    outputhtml += "<td>" + mydata["info"][i]["dFirst Name"] + " " + mydata["info"][i]["dMiddle Name"] + " " + mydata["info"][i]["dLast Name"] + "</td>";
    outputhtml += "<td>" + mydata["info"][i]["Conditions"] + "</td>";
    outputhtml += "<td>" + mydata["info"][i]["Status"] + "</td>";

    
    outputhtml += "<td>" + "<button type='button' onclick='EditAdminapp(" + mydata["info"][i]["ApptID"] + ")'>Edit Appointment</button>";
    outputhtml += "<button type='button' onclick='DeleteAdminapp(" + mydata["info"][i]["ApptID"] + ")'>Delete Appointment</button>" + "</td>";
    outputhtml += "</tr>";
  }
  outputhtml += "</table>";
  const appData = document.getElementById("appData");
  const mytable = document.getElementById("appTable");

  appData.innerHTML=outputhtml;
}

function getAdminapp() {

  
        $.ajax({
            type: "POST",
            dataType: "JSON",
            url: "../php/getadminappt.php",
            error: function(xhr, status, error) {
              alert(xhr.responseText);
            },
            success: function(response){
                console.log(response);
                FormatData(response);
          
            }
        });
    }
    getAdminapp();

    function DeleteAdminapp(ApptID) {
      //alert(ApptID);
            $.ajax({
                type: "POST",
                dataType: "JSON",
                url: "../php/deleteadminapp.php",
                data: {
                  "ApptID": ApptID
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
        function CreateAppointment(){
          location.href="Create-Appointment.html";
        }
        function EditAdminapp(AppointmentID) {
          sessionStorage.setItem("AppointmentID",AppointmentID);
          location.href="Edit-Appointment.html?AppointmentID="+AppointmentID;

        }
