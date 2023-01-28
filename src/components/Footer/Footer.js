import React from 'react'
import Link from 'next/link';
import { signup } from '../../data/config';

export default function Footer() {
  return (
    <div className="container fixed-bottom">
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><Link href="/" className="nav-link px-2 text-muted">Home</Link></li>
        <li className="nav-item"><Link href="/shop" className="nav-link px-2 text-muted">Shop</Link></li>
        <li className="nav-item"><Link href="/blog" className="nav-link px-2 text-muted">Blog</Link></li>
        
        { signup == 'true' && <li className="nav-item"><Link href="/signup" className="nav-link px-2 text-muted">Register</Link></li>}
        

        <li className="nav-item"><Link href="/contact" className="nav-link px-2 text-muted">Contact</Link></li>
        <li className="nav-item"><Link href="/signin" className="nav-link px-2 text-muted">Login</Link></li>
      </ul>
      <p className="text-center text-muted">&copy; 2023 Ecommerce</p>
    </footer>
  </div>
  );
}