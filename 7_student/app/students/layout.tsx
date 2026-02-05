import Link from "next/link";
import { STYLE } from "@/constants/type"; 
import Login from "./LoginButton";


export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <nav className="mx-8 p-4">
                <Link className={STYLE} href="/students/">Home</Link>
                <Link className={STYLE} href="/students/register">Register</Link>
                <Link className={STYLE} href="/students/editStudent">Edit</Link>
                <Login />
            </nav>
            {children}
        </div>
    );
}
