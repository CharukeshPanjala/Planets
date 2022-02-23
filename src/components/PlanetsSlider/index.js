import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import {BgContainer, Heading} from './styledComponents'

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <BgContainer data-testid="planets">
      <Heading>PLANETS</Heading>
      <Slider>
        {planetsList.map(eachItem => (
          <PlanetItem details={eachItem} />
        ))}
      </Slider>
    </BgContainer>
  )
}

export default PlanetsSlider
