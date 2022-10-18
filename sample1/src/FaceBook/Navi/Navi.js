import React from 'react';
import "./Navi.css";

const Navi = () => {
  return (
    <div className='navi'>
        <div className='logo'>
          <div><img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"></img></div>
          <div className><input type={'text'} placeholder={'Search'}></input></div>
        </div>
        <div className='navi-bar'>
          <ul>
            <li><a><img src='https://www.shareicon.net/download/2017/04/19/884535_home_512x512.png'></img></a></li>
            <li><a><img src='https://cdn4.iconfinder.com/data/icons/facebook-and-social-media-2/64/Facebook_and_Social_Media-11-512.png'></img></a></li>
            <li><a><img src='https://static.thenounproject.com/png/3498420-200.png'></img></a></li>
            <li><a><img src='https://i.pinimg.com/originals/9e/ce/18/9ece18334d0af767aef008c60e0eb3c7.png'></img></a></li>
            <li><a><img src='https://img.icons8.com/ios/500/facebook-gaming.png'></img></a></li>
          </ul>
        </div>
        <div className='navi-manu'>
            <input type={'text'} placeholder={'Find Friends'}></input>
            <div><a><img src='https://cdn-icons-png.flaticon.com/512/17/17704.png'></img></a></div>
            <div><a><img src='https://cdn.iconscout.com/icon/free/png-256/facebook-messenger-1464524-1239438.png'></img></a></div>
            <div><a><img src='https://png.pngtree.com/png-clipart/20190924/original/pngtree-vector-notification-icon-png-image_4869133.jpg'></img></a></div>
            <div className='navi-menu-profile'><img src='http://keyword-hero.com/wp-content/uploads/2017/04/Cart-Hero.png'></img></div>

        </div>
    </div>
  )
}

export default Navi