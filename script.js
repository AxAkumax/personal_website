// Wait for page to load
window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");
  
    // Add a slight delay for better UX
    setTimeout(() => {
      loadingScreen.style.display = "none"; // Hide the loading screen
      mainContent.style.display = "block"; // Show the main content
    }, 2000); // 1 second delay
  });