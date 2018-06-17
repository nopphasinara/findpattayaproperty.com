<?php

namespace App\Models\Listing\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

//
use App\Models\Listing\Listing;

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
      return view('frontend.pages.listings')->with([
        'listings' => $this->model->all(),
      ]);
    }
}
