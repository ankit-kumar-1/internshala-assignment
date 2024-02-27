import React from 'react'

export default function Deals() {
    return (

        <div className="flex flex-col grow pt-9 pb-5 mt-3.5 w-full bg-white rounded-xl max-md:mt-7">
            <div className="flex flex-col items-center px-5">
                <img alt=""
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=f7955b557b1c414699668cfd8849ecc3&width=100 100w,
                          https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=f7955b557b1c414699668cfd8849ecc3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=f7955b557b1c414699668cfd8849ecc3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=f7955b557b1c414699668cfd8849ecc3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=f7955b557b1c414699668cfd8849ecc3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=f7955b557b1c414699668cfd8849ecc3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=f7955b557b1c414699668cfd8849ecc3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=f7955b557b1c414699668cfd8849ecc3&"
                    className="max-w-full aspect-[1.37] w-[141px]"
                />
                <div className="flex gap-1 justify-between self-stretch mt-14 text-sky-800 max-md:mt-10">
                    <div className="grow justify-center px-2 py-2.5 text-sm leading-5 bg-gray-100 rounded-lg">
                        20% Off
                    </div>
                    <div className="grow justify-center py-2.5 pr-5 pl-2 text-sm leading-5 bg-gray-100 rounded-lg">
                        Limited time{" "}
                    </div>
                </div>
                <div className="mt-3 text-base font-bold leading-6 text-gray-500 whitespace-nowrap">
                    Webbuilder 1
                </div>
            </div>
            <div className="flex flex-col px-5 mt-5">
                <div className="text-base leading-6 text-gray-500">
                    Computer Modern clasic with wix support
                </div>
                <div className="flex gap-2.5 justify-between mt-3.5">
                    <div className="text-xl leading-7 text-gray-500">
                        $39.96
                    </div>
                    <div className="text-sm leading-5 text-gray-400">
                        $49.96
                    </div>
                    <div className="flex-auto text-sm leading-5 text-rose-500">
                        (20% Off)
                    </div>
                </div>
                <div className="justify-center items-center px-16 py-5 mt-4 text-base leading-6 text-center text-white whitespace-nowrap bg-blue-500 rounded-xl max-md:px-5">
                    View Deal
                </div>
            </div>
        </div>

    )
}
