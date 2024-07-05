// by mistake name is taken as event propogation instead of eventprops
const EventPropogation = () => {


const HandleWelcomeUser = (user) => {
    alert(`hello ${user}`)
}

const handleHover = () => {
    alert("hover is done")
}

  return (
    <WelcomeUser onClick={()=> HandleWelcomeUser("Yash")}
        onMouseEnter={handleHover}
    
    />
  )
}

// eslint-disable-next-line react/prop-types
const WelcomeUser = ({onClick,onMouseEnter}) => {
    const consoleWelcome = () => {
        console.log(`hello everybody`)
    }
  return (
    <>
    <button onClick={onClick}>click here</button>
    <button onMouseEnter={onMouseEnter}>Hover me</button>
    <button onClick={consoleWelcome}>Hover me</button>
    </>
  )
}




export default EventPropogation

