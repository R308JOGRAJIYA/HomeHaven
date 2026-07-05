<?php 
include ("header.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="contact.css">
</head>
<body>
    <form onsubmit="return validateForm()">
        <input type="name" id="name" placeholder=" Enter Name"><br>
        <input type="email" id="email" placeholder=" Enter Email"><br>
        <input type="sub" id="subject" placeholder=" Enter Subject"><br>
        <textarea id="message" placeholder=" Enter Message"></textarea><br>
        <input type="submit" value="Submit">
    </fomr>
    <script src="contact.js"></script>
</body>
</html>