//JS for mobile toggle -->
 
  // Mobile menu toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // When menu item clicked (close menu)
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });

    
    document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault();

      // Collect form data
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();

      // Basic validation
      if (!name || !email || !phone || !message) {
        alert("Please fill in all fields.");
        return;
      }

      // Example action: display the data (you can replace this with an API call)
      console.log("Form Submitted", { name, email, phone, message });
      alert("Thank you! Your message has been submitted.");

      // Optionally reset the form
      event.target.reset();
    });
    //Contact section
    document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault(); // stop form from submitting immediately

      // get values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();

      // basic validation
      if (!name || !email || !phone || !message) {
        alert(" All Fields are Mendatory.");
        return;
      }

      // phone number validation
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
      }

      // success message
      alert("✅ Thank you! submitted successfully.");
      // optionally reset form
      document.getElementById("contactForm").reset();
    });

    const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', function() {
    // Remove active from all links
    links.forEach(l => l.classList.remove('text-yellow-400'));
    // Add active to clicked link
    this.classList.add('text-yellow-400');
  });
});
   