import BasicLayout from "../src/layouts/BasicLayout";
import Image from 'next/image'

export default function Product() {
  return (
      <BasicLayout className="home">
        <div className="container">
            <div class="card m-4">
	<div class="row no-gutters">
		<aside class="col-md-6">
<article class="gallery-wrap"> 
	<div class="img-big-wrap m-2">
	   <img src="/img/products/800.jpeg"/>
	</div>
	
</article>
		</aside>
		<main class="col-md-6 border-left">
<article class="content-body">

<h2 class="title">Off-White Odsy-1000 Low-Top Sneakers</h2>

<div class="mb-3"> 
	<var class="price h4">299.00 €</var> 
</div> 

<p>Virgil Abloh’s Off-White is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown Odsy-1000 low-top sneakers.</p>

	<hr/>
	<a href="/product" class="btn btn-primary"> <span class="text">Add to cart</span> <i class="fas fa-shopping-cart"></i>  </a>

</article>
		</main>
	</div>
</div>
</div>
      </BasicLayout>
  )
}