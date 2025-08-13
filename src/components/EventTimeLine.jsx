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
        date: "22/08/2025 to 23/08/2025",
        title: "CODERUSH",
        time: '24 Hours',
        description: "24 Hours. 50 Teams, Build real-world tech that solves real problems - from scratch to showcase.",
    },
    {
        date: "23/08/2025",
        title: "Tech Quiz",
        time: '11:00 AM to 2:00PM',
        description: "Solo tech quiz loaded with brainy bites from ML, IoT & Cyber Security.",
    },
    {
        date: "22/08/2025",
        title: "Scripted Secret",
        time: '10:00 AM onwards ',
        description: "Crack clues, race through riddles, and hunt down the final secret.",
    },
    {
        date: "22/08/2025",
        title: "Prompt-A-Thon",
        time: '12:00 PM - 2:00 PM',
        description: "Use prompts to bend AI to your will. Build creative outputs with just your words.",
    },
    {
        date: "23/08/2025",
        title: "Arm Wrestling",
        time: '9:00 AM - 4:00 PM',
        description: "Strength meets grit. Step up, lock hands, and dominate.",
    },
    {
        date: "22/08/2025",
        title: "Box Cricket",
        time: '8:00 AM - 5:00 PM',
        description: "Quick-fire cricket matches full of thrill, tactics, and team play.",
    },
    {
        date: "24/08/2025",
        title: "Expert Session",
        time: 'TBD',
        description: "Real tech stories, real insights - learn from those who've done it.",
    },
    {
        date: "23/08/2025",
        title: "Vision Image-Net",
        time: '11:00 AM - 3:00 PM',
        description: "Decode images using AI - detect, analyze, and predict like a pro.",
    },
    {
        date: "22/08/2025",
        title: "Fastest Frontend First",
        time: '1:00 PM - 4:00 PM',
        description: "A surprise UI task - code it fast, polish it faster.",
    },
    {
        date: "23/08/2025",
        title: "Versus Coding",
        time: '1:00 PM - 4:00 PM',
        description: "Face-off coding battles where speed and precision crown  the champ.",
    },
    {
        date: "23/08/2025 ",
        title: "BGMI: BattleZone",
        time: '8:00 AM Onwards',
        description: "Squad up and survive the chaos. Only the sharpest make it to the end.",
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
