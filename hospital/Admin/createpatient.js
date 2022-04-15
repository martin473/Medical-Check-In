console.log("adminCreatePatient");


function CreatePatient() {
    let ADMINID = sessionStorage.getItem("user_id")
    let FIRSTNAME= document.getElementById("FIRSTNAME").value;
    let LASTNAME= document.getElementById("LASTNAME").value;
    let MIDDLENAME= document.getElementById("MIDDLENAME").value;
    let DOB= document.getElementById("DOB").value;
    let GENDER=document.getElementById("GENDER").value;
    let ADDRESS=document.getElementById("ADDRESS").value;
    let EMAIL=document.getElementById("EMAIL").value;
    let PASSWORD=document.getElementById("PASSWORD").value;
    let MEDICATIONHISTORY=document.getElementById("MEDICATIONHISTORY").value;
    let MEDICATION=document.getElementById("MEDICATION").value;
    let CONDITIONS=document.getElementById("CONDITIONS").value;
    
        $.ajax({
            type: "POST",
            dataType: "JSON",
            url: "../php/addpatient.php",
            data: {
                "FIRSTNAME": FIRSTNAME,
                "LASTNAME": LASTNAME,
                "MIDDLENAME": MIDDLENAME,
                "DOB": DOB,
                "GENDER": GENDER,
                "ADDRESS": ADDRESS,
                "EMAIL": EMAIL,
                "PASSWORD": PASSWORD,
                "MEDICATIONHISTORY":MEDICATIONHISTORY,
                "MEDICATION":MEDICATION,
                "CONDITIONS":CONDITIONS

              },
            error: function(xhr, status, error) {
                
              alert(xhr.responseText);
              document.getElementById("Message").innerHTML="Patient did not created.";
            },
            success: function(response){
                console.log(response);
                document.getElementById("Message").innerHTML="Patient Created.";
                
          
            }
        });
    }