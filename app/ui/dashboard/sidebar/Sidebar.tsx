import React from 'react'
import styles from './sidebar.module.css'

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      }
    ]
  }
]

const Sidebar = () => {
  return (
    <div className={styles.container}>Sidebar</div>
  )
}

export default Sidebar