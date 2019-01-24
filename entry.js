require("./second.js");
require("!style-loader!css-loader!./style.css");
document.getElementById("app").innerHTML = "这是entry.js里的一段话";