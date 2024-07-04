import { useState } from "preact/hooks"
import { Link } from 'wouter-preact';
export default function NavBar() {
    const [menu, setMenu] = useState(false)
    return (
        <>
            <div className="bg-white p-3 flex justify-between items-center max-lg:flex-wrap">
                <div className="flex gap-1 mr-4 items-center">
                <div class="h-11 overflow-hidden w-11 ">
                    <img className="w-full h-full object-contain" src="https://cdn-icons-png.flaticon.com/512/6885/6885498.png" alt="no Joke" />
                </div>
                <Link to="/" className="text-nowrap font-bold text-xl"><span className="font-bold text-black">G-</span><span className="text-red-500">Stock</span></Link>
                </div>
                {!menu ?
                    <button onClick={()=>setMenu(!menu)} title="Open Menu" className=" bg-red-100 text-red-500 px-2 py-1 cursor-pointer text-xl rounded-lg hidden max-lg:block"><i className="fa fa-bars"></i></button>
                    :
                    <button onClick={()=>setMenu(!menu)} title="Close Menu" className=" bg-red-100 text-red-500 px-2 py-1 cursor-pointer text-xl rounded-lg hidden max-lg:block"><i className="fa fa-times"></i></button>
                }
                <div className={`${menu ? "max-lg:block" : "max-lg:hidden" } w-full`}>
                    <div className="flex gap-1 w-full max-sm:w-full max-lg:w-1/3 max-lg:fixed max-lg:block bg-white max-lg:p-5 max-lg:right-2 rounded-lg ">
                        <div className="flex gap-1 w-full max-lg:block">
                            <Link to="#" class="p-2 active-text border-2 rounded-t-full rounded-r-full block"><i className="fa fa-home"></i> Home</Link>
                            <Link to="#" class="p-2 border-2 border-white rounded-t-full rounded-r-full block hover:text-red-500"><i className="fa fa-comments"></i> About Us</Link>
                            <Link to="#" class="p-2 border-2 border-white rounded-t-full rounded-r-full block hover:text-red-500"><i className="fa fa-users"></i> Our Team</Link>
                        </div>
                        <div className={"flex gap-1 w-full justify-end max-lg:block max-lg:mt-2"}>
                            <Link to="#" className="p-2 border-2 border-white rounded-t-full rounded-r-full  text-nowrap hover:underline hover:text-red-600 underline-offset-8 ">Sign   In</Link>
                            <Link to="dash" class="p-1 border-8 border-red-100 rounded-t-full rounded-r-full  bg-red-500 text-white text-sm flex justify-center items-center font-bold animate-pulse px-2 max-lg:mt-3 rounded-full">Get Started Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
