<?php

$router->get('', 'controllers/index.php');
$router->get('redirect', 'controllers/redirect.php');
$router->get('persona', 'controllers/result.php');
$router->get('familia', 'controllers/result.php');
$router->get('barrio', 'controllers/result.php');
$router->get('entidad', 'controllers/result.php');
$router->get('alcalde', 'controllers/mayor.php');
$router->get('funcionario', 'controllers/edit.php');
$router->get('relacionar', 'controllers/link.php');