import {Outlet} from 'react-router-dom'
import { Header } from '../component/header'
import { Footer } from '../component/footer'

export function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}