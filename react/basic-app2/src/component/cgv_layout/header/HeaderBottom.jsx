import HeaderBottomMenuList  from "./HeaderBottomMenuList";
import HeaderBottomSearch  from "./HeaderBottomSearch";

export default function HeaderBottom(){
  return (
    <div class="header-bottom">
      <div class="header-bottom-content">
        <HeaderBottomMenuList />
        <HeaderBottomSearch />
      </div>
    </div>
  );
}