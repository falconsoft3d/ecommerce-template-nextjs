import React from 'react'
import Link from 'next/link';

export default function PopularProducts() {
  return (
    <div className='popular-products'>
    <div class="row mt-4">
        <div class="col-md-6">
            <h3 class="section-title">Popular Products</h3>
        </div>

        <div class="col-md-6 text-end">        
            <Link href="/shop" class="btn btn-outline-primary float-right">Ver Todo</Link>
        </div>
    </div>


    <div class="row mt-4">
        <div class="col-md-3">
            <div class="card card-product-grid">
                <Link href="/product" class="img-wrap"> <img src="/img/products/400.jpeg"/> </Link>
                <figcaption class="info-wrap">
                    <Link href="/product" class="title">Bose Headphones</Link>
                    <div class="price mt-1">$299.00</div>
                </figcaption>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card card-product-grid">
                <Link href="/product" class="img-wrap"> <img src="/img/products/500.jpeg"/> </Link>
                <figcaption class="info-wrap">
                    <Link href="/product" class="title">Bose Headphones</Link>
                    <div class="price mt-1">$299.00</div>
                </figcaption>
            </div>
        </div> 
        <div class="col-md-3">
            <div class="card card-product-grid">
                <Link href="/product" class="img-wrap"> <img src="/img/products/700.jpeg"/> </Link>
                <figcaption class="info-wrap">
                    <Link href="/product" class="title">Bose Headphones</Link>
                    <div class="price mt-1">$299.00</div>
                </figcaption>
            </div>
        </div> 
        <div class="col-md-3">
            <div class="card card-product-grid">
                <Link href="/product" class="img-wrap"> <img src="/img/products/800.jpeg"/> </Link>
                <figcaption class="info-wrap">
                    <Link href="/product" class="title">Bose Headphones</Link>
                    <div class="price mt-1">$299.00</div>
                </figcaption>
            </div>
        </div>     
    </div>

    <div class="row mt-4">
        <div class="col-md-3">
            <div class="card card-product-grid">
                <Link href="/product" class="img-wrap"> <img src="/img/products/1001.jpeg"/> </Link>
                <figcaption class="info-wrap">
                    <Link href="/product" class="title">Bose Headphones</Link>
                    <div class="price mt-1">$299.00</div>
                </figcaption>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card card-product-grid">
                <Link href="/product" class="img-wrap"> <img src="/img/products/1002.jpeg"/> </Link>
                <figcaption class="info-wrap">
                    <Link href="/product" class="title">Bose Headphones</Link>
                    <div class="price mt-1">$299.00</div>
                </figcaption>
            </div>
        </div> 
        <div class="col-md-3">
            <div class="card card-product-grid">
                <Link href="/product" class="img-wrap"> <img src="/img/products/1004.jpeg"/> </Link>
                <figcaption class="info-wrap">
                    <Link href="/product" class="title">Bose Headphones</Link>
                    <div class="price mt-1">$299.00</div>
                </figcaption>
            </div>
        </div> 
        <div class="col-md-3">
            <div class="card card-product-grid">
                <Link href="/product" class="img-wrap"> <img src="/img/products/1006.jpeg"/> </Link>
                <figcaption class="info-wrap">
                    <Link href="/product" class="title">Bose Headphones</Link>
                    <div class="price mt-1">$299.00</div>
                </figcaption>
            </div>
        </div>     
    </div> 




    </div>



  )
}
