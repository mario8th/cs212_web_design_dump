<!DOCTYPE html>
<html>

<head>
   <title>Select a painter to delete</title>
</head>
<body>
<form method="post" action="deleteBook.php">
   <label for="bTitleID"> Book Title:</label>
   <select name="bTitle" id="bTitleID">
      <?php
      $conn = mysqli_connect("tund.cefns.nau.edu", "cs212_gdv4", "123456", "cs212_gdv4");
      $sql = "SELECT BookID, BookTitle FROM book;";
      $result = mysqli_query($conn, $sql);
      while ($row = mysqli_fetch_assoc($result)) {
         echo '<option value="' . $row["BookID"] . '">' . $row["BookTitle"] . '</option>';
      }
      mysqli_close($conn);
      ?>

   </select>
   <br>
   <input type="submit" name="Submit">

</form>
</body>
</html>
