import React from 'react'
import Link from 'next/link';

export default function Header() {
  return (
    <>
    <nav class="py-2 bg-light border-bottom">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item"><Link href="/" class="nav-link link-dark px-2 active" aria-current="page">Home</Link></li>
        <li class="nav-item"><Link href="/store" class="nav-link link-dark px-2">Store</Link></li>
        <li class="nav-item"><Link href="/blog" class="nav-link link-dark px-2">Blog</Link></li>
      </ul>
      <ul class="nav">
        <li class="nav-item"><Link href="/signin" class="nav-link link-dark px-2">Login</Link></li>
        <li class="nav-item"><Link href="/signup" class="nav-link link-dark px-2">Sign up</Link></li>
      </ul>
    </div>
  </nav>

  <header class="py-3 mb-4 border-bottom">
    <div class="container d-flex flex-wrap justify-content-center">
      <Link href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><Link href="#bootstrap"></Link></svg>
        <span class="fs-4">Ecommerce</span>
      </Link>
      <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
        <input type="search" class="form-control" placeholder="Search Product" aria-label="Search"/>
      </form>
    </div>
  </header>


    </>
  )
}
