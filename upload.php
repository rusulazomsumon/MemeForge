<?php
if ($_FILES["imageUpload"]["error"] == UPLOAD_ERR_OK) {
    $tempName = $_FILES["imageUpload"]["tmp_name"];
    $uploadDir = "uploads/";
    $imageName = uniqid() . "_" . $_FILES["imageUpload"]["name"];
    $targetPath = $uploadDir . $imageName;

    if (move_uploaded_file($tempName, $targetPath)) {
        echo $targetPath;
    }
}
?>
