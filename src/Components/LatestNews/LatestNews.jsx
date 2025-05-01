import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex gap-3 bg-base-200 p-3.5 items-center'>
            <p className='bg-secondary px-4 text-white py-2' >Latest</p>

            <Marquee className='flex gap-7 cursor-pointer' pauseOnHover={true} speed={50}>
            <p className='font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit dolores at vitae sapiente  dignissimos?</p>
            <p className='font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit dolores at vitae sapiente impedit und dignissimos?</p>
            <p className='font-bold'>Lorem ipsum dolor sit, ait Reprehenderit dolores at vitae sapiente impedit unde eos explicabo cum quod dignissimos?</p>
            </Marquee>
            
        </div>
    );
};

export default LatestNews;