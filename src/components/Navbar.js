import React from 'react'

export default function Navbar() {
    return (
        <div>
            <div className="flex justify-center items-center px-16 py-3.5 w-full bg-gray-800 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between max-w-full w-[749px] max-md:flex-wrap">
                    <input type="search" className=' py-1 px-14 rounded-md' />
                    <img alt=""
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bddfe0e0eb97da98ea12eb6d7a90a808f344e1d9c597ba4006812d90daa41cd?apiKey=f7955b557b1c414699668cfd8849ecc3&"
                        className=" absolute w-7 aspect-square p-1"
                    />
                    <div className="flex gap-5 justify-between my-auto text-sm leading-5 text-gray-300">
                        <div >Categories</div>
                        <div className="flex-auto pl-10">Website Builders</div>
                    </div>
                    <div className="self-start my-auto text-sm leading-5 text-gray-300">
                        Today's deals
                    </div>
                </div>
            </div>
        </div>
    )
}
