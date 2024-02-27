import React from 'react'

export default function Navbar() {
    return (
        <div>
            <div className="flex justify-center items-center px-16 py-3.5 w-full bg-gray-800 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between max-w-full w-[749px] max-md:flex-wrap">
                    <input type="search" className=' py-1 px-14 rounded-md' />
                    <div className=" absolute w-7 aspect-square p-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    </div>
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
