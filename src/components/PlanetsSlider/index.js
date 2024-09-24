// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const details = {
    centerPadding: '60px',
  }

  return (
    <div data-testid="planets" className="app-container">
      <Slider {...details}>
        {planetsList.map(eachDetail => (
          <PlanetItem key={eachDetail.id} planetDetails={eachDetail} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
