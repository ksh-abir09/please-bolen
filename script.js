document.getElementById('nameForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const nameInput = document.getElementById('visitorName').value;
    
    // UI feedback so she knows it's working
    submitBtn.innerText = "Pathacchi... ⏳";
    submitBtn.style.opacity = "0.8";
    submitBtn.disabled = true;

    // Secure form data sending
    const formData = new FormData();
    formData.append('Message', "Congratulations, tar nam paoa gese! 🎉");
    formData.append('Name', nameInput);

    // Apnar email ekhane deoa ache
    fetch("https://formsubmit.co/ajax/ksh06457@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) return response.json();
        throw new Error('Network error');
    })
    .then(data => {
        // Form hide kore thank you message dekhano
        document.getElementById('nameForm').classList.add('hidden');
        document.getElementById('thankYouMessage').classList.remove('hidden');
        
        // EMOJI CHANGE LOGIC: 🤕 theke 😊 te change hobe
        document.getElementById('mainEmoji').innerText = '😊';
    })
    .catch(error => {
        console.error('Error:', error);
        submitBtn.innerText = "Submit Kore Den 🚀";
        submitBtn.style.opacity = "1";
        submitBtn.disabled = false;
        alert('Net-e ektu jhamela hocche bodhoy! Abar chesta koren.');
    });
});
