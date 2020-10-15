function VERprocess(){
    var D =document.getElementById('Domain').text;
    var cc =document.getElementById("result").value='Verified last 4 of the cc and billing zip ';
    //Check box https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_display_checkbox_text
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
    text.style.display = "block";
    } else {
    text.style.display = "none";
     }