import './index.css'

const DestinationItem = props => {
  const {itemObj} = props
  const {name, imgUrl} = itemObj
  return (
    <li>
      <img className="destination-img" src={imgUrl} alt={name} />
      <p className="destination-para">{name}</p>
    </li>
  )
}

export default DestinationItem
