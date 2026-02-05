export default async function submitName(prevState: unknown, formData: FormData) {

    const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

    const name = formData.get("name") as string
    console.log("Name: ", name)

    await wait(3000)

    if (name.length < 3)
        return {
            error: "Name length must be greater than 3 characters ",
            message: { name: "" }
        }

    return {
        error: "",
        message: { name }
    }
}