<?php
require_once "ModelBase.php";

class Potion extends ModelBase
{
    function __construct()
    {
        //Inicializamos el nombre de la tabla
        $this->table_name = 'ingredients';

        //Llamamos al constructor de la clase ModelBase
        parent::__construct();
    }
}

?>