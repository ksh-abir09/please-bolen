document.getElementById('nameForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('visitorName').value;
    
    // FormSubmit API ব্যবহার করে আপনার ইমেইলে ডাটা পাঠানো
    fetch("https://formsubmit.co/ajax/ksh06457@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: "Abreetti Babreeti's Real Name",
            message: nameInput
        })
    })
    .then(response => response.json())
    .then(data => {
        // ফর্ম হাইড করে থ্যাঙ্ক ইউ মেসেজ দেখানো
        document.getElementById('nameForm').classList.add('hidden');
        document.getElementById('thankYouMessage').classList.remove('hidden');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Ups! Kisu ekta ulta-palta hoyese, abar chesta koren।');
    });
});
