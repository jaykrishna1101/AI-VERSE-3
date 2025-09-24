import React from 'react'
import EventCard from './EventCard';
import EventTimeLine from './EventTimeLine';
// import EventTimeline from './EventTimeLine';

function Event() {
  const eventsData = [
    {
      id: 1,
      category: 'Competition',
      title: "Giga Gen",
      subtitle: 'Battle of Imagination',
      description: 'A true battle of imagination and technological fusion. Wield the power of Generative AI to bring your ideas to life and prove your creative vision is unmatched.',
      difficulty: 'MAXIMUM THREAT',
      agents: 'Solo | Duo | Squad',
      entryFees: '₹50 | ₹100 | ₹150',
      reward: '₹8,500',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfA8axEcgj1YAVhT6vugPTuo7VA4GD9fQpKXpaGTAKo60n-jQ/viewform',
      theme: {
        color: '#e23636',
        gradientFrom: 'from-[#e23636]',
        gradientTo: 'to-[#b71c1c]',
        borderColor: 'border-[#e23636]',
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e23636]" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#e23636" strokeWidth="2" fill="#222" />
          <ellipse cx="9" cy="10" rx="1" ry="2" fill="#e23636" />
          <ellipse cx="15" cy="10" rx="1" ry="2" fill="#e23636" />
          <path d="M8 16c1.5 1 6.5 1 8 0" stroke="#e23636" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 2,
      category: 'Competition',
      title: 'Webbotix',
      subtitle: 'Frontend with a Twist',
      description: "A fusion of front-end finesse and conversational AI logic. Integrate an intelligent chatbot into a stunning web interface to prove your mastery over modern development.",
      difficulty: 'Medium',
      agents: 'Solo | Duo | Squad',
      reward: '₹4,500',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSdIBh-28mxjNrcTGdWofZTJEwuXqj51MLrna8_Ntgequ7hoqg/viewform',
      entryFees: '₹80 | ₹100 | ₹120',
      theme: {
        color: '#ffe066',
        gradientFrom: 'from-[#ffe066]',
        gradientTo: 'to-[#e23636]',
        borderColor: 'border-[#ffe066]',
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ffe066]" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="7" ry="10" fill="#ffe066" stroke="#e23636" strokeWidth="2" />
          <circle cx="12" cy="12" r="3" fill="#e23636" />
        </svg>
      )
    },
    {
      id: 3,
      category: 'Competition',
      title: 'ML Neuronets',
      subtitle: 'Quiz and Code.',
      description: "A high-stakes clash of intellect and implementation. Conquer a rapid-fire quiz, then out-code your rivals in a practical showdown to claim the title of ML mastermind.",
      difficulty: 'High',
      agents: 'Solo | Duo | Squad',
      reward: '4,500',
      entryFees: '₹60 | ₹100 | ₹120',
      link: 'hhttps://docs.google.com/forms/d/e/1FAIpQLSdBINnoYR6xnZutc740OA9buR6BewyF4vVSejhAX1LjXoLZqw/viewform',
      theme: {
        color: '#8e44ad',
        gradientFrom: 'from-[#8e44ad]',
        gradientTo: 'to-[#e23636]',
        borderColor: 'border-[#8e44ad]',
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8e44ad]" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#8e44ad" strokeWidth="2" fill="none" />
          <path d="M12 3v18M3 12h18" stroke="#e23636" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 4,
      category: 'Competition',
      title: 'Emporers Conquest',
      subtitle: 'Squads Clash for ',
      description: 'Compete with strategy, skill, and teamwork as top squads clash for glory, dominance, and the crown.',
      difficulty: 'Medium',
      agents: 'Trio | Squad',
      reward: '₹4,500',
      entryFees: '₹100 | ₹120',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSdrwZL01EhCISV89vFy-ABn2z7EhxR8HLkl9v3CZZlQa0mWPQ/viewform',
      theme: {
        color: '#222',
        gradientFrom: 'from-[#222]',
        gradientTo: 'to-[#e23636]',
        borderColor: 'border-[#222]',
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e23636]" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#e23636" strokeWidth="2" fill="#fff" />
          <circle cx="12" cy="12" r="6" stroke="#222" strokeWidth="2" fill="#e23636" />
          <circle cx="12" cy="12" r="2" fill="#fff" />
        </svg>
      )
    },
    {
      id: 5,
      category: 'Competition',
      title: 'Game of Trades',
      subtitle: 'Rule the Market',
      description: 'Build algorithms, test your skills, and face off in live market simulations to prove you can rule the market.',
      difficulty: 'Easy',
      agents: 'Solo | Duo | Squad',
      reward: '₹4,500',
      entryFees: '₹60 | ₹90 | ₹120',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSekqPLxOh2ecKafpcfAgUWP4U_O14N18_JASpiirg7JVtaV_Q/viewform?usp=dialog',
      theme: {
        color: '#e23636',
        gradientFrom: 'from-[#e23636]',
        gradientTo: 'to-[#222]',
        borderColor: 'border-[#e23636]',
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e23636]" viewBox="0 0 24 24" fill="none">
          <rect x="8" y="4" width="8" height="16" rx="4" stroke="#e23636" strokeWidth="2" fill="#222" />
          <polygon points="12,8 16,12 12,16 8,12" fill="#e23636" />
        </svg>
      )
    },
    ];

  return (
    <div className='min-h-screen w-full font-sans p-4 sm:p-8 bg-[#e23636] opacity-90'>
      <div id="event_moblie"  className="max-w-7xl mx-auto">
        <h1 className="avenger tracking-wide text-4xl md:text-5xl font-bold text-center text-white mb-12">Events</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
      <div id='timeline' className='  relative h-full w-full mt-12 p-8 rounded-lg'>
        <div className=' hidden md:block h-40 w-40 scale-200 absolute top-65 right-50 '>
             <img src="f1bw.png" alt="" />
        </div>
           <div className='hidden md:block  h-40 w-40 scale-220 absolute top-100  left-50 '>
             <img src="f1s2 (2).png" alt="" />
        </div>
          <div className='hidden md:block  h-40 w-40 scale-200 absolute top-170 right-40 '>
             <img src="f1s5 (1).png" alt=""/> 
        </div>
          <div className='hidden md:block  h-40 w-40 scale-140 absolute top-230 left-40 '>
             <img src="f1d1.png" alt=""/> 
        </div>
        <EventTimeLine />
      </div>
    </div>
  )
}

export default Event