import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const menulist=['여성','Divided','남성','신생아/유아','아동','H&M Home','Sale','지속가능성'];
  const navigate=useNavigate()
  const goToLogin=()=>{
    //
    navigate('/login')
  }

  return (
    <div>
      <div className='login-button' onClick={goToLogin}>
        <FontAwesomeIcon className='login-icon' icon={faUser} />
        <div>로그인</div>
      </div>
      <div className='nav-section'>
        <img width={100} src='https://play-lh.googleusercontent.com/BDtWjjKfOrhvqeBET291anITXe3KDnycL0mRJMz0pwPXOEdVKVHYYDGXMVGEzrVbSOA=w240-h480-rw'/>
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menulist.map(menu=><li>{menu}</li>)}
        </ul>
        <div className='menu-search'>
          <FontAwesomeIcon className='search-icon' icon={faSearch}/>
          <input type='text' placeholder="상품 검색" className="search-input"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
