//import Swal from "sweetalert2"

const scriptURL = "https://script.google.com/macros/s/AKfycbyCWrg5vBZb-tqe1q7CuNFOhrS3eGGTEnP_PInn0KbDHZ_P-Gs3IiCKOt8SIpIWMrkm/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    var formData = new FormData(form);
    
    form.reset();
    
    // 1. Show the loading state
    Swal.fire({title: "Sending", text: "Just one moment...", showConfirmButton: false});
    
    // 2. Fire the network request but DO NOT wait for it to resolve the UI
    fetch(scriptURL, { method: "POST", body: formData, mode: "no-cors"})
        .catch(error => {
            // This will only trigger if their internet goes completely offline
            console.error("Network error:", error); 
        });

    // 3. Fake a short, snappy processing time (e.g., 1.2 seconds) for good UX, 
    // then override the loading popup with the success message.
    setTimeout(() => {
        Swal.fire({title: "Signed Up", text: "You're all set, see you there :D", icon: "success"});
        form.reset(); // Automatically clear out the inputs
    }, 1200); 
});