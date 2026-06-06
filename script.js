// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {

  // Select our action elements
  const callLink = document.getElementById('btnCall');
  const messageLink = document.getElementById('btnMessage');
  const emailLink = document.getElementById('btnEmail');

  // Optional: Add logging/analytics trackers when clicked
  if (callLink) {
    callLink.addEventListener('click', () => {
      console.log('User initiated a phone call to 9782263181');
    });
  }

  if (messageLink) {
    messageLink.addEventListener('click', () => {
      console.log('User initiated an SMS message to 9782263181');
    });
  }

  if (emailLink) {
    emailLink.addEventListener('click', () => {
      console.log('User initiated an email to teammountain@googlemail.com');
    });
  }

});