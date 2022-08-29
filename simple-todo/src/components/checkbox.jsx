import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const checkIcon = <FontAwesomeIcon icon={faSquare} />;
const checkedIcon = <FontAwesomeIcon icon={faCheckSquare} />;

const Checkbox = ({checked, onClick}) => {
    const icon = checked? checkedIcon : checkIcon;
    const isChecked = checked? 'isChecked' : '';

    return ( 
        <div className={`btn checkbox ${isChecked}`} onClick={onClick}>
            {icon}
        </div>
     );
}
 
export default Checkbox;