// No Right Click For Jquery CDN and Sweet Alert CDN
// https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
//  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>



// Now Code Here.....

$(document).ready(function(){
    $('body').bind('cut copy paste', function(e){
        e.preventDefault();
    })
    $("body").on("contextmenu",function(){

        // For Sweet Alert No Right Click Start Here
        swal({
            title: "Warning !",
            text: "No Right Click ! This Content Are Protected",
            
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Good Decision", {
                icon: "success",
              });
            } else {
                swal("Write something here:", {
                    content: "input",
                  })
                  .then((value) => {
                    swal(`You typed: ${value}`);
                  });
            }
          });
        // Sweet Alert No Right Click End Here
        return false;
    })
})
