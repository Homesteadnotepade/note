function CopyClip() {
    var u = document.getElementById('USERID').innerText;
    var r = document.getElementById('result').innerText;
    var  holdtext
    var copytext
    var innerText
    holdtext.innerText = copytext.innerText;
    Copied = holdtext.createTextRange();
    Copied.execCommand("RemoveFormat");
    Copied.execCommand("Copy");
}