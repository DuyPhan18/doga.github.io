import React from 'react'
import "./sideBar.css"
const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className="header">
        <h1 className='titleSB'>Admin dashboard</h1>
      </div>
      <ul className="sidebarItems">
        <li className="sidebarItem">
          <ion-icon name="home-outline"></ion-icon>Home
        </li>
        <li className="sidebarItem">
          <ion-icon name="list-outline"></ion-icon>Lists</li>
        <li className="sidebarItem">
          <ion-icon name="bag-add-outline"></ion-icon>Products
        </li>
        <li className="sidebarItem">
          <ion-icon name="people-outline"></ion-icon>Groups
        </li>
        <li className="sidebarItem">
          <ion-icon name="document-outline"></ion-icon>Pages
        </li>
        <li className="sidebarItem">
          <ion-icon name="images-outline"></ion-icon>Photos
        </li>
        <li className="sidebarItem">
          <ion-icon name="play-outline"></ion-icon>Videos
        </li>
        <li className="sidebarItem">
          <ion-icon name="calendar-outline"></ion-icon>Shedule
        </li>
        <li className="sidebarItem">
          <ion-icon name="receipt-outline"></ion-icon>Wishlist
        </li>
        <li className="sidebarItem">
          <ion-icon name="settings-outline"></ion-icon>Settings
        </li>
        <li className="sidebarItem">
          <ion-icon name="log-out-outline"></ion-icon>Logout
        </li>
      </ul>
    </div>
  )
}

export default SideBar