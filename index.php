<!DOCTYPE html>
<html>
<head>
    <title>Meme Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.5.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="meme.css">
</head>
<body>
    <div class="container">
        <h1 class="text-center">Meme Generator</h1>
        <div class="upload-section text-center">
            <input type="file" id="imageUpload" accept="image/*">
        </div>
        <div class="meme-container text-center">

            <!-- Color Picker -->
            <div id="memeImageContainer">
                <img id="memeImage" src="" alt="" style="width: 500px; height: auto;">
                <div id="memeTextContainer">
                    <input type="text" id="topText" placeholder="Top Text" class="form-control mb-2">
                    <input type="text" id="bottomText" placeholder="Bottom Text" class="form-control mb-2">
                </div>
            </div>
            <!-- Color Picker -->
            <!-- <div id="memeTextContainer">
                <input type="text" id="topText" placeholder="Top Text" class="form-control mb-2">
                <input type="text" id="bottomText" placeholder="Bottom Text" class="form-control mb-2">
                <input type="color" id="textColor" value="#ffffff" class="form-control mb-2">
            </div> -->
        </div>
        <div class="spacingArea">
            <!-- specing area -->
        </div>
        <div class="downloadbtn ">
            <button id="downloadBtn" class="btn btn-primary pt-5">Download Meme</button>
        </div>
    </div>
    <script src="meme.js"></script>
</body>
</html>
