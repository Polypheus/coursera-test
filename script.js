function redirectToPage() {
    // Change the URL to the desired destination
    window.location.href = "page2.html";
  }

  document.addEventListener("DOMContentLoaded", function() {
    // Automatically redirect after a delay (e.g., 2 seconds)
    setTimeout(redirectToPage, 5000);
  });

  