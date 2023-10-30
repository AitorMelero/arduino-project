/*
 * Change the right menu link buttons dynamic in scroll page
 */

// Buttons links styles
const generalStyles =
    "max-sm:truncate max-sm:min-h-[44px] pr-2 pl-6 py-3 rounded-r-2xl font-medium text-sm transform active:scale-95 transition-transform ";
const isSelectedClass = generalStyles + "bg-blue-2 text-blue";
const isNotSelectedClass =
    generalStyles + "hover:bg-gray-4 hover:dark:bg-gray-3";

// All right menu link buttons
const rightMenu = document.getElementById("right-menu");
const rightMenuLinkButtons = Array.from(rightMenu.querySelectorAll("a"));

// Get all elements from ".arduino-article" class
const arduinoArticleElements =
    document.querySelector(".arduino-article").children;

// List with all arduino article elements visible in current moment
let visiblesElements = new Array(arduinoArticleElements.length).fill(null);

// Change styles in link buttons when visibles elements change
function paintFirstVisibleElement(element, position) {
    // Get current visible index
    const currentVisibleIndex = visiblesElements.indexOf(
        visiblesElements.find((vElement) => vElement)
    );

    // Insert new value
    visiblesElements[position] = element;

    // Get posible new current visible index
    const newCurrentVisibleIndex = visiblesElements.indexOf(
        visiblesElements.find((vElement) => vElement)
    );

    // If there is new current visible value
    if (currentVisibleIndex !== newCurrentVisibleIndex) {
        rightMenuLinkButtons.forEach(function (linkButton) {
            if (linkButton.hash === visiblesElements[newCurrentVisibleIndex]) {
                linkButton.className = isSelectedClass;
            } else {
                linkButton.className = isNotSelectedClass;
            }
        });
    }
}

// Observe when an element is or not visible
function elementoTocaHeader(entries, observer) {
    const arrayElements = Array.from(arduinoArticleElements);
    entries.forEach((entry) => {
        const i = arrayElements.indexOf(entry.target); // Encuentra el índice del elemento
        if (i !== -1) {
            if (entry.isIntersecting) {
                // The element is visible
                const elementId = "#" + entry.target.id;
                paintFirstVisibleElement(elementId, i);
            } else {
                // The element is not visible
                paintFirstVisibleElement(null, i);
            }
        }
    });
}

// Intersection Observer options
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
};

// Add observer in all arduino article elements
for (let i = 0; i < arduinoArticleElements.length; i++) {
    const observer = new IntersectionObserver(elementoTocaHeader, options);
    observer.observe(arduinoArticleElements[i]);
}
