var numberOfScreenshots = 2; //To re-use this code in other depictions, I only need to change this variable

for (var i = 1; i <= numberOfScreenshots; i++) {
    var img = new Image();
    img.src = i.toString(10) + ".png";
    img.onclick = (function(i) {return function() { //in order to use the value of i in each loop iteration, you have to wrap the code like this
                   window.open(i.toString(10) + ".png");
    };})(i);
    
    var size = window.matchMedia("(min-width: 992px)"); //determine if the user is on a small screen or a big screen
    if (size.matches) { //large screen, so horizontally place the screenshots in a row
        img.style.maxWidth = "21%";
        img.style.marginLeft = "20px";
        img.style.marginRight = "20px";
        img.style.marginTop = "20px";
        img.style.marginBottom = "20px";
        document.body.appendChild(img);
    }
    else { //small screen, so vertically place the screenshots in a column
        img.style.maxWidth = "100%";
        document.body.appendChild(img);
        
        if (i != numberOfScreenshots) { //on small screens, we use breaks instead of margins to separate the screenshots
            var break1 = document.createElement('br');
            document.body.appendChild(break1);
            var break2 = document.createElement('br');
            document.body.appendChild(break2);
        }
    }
}
