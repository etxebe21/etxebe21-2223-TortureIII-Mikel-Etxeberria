<?php
    require_once (__DIR__."/../controller/Controller.php");

    $result = $potion->getAll();

    //Devlvemos el resultado de la DB como JSON
    echo json_encode($result);

    ?>

