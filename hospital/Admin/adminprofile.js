console.log("adminProfile");
function FormatData(mydata){
  if(mydata==null) {
    return;
  }

  var outputhtml = "<table>";
  var arrayLength = mydata["info"].length;

  if (arrayLength > 0) {
    console.log(mydata["info"][0]);
    document.getElementById("FIRSTNAME").value=mydata["info"][0]["First Name"];
    document.getElementById("LASTNAME").value=mydata["info"][0]["Last Name"];
    document.getElementById("MIDDLENAME").value=mydata["info"][0]["Middle Name"];
    document.getElementById("DOB").value=mydata["info"][0]["DOB"];
    document.getElementById("GENDER").value=mydata["info"][0]["Gender"];
    document.getElementById("ADDRESS").value=mydata["info"][0]["Address"];
    document.getElementById("EMAIL").value=mydata["info"][0]["Email"];
    document.getElementById("PASSWORD").value=mydata["info"][0]["Password"];
  }
}

function getAdmin() {
    let AdminID = sessionStorage.getItem("user_id")
  
        $.ajax({
            type: "POST",
            dataType: "JSON",
            url: "../php/getadmin.php",
            data: {
                "AdminID": AdminID
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
    getAdmin();