//import Swal from "sweetalert2"

const scriptURL = "https://script.google.com/macros/s/AKfycbyCWrg5vBZb-tqe1q7CuNFOhrS3eGGTEnP_PInn0KbDHZ_P-Gs3IiCKOt8SIpIWMrkm/exec";
const form = document.forms["submit-to-google-sheet"];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    var formData = new FormData(form)
    console.log("trying fetch")
    Swal.fire({title: "Sending", text: "Just one moment...", showConfirmButton: false})
    fetch(scriptURL, { method: "POST", body: formData, mode: "no-cors"})
    .then((response) => {
        Swal.fire({title: "Signed Up", text: "You're all set, see you there :D", icon: "success"});
        //window.alert("Done! See you there :D");
    })
    .catch((error) => {
        Swal.fire({title: "Something went wrong!", text: "This guy must not know how to code...", icon: "error"})
        //window.error("Something went wrong!");
    })
})