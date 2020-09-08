<?php 

$username="root";
$password="";
$local="localhost";
$database="resept";

try {
     $db = new PDO("mysql:host=$local;dbname=$database", "$username", "$password");
} catch ( PDOException $e ){
     print $e->getMessage();
}
$db->query("SET CHARACTER SET utf8");

?>