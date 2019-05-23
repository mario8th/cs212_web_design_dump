<!DOCTYPE html>
<html>
   <body>
      <?php
      if (!isset($_COOKIE["color"])) {
         echo "Cookie named 'color' is not set!";
      }
      else {
         $color = $_COOKIE["color"];
         echo "<style> p {";
         echo "background-color:".$color;
         echo "} </style>";
      }
      ?>
      <h1>Test Color Page</h1>
      <p>This is paragraph #1</p>
      <h6>This is a header</h6>
      <p>This is paragraph #2</p>
   </body>
</html>
