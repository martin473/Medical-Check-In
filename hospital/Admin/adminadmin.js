console.log("adminadmin");
function FormatData(mydata){
  if(mydata==null) {
    return;
  }

  var outputhtml = "<table>";
  var arrayLength = mydata["info"].length;
  let AdminID = sessionStorage.getItem("user_id")
  for (var i = 0; i < arrayLength; i++) {
    console.log(mydata["info"][i]);
    outputhtml += "<tr>";
    outputhtml += "<td>" + mydata["info"][i]["First Name"] + " " + mydata["info"][i]["Middle Name"] + " " + mydata["info"][i]["Last Name"] + "</td>";
    outputhtml += "<td>" + mydata["info"][i]["Email"] + "</td>";
    outputhtml += "<td>" + mydata["info"][i]["DOB"] + "</td>";
    outputhtml += "<td>" + mydata["info"][i]["Gender"] + "</td>";
    outputhtml += "<td>" + mydata["info"][i]["Address"] + "</td>";

    
if(AdminID==mydata["info"][i]["ID"]){
  outputhtml += "<td> &nbsp;"  +"</td>";
  outputhtml += "</tr>";
}
else {

    outputhtml += "<td>" + "<button type='button' onclick='deleteadmin(" + mydata["info"][i]["ID"] + ")'>Delete Admin</button>" + "</td>";
    outputhtml += "</tr>";
  }
}
  outputhtml += "</table>";
  const appData = document.getElementById("appData");
  const mytable = document.getElementById("appTable");

  appData.innerHTML=outputhtml;
}

function getAdmin() {

  
        $.ajax({
            type: "POST",
            dataType: "JSON",
            url: "../php/getalladmins.php",
            error: function(xhr, status, error) {
              alert(xhr.responseText);
            },
            success: function(response){
                console.log(response);
                FormatData(response);
          
            }
        });
    }
    getAdmin();

    function deleteadmin(AdminID) {
      //alert(ApptID);
            $.ajax({
                type: "POST",
                dataType: "JSON",
                url: "../php/deleteadmin.php",
                data: {
                  "AdminID": AdminID
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
        function CreateAdmin(){
          location.href="Create-Admin.html";
        }
