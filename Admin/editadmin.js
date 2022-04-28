console.log("adminUpdateAdmin");

function GetAdmin() {
    
    var ADMINID = sessionStorage.getItem("AdminID");
   
$.ajax({

    type: "POST",
    dataType: "JSON",
    url: "../php/getadmin.php",
    data: {
        "AdminID": ADMINID

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

        
        
  
    }
});
}

function EditAdmin() {
    let ADMINID = sessionStorage.getItem("AdminID");
    let FIRSTNAME= document.getElementById("FIRSTNAME").value;
    let LASTNAME= document.getElementById("LASTNAME").value;
    let MIDDLENAME= document.getElementById("MIDDLENAME").value;
    let DOB= document.getElementById("DOB").value;
    let GENDER=document.getElementById("GENDER").value;
    let ADDRESS=document.getElementById("ADDRESS").value;
    
    
        $.ajax({
            type: "POST",
            dataType: "JSON",
            url: "../php/editadmin.php",
            data: {
                "ADMINID": ADMINID,
                "FIRSTNAME": FIRSTNAME,
                "LASTNAME": LASTNAME,
                "MIDDLENAME": MIDDLENAME,
                "DOB": DOB,
                "GENDER": GENDER,
                "ADDRESS": ADDRESS

              },
            error: function(xhr, status, error) {
                
              alert(xhr.responseText);
              document.getElementById("Message").innerHTML="Admin did not Updated.";
            },
            success: function(response){
                console.log(response);
                document.getElementById("Message").innerHTML="Admin Updated.";
                
          
            }
        });
    }