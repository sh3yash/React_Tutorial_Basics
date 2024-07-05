import "./St_Card.css"

// eslint-disable-next-line react/prop-types
const St_Card = ({name,rollno,course,description,children}) => {
  return (
    <div className="main2">
        <h2>Name: {name}</h2>
        <h3>Roll No: {rollno}</h3>
        <h3>Course: {course}</h3>
        <div>
            description:{description}
        </div>
        <div>
            {children}
        </div>

    </div>

  )
}

export default St_Card