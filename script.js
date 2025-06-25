document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('status');

  try {
    const response = await fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    });

    const data = await response.json();
    if (data.success) {
      status.textContent = 'Message sent successfully!';
      document.getElementById('contactForm').reset();
    } else {
      status.textContent = 'Something went wrong.';
    }
  } catch (error) {
    status.textContent = 'Error sending message.';
    console.error(error);
  }
});
