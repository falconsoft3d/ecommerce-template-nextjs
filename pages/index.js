import BasicLayout from "../src/layouts/BasicLayout";
import Image from 'next/image'

export default function Home() {
  return (
      <BasicLayout className="home">
            <h1>Home</h1>
            <div className="container">
              <div className="intro-banner-wrap">
                  <Image src="/img/banner01.jpeg" class="img-fluid rounded"
                  width={1300} height={500}
                  alt="banner"/>
              </div>
            </div>
      </BasicLayout>
  )
}
