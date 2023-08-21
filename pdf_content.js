function addCustomButton() {
    const button = document.createElement("button");
    button.textContent = "Open in Pond";
    button.style.backgroundColor = "blue";
    button.style.color = "white";
    button.style.padding = "5px 10px";
    button.style.position = "fixed";
    button.style.top = "60px";
    button.style.right = "10px";
    button.style.border = "none";
    button.style.borderRadius = "20px";

    const currentUrl = encodeURIComponent(window.location.href);
    button.addEventListener("click", () => {
        const urlToOpen = 'https://app.entepond.com/upload/' + currentUrl;
        window.open(urlToOpen, '_blank');
    });

    const toolbar = document.querySelector("body");
    if (toolbar) {
      toolbar.appendChild(button);
    }
  }

window.addEventListener("load", addCustomButton);
