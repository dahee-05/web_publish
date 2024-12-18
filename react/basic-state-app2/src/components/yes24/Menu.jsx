export default function Menu({name, href, bg, color, category, click}){

  const handleChangMenu = () => {
    console.log(`Menu --> ${category}`);
    click(category);
  };

  return(
    <>
      <a href={href} className='menu-item' 
         style={{backgroundColor:bg, color:color}} 
         onClick={handleChangMenu}>{name}
      </a>
    </>
  );
};