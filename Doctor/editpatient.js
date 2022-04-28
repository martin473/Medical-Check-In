console.log("doctorUpdatePatient");

function GetPatient() {
    
    var PATIENTID = sessionStorage.getItem("PatientID");
   
$.ajax({

    type: "POST",
    dataType: "JSON",
    url: "../php/getpatient.php",
    data: {
        "PATIENTID": PATIENTID

      },
    error: function(xhr, status, error) {
     
      alert(xhr.responseText,status,error);
      
      
    },
    success: function(response){
        
        document.getElementById("FIRSTNAME").value= response["info"][0]["FirstName"];
        document.getElementById("LASTNAME").value= response["info"][0]["LastName"];
        document.getElementById("MIDDLENAME").value= response["info"][0]["MiddleName"];
        document.getElementById("DOB").value= response["info"][0]["DOB"];
        document.getElementById("GENDER").value= response["info"][0]["Gender"];
        document.getElementById("ADDRESS").value= response["info"][0]["Address"];
        
        document.getElementById("MEDICATIONHISTORY").value= response["info"][0]["MedicationHistory"];
        document.getElementById("MEDICATION").value= response["info"][0]["Medication"];
        document.getElementById("CONDITIONS").value= response["info"][0]["Conditions"];

        
        
  
    }
});
}

function EditPatient() {
    let PATIENTID = sessionStorage.getItem("PatientID");
    
    let MEDICATIONHISTORY=document.getElementById("MEDICATIONHISTORY").value;
    let MEDICATION=document.getElementById("MEDICATION").value;
    let CONDITIONS=document.getElementById("CONDITIONS").value;
    
        $.ajax({
            type: "POST",
            dataType: "JSON",
            url: "../php/editpatientD.php",
            data: {
                "PATIENTID": PATIENTID,
                
                "MEDICATIONHISTORY":MEDICATIONHISTORY,
                "MEDICATION":MEDICATION,
                "CONDITIONS":CONDITIONS

              },
            error: function(xhr, status, error) {
                
              alert(xhr.responseText);
              document.getElementById("Message").innerHTML="Patient did not Updated.";
            },
            success: function(response){
                console.log(response);
                document.getElementById("Message").innerHTML="Patient Updated.";
                
          
            }
        });
    }