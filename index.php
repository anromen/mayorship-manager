<?php

require 'core/Router.php';
require 'core/Request.php';

$router = new Router;

require Router::load('routes.php')
  ->direct(Request::uri());