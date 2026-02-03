<?php
include("verify.php");
?><!DOCTYPE html >
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial scale=1.0">
    <title>Chráněná stránka</title>
</head>
<body>
    <H1>Chráněná stránka</H1>
    <a href="logout.php">Odhlásit</a>
    <form action="" method="post">
        <input type="text" name="data" placeholder="Zadejte data">
        <input type="password" name="heslo" placeholder="Zadejte heslo">
        <input type="submit" value="Odeslat">
    </form>
</body>
</html>