import Header from './Header.jsx';
import AvartarImage from '../AvatarImage.jsx';
import Button from '../Button.jsx';
import Menu from '../Menu.jsx';
import AvatarList from '../AvatarList.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';
import ButtonList from '../ButtonList.jsx';

export default function AppLayout(){
  const avatarList =[
    {"img":"/images/people1.webp", "name":"Smith"},
    {"img":"/images/people2.webp", "name":"James"},
    {"img":"/images/people3.webp", "name":"Kelly"}
  ];

  const buttonList =[
    {"name":"회원가입", "type":"button"},
    {"name":"Support", "type":"button"},
    {"name":"Mypage", "type":"button"}
  ];

  return (
    <>
      <Header>
        <AvartarImage img="/images/people1.webp"  />
        <Button name="Login" type="button"/>
        <Menu name="HOME" href="#home" bg="gray" color="white" />
      </Header>
      <Body>
        <AvatarList list={avatarList} />
      </Body>
      <Footer>
        <ButtonList list={buttonList}/>
      </Footer>
    </>
  );
};

/*
Header태그에 넘어오는 값들을 받는 곳에서 {children} 변수로 받음
<Body>는 list 형태로 넘어가야함
*/