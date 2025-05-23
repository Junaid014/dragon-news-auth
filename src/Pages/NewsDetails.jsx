import React, { useEffect, useState } from 'react';

import Header from '../Components/Header/Header';
import RightAside from '../Components/homelayout/RightAside';
import NewsDetailsCard from './NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {

    const data =useLoaderData();
    const { id }=useParams();
    const[news,setNews]=useState({});
    // console.log(data,news ,id) ;

    useEffect(()=>{
        const newsDetails=data.find(singleNews=>singleNews.id == id);
        setNews(newsDetails)
    },[data,id])

    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>

            <main className='w-11/12 mx-auto grid grid-cols-12 gap-4'>
                <section className='col-span-9'>
                    <h2 className='font-bold mb-5 text-lg text-[#403F3F]'>Dragon News</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;