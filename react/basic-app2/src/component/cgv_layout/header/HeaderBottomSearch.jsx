import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; 

export default function HeaderBottomSearch(){
  return (
    <div class="header-bottom-search">
      <input type="search" value="리틀엠마" />
      <i class="fa-sharp-duotone fa-solid fa-magnifying-glass search-icon"></i>
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      {/* <FontAwesomeIcon icon="fa-light fa-magnifying-glass" /> */}
    </div>
  );
}