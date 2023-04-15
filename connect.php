<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    $item = $_POST['item'];
    

    // submitt these to database

    // Connect to database
    $servername = "localhost";
    $username = "new_user";
    $password = "password";
    $database = "Database";

    // Create a connection
    $conn = mysqli_connect($firstconnection,$new_user,$password,$Database);
    // Die if connection was not successfull
    if (!$conn){
        die("Failed to connect:".mysqli_connect_error());
    }
    else{
        echo "Connection was successfull<br>";

        //sql querry to be executed

        $sql = "INSERT INTO `Submitted Answers` (`Answer`, `Date`) VALUES ('$item', current_timestamp())";
        $result = mysqli_query($conn,$sql);

        // ADD NEW ANSWER

        if ($result){
            echo 'div class = "alert alert-success alert-dismissible fade show" role="alert">
            <strong>success!</strong> Your Answer Saved Successfully!
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            </button>
            </div>';

        }
        else{
            echo "Answer was not inserted because of this error --->". 
            mysqli_error($conn);
        }
    }
}

?>
