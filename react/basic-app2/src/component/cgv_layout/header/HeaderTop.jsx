import Logo from './Logo.jsx';
import HeaderTopImage from './HeaderTopImage.jsx';
import HeaderTopMenuList from './HeaderTopMenuList.jsx';

export default function Header(){
  return (
    <>
      <div class="header-top">
        <Logo href="../public/index.html" target="_parent" src="/images/cgvLogo.png" alt="로고이미지"/>    
        <HeaderTopImage src="/images/header_card_img.png" alt="Card Image" />
        <HeaderTopMenuList />
      </div> 
    </>
  );
};