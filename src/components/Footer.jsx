import { div } from "motion/react-client";

function Footer() {
    return (
        <div className='inter  h-80 w-full tracking-tight bg-red-500 opacity-90  gap-10 flex items-center justify-center flex-col'>
               <div className="h-15 rounded-full w-15 bg-blue-400   ">
                      <img src="./final_logo.png" alt="" /> 
               </div>

           <h1>Website is Design and Develop by Our Avenger <span className="hover:underline avenger tracking-wider ">Muchkundraje Thote</span> ,  <span className="hover:underline avenger tracking-wider">Krtish Bokade</span>  and  <span className="hover:underline avenger tracking-wider">Tenhical head</span></h1>

        </div>
    );
}

export default Footer;