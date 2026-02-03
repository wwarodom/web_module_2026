const URL = `http://localhost:4000/students`
const STYLE = `border m-2 p-2 shadow rounded text-gray font-bold`

export default async function Crud() {

    const getAllStudents = async () => {
        const response = await fetch(URL)
        const students = await (response.json())
        return students;
    }

    const getStudent = async (id: string) => {
        try {
            const response = await fetch(`${ URL }/${ id }`)
            if (!response.ok)
                throw new Error(`HTTP error! ${ response.status }`)
            const student = await response.json()
            return student
        }
        catch (error) {
            console.log("Failed to fetch students: ", error)
        }
    }

    const students = await getAllStudents()
    const student = await getStudent("0007")

    return <>
        <h1>CRUD </h1>
        <div>
            {student &&
                (<div>Student: {student.id}: {student.name}</div>)}
            <hr />
            <ul>
                {
                    students.map((item, index) =>
                    (<li key={index}>
                        {item.id}:{item.name}
                    </li>))
                }
            </ul>
        </div>

        <h1>Add</h1>
        <div>
            Name: <input
                className={STYLE}
                type="text" />
            <button
                className={STYLE}
            >Add</button>
        </div>
    </>
}