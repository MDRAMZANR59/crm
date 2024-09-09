import React from 'react';
import Header from './include/header';
import Sidebar from './include/sidebar';
import Footer from './include/footer';

function AdminLayout({children}) {
  return (
    <div className="app-wrapper">
        <Sidebar />
        
            <Header />
            <main>{children}</main>
            <Footer />
        
    </div>
  )
}

export default AdminLayout