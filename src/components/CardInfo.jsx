import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faTruckFast } from '@fortawesome/free-solid-svg-icons'

const CardInfo = ({icon, titulo, info}) => {
  return (
      <div className='bg-white flex flex-col items-center justify-center rounded-lg p-10 mx-3 shadow border-b-4 mb-5 md:mb-0'>
        <FontAwesomeIcon icon={icon} className='mb-10 text-5xl text-gray-600'/>
        <h2 className='uppercase text-xl font-bold'>{titulo}</h2>
        <p>{info}</p>
        {/* <FontAwesomeIcon icon={faThumbsUp} /> */}
      </div>
  )
}

export default CardInfo