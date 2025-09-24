import { time } from 'motion';
import React from 'react';

const parseDate = (dateStr) => {
    // Handles "22/08/2025 to 23/08/2025" or "22/08/2025"
    const firstDate = dateStr.split('to')[0].trim();
    const [day, month, year] = firstDate.split('/').map(Number);
    return new Date(year, month - 1, day);
};

const timelineEvents = [
    {
        date: "10/10/2025",
        title: "Giga Gen",
        time: '10:00 AM onwards',
        description: "From posters to comics, videos to music – transform ideas into stunning experiences and showcase your innovation.",
    },
    {
        date: "10/10/2025",
        title: "Webbotix",
        time: '11:00 AM to 2:00PM',
        description: "Build sleek web apps and integrate smart chatbots to create the future of web-driven conversations.",
    },
    {
        date: "10/10/2025",
        title: "ML Neuronets",
        time: '10:00 AM onwards ',
        description: "Test your ML knowledge, debug smartly, and compete in an electrifying showdown of machine learning skills.",
    },
    {
        date: "10/10/2025",
        title: "Emperors Conquest",
        time: '12:00 PM - 2:00 PM',
        description: "Compete with strategy, skill, and teamwork as top squads clash for glory, dominance, and the crown.",
    },
    {
        date: "10/10/2025",
        title: "Game of Trades",
        time: '9:00 AM - 4:00 PM',
        description: "Build algorithms, test your skills, and face off in live market simulations to prove you can rule the market.",
    },
   
].sort((a, b) => parseDate(a.date) - parseDate(b.date));

const TimelineItem = ({ event, isLeft }) => {
    const contentContainerBase = "w-full pl-12 md:w-1/2 py-2";

    const alignmentClasses = isLeft
        ? "md:text-right md:pr-8"
        : "md:ml-auto md:text-left md:pl-8";

    return (
        <div className="relative flex">
            <div className="absolute left-5 -translate-x-1/2 md:left-1/2 mt-1.5 w-4 h-4 bg-red-500 rounded-full z-10 border-4 border-gray-900"></div>
            <div className={`${contentContainerBase} ${alignmentClasses}`}>
                <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-red-500/20 transition-shadow duration-300">
                    <p className="text-sm font-mono text-gray-400 mb-1">{event.date}</p>
                    <h3 className="avenger text-xl tracking-widest text-white">{event.title}</h3>
                    <p className="text-xs font-mono text-red-400 mb-2">{event.time}</p>
                    <p className="text-sm mt-2 font-mono text-gray-300">{event.description}</p>
                </div>
            </div>
        </div>
    );
};

export default function App() {
    return (
        <div className="min-h-screen font-sans flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-4xl mx-auto">
                <h1 className="avenger text-3xl md:text-4xl text-center mb-12 text-gray-100 font-extralight tracking-wider">
                    Events Timeline
                </h1>
                <div className="relative">
                    <div className="absolute left-5 md:left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-600"></div>
                    <div className="space-y-8 md:space-y-10">
                        {timelineEvents.map((event, index) => (
                            <TimelineItem
                                key={index}
                                event={event}
                                isLeft={index % 2 === 0}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
