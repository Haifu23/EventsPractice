function upDate(previewPic){
    var picture = previewPic.getAttribute("src");
    document.getElementById('image').innerHTML = previewPic.alt;
    document.getElementById('image').style.backgroundImage = "url(' " +picture+"')";
    }
function unDo(){
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML= "Hover over an image below to display here.";
    }