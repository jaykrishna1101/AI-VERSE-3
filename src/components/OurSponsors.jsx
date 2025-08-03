import React from "react";
import Marquee from "react-fast-marquee";

function OurSponsors() {
    const sponsors = [
        { id: 1, name: "Amazon", logo: "logo_amazon.svg" },
        { id: 2, name: "Google", logo: "logo_google.svg" },
        { id: 3, name: "Microsoft", logo: "logo_microsoft.svg" },
        { id: 4, name: "Apple", logo: "logo_apple.svg" },
        { id: 5, name: "Apple", logo: "logo_apple.svg" },
        { id: 6, name: "Apple", logo: "logo_apple.svg" },
        { id: 7, name: "Apple", logo: "logo_apple.svg" },
        { id: 8, name: "Apple", logo: "logo_apple.svg" },
    ];

    return (
        <div className="h-auto w-full font-sans p-4 sm:p-8 bg-[#e23636] opacity-90">
            <h1 className="avenger text-3xl font-extralight text-center mb-12 text-white tracking-wider">
                <span>Our</span> Sponsors
            </h1>

            {/* Full width Marquee */}
            <div className="w-full overflow-hidden">
                <Marquee
                    gradient={true}
                    gradientColor={"#e23636"}
                    speed={40}
                    pauseOnHover={true}>
                
                    {sponsors.map((sponsor) => (
                        <div key={`${sponsor.id}-${sponsor.name}`} className="flex flex-col items-center justify-center mx-12 sm:mx-16 text-center">
                            <img src={sponsor.logo} alt={sponsor.name} className="h-16" />
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
