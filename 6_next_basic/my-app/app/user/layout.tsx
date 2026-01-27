export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>
        User Layout
        {children}
    </>
}