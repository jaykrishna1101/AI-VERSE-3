function EventCard({ event }) {
  return (
    // The main container now has overflow-hidden to clip the image's corners. Padding is moved to an inner div.
    <div className={`bg-gray-800 bg-opacity-40 border ${event.theme.borderColor} rounded-lg overflow-hidden flex flex-col justify-between text-gray-300 inset-shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>
      
      {/* --- Image Section Added --- */}
      <img 
        src={event.posterUrl} // Assumes 'posterUrl' exists on your event object
        alt={`${event.title} Poster`}
        className="w-full h-68 object-cover" // Styles the image to fit the card
        onError={(e) => { e.target.onerror = null; e.target.src=''; }}
      />
      
      {/* This div now contains the original content and padding */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          {/* Card Header */}
          <div className="flex justify-between items-start mb-4">
            <span className={`border ${event.theme.borderColor} text-${event.theme.color} text-xs font-bold px-3 py-1 rounded-full`}>
              {event.category}
            </span>
            <div className={`text-${event.theme.color}`}>
              {event.icon}
            </div>
          </div>

          {/* Card Body */}
          <h2 className="avenger text-2xl font-light text-3xl  text-white mb-1 space-x-10">{event.title}</h2>
          <p className="avenger text-gray-400 text-[1.2rem] font-extralight mb-4">{event.subtitle}</p>
          <p className="text-gray-400 text-sm mb-6 h-20 font-mono">{event.description}</p>

          {/* Details Section */}
          <div className="space-y-3 text-sm">
            <div className="flex items-center">
              <span className="w-6 mr-2 text-gray-500">🗓️</span>
              <p><strong>Entry Fees:</strong> <span className={`font-bold `}>{event.entryFees}</span></p>
            </div>
            {
              event.id ==122 && 
                    <div className="flex items-center">
              <span className="w-6 mr-2 text-gray-500">🤖</span>
              <p><strong>Topic: Beyond Chatbots</strong></p>
            </div>
            }
            <div className="flex items-center">
              <span className="w-6 mr-2 text-gray-500">🗓️</span>
              <p><strong>Mode:</strong> <span className={`font-bold `}>{event.id == 11|| event.id == 12 ?"Online": "Offline"   }</span></p>
            </div>
            <div className="flex items-center">
              <span className="w-6 mr-2 text-gray-500">🗓️</span>
              <p><strong>Difficulty:</strong> <span className={`font-bold `}>{event.difficulty}</span></p>
            </div>
            <div className="flex items-center">
              <span className="w-6 mr-2 text-gray-500">👥</span>
              <p><strong>Agents:</strong> {event.agents}</p>
            </div>
            
            <div className="flex items-center">
              <span className="w-6 mr-2 text-gray-500">🏆</span>
              <p><strong>Reward:</strong> {event.reward}</p>
            </div>
          </div>
        </div>

        {/* Card Footer Button */}
        <button className={`avenger font-bold mt-8 w-full cursor-pointer bg-gradient-to-r ${event.theme.gradientFrom} ${event.theme.gradientTo} ${event.theme.tcolor} text-2xl py-3 rounded-lg hover:opacity-90 transition-opacity duration-300`} onClick={() => window.open(event.link, 'Google Form')}>
          <span className="mr-2"> ACCEPT</span> MISSION
        </button>
      </div>
    </div>
  );
};

export default EventCard;
