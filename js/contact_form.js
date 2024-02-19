// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

      form.classList.add('was-validated')
    }, false)
  })
})  ()


// JavaScript For Sweet Alert

$("#submit").click(function(){
    var fullname = $("#Name").val();
    var yourmail = $("#Email").val();
    var subject = $("#Subject").val();
    var phone = $("#Phone").val();
    var message = $("#Message").val();


    if(fullname == '' || yourmail == '' || subject == '' || phone == '' || message == ''){
        swal({
            title: "Fields Empty ",
            text: "Please Check the missing field!",
            icon: "warning",
            button: "Ok",
          });
    }
    // else{
    //     swal({
    //         title: "Successfully Submited",
    //         text: "Success Full Field",
    //         icon: "success",
    //         button: "Ok",
    //       });
    // }
});