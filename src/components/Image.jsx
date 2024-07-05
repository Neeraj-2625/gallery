import React from 'react';

function Image({src}) {
    return (
        <div className='w-full bg-color-main flex flex-col items-center justify-center mt-4 rounded-lg transition-all hover:scale-110 cursor-pointer'>
            <div>
                <p>Let's Enjoy</p>
            </div>
            <div className='m-2 p-2'>
                <img src={src}
                     alt="img"
                     className='object-cover' />
            </div>
        </div>
    );
}

export default Image;