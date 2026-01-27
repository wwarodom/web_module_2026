export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>
        Login Layout
        {children}
    </>
}