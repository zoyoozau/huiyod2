import React from 'react';
import { LearningActivity } from '../types';
import { MapPin, User, Phone } from 'lucide-react';

interface ActivityCardProps {
  activity: LearningActivity;
  onClick: (activity: LearningActivity) => void;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onClick }) => {
  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-100 group cursor-pointer flex flex-col h-full"
      onClick={() => onClick(activity)}
    >
      <div className="relative h-48 overflow-hidden shrink-0">
        <img 
          src={activity.imageUrl} 
          alt={activity.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-orange-600 shadow-sm">
          {activity.category}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-stone-800 mb-2 line-clamp-1 group-hover:text-orange-600 transition-colors">{activity.title}</h3>
        <p className="text-stone-600 text-sm mb-4 line-clamp-3 flex-grow">
          {activity.description}
        </p>
        
        <div className="space-y-2 text-sm text-stone-500 mt-auto">
          <div className="flex items-center gap-2">
            <User size={14} className="text-orange-500" />
            <span>โดย {activity.ownerName}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-orange-500" />
            <span className="truncate">{activity.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-orange-500" />
            <span>{activity.contactInfo}</span>
          </div>
        </div>
        
        <button 
          className="mt-5 w-full py-2 bg-stone-100 text-stone-700 rounded-lg font-medium hover:bg-stone-200 transition-colors text-sm group-hover:bg-orange-50 group-hover:text-orange-700"
          onClick={(e) => {
            e.stopPropagation();
            onClick(activity);
          }}
        >
          ดูรายละเอียด
        </button>
      </div>
    </div>
  );
};