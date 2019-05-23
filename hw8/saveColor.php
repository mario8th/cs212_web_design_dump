<!DOCTYPE html>
<html>
   <body>
      <?php
      $color = $_POST["color"];
      echo ("<h1> Color changed to ".$color."</h1>");
      setcookie("color", $color, time() + (86400 * 30), "/");
      ?>

      <a href="testColor.php">link to testColor for ease of use purposes</a>
   </body>
</html>
