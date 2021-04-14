import Head from 'next/head'
import Link from 'next/link';

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>lorem, ipsum dolor sit amet consectetur adipisicing elit. Nuquam facilis cum, voluptatibus</p>
      <p>lorem, ipsum dolor sit amet consectetur adipisicing elit. Nuquam facilis cum, voluptatibus</p>
      <p>lorem, ipsum dolor sit amet consectetur adipisicing elit. Nuquam facilis cum, voluptatibus</p>

      <Link href="/apps">
        <a>See my apps list</a>
      </Link>
    </div>
  )
}
