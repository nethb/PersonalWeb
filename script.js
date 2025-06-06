document.getElementById('feedback-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const feedback = document.getElementById('feedback').value;
      
      if (name && email && feedback) {
        alert(`Thank you, ${name}! Your feedback has been submitted.`);
        this.reset();
      } else {
        alert('Please fill out all fields.');
      }
 });