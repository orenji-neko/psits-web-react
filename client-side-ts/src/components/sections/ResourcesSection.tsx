import React, { useState } from 'react';

type Resource = {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  year: 'First Year' | 'Second Year' | 'Third Year' | 'Fourth Year';
};

const DUMMY_RESOURCES: Resource[] = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: `IT-NETWORK${30 + i} Computer Networks`,
  category: 'Networking',
  excerpt:
    'Learn the fundamentals of computer networking, including network models, protocols, and basic configuration.',
  image: `https://picsum.photos/seed/resource-${i}/640/360`,
  year: (['First Year', 'Second Year', 'Third Year', 'Fourth Year'][(i % 4)] as Resource['year']),
}));

export const ResourcesSection: React.FC = () => {
  const years: Resource['year'][] = ['First Year', 'Second Year', 'Third Year', 'Fourth Year'];
  const [activeYear, setActiveYear] = useState<Resource['year']>('Third Year');

  const resources = DUMMY_RESOURCES.filter((r) => r.year === activeYear);

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center text-gray-100/20 tracking-tight mb-6">Materials</h2>
        <h3 className="text-3xl text-center font-bold text-gray-900 mb-8">Resources</h3>

        {/* Year tabs */}
        <nav className="flex items-center justify-center gap-6 mb-10" aria-label="Years">
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setActiveYear(y)}
              className={`text-sm md:text-base font-medium pb-2 ${
                activeYear === y
                  ? 'text-[#1C9DDE] border-b-2 border-[#1C9DDE]'
                  : 'text-gray-400'
              }`}
            >
              {y}
            </button>
          ))}
        </nav>

        {/* Resource grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-12">No resources yet for {activeYear}.</div>
          ) : (
            resources.map((res) => (
              <article key={res.id} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                <div className="relative">
                  <img
                    src={res.image}
                    alt={res.title}
                    className="w-full h-44 md:h-48 object-cover"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 bg-white/90 text-xs text-[#1C9DDE] px-3 py-1 rounded-full font-semibold">{res.category}</span>
                </div>

                <div className="p-5">
                  <h4 className="text-sm text-[#1C9DDE] font-bold mb-2">{res.category}</h4>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 truncate">{res.title}</h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-3">{res.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <button className="text-sm text-[#1C9DDE] font-medium py-2 px-4 rounded-full border border-[#E6F6FF] hover:bg-[#F2FBFF]">
                      Learn more ↗
                    </button>
                    <span className="text-xs text-gray-400">{res.year}</span>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
