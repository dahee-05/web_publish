// import HeaderBottomMenu  from "./HeaderBottomMenu";

export default function HeaderBottomMenu({name}){

  return (
    <>
      <a href="#">{name}</a>
      <dl>
        <dt>영화</dt>
        <dt>무비차트</dt>
        <dt>아트하우스</dt>
        <dt>ICECON</dt>
      </dl>
    </>
  );
}