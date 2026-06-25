console.log("DIN MAMMAAA")
import Swal from "sweetalert2"

const scriptURL = "https://script.google.com/macros/s/AKfycbyEtKwlX8akvz0ChmOil5ruIapsmaKyUUot1bFbuSOjt2vyiziCEudDq6YQdOKmrp59/exec";

const form = document.forms["submit-to-google-sheet"];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    var formData = new FormData(form)
    console.log("trying fetch")
    fetch(scriptURL, { method: "POST", body: formData})
    .then((response) => {
        Swal.fire({title: "NICE", text: "See you there!", icon: "success"});})
    .catch((error) => {
        Swal.fire({title: "Something went wrong!", text: "This guy must not know how to code...", icon: "error"})
    })
})