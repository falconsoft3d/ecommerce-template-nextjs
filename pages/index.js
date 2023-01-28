import BasicLayout from "../src/layouts/BasicLayout";
import Image from 'next/image'
import PopularProducts from "../src/components/PopularProducts";

export default function Home() {
  return (
      <BasicLayout className="home">
            <div className="container pt-4">
              <div className="intro-banner-wrap">
                  <Image src="/img/banner01.png" class="img-fluid rounded"
                  width={1300} height={500}
                  alt="banner"/>
              </div>

              <PopularProducts/>
                
            </div>
      </BasicLayout>
  )
}
