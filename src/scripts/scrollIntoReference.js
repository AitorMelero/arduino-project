// Check if URL has an ID reference
if (window.location.hash) {
    // Remove "#" from start of ID
    const targetId = window.location.hash.slice(1);

    // Find the element with the current ID
    const targetElement = document.getElementById(targetId);

    // If the element exists, move
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
    }
}
