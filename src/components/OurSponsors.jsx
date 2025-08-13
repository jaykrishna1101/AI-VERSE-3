import React from "react";
import Marquee from "react-fast-marquee";

function OurSponsors() {
    const sponsors = [
        { id: 1, name: "Grras", logo: "grras.png" },
        { id: 2, name: "Shah Overseas", logo: "shah_overseas.png" },
        { id: 3, name: "Navbharat Times", logo: "navbharat.png" },
        { id: 4, name: "TCS", logo: "tcs.png" },
        { id: 5, name: "Nagpur Today", logo: "nagpur_today.png" },
    ];

    return (
        <div className="h-auto w-full font-sans p-4 sm:p-8 bg-[#e23636] opacity-90">
            <h1 className="avenger text-3xl font-extralight text-center mb-12 text-white tracking-wider">
                <span>Our</span> Sponsors <span>&</span> Media Partners
            </h1>

            {/* Full width Marquee */}
            <div className="w-full overflow-hidden">
                <Marquee
                    gradient={true}
                    gradientColor={"#e23636"}
                    speed={40}
                    pauseOnHover={false}>
                
                    {sponsors.map((sponsor) => (

                        <div key={`${sponsor.id}-${sponsor.name}`} className={`flex flex-col items-center justify-center mx-12 sm:mx-16 text-center ${sponsor.id == 3 ? " rounded-xl " : ""}`}>
                            <img src={sponsor.logo} alt={sponsor.name} className={`h-16 ${sponsor.id == 3 ? "mt-10 bg-white rounded p-2  " : ""} `} />
                            <p className="mt-4 text-white text-lg font-semibold">
                                {sponsor.name}
                            </p>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
}

export default OurSponsors;
