console.log("adminCreateAppointment");


function CreateAppointment() {
    
    
    let PATIENTID= document.getElementById("patientname").value;
    let DOCTORID= document.getElementById("doctorname").value;
    let DATE= document.getElementById("DATE").value;
    let VISITTIME= document.getElementById("VISITTIME").value;
    let STATUS= document.getElementById("STATUS").value;
    document.getElementById("Message").innerHTML="";
    if (VISITTIME=="") {
        document.getElementById("Message").innerHTML="Please enter a valid time.";
        return;
    }
    if (DATE=="") {
        document.getElementById("Message").innerHTML="Please enter a valid date.";
        return;
    }
    
    
    
        $.ajax({
            type: "POST",
            dataType: "JSON",
            url: "../php/addapt.php",
            data: {
                "PATIENTID": PATIENTID,
                "DOCTORID": DOCTORID,
                "DATE": DATE,
                "VISITTIME": VISITTIME,
                "STATUS": STATUS

              },
            error: function(xhr, status, error) {
                
              alert(xhr.responseText,status,error);
              document.getElementById("Message").innerHTML="Appointment did not created.";
            },
            success: function(response){
                console.log(response);
                document.getElementById("Message").innerHTML="Appointment Created.";
                
          
            }
        });
    }
    function GetPatient() {
        var myname = document.getElementById("patientname");
        var PATIENTID = myname.options[myname.selectedIndex].value;
       
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
            

            document.getElementById("DOB").value = response["info"][0]["DOB"];
            document.getElementById("GENDER").value = response["info"][0]["Gender"];
            document.getElementById("MEDICATIONHISTORY").value = response["info"][0]["MedicationHistory"];
            document.getElementById("MEDICATION").value = response["info"][0]["Medication"];
            document.getElementById("CONDITIONS").value = response["info"][0]["Conditions"]
 
            
            
      
        }
    });
}

function GetAllPatient(PATIENTID) {

    $.ajax({
        type: "POST",
        dataType: "JSON",
        url: "../php/getallpatients.php",
        data: {
            "PATIENTID": PATIENTID

          },
        error: function(xhr, status, error) {
            
          alert(xhr.responseText);
          
        },
        success: function(mydata){
            console.log(mydata);
            var arrayLength = mydata["info"].length;
            let selectpatient = document.getElementById("patientname");

        for (var i = 0; i < arrayLength; i++) {

        console.log(mydata["info"][i]);
        var el=document.createElement("option");
        el.textContent= mydata["info"][i]["First Name"] + " " + mydata["info"][i]["Middle Name"] + " " + mydata["info"][i]["Last Name"];
        el.value = mydata["info"][i]["ID"];
        selectpatient.appendChild(el);
        if (i==0){
            GetPatient();
        }
    }
}
    });
}
GetAllPatient();

function GetAllDoctor(DOCTORID) {

    $.ajax({
        type: "POST",
        dataType: "JSON",
        url: "../php/getalldoctors.php",
        data: {
            "DOCTORID": DOCTORID

          },
        error: function(xhr, status, error) {
            
          alert(xhr.responseText);
          
        },
        success: function(mydata){
            console.log(mydata);
            var arrayLength = mydata["info"].length;
            let selectpatient = document.getElementById("doctorname");

        for (var i = 0; i < arrayLength; i++) {

        console.log(mydata["info"][i]);
        var el=document.createElement("option");
        el.textContent= mydata["info"][i]["First Name"] + " " + mydata["info"][i]["Middle Name"] + " " + mydata["info"][i]["Last Name"];
        el.value = mydata["info"][i]["ID"];
        selectpatient.appendChild(el);
    }
}
    });
}
GetAllDoctor();