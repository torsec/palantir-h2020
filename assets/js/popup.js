// Function to show the pop-up on page load
function showPopupOnLoad() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("body-document").classList.add("popup-overlay");
}

// Function to close the pop-up
function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("body-document").classList.remove("popup-overlay");
}

// Attach showPopupOnLoad function to the window's load event
window.onload = showPopupOnLoad;