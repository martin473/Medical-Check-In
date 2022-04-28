console.log("patientProfile");
function FormatData(mydata){
  if(mydata==null) {
    return;
  }

  var outputhtml = "<table>";
  var arrayLength = mydata["info"].length;

  if (arrayLength > 0) {
    console.log(mydata["info"][0]);
    document.getElementById("FIRSTNAME").value=mydata["info"][0]["FirstName"];
    document.getElementById("LASTNAME").value=mydata["info"][0]["LastName"];
    document.getElementById("MIDDLENAME").value=mydata["info"][0]["MiddleName"];
    document.getElementById("DOB").value=mydata["info"][0]["DOB"];
    document.getElementById("GENDER").value=mydata["info"][0]["Gender"];
    document.getElementById("ADDRESS").value=mydata["info"][0]["Address"];
    document.getElementById("EMAIL").value=mydata["info"][0]["Email"];
    document.getElementById("PASSWORD").value=mydata["info"][0]["Password"];
    document.getElementById("MEDICATIONHISTORY").value=mydata["info"][0]["MedicationHistory"];
    document.getElementById("MEDICATION").value=mydata["info"][0]["Medication"];
    document.getElementById("CONDITIONS").value=mydata["info"][0]["Conditions"];
  }
}

function getPatient() {
    let PATIENTID = sessionStorage.getItem("user_id")
  
        $.ajax({
            type: "POST",
            dataType: "JSON",
            url: "../php/getpatient.php",
            data: {
                "PATIENTID": PATIENTID
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
    getPatient();