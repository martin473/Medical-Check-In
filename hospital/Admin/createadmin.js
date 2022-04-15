console.log("adminCreateAdmin");


function CreateAdmin() {
    let ADMINID = sessionStorage.getItem("user_id")
    let FIRSTNAME= document.getElementById("FIRSTNAME").value;
    let LASTNAME= document.getElementById("LASTNAME").value;
    let MIDDLENAME= document.getElementById("MIDDLENAME").value;
    let DOB= document.getElementById("DOB").value;
    let GENDER=document.getElementById("GENDER").value;
    let ADDRESS=document.getElementById("ADDRESS").value;
    let EMAIL=document.getElementById("EMAIL").value;
    let PASSWORD=document.getElementById("PASSWORD").value;
    
    
        $.ajax({
            type: "POST",
            dataType: "JSON",
            url: "../php/addadmin.php",
            data: {
                "FIRSTNAME": FIRSTNAME,
                "LASTNAME": LASTNAME,
                "MIDDLENAME": MIDDLENAME,
                "DOB": DOB,
                "GENDER": GENDER,
                "ADDRESS": ADDRESS,
                "EMAIL": EMAIL,
                "PASSWORD": PASSWORD
                

              },
            error: function(xhr, status, error) {
                
              alert(xhr.responseText);
              document.getElementById("Message").innerHTML="Admin did not created.";
            },
            success: function(response){
                console.log(response);
                document.getElementById("Message").innerHTML="Admin Created.";
                
          
            }
        });
    }