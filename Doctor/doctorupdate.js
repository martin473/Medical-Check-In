console.log("Doctorupdate");


function updateDoctor() {
    let DOCTORID = sessionStorage.getItem("user_id")
    let FIRSTNAME= document.getElementById("FIRSTNAME").value;
    let LASTNAME= document.getElementById("LASTNAME").value;
    let MIDDLENAME= document.getElementById("MIDDLENAME").value;
    let DOB= document.getElementById("DOB").value;
    let GENDER=document.getElementById("GENDER").value;
    let ADDRESS=document.getElementById("ADDRESS").value;
    let EMAIL=document.getElementById("EMAIL").value;
    let PASSWORD=document.getElementById("PASSWORD").value;
    let DEPARTMENT=document.getElementById("DEPARTMENT").value;
    let SPECIALIZATION=document.getElementById("SPECIALIZATION").value;
    
        $.ajax({
            type: "POST",
            dataType: "JSON",
            url: "../php/updatedoctor.php",
            data: {
                "DoctorID": DOCTORID,
                "FirstName": FIRSTNAME,
                "LastName": LASTNAME,
                "MiddleName": MIDDLENAME,
                "DOB": DOB,
                "Gender": GENDER,
                "Address": ADDRESS,
                "Email": EMAIL,
                "Password": PASSWORD,
                "Department":DEPARTMENT,
                "Specialization":SPECIALIZATION
                ,


              },
            error: function(xhr, status, error) {
                
              alert(xhr.responseText);
              document.getElementById("Message").innerHTML="Your Profile was not updated.";
            },
            success: function(response){
                console.log(response);
                document.getElementById("Message").innerHTML="Your Profile was updated.";
                
          
            }
        });
    }