'use client'

import { useEffect, useState } from "react"

export default function UseEffectDemo() {

    const [a, setA] = useState(1)
    const [b, setB] = useState(2)

    // console.log("Component rendering")

    useEffect(() => {
        console.log("Component Did Mount")

        const id = setInterval(() => {
            console.log("Next.js is very easy")
        }, 1000)

        // for clean up every thing
        return () => {
            console.log("Component unmount!!")
            clearInterval(id)
        }
    }, [a, b])

    return <div className="border m-2 p-2">
        Use Effect
        <div>
            {a}
            <button
                className="border m-2 p-2"
                onClick={() => setA(a + 1)}>Add</button>
        </div>
        <div>
            {b}
            <button
                className="border m-2 p-2"
                onClick={() => setB(b + 1)}>Add</button>
        </div>
    </div>
}