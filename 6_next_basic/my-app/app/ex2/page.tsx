"use client"
import { useTransition } from "react"
import submitName from "../ex1/action"
import { STYLE } from "@/constants/type"

export default function Ex2() {
    const [isPending, startTransition] = useTransition()

    async function handleSubmit(formData: FormData) {
        startTransition(async () => {
            await submitName(null, formData)
        })
    }

    return (
        <div>
            <form className={STYLE} action={handleSubmit}>
                <input className={STYLE} name="name" />
                <button className={STYLE} disabled={isPending}>
                    {isPending ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    )
}
