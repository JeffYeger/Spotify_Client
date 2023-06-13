import React from 'react'
import Body from '../components/mainComponents/body'
import Header from '../components/mainComponents/header'
import Sidebar from '../components/mainComponents/sidebar'
import styles from './styles.module.css'
import Footer from '../components/mainComponents/footer'

function Layout() {
  return (
    <div>
        
<Header/>
<div className={styles.container}>
<Sidebar/>
<Body/>
</div>
<Footer/>
    </div>
  )
}

export default Layout