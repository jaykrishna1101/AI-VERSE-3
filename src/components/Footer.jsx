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
                <div    className="h-15 rounded-full w-15   ">
                    <img  src="./Group 1382623402.png" alt="" /> 
                </div>
                <h1 className="avenger tracking-wide">AI Verse 3.0</h1>
            </div>

            <h1 className="text-center px-5">
                This Website is Design and Develop by  . 
                 
                <a href="https://github.com/EklawayaChauhan" target="_blank">
                    <span className="hover:underline avenger tracking-wider">Technical Co-Head : Eklawaya Chauhan</span>
                </a> 
            </h1>
        </div>
        </>
    );
}

export default Footer;