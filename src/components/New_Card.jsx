
import './New_Card.css'



const New_Card = (props) => {
  // eslint-disable-next-line react/prop-types
  const {image_url, name, rating, description, watch_url}=props.currElem;
  const ratingClass=rating>=8.5 ? "superhit" :"average";
  const buttonRatingClass=rating>=8.5 ? "superhit" :"average";

  return(


  
        <div className='card'>

        <div>
        <img id='a1' src={image_url} alt srcSet='GOT.webp' width='350cm'></img>
        </div>

        <h2>
            Name: {name}
        </h2>
        <h2>
            Rating: <span className={`rating ${ratingClass}`}>{rating}</span>
        </h2>
        <p>
            Description : {description}
        </p>

        <a href={watch_url} target='_blank'>
          <button className={`button-rating ${buttonRatingClass}`}>Watch Now</button>
        </a>

        </div>


  )
}

export default New_Card;