

function Footer() {
    return (
        <div id="footer" className='inter   h-80 w-full tracking-tight bg-red-500 opacity-90  gap-10 flex items-center justify-center flex-col'>
               <div className="flex items-center justify-center flex-col">
               <div className="h-15 rounded-full w-15 bg-blue-400   ">
                       <img src="./final_logo.png" alt="" /> 
               </div>
               <h1 className="avenger tracking-wide">Compufest 2k25</h1>
               </div>

           <h1 className="text-center"> This Website is Design and Develop by Our Avenger  <a href="https://github.com/MUCHKUNDRAJE"><span className="hover:underline avenger  tracking-wider "> Cultural Head: Muchkundraje Thote</span></a>,  <span className="hover:underline avenger tracking-wider">Technical Co-Head: Krtish Bokade</span>  and  <span className="hover:underline avenger tracking-wider">Technical Head: Gaurav Naik</span></h1>

        </div>
    );
}

export default Footer;