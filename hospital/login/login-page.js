const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    const table = loginForm.table.value;
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "../php/loginpost.php",
            data: { Email: username, Password: password , Table: table},
            error: function(xhr, status, error) {
                alert(xhr.responseText);
            },
            success: function(response){
              console.log(response);
              let id = response.info[0].user_id;
              if (id){
                sessionStorage.setItem("user_id",id);
                sessionStorage.setItem("user_type",table);
              }
              if (table=="patient" && id) {
                location.href="../Patient/Patient.html";
              }
              
              else if (table=="doctor" && id) {
                location.href="../Doctor/Doctor.html";
              }
              else if (table=="admin" && id) {
                location.href="../Admin/Admin.html";
              }
            }
        });

        
      }
)