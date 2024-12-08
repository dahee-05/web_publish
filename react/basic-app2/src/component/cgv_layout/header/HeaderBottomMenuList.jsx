import HeaderBottomMenu  from "./HeaderBottomMenu";

export default function HeaderBottomMenuList(){
  const bottomMenuList = [
    {"name":"영화"},
    {"name":"극장"},
    {"name":"예매"},
    {"name":"스토어"},
    {"name":"혜택"}
  ];

  return (
    <ul class="flex-container">
      {bottomMenuList.map((item) =>
        <li><HeaderBottomMenu name={item.name} /></li>
      )}
    </ul>
  );
}