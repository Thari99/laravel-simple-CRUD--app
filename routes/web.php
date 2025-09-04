<?php

use App\Http\Controllers\ProfileController;
use App\Models\Category;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Categories\CategoriesController;
use App\Http\Controllers\Products\ProductController;
use App\Models\Product;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {

    #Route :: resource('categories', CategoryController::class);
    Route :: get('/categories', [CategoriesController::class,'index'])->name('categories.index');
    Route :: get('/categories/creatre', [CategoriesController::class,'create'])->name('categories.create');
    Route :: get('/categories/{id}', [CategoriesController::class,'show'])->name('categories.show');
    Route :: get('/categories/{id}/edit', [CategoriesController::class,'edit'])->name('categories.edit');
    Route :: post('/categories/store', [CategoriesController::class,'store'])->name('categories.store');
    Route :: patch('/categories/{id}/update', [CategoriesController::class,'update'])->name('categories.update');
    Route :: delete('/categories/{id}/delete', [CategoriesController::class,'destroy'])->name('categories.destroy');

    Route :: get('/products', [ProductController::class,'index'])->name('products.index');
    Route :: get('/products/creatre', [ProductController::class,'create'])->name('products.create');
    Route :: get('/products/{id}', [ProductController::class,'show'])->name('products.show');
    Route :: get('/products/{id}/edit', [ProductController::class,'edit'])->name('products.edit');
    Route :: post('/products/store', [ProductController::class,'store'])->name('products.store');
    Route :: patch('/products/{id}/update', [ProductController::class,'update'])->name('products.update');
    Route :: delete('/products/{id}/delete', [ProductController::class,'destroy'])->name('products.destroy');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
