/*
 * We perform specific actions based on the current web page's pathname
 */

// Buttons links styles
const generalStyles =
    "pr-2 pl-6 py-3 rounded-r-2xl font-medium text-sm transform active:scale-95 transition-transform ";
const isSelectedClass = generalStyles + "bg-blue-2 text-blue";
const isNotSelectedClass =
    generalStyles + "hover:bg-gray-4 hover:dark:bg-gray-3";

// Current pathname
const pathname = window.location.pathname;
// Current pathname plus hash if it exists
let fullPathname = pathname;

// Menus with links
const rightMenu = document.getElementById("right-menu");
const rightMenuLinkButtons = Array.from(rightMenu.querySelectorAll("a"));
const leftMenu = document.getElementById("left-menu");
const leftMenuLinkButtons = Array.from(leftMenu.querySelectorAll("a"));
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuLinkButtons = Array.from(mobileMenu.querySelectorAll("a"));

function setStylesButtonLinks(buttonLinks) {
    buttonLinks.forEach(function (button) {
        const buttonHref = "/" + button.href.split("/").slice(3).join("/");
        if (buttonHref === fullPathname || buttonHref === pathname) {
            button.className = isSelectedClass;
        } else {
            button.className = isNotSelectedClass;
        }
    });
}

function actionByPathname() {
    // Check if URL has an ID reference
    if (window.location.hash) {
        // Remove "#" from start of ID
        const targetId = window.location.hash.slice(1);

        // Add hash in fullpathname
        fullPathname = pathname + "#" + targetId;

        // Find the element with the current ID
        const targetElement = document.getElementById(targetId);

        // If the element exists, move and add links buttons styles
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Set menus buttons links styles
    setStylesButtonLinks(leftMenuLinkButtons);
    setStylesButtonLinks(rightMenuLinkButtons);
    setStylesButtonLinks(mobileMenuLinkButtons);
}

// Listen if hash change in path
window.addEventListener("hashchange", actionByPathname);

actionByPathname();
