//  Section Password Code Start Here
// =====================================
// =====================================


document.getElementById("passwordheading").style.color = "#ffc107";
document.getElementById("GetPass").style.display = "none";

function onSubmit1() {

    var a = document.getElementById('password').value;
    let myString = a;
    let encodedValue = btoa(myString);

    if (encodedValue == "QXNwITc0MjY3MkAk" ) {
        window.ProtectedDiv.style.display="block"; 
        document.getElementById("passwordheading").innerHTML = "Section has been opened";
        document.getElementById("passwordheading").style.color = "#0bceaf";
        document.getElementById("lockerSection").style.display = "none";
        document.getElementById("GetPass").style.display = "none";

        

        // When User Submitted Rignt Password
        swal({
            title: "Successed",
            text: "Permission Granted",
            icon: "success",
            button: "Ok",
          });
    }

    // When User Submitted Wrong Password
    else if (encodedValue != "QXNwITc0MjY3MkAk") {
        window.GetPass.style.display="block";
        window.Submited.style.display="none";
        swal({
            title: "Wrong Password",
            text: "Password Does Not Matched",
            icon: "warning",
            button: "Ok",
        });
    }

}




// When Filed is empty 

$("#Submited").click(function(){
    var password = $("#password").val();
    if(password == ''){
        window.GetPass.style.display="block";
        window.Submited.style.display="none";
        swal({
            title: "Field is Empty ",
            text: "Please Check The Field !",
            icon: "warning",
            button: "Ok",
          });
    }
});



// Call Second Button Here ................
function onSubmit2(){
    window.GetPass.style.display="none";
    window.Submited.style.display="block";
}