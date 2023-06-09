document.addEventListener("DOMContentLoaded", function() {
    var imageUpload = document.getElementById("imageUpload");
    var memeImage = document.getElementById("memeImage");
    var topText = document.getElementById("topText");
    var bottomText = document.getElementById("bottomText");
    var downloadBtn = document.getElementById("downloadBtn");

    imageUpload.addEventListener("change", function() {
        var reader = new FileReader();

        reader.onload = function(e) {
            memeImage.src = e.target.result;
        };

        reader.readAsDataURL(this.files[0]);
    });

    downloadBtn.addEventListener("click", function() {
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        var memeContainer = document.getElementById("memeImageContainer");

        canvas.width = memeContainer.offsetWidth;
        canvas.height = memeContainer.offsetHeight;

        context.drawImage(memeImage, 0, 0, memeContainer.offsetWidth, memeContainer.offsetHeight);

        context.font = "30px Arial";
        context.fillStyle = "white";
        context.shadowColor = "black";  // Set the shadow color to black
        context.shadowBlur = 5;  // Set the blur level of the shadow
        context.shadowOffsetX = 2;  // Set the horizontal offset of the shadow
        context.shadowOffsetY = 2;  // Set the vertical offset of the shadow
        context.textAlign = "center";


        var topTextY = 50;
        var bottomTextY = memeContainer.offsetHeight - 50;

        watermark
        context.fillText(topText.value, canvas.width / 2, topTextY);
        context.fillText(bottomText.value, canvas.width / 2, bottomTextY);

        var link = document.createElement("a");
        link.href = canvas.toDataURL();
        // link.download = "meme_rusulazom_me.png";
        var link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');

        // Get the current date and time in milliseconds
        var currentDate = new Date();
        var timestamp = currentDate.getTime();

        // Format the timestamp as "digit of today data_times(secon)"
        var filename = "rusulazom_me_" + timestamp + ".png";
        

        link.download = filename;


        link.click();
        // reset previous value 
        topText.value = "";
        bottomText.value = "";
    });
});
