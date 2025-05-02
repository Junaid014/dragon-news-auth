import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/homelayout/NewsCard';

const CategoryNews = () => {

    const {id}=useParams();
    const data =useLoaderData();
    // console.log(id ,data);

    const [categoryNews,setCategoryNews]=useState([]);
    const [showAll,setShowAll]=useState(false);

    useEffect(()=>{
        if(id == "0"){
            setCategoryNews(data);
            return;
        }
        else if(id == "1"){
            const filterNews=data.filter(news=>news.others.is_today_pick == true);
            setCategoryNews(filterNews)
        }
        else{
            const filterNews=data.filter(news=>news.category_id == id);
        // console.log(filterNews);
        setCategoryNews(filterNews)
        }
        
    },[data,id])

    useEffect(() => {
        if (!showAll) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, [showAll]);

    // Show All Button to Show All news 
    const displayedNews = showAll
    ? categoryNews
    : categoryNews.slice(0, 4);


    return (
        <div>
             <h2 className='font-semibold text-xl'>Dragon News Home --{displayedNews.length}</h2>
            <div className='grid grid-cols-1 gap-5'>
                {
                    displayedNews.map(news=><NewsCard
                    key={news.id}
                    news={news}
                    ></NewsCard>)
                }
            </div>
            {categoryNews.length > 4 && (
        <button
          onClick={() => setShowAll(prev => !prev)}
          
          className='btn  mx-auto w-36 flex justify-center mt-2'
        >
          {showAll ? 'Show Less' : 'Show All'}
        </button>
      )}
        </div>
    );
};

export default CategoryNews;  