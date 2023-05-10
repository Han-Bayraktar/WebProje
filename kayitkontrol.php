<?php
session_start();
// Kullanıcı adı ve şifreyi atama
$username = $_POST['username'];
$password = $_POST['password'];

// Kullanıcı adı ve şifre doğruysa, webproje.html'e yönlendir
if ($username == "b221210028@sakarya.edu.tr" && $password == "b221210028") {
    header("Location: webproje.html");
    exit;
} else if ($username == "" || $password == "") {
    // Kullanıcı adı veya şifre boşsa, uyarı mesajı oluştur
    $_SESSION['login_error'] = 'Kullanıcı adı ve şifre boş bırakılmamalıdır!!';
    echo '<script>alert("Kullanıcı adı ve şifre boş bırakılmamalıdır!!");</script>';
    echo '<script>window.location.href = "login.html";</script>';
    exit;
} else {
    // Kullanıcı adı veya şifre yanlışsa, uyarı mesajı oluştur
    $_SESSION['login_error'] = 'Kullanıcı adı ve şifre yanlış!!';
    echo '<script>alert("Kullanıcı adı ve şifre yanlış!!");</script>';
    echo '<script>window.location.href = "login.html";</script>';
    exit;
}
?>
