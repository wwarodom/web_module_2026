import { Bungee } from "next/font/google";
import Link from "next/link";

const bungee = Bungee({
  variable: "--font-bungee",
  subsets: ["latin"],
  weight: '400',
});

export default function Home() {
  return (<div
    className={`${ bungee.className } text-2xl m-2 border-2 bg-blue-100 p-2`}>
    Hello world!!

    <hr />
    <Link href="/login">Login</Link>
    <hr />
    <Link href="/user">User</Link>


  </div>)
}



// Arrow function
// const Home = () => <div className="text-2xl m-2">Hello world!!</div>

// export default Home



