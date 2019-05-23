<?php

// Connect to the database
$conn = mysqli_connect("tund.cefns.nau.edu", "cs212_gdv4", "123456", "cs212_gdv4");

if (!$conn) {
   echo "Error: Unable to connect to MySQL." . "<br>";
   exit;
}
else {
   echo "Success: A proper connection to MySQL was made!" . "<br>";
}

//Execute a SQL command
$sql = "DELETE FROM book WHERE BookID ='";
$sql = $sql . $_POST["bTitle"] . "' ;";

$result = mysqli_query($conn, $sql);

if ($result) {
   echo mysqli_affected_rows($conn) . " row(s) were deleted.<br>";
}
else {
   echo "Error executing DELETE.<br>";
   echo "Error message:" . mysqli_error($conn);
}

//Close the connection
mysqli_close($conn);
