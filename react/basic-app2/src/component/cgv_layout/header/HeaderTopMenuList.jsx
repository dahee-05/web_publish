import HeaderTopMenu from './HeaderTopMenu.jsx';

export default function HeaderTopMenuList(){
  const list = [
    {
      "href":"#", 
      "src":"https://img.cgv.co.kr/R2014/images/common/ico/loginPassword.png", 
      "alt":"로그인",
      "text":"로그인"
    },
    {
      "href":"#", 
      "src":"https://img.cgv.co.kr/R2014/images/common/ico/loginJoin.png", 
      "alt":"회원가입",
      "text":"회원가입"
    },
    {
      "href":"#", 
      "src":"https://img.cgv.co.kr/R2014/images/common/ico/loginMember.png", 
      "alt":"MY CGV",
      "text":"MY CGV"
    },
    {
      "href":"#", 
      "src":"https://img.cgv.co.kr/R2014/images/common/ico/loginCustomer.png", 
      "alt":"고객센터",
      "text":"고객센터"
    }
  ];

  return (
    <nav>
     <ul>
      {list && list.map((item) =>
        <li>
          <HeaderTopMenu href={item.href} src={item.src} alt={item.alt} text={item.text}/>
        </li>
      )}
    </ul>
  </nav>
  );
};