export default function submitName(prevState: unknown, formData: FormData) {
    const name = formData.get("name") as string
    console.log("Name: ", name)

    if (name.length < 3)
        return {
            error: "Name length must be greater than 3 characters ",
            message: ""
        }

    return {
        error: "",
        message: { name }
    }
}