import { useState } from "preact/hooks"

export default function NavBar() {
    const [menu, setMenu] = useState(false)
    return (
        <>
            <div className="bg-white p-3 flex justify-between items-center max-md:flex-wrap">
                <div class="h-11 overflow-hidden w-11 mr-4">
                    <img className="w-full h-full object-contain" src="https://cdn-icons-png.flaticon.com/512/6885/6885498.png" alt="no Joke" />
                </div>
                {!menu ?
                    <button onClick={()=>setMenu(!menu)} title="Open Menu" className=" bg-red-100 text-red-500 px-2 py-1 cursor-pointer text-xl rounded-lg hidden max-md:block"><i className="fa fa-bars"></i></button>
                    :
                    <button onClick={()=>setMenu(!menu)} title="Close Menu" className=" bg-red-100 text-red-500 px-2 py-1 cursor-pointer text-xl rounded-lg hidden max-md:block"><i className="fa fa-times"></i></button>
                }
                <div className={`${menu ? "max-md:block" : "max-md:hidden" } w-full`}>
                    <div className="flex gap-1 w-full max-sm:w-full max-md:w-1/3 max-md:fixed max-md:block bg-white max-md:p-5 max-md:right-2 rounded-lg ">
                        <div className="flex gap-1 w-full max-md:block">
                            <a href="#" class="p-2 active-text border-2 rounded-t-full rounded-r-full block"><i className="fa fa-home"></i> Home</a>
                            <a href="#" class="p-2 border-2 border-white rounded-t-full rounded-r-full block hover:text-red-500"><i className="fa fa-comments"></i> About Us</a>
                            <a href="#" class="p-2 border-2 border-white rounded-t-full rounded-r-full block hover:text-red-500"><i className="fa fa-users"></i> Our Team</a>
                        </div>
                        <div className={"flex gap-1 w-full justify-end max-md:block max-md:mt-2"}>
                            <a href="#" className="p-2 border-2 border-white rounded-t-full rounded-r-full  text-nowrap hover:underline hover:text-red-600 underline-offset-8 ">Sign   In</a>
                            <a href="#" class="p-1 border-8 border-red-100 rounded-t-full rounded-r-full  bg-red-500 text-white text-sm flex justify-center items-center font-bold animate-pulse px-2 max-md:mt-3 rounded-full">Get Started Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
