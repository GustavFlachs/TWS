<?php
session_start();
if (isset($_SESSION['login'])){
    if ($_SESSION['login']!='admin'){
        header("Location: login.php");
    }
}
?>