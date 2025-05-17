document.getElementById('subscribeBtn').addEventListener('click', function() {
    const emailInput = document.getElementById('emailInput');
    const confirmationMessage = document.getElementById('confirmationMessage');
  
    if (emailInput.value.trim() !== '') {
      confirmationMessage.classList.remove('hidden');
      // Optionally, clear the input field
      emailInput.value = '';
    } else {
      alert('Please enter your email address.');
    }
  });
  