import React from 'react'
import { routeGenerator } from '../../utils/routerGenerator'
import { routeConfig } from '../../utils/routeDatas'
import Header from '../Header'
import Footer from '../Footer'

function Layout() {
    return (
        <div>
            <Header />
            {routeGenerator(routeConfig)}
            <Footer />
        </div>
    )
}

export default Layout
