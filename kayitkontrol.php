<?php
session_start();
$username = $_POST['username'];
$password = $_POST['password'];

if ($username == "b221210028@sakarya.edu.tr" && $password == "b221210028") {
    header("Location: webproje.html");
    exit;
} else if ($username == "" || $password == "") {
    $_SESSION['login_error'] = 'Kullanıcı adı ve şifre boş bırakılmamalıdır!!';
    echo '<script>alert("Kullanıcı adı ve şifre boş bırakılmamalıdır!!");</script>';
    echo '<script>window.location.href = "login.html";</script>';
    exit;
} else {
    $_SESSION['login_error'] = 'Kullanıcı adı ve şifre yanlış!!';
    echo '<script>alert("Kullanıcı adı ve şifre yanlış!!");</script>';
    echo '<script>window.location.href = "login.html";</script>';
    exit;
}
?>
