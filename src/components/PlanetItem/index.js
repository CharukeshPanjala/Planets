import {PlanetContainer, ImageContainer, Heading} from './styledComponents'

const PlanetItem = props => {
  const {details} = props
  return (
    <PlanetContainer>
      <ImageContainer src={details.imageUrl} alt={`planet ${details.name}`} />
      <Heading>{details.name}</Heading>
      <Heading as="p">{details.description}</Heading>
    </PlanetContainer>
  )
}

export default PlanetItem
