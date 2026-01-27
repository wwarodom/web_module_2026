import Nav from "@/components/nav";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>
        ==== User Layout =====
        <Nav />
        {children}
    </>
}