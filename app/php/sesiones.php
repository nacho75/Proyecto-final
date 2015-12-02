<?php
 session_start();
 if (!isset($_SESSION['usuarios'])) {
                  header("Location: ../index.html");
         }
?>