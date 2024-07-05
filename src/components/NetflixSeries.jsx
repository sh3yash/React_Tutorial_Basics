
import seriesData from "../api/seriesData.json"
import New_Card from './New_Card'

const NetflixSeries = () => {
    return (
    <>
        <ul className="grid grid-three-cols">
            {seriesData.movies.map((currElem)=>(
                <New_Card key={currElem.id} currElem={currElem} />
            ))
            }
        </ul>
    </>   
    
    )
}

export default NetflixSeries