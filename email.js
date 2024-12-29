function sendMail(){
    let parms ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        area : document.getElementById("area").value,
        city : document.getElementById("city").value,
        phone : document.getElementById("phone").value,

    }

    emailjs.send('service_z0ccdnc', 'template_ynjavnl', parms).then(alert("Order Placed Successfully!!"))
}