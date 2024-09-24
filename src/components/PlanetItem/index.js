// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="planet-container">
      <h1 className="heading">PLANETS</h1>
      <div className="img-container">
        <img className="image" src={imageUrl} alt={`planet ${name}`} />
      </div>
      <h1 className="planet-heading">{name}</h1>
      <p className="para">{description}</p>
    </div>
  )
}

export default PlanetItem
