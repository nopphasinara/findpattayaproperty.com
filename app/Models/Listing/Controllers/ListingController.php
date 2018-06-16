<?php

namespace App\Models\Listing\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

//
use \App\Models\Listing\Listing;

class ListingController extends Controller
{
    //
    public $model;
    
    public function __construct()
    {
      $this->model = new Listing;
    }
    
    public function index()
    {
      echo '<pre>'; print_r($this->model->all()->toArray()); echo '</pre>';
    }
}
