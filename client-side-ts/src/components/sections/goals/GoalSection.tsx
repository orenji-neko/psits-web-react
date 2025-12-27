import { goalSectionData } from '@/data/sections-data';

export default function GoalsSection() {
  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 py-20 px-4 overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            {goalSectionData.title}
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-light tracking-wide">
            {goalSectionData.subtitle}
          </p>
        </div>

        {/* Goals Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-1/3 top-8 bottom-8 w-0.5 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 hidden md:block" />
          
          {/* Goals list */}
          <div className="space-y-8 md:space-y-12">
            {goalSectionData.goals.map((goal, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Left side - Title */}
                <div className="w-full md:w-1/3 text-left md:text-right">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 pr-0 md:pr-8">
                    {goal.title}
                  </h3>
                </div>

                {/* Center dot */}
                <div className="absolute left-0 md:left-1/3 top-0 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-10 hidden md:block">
                  <div 
                    className={`w-4 h-4 rounded-full border-4 transition-all duration-300 ${
                      index === 0
                        ? 'bg-blue-500 border-blue-200 shadow-lg shadow-blue-500/50' 
                        : 'bg-white border-gray-300'
                    }`}
                  />
                </div>

                {/* Right side - Description */}
                <div className="w-full md:w-2/3 pl-0 md:pl-8">
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />
    </section>
  );
};