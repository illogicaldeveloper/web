<?php

    $fileName = $_POST['file'];
    $saveData = $_POST['data'];
    
    file_put_contents( $fileName, $saveData );
    echo "done.";

?>