//allow cookies and cloes the popup
function cookiesAllow() {
    document.cookie = "Greating = Hello2";
    document.getElementById("popup").style.width = "0";
    document.getElementById("popup").style.display = "none";
   }

//deny cookies and close the popup
function cookiesDeny() {
    document.getElementById("popup").style.width = "0";
    document.getElementById("popup").style.display = "none";
   }

   