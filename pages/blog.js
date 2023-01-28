import BasicLayout from "../src/layouts/BasicLayout";
import Image from 'next/image'

export default function Home() {
  return (
      <BasicLayout className="home">
            <h1>Blog</h1>
      </BasicLayout>
  )
}