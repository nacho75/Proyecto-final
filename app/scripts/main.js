$("#formregistro").validate({
     onkeyup: false,
     onfocusout: false,
     onclick: false,
     rules: {
         usuario: {
             required: true
         },
         equipo: {
             required: true
         },
         email: {
             required: true,
             minlength: 4,
             email: true,
             remote: "php/validar_email_db.php"
         },
         password: {
             required: true
         }
     }
});

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