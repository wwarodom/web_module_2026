import Link from "next/link";
import Image from "next/image"
import WindowsImage from "../images/window.svg"

export default () => <>
    <h1>Bar:r</h1>
    <Link href="/"> Home</Link>
    <Link href="/login">Login</Link>

    <img src="/next.svg" width="100" height="50" alt="next" />
    <Image src="https://computing.psu.ac.th/th/wp-content/uploads/2025/06/qr-code-1-300x300-1.png" alt="next" width={100} height={500} />
    <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Felis_silvestris_silvestris_small_gradual_decrease_of_quality_-_JPEG_compression.jpg/250px-Felis_silvestris_silvestris_small_gradual_decrease_of_quality_-_JPEG_compression.jpg"
        alt="next" width={50} height={50} />
    <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Felis_silvestris_silvestris_small_gradual_decrease_of_quality_-_JPEG_compression.jpg/250px-Felis_silvestris_silvestris_small_gradual_decrease_of_quality_-_JPEG_compression.jpg"
        alt="next" width={50} height={50} />

    <Image src={WindowsImage} alt="next" />
</>

// export default function Foo() {
//     return (<div>Foo</div>)
// }