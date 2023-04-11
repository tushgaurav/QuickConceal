var body = document.getElementsByTagName("body")[0];

var iframe = document.createElement("iframe");
iframe.src = "https://google.com";
iframe.style.width = "100%";
iframe.style.height = "100%";
iframe.style.position = "absolute";
iframe.style.top = "0";
iframe.style.left = "0";
iframe.style.zIndex = "9999";

body.appendChild(iframe);

iframe.style.display = "block";
