const button = document.createElement("a");
const currentUrl = encodeURIComponent(window.location.href);
button.setAttribute("href", `https://app.entepond.com/upload/${currentUrl}`);
button.setAttribute("target", "_blank");
button.textContent = "Open in Pond";
button.style.backgroundColor = "rgb(55, 124, 251)";
button.style.color = "white";
button.style.borderRadius = "2px";
button.style.padding = "4px";
const licenseButton = document.getElementsByClassName("full-text")[0];
const ul = licenseButton.children[3];

const li = document.createElement("li");
li.style.paddingTop="4px"
li.style.paddingBottom="4px"

li.appendChild(button);
ul.appendChild(li);
