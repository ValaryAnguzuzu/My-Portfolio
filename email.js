
function sendMail() {
  let params = {
    subject: document.getElementById("subject").value,
    user_name: document.getElementById("name").value,
    user_email: document.getElementById("email").value,
    message: document.getElementById("content").value,
  };

  emailjs
    .send("service_sunckpq", "template_jwqty69", params)
    .then(alert("Message Sent Successfully!"));
}

function onSubmit(event) {
  event.preventDefault();
}

