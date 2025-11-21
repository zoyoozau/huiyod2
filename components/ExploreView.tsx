import React, { useState, useMemo } from 'react';
import { LearningActivity, Category } from '../types';
import { ActivityCard } from './ActivityCard';
import { Search, SlidersHorizontal } from 'lucide-react';

interface ExploreViewProps {
  activities: LearningActivity[];
  onActivityClick: (activity: LearningActivity) => void;
}

export const ExploreView: React.FC<ExploreViewProps> = ({ activities, onActivityClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredActivities = useMemo(() => {
    return activities.filter((act) => {
      const matchesSearch = act.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            act.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || act.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [activities, searchTerm, selectedCategory]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 pb-24 md:pb-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-stone-800 mb-2">ค้นหาแหล่งเรียนรู้</h2>
        <p className="text-stone-500">เลือกกิจกรรมที่ใช่ ในสไตล์ที่คุณชอบ</p>
      </div>

      {/* Search Bar & Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white p-4 rounded-2xl shadow-sm border border-stone-100">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
          <input
            type="text"
            placeholder="ค้นหากิจกรรม (เช่น สานตะกร้า, ทำขนม)..."
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-50 border-transparent focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            <SlidersHorizontal size={20} className="text-stone-400 mr-2 shrink-0" />
            <button
                onClick={() => setSelectedCategory('All')}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === 'All' ? 'bg-stone-800 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
            >
                ทั้งหมด
            </button>
            {Object.values(Category).map(cat => (
                <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === cat ? 'bg-orange-500 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
                >
                    {cat}
                </button>
            ))}
        </div>
      </div>

      {/* Grid */}
      {filteredActivities.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((activity) => (
            <ActivityCard 
              key={activity.id} 
              activity={activity} 
              onClick={onActivityClick}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
            <div className="inline-block p-4 rounded-full bg-stone-100 mb-4">
                <Search size={32} className="text-stone-400" />
            </div>
            <h3 className="text-lg font-medium text-stone-800">ไม่พบกิจกรรมที่คุณค้นหา</h3>
            <p className="text-stone-500 mt-1">ลองเปลี่ยนคำค้นหาหรือเลือกหมวดหมู่อื่นดูนะ</p>
        </div>
      )}
    </div>
  );
};