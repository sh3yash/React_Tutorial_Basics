
import NetflixSeries from './components/NetflixSeries'
import './App.css'
import ToggleSwitch from './projects/Toggle/ToggleSwitch'
// import LiftStateUp from './components/hooks/LiftStateUp'
// import Statehook from './components/hooks/Statehook'
// import StateExample from './components/hooks/StateExample'



const App = () => {
  return (
    <section>
    <NetflixSeries/>
    {/* <Statehook/>
    <StateExample/> */}
    {/* <LiftStateUp/> */}
    <ToggleSwitch/>


    </section>
  )
}

export default App