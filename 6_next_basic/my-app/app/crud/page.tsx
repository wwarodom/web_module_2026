
const URL = `http://localhost:4000/students`

export default async function Crud() {

    const response = await fetch(URL)
    const students = await (response.json())

    return <>
        <h1>CRUD </h1>
        <div>
            {JSON.stringify(students)}
        </div>
        <div>
            <ul>
                {
                    students.map((item, index) =>
                        (<li key={index}>
                            {item.id}:{item.name}
                        </li>))
                }
            </ul>
        </div>
    </>
}