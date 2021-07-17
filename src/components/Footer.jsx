import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
   <div class="footer_total">
   <div class="footer_credit"><p> Content credits: <a href="https://www.instagram.com/call__me_sajid/">   Shaik Sajid</a></p></div>
   
    <footer>
    
      <p>Copyright ⓒ {year}</p>
    </footer>
    </div>
  );
}

export default Footer;
