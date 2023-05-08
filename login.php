<?php
// Kullanıcı adı ve şifre kontrolü
if ($_POST["kullanici_adi"] == "b221210028@sakarya.edu.tr" && $_POST["sifre"] == "b221210028") 
{
	echo "Hoşgeldiniz b221210028 \"" . $_POST["kullanici_adi"] . "\"";
} else 
{
	header("Location: login.html");
	exit();
}

if (!filter_var($_POST["kullanici_adi"], FILTER_VALIDATE_EMAIL)) {
	header("Location: login.html");
	exit();
}
?>







