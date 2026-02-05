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
    <H1></H1>
    <form action="odeslani.php" method="post">
        <input type="text" name="jmeno" id="" placeholder="Zadej své jméno"> <br>
        <input type="password" name="heslo" id="" placeholder="Zadejte své heslo"> <br>
        <input type="text" name="cislo" id="" placeholder="Zadejte své telefoní číslo"> <br>
        <input type="submit" value="Odeslat">
    </form>
    <?php
        if (isset($_GET['jmeno'])) {
            $jmeno = ($_GET['jmeno']);
            $heslo = ($_GET['heslo']);


            echo "<p>Děkujeme, uživateli se jménem $jmeno, za návštěvu našeho e-shopu!" ;
        }
        ?>
</body>
</html>