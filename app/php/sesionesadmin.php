<?php
 session_start();
 if ($_SESSION['usuarios']!="admin") {
                      header("Location: index.html");
         }
?>