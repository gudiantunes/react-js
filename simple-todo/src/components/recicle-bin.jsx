import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const RecBin = ({onClick}) => {
    return ( 
        <div className="btn trashCan" onClick={onClick}>
            <FontAwesomeIcon icon={faTrashCan}/>
        </div>
     );
}
 
export default RecBin;