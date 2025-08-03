import React from "react";
import Marquee from "react-fast-marquee";

function OurSponsors() {
    const sponsors = [
        { id: 1, name: "Amazon", logo: "logo_amazon.svg" },
        { id: 2, name: "Google", logo: "logo_google.svg" },
        { id: 3, name: "Microsoft", logo: "logo_microsoft.svg" },
        { id: 4, name: "Apple", logo: "logo_apple.svg" },
    ];

    return (
        <div className="h-auto w-full font-sans p-4 sm:p-8 bg-zinc-800 opacity-90">
            <h1 className="avenger text-3xl font-extralight text-center mb-12 text-white tracking-wider"><span>Our</span> Sponsors</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
                <Marquee className="flex justify-center items-center w-full"
                    gradient={true}
                    gradientColor={"rgb(39, 39, 42)"}
                    speed={40}
                    pauseOnHover={true}>

                    {sponsors.map((sponsor) => (
                        <div key={sponsor.id} className="flex flex-col items-center justify-center mx-12 sm:mx-16 text-center">
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