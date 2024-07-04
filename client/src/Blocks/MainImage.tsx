
export default function MainImage() {
    return (
        <>
            <div className="w-full h-[450px] bg-[url('https://i.pinimg.com/originals/82/a0/47/82a0474442bb6189afd19ba620222507.jpg')] bg-cover">
                <div className="flex h-11/12 items-center max-md:flex-wrap">
                    <div className="p-24 max-lg:pl-6  max-lg:pr-6 w-full h-full flex flex-wrap items-center">
                        <div className="text-gray-800">
                            <h1 className="text-6xl max-xl:text-4xl font-bold">
                                Hi, <span className="text-red-500">Welcome</span>
                            </h1>
                            <p className="text-xl py-6 max-xl:py-3 max-sm:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quis, veritatis blanditiis eaque fugiat ut tempora qui debitis assumenda, nihil necessitatibus. Aperiam, accusantium ut facere quidem veniam molestiae nostrum neque?</p>
                        </div>
                        <div className="flex gap-4 justify-between">
                            <button className="p-3 mt-2 m-auto text-sm font-bold bg-red-500 hover:bg-red-400 text-white rounded-full">Join Us Now <i className="fa fa-user-plus"></i></button>
                            <button className="p-3 mt-2 m-auto text-sm font-bold bg-red-100 hover:bg-red-200 text-red-900 rounded-full">Read More About Us <i className="fa fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="p-3 w-full h-full max-lg:hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-0">
                            <div className="h-full w-full flex items-center absolute justify-center -z-10">
                                <div className="w-[360px] h-[360px] items-center border-4 bg-[url('https://media.istockphoto.com/id/1471872215/vector/modern-red-and-white-abstract-papercut-business-background-vector-design.jpg?s=612x612&w=0&k=20&c=2pwaNIgsaX0T6Z9v1aMriRsUeWjs4jUJZQ9x5zqkJz4=')] justify-center flex ">
                                    <div className="w-[160px] h-[160px]  m-auto rounded-full cursor-pointer bg-red-50 overflow-hidden md:col-span-2">
                                        <img className="rounded-full w-full h-full object-cover -rotate-45" src="https://cdn-icons-png.flaticon.com/512/6885/6885498.png" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-[100px]  m-auto rounded-[10px] hover:bg-red-500 cursor-pointer p-2 bg-red-200 overflow-hidden md:col-span-2">
                                <img className="rounded-lg" src="https://previews.123rf.com/images/appleeyesstudio/appleeyesstudio1308/appleeyesstudio130802636/22304941-portrait-of-young-business-woman-in-formal-attire-isolated-on-white-background.jpg" />
                            </div>

                            <div className="w-[100px]  m-auto rounded-[10px] hover:bg-blue-500 cursor-pointer p-2 bg-blue-200 overflow-hidden">
                                <img className="rounded-lg" src="https://previews.123rf.com/images/appleeyesstudio/appleeyesstudio1308/appleeyesstudio130802636/22304941-portrait-of-young-business-woman-in-formal-attire-isolated-on-white-background.jpg" />
                            </div>

                            <div className="w-[100px]  m-auto rounded-[10px] hover:bg-green-500 cursor-pointer p-2 bg-green-200 overflow-hidden">
                                <img className="rounded-lg" src="https://previews.123rf.com/images/appleeyesstudio/appleeyesstudio1308/appleeyesstudio130802636/22304941-portrait-of-young-business-woman-in-formal-attire-isolated-on-white-background.jpg" />
                            </div>

                            <div className="w-[100px]  m-auto rounded-[10px] hover:bg-yellow-500 cursor-pointer p-2 bg-yellow-200 overflow-hidden md:col-span-2">
                                <img className="rounded-lg" src="https://previews.123rf.com/images/appleeyesstudio/appleeyesstudio1308/appleeyesstudio130802636/22304941-portrait-of-young-business-woman-in-formal-attire-isolated-on-white-background.jpg" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
