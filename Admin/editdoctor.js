console.log("adminUpdateDoctor");

function GetDoctor() {
    
    var DOCTORID = sessionStorage.getItem("DoctorID");
   
$.ajax({

    type: "POST",
    dataType: "JSON",
    url: "../php/getdoctor.php",
    data: {
        "DoctorID": DOCTORID

      },
    error: function(xhr, status, error) {
     
      alert(xhr.responseText,status,error);
      
      
    },
    success: function(response){
        
        document.getElementById("FIRSTNAME").value= response["info"][0]["First Name"];
        document.getElementById("LASTNAME").value= response["info"][0]["Last Name"];
        document.getElementById("MIDDLENAME").value= response["info"][0]["Middle Name"];
        document.getElementById("DOB").value= response["info"][0]["DOB"];
        document.getElementById("GENDER").value= response["info"][0]["Gender"];
        document.getElementById("ADDRESS").value= response["info"][0]["Address"];
        
        document.getElementById("DEPARTMENT").value= response["info"][0]["Department"];
        document.getElementById("SPECIALIZATION").value= response["info"][0]["Specialization"];

        
        
  
    }
});
}

function EditDoctor() {
    let DOCTORID = sessionStorage.getItem("DoctorID");
    let FIRSTNAME= document.getElementById("FIRSTNAME").value;
    let LASTNAME= document.getElementById("LASTNAME").value;
    let MIDDLENAME= document.getElementById("MIDDLENAME").value;
    let DOB= document.getElementById("DOB").value;
    let GENDER=document.getElementById("GENDER").value;
    let ADDRESS=document.getElementById("ADDRESS").value;
    let SPECIALIZATION=document.getElementById("SPECIALIZATION").value;
    let DEPARTMENT=document.getElementById("DEPARTMENT").value;
    
    
        $.ajax({
            type: "POST",
            dataType: "JSON",
            url: "../php/editdoctor.php",
            data: {
                "DOCTORID": DOCTORID,
                "FIRSTNAME": FIRSTNAME,
                "LASTNAME": LASTNAME,
                "MIDDLENAME": MIDDLENAME,
                "DOB": DOB,
                "GENDER": GENDER,
                "ADDRESS": ADDRESS,
                "SPECIALIZATION":SPECIALIZATION,
                "DEPARTMENT":DEPARTMENT

              },
            error: function(xhr, status, error) {
                
              alert(xhr.responseText);
              document.getElementById("Message").innerHTML="Doctor did not Updated.";
            },
            success: function(response){
                console.log(response);
                document.getElementById("Message").innerHTML="Doctor Updated.";
                
          
            }
        });
    }