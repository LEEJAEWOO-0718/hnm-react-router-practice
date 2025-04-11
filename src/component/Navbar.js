import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const Navbar = ({authenticate, setAuthenticate}) => {
  // const[authenticate, setAuthenticate]=useState(false);
  const menulist=['여성','Divided','남성','신생아/유아','아동','H&M Home','Sale','지속가능성'];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate=useNavigate();
  const goToLogin=()=>{
    navigate("/login");
  };
  const goToHome =()=>{
    navigate('/')
  };

  const goToLogout = () => {
    setAuthenticate(false);
    navigate("/");
  };
  
  const search=(e)=>{
    if(e.key === "Enter") {
      let keyword=e.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className='login-button' onClick={authenticate ? goToLogout : goToLogin}>
        <FontAwesomeIcon className='login-icon' icon={faUser} />
        <div>{authenticate ? "로그아웃<-" : "->로그인"}</div>
      </div>
      <div onClick={goToHome} className='nav-section'>
        <img width={100} src='https://play-lh.googleusercontent.com/BDtWjjKfOrhvqeBET291anITXe3KDnycL0mRJMz0pwPXOEdVKVHYYDGXMVGEzrVbSOA=w240-h480-rw' className='logo-image'/>
      </div>
      <div className='menu-area'>

        {/* 햄버거버튼 */}
        <button className="hamburger" onClick={toggleSideBar}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <ul className='menu-list'>
          {menulist.map(menu=><li>{menu}</li>)}
        </ul>
        <div className='menu-search'>
          <FontAwesomeIcon className='search-icon' icon={faSearch}/>
          <input type='text' onKeyDown={(e)=>search(e)} placeholder="상품 검색" className="search-input"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
