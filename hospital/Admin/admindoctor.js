console.log("adminDoctor");
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
    outputhtml += "<td>" + mydata["info"][i]["Department"] + "</td>";
    outputhtml += "<td>" + mydata["info"][i]["Specialization"] + "</td>";

    

    

    outputhtml += "<td>" + "<button type='button' onclick='deletedoctor(" + mydata["info"][i]["ID"] + ")'>Delete Doctor</button>" + "</td>";
    outputhtml += "</tr>";
  }
  outputhtml += "</table>";
  const appData = document.getElementById("appData");
  const mytable = document.getElementById("appTable");

  appData.innerHTML=outputhtml;
}

function getDoctor() {

  
        $.ajax({
            type: "POST",
            dataType: "JSON",
            url: "../php/getalldoctors.php",
            error: function(xhr, status, error) {
              alert(xhr.responseText);
            },
            success: function(response){
                console.log(response);
                FormatData(response);
          
            }
        });
    }
    getDoctor();

    function deletedoctor(DoctorID) {
      //alert(ApptID);
            $.ajax({
                type: "POST",
                dataType: "JSON",
                url: "../php/deletedoctor.php",
                data: {
                  "DoctorID": DoctorID
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
        function CreateDoctor(){
          location.href="Create-Doctor.html";
        }
