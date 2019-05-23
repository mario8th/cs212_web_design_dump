<!DOCTYPE html>
<html>
<head>
   <title>Select rows from the painters table</title>
</head>
<body>
   <table border="1">
   <tr>
      <th> Book ID </th>
      <th> Book Title </th>
      <th> Book First Author </th>
      <th> Book Year </th>
   </tr>
   <?php
      $conn = mysqli_connect("tund.cefns.nau.edu", "cs212_gdv4", "123456", "cs212_gdv4");
      if (!$conn) {
         echo "Error: Unable to connect to MySQL." . "<br>";
         exit;
      }
      else {
         echo "Success: A proper connection to MySQL was made!" . "<br>";
      }

      $sql = "SELECT BookID, BookTitle,BookFirstAuthor, BookYear FROM book;";
      $result = mysqli_query($conn, $sql);

      while ($row = mysqli_fetch_assoc($result)) {
         echo "<tr>";

         echo "<td>";
         echo $row["BookID"];
         echo "</td>";

         echo "<td>";
         echo $row["BookTitle"];
         echo "</td>";

         echo "<td>";
         echo $row["BookFirstAuthor"];
         echo "</td>";

         echo "<td>";
         echo $row["BookYear"];
         echo "</td>";

         echo "</tr>";
      }
      mysqli_close($conn);
      ?>
   </table>
</body>

</html>
