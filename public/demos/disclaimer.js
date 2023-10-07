const styles = `
@import url("https://use.typekit.net/zed3ngu.css");

.disclaimer-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 1000;
  font-family: open-sans, sans-serif;
  font-weight: 400;
  font-style: normal;
  background-color: rgba(51, 51, 51, 0.95);
  color: white;
  padding: 20px;
  margin-top: 0;
}

.disclaimer-banner-buttons {
  margin-right: 70px;
  margin-left: 10px;
  align-items: center;
}

.disclaimer-banner-close {
  font-size: 1.2rem;
  margin-left: 10px;
}

.disclaimer-banner a {
  color: white;
  text-decoration: none;
}

.disclaimer-banner a:hover {
  cursor: pointer;
  border-bottom: 2px dotted #018281;
}

.disclaimer-banner-text-bold {
  font-family: open-sans, sans-serif;
  font-weight: 700;
  font-style: normal;
}
`;

const disclaimerHTML = `
<span class="disclaimer-banner-text">
<span class="disclaimer-banner-text-bold">Please note:</span>
This site has been created as a part of a portfolio project, and may not feature real or accurate information.
</span>
<div class="disclaimer-banner-buttons">
<a id="disclaimer-banner-buttons-read-more" target="_blank" href="#">Read more</a>
<a class="disclaimer-banner-close" onclick="closeDisclaimer()">&times;</a>
</div>
`;

let disclaimer;

window.onload = function(){
  // Add CSS
  var styleSheet = document.createElement("style");
  styleSheet.innerHTML = styles;
  document.head.appendChild(styleSheet);

  // Add HTML if the bar needs to be shown.
  // Check if window is NOT in an iframe
  if ( window.location === window.parent.location ) {
    // Check if user has hidden the disclaimer.
    if (!getCookieValue("disclaimerHidden")) {
        // Create object to add.
        disclaimer = document.createElement("div");
        disclaimer.classList.add("disclaimer-banner");
        disclaimer.id = "disclaimer-banner";
        disclaimer.innerHTML = disclaimerHTML;

        // Add object at the place of this script reference.
        let script = document.getElementById("disclaimer");
        script.parentNode.insertBefore(disclaimer, script);
        
        // Set go-back destination.
        let path = window.location.pathname;
        let projectType;

        // Remove /demos/(portfolio or blog)/
        if (path.match(/^(\/demos\/portfolio\/)/)) {
        path = path.replace(/^(\/demos\/portfolio\/)/g, "");
        projectType = "portfolio";
        }
        else {
        path = path.replace(/^(\/demos\/blog\/)/g, "");
        projectType = "blog";
        }

        // Remove everything after the /.
        path = path.replace(/(\/.*$)/g, "");
        console.log("Demo name: " + path);
        console.log("Demo type: " + projectType);

        const readMore = document.getElementById("disclaimer-banner-buttons-read-more");
        readMore.href = window.location.origin + `/${projectType}/${path}/`;
    }
  }
}

// Handle close button operations.
function closeDisclaimer() {
  // Add a cookie to remember user preference.
  document.cookie = "disclaimerHidden=true";
  disclaimer.style.display = "none";
}

// Get the value that a key-value pair for a cookie holds...
// Adapted from Coder Rocket Fuel for binary values.
// src: https://coderrocketfuel.com/article/how-to-create-read-update-and-delete-cookies-in-javascript
function getCookieValue(name) {
  const nameString = name + "=";

  const value = document.cookie.split(";").filter(item => {
    return item.includes(nameString);
  })

  if (value.length) {
    return value[0].substring(nameString.length, value[0].length);
  } else {
    return false;
  }
}