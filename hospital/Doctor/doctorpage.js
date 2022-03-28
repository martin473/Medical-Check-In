console.log("getdoctor");
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
    outputhtml += "<td>" + mydata["info"][i]["Gender"] + "</td>";
    outputhtml += "<td>" + mydata["info"][i]["Email"] + "</td>";
    outputhtml += "<td>" + mydata["info"][i]["Date"] + "</td>";
    outputhtml += "<td>" + mydata["info"][i]["Visit Time"] + "</td>";
    outputhtml += "<td>" + mydata["info"][i]["Medication"] + "</td>";
    outputhtml += "<td>" + mydata["info"][i]["Medication History"] + "</td>";
    outputhtml += "<td>" + mydata["info"][i]["Conditions"] + "</td>";

    

    outputhtml += "<td>" + "<button type='button' onclick='DeleteDoctorapp(" + mydata["info"][i]["ApptID"] + ")'>Delete Appointment</button>" + "</td>";
    outputhtml += "</tr>";
  }
  outputhtml += "</table>";
  const appData = document.getElementById("appData");
  const mytable = document.getElementById("appTable");

  appData.innerHTML=outputhtml;
}

function getDoctorapp() {
  let user_id = sessionStorage.getItem("user_id")

  console.log(user_id);
        $.ajax({
            type: "POST",
            dataType: "JSON",
            url: "../php/getdoctorappt.php",
            data: {
              "DoctorID": user_id
            },
            error: function(xhr, status, error) {
              alert(xhr.responseText);
            },
            success: function(response){
                console.log(response);
                FormatData(response);
          
            }
        });
    }
    getDoctorapp();

    function DeleteDoctorapp(ApptID) {
      //alert(ApptID);
            $.ajax({
                type: "POST",
                dataType: "JSON",
                url: "../php/deletedoctorapp.php",
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
