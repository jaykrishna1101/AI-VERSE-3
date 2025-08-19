import { useEffect, useState } from "react";
import { cloneUniformsGroups } from "three/src/renderers/shaders/UniformsUtils.js";
import Easter from "./ester";

function Footer() {
     const [ester , setEster] = useState(0);
      
    useEffect(()=>{
        
        {Easter == 7 &&
            <Easter/>
        }
         
    })

    return (
        <>
         {ester === 7 && <Easter />}
        <div id="footer" className='inter   h-80 w-full tracking-tight bg-red-500 opacity-90  gap-10 flex items-center justify-center flex-col'>
            <div onClick={()=>setEster(prev => prev+1 )} className="cursor-pointer  flex items-center justify-center flex-col">
                <div    className="h-15 rounded-full w-15 bg-blue-400   ">
                    <img  src="./final_logo.png" alt="" /> 
                </div>
                <h1 className="avenger tracking-wide">Compufest 2k25</h1>
            </div>

            <h1 className="text-center px-5">
                This Website is Design and Develop by Our Avenger  
                <a href="https://github.com/MUCHKUNDRAJE" target="_blank">
                    <span className="hover:underline avenger  tracking-wider "> Cultural Head: Muchkundraje Thote</span>
                </a>,  
                <a href="https://github.com/KritishBokde91" target="_blank">
                    <span className="hover:underline avenger tracking-wider">Technical Co-Head: Kritish Bokade</span>
                </a> and  <a href="https://github.com/gauravnaik" target="_blank">
                    <span className="hover:underline avenger tracking-wider">Technical Head: Gaurav Naik</span>
                </a>
            </h1>
        </div>
        </>
    );
}

export default Footer;