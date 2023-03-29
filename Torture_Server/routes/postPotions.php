<?php
    require_once (__DIR__."/../controller/Controller.php");


    if(isset($_POST['name']) && isset($_POST['effects']) && isset($_POST['value']) && isset($_POST['image']) && isset($_POST['weight']))
    {
        //Si se reciben todos los datos por POST creamos nuestro onjeto Classic
        $newPotion['name']   = $_POST['name'];
        $newPotion['effects']  = $_POST['effects'];
        $newPotion['value']  = $_POST['value'];
        $newPotion['image']  = $_POST['image'];
        $newPotion['weight']  = $_POST['weight'];

        //Añadimos el nuevo objeto a la BD
        $returnValue = $potion->addNew($newPotion);

        if($returnValue == FALSE)
        {
            echo "Error en la introduccion de nuevo elemento en la BD";
        }
        else
        {
            //Devolvemos el resultado añadido de la BD como Json
            echo json_encode($newPotion);
        }
    }
    else
        {
            die("Forbidden");
        }
    
    ?>