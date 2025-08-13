import React from 'react'
import EventCard from './EventCard';
import EventTimeLine from './EventTimeLine';
// import EventTimeline from './EventTimeLine';

function Event() {
  const eventsData = [
    {
      id: 1,
      category: 'HACKATHON',
      title: "CodeRush",
      subtitle: '24-Hour Hackathon',
      description: '50 Teams. 24 Hours. Dive into a full-day innovation sprint where ideas turn into impactful tech solutions. Build, debug, and deliver under pressure',
      difficulty: 'MAXIMUM THREAT',
      agents: 'Team of 3-5',
      entryFees: '₹500',
      reward: '₹30,000',
      link: 'https://unstop.com/hackathons/coderush-24hr-hackathon-yeshwantrao-chavan-college-of-engineering-ycce-nagpur-1533739',
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
      category: 'Hackathon',
      title: 'Vision Image-Net',
      subtitle: 'Showcase your AI & ML expertise',
      description: "Explore the power of image recognition and AI. Decode visual data to uncover hidden patterns and meaningful insights.",
      difficulty: 'Medium',
      agents: 'Team of 2',
      reward: '₹2,200',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSflzf2raDd4g0WstS6R25-E48Q-l-nK0dMbACQGCBmVryiTiw/viewform',
      entryFees: '₹150',
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
      category: 'Hackathon',
      title: 'Prompt-a-Thon',
      subtitle: 'Master the Art of Prompt.',
      description: "Combine your imagination with AI tools to bring ideas to life. Use smart prompting to generate, build, and impress.",
      difficulty: 'Easy',
      agents: 'Individual',
      reward: '₹1100',
      entryFees: '₹50',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSdG0B_feV4LT3DxIiiY__EP8s0K9jU2MpN-oIQm_Y7M4Zfj8w/viewform',
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
      title: 'Versus Coding',
      subtitle: 'Battle of the Coders',
      description: 'A rapid-fire coding contest where participants face off in intense challenges. Quick logic and clean code decide the winner.',
      difficulty: 'Medium',
      agents: 'Team of 2',
      reward: '₹2000',
      entryFees: '₹150',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSet3fwBNAjATQR9svq2R4R9n9TXAaEPkfg5m5VcRYzMySWgJA/viewform',
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
      category: 'Hackathon',
      title: 'Scripted Secrets',
      subtitle: 'Unravel the Code',
      description: 'Solve logic puzzles and follow digital trails in this tech-themed treasure hunt. Speed and brainpower will lead you to the prize.',
      difficulty: 'Medium',
      agents: 'Team of 2-5',
      reward: '₹2,000',
      entryFees: '₹200',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSdXkLFRICo0CBtIjoEb_rOBFb6MYSIxcSFL6ZEC7XD40JNAVw/viewform',
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
    {
      id: 6,
      category: 'Hackathon',
      title: 'Fastest-Frontend-First',
      subtitle: 'Battle of the Coders',
      description: 'Turn a surprise prompt into a working frontend app - fast. Showcase your design and coding skills under real-time pressure.',
      difficulty: 'Medium',
      agents: 'Individual',
      reward: '₹1500',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSceAcBRItCFPCSckXw2HhtIzM0GoF3PgSBdJeMEvaA1v97knQ/viewform',
      entryFees: '₹75',
      theme: {
        color: '#e23636',
        gradientFrom: 'from-[#e23636]',
        gradientTo: 'to-[#ffe066]',
        borderColor: 'border-[#e23636]',
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e23636]" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="7" ry="10" fill="#ffe066" stroke="#e23636" strokeWidth="2" />
          <rect x="9" y="8" width="2" height="2" fill="#222" />
          <rect x="13" y="8" width="2" height="2" fill="#222" />
          <path d="M9 16c1.5 1 4.5 1 6 0" stroke="#e23636" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 7,
      category: 'Quiz',
      title: 'Tech Quiz',
      subtitle: 'Learn from the Best',
      description: 'Industry Proffessionals share real-world experiences and insights. A chance to learn practical tech skills and get inspired.',
      difficulty: 'Easy',
      agents: 'Team of 2-3',
      entryFees: '₹150',
      reward: '₹1200',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfyerxtwS0DEPKpIbr75QbRGilaPJszMzGBa9hWtaHYfXQqLg/viewform',
      theme: {
        color: '#e23636',
        gradientFrom: 'from-[#e23636]',
        gradientTo: 'to-[#8e44ad]',
        borderColor: 'border-[#e23636]',
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e23636]" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#e23636" strokeWidth="2" fill="none" />
          <path d="M12 3v18M3 12h18M6 6l12 12M6 18l12-12" stroke="#e23636" strokeWidth="1" />
        </svg>
      )
    },
    {
      id: 9,
      category: 'Competition',
      title: 'Arm Wrestling',
      subtitle: 'Test your Strength',
      description: "A pure display of strength and determination. Compete one-on-one and prove your physical dominance in seconds.",
      difficulty: 'Medium',
      agents: 'Individual',
      reward: '₹4000',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSeyQOwuOGuBav-5fOxLeYipN3hOSO2UCxFuAgeWaipipwQHng/viewform',
      entryFees: '₹150',
      theme: {
        color: '#e23636',
        gradientFrom: 'from-[#e23636]',
        gradientTo: 'to-[#222]',
        borderColor: 'border-[#e23636]',
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e23636]" viewBox="0 0 24 24" fill="none">
          <rect x="10" y="4" width="4" height="16" fill="#e23636" />
          <polygon points="10,4 12,2 14,4" fill="#222" />
        </svg>
      )
    },
    {
      id: 10,
      category: 'Competition',
      title: 'Box Cricket',
      subtitle: 'Turf Battle',
      description: "Short-format cricket matches packed with excitment and energy. It's all about quick plays and sharper instincts.",
      difficulty: 'Medium',
      agents: 'Team of 11',
      reward: '₹5000',
      entryFees: '₹550',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSecuIxchFqkhCnecQjq16kZCQHfEWG8CBf--Lt1iCdhuPdnpg/viewform',
      theme: {
        color: '#e23636',
        gradientFrom: 'from-[#e23636]',
        gradientTo: 'to-[#222]',
        borderColor: 'border-[#e23636]',
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e23636]" viewBox="0 0 24 24" fill="none">
          <rect x="10" y="4" width="4" height="16" fill="#e23636" />
          <polygon points="10,4 12,2 14,4" fill="#222" />
        </svg>
      )
    },
    {
      id: 11,
      category: 'Competition',
      title: 'BGMI: BattleZone',
      subtitle: 'Ultimate Survival',
      description: "Drop into action with your squad in an intense survival game. Only teamwork and smart plays will lead you to victory",
      difficulty: 'Easy',
      agents: 'Team of 4',
      reward: '₹2500',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLScYq607cKm82d2-_YFRBZtyfckEVgkBrTN7iTabDtbOVIRebA/viewform',
      entryFees: '₹200',
      theme: {
        color: '#e23636',
        gradientFrom: 'from-[#e23636]',
        gradientTo: 'to-[#222]',
        borderColor: 'border-[#e23636]',
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e23636]" viewBox="0 0 24 24" fill="none">
          <rect x="10" y="4" width="4" height="16" fill="#e23636" />
          <polygon points="10,4 12,2 14,4" fill="#222" />
        </svg>
      )
    },   {
      id: 12,
      category: 'Competition',
      title: 'Expert Session',
      subtitle: 'Learn from the Best',
      description: "Industry Proffessionals share real-world experiences and insights. A chance to learn practical tech skills and get inspired.",
      difficulty: 'Easy',
      agents: 'Individual',
      reward: 'Thrill & Motivation',
      link: '',
      entryFees: 'Free',
      theme: {
        color: '#e23636',
        gradientFrom: 'from-[#e23636]',
        gradientTo: 'to-[#222]',
        borderColor: 'border-[#e23636]',
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e23636]" viewBox="0 0 24 24" fill="none">
          <rect x="10" y="4" width="4" height="16" fill="#e23636" />
          <polygon points="10,4 12,2 14,4" fill="#222" />
        </svg>
      )
    }
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
        <div className=' hidden md:block h-40 w-40 scale-140 absolute right-0 '>
             <img src="deadpool.png" alt="" />
        </div>
           <div className='hidden md:block  h-40 w-40 scale-140 absolute top-100  left-10 '>
             <img src="spider-face.png" alt="" />
        </div>
          <div className='hidden md:block  h-40 w-40 scale-140 absolute top-180 right-10 '>
             <img src="pointer.png" alt=""/> 
        </div>
          <div className='hidden md:block  h-40 w-40 scale-75 absolute top-302 left-70 '>
             <img src="sp.png" alt=""/> 
        </div>
         <div className='hidden md:block  h-40 w-40 scale-140 absolute top-352 right-10 '>
             <img src="Wolve.png" alt=""/> 
        </div>
          <div className='hidden md:block  h-40 w-40 scale-140 absolute top-452 left-10 '>
             <img src="Danger.png" alt=""/> 
        </div>
        <div className='hidden md:block  h-40 w-40 scale-140 absolute top-490 right-40 '>
             <img src="ironman-snap.png" alt=""/> 
        </div>
          <div className='hidden md:block  h-40 w-40 scale-140 absolute top-570 left-30 '>
             <img src="DW.png" alt=""/> 
        </div>  
        <EventTimeLine />
      </div>
    </div>
  )
}

export default Event