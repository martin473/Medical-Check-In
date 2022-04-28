console.log("adminCreateAppointment");


function EditAppointment() {
    
    
    
    let DOCTORID= document.getElementById("doctorname").value;
    let DATE= document.getElementById("DATE").value;
    let VISITTIME= document.getElementById("VISITTIME").value;
    let STATUS= document.getElementById("STATUS").value;
    ApptID=sessionStorage.getItem("AppointmentID");
    
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
            url: "../php/updateapt.php",
            data: {
                
                "ApptID" :ApptID,
                "DoctorID": DOCTORID,
                "Date": DATE,
                "VisitTime": VISITTIME,
                "Status": STATUS

              },
            error: function(xhr, status, error) {
                
              alert(xhr.responseText,status,error);
              document.getElementById("Message").innerHTML="Appointment did not update.";
            },
            success: function(response){
                console.log(response);
                document.getElementById("Message").innerHTML="Appointment Updated.";
                
          
            }
        });
    }
    function GetPatient(PATIENTID) {
       
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
        success: function(mydata){
            console.log(mydata);
            let selectpatient = document.getElementById("patientname");
            var el=document.createElement("option");
            el.textContent= mydata["info"][0]["FirstName"] + " " + mydata["info"][0]["MiddleName"] + " " + mydata["info"][0]["LastName"];
            el.value = mydata["info"][0]["id"];
  
            el.setAttribute('selected',"true");
            el.selected=true;
            selectpatient.appendChild(el);
        
            document.getElementById("DOB").value = mydata["info"][0]["DOB"];
            document.getElementById("GENDER").value = mydata["info"][0]["Gender"];
            document.getElementById("MEDICATIONHISTORY").value = mydata["info"][0]["MedicationHistory"];
            document.getElementById("MEDICATION").value = mydata["info"][0]["Medication"];
            document.getElementById("CONDITIONS").value = mydata["info"][0]["Conditions"]

        }
    });
}


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
        if (mydata["info"][i]["ID"]==DOCTORID){
            el.setAttribute('selected',"true");
            el.selected=true;

        }
        
        selectpatient.appendChild(el);
    }
}
    });
}
//GetAllDoctor();

function getAdminapp() {
AppointmentID= sessionStorage.getItem("AppointmentID");
  
    $.ajax({
        type: "POST",
        dataType: "JSON",
        url: "../php/getadminoneappt.php",
        data: {
            "AppointmentID": AppointmentID

          },
        error: function(xhr, status, error) {
          alert(xhr.responseText);
        },
        success: function(response){
            console.log(response);
            //FormatData(response);
            GetPatient(response["info"][0]["PatientID"]);
            GetAllDoctor(response["info"][0]["DoctorID"]);
            document.getElementById("STATUS").value = response["info"][0]["Status"];
            document.getElementById("DATE").value = response["info"][0]["Date"];
            document.getElementById("VISITTIME").value = response["info"][0]["Visit Time"];

        }
    });
}
getAdminapp();

