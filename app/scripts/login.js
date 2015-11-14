$("#formlogin").validate({
     onkeyup: false,
     onfocusout: false,
     onclick: false,
     rules: {
         usuario: {
             required: true
         },
         password: {
             required: true
         }
     }
});