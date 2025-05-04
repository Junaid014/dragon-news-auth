import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet, useNavigation } from 'react-router';
import LatestNews from '../Components/LatestNews/LatestNews';
import Navbar from '../Components/Navbar/Navbar';
import LeftAside from '../Components/homelayout/LeftAside';
import RightAside from '../Components/homelayout/RightAside';
import Loading from '../Pages/Loading';

const HomeLayouts = () => {
    const {state}= useNavigation()
    return (
        <div>
           
            <header>
                <Header></Header>
            </header>
            <section className='w-11/12 mx-auto my-3'>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto my-4 '>
                <Navbar></Navbar>
            </nav>
            
            <main className='w-11/12 mx-auto my-6 grid grid-cols-12'>
                <aside className='col-span-3 h-fit sticky top-0'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6 mx-4'>

                    {state == 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
                    

                </section>
                <aside className='col-span-3 h-fit sticky top-0'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayouts;