import React from 'react';
import { Technician } from '../types';
import { MapPin, Phone, Wrench, BadgeCheck, Tag } from 'lucide-react';

interface TechnicianCardProps {
  technician: Technician;
}

export const TechnicianCard: React.FC<TechnicianCardProps> = ({ technician }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-stone-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col h-full">
      <div className="relative h-40 overflow-hidden shrink-0 bg-slate-100">
        <img 
          src={technician.imageUrl} 
          alt={technician.name} 
          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-900/60 to-transparent"></div>
        <div className="absolute bottom-3 left-3 text-white">
            <h3 className="text-lg font-bold flex items-center gap-1">
                {technician.name}
                {technician.isVerified && <BadgeCheck size={18} className="text-blue-400" />}
            </h3>
            <p className="text-xs text-slate-200 flex items-center gap-1">
                <MapPin size={12} /> {technician.location}
            </p>
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-3">
            <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-md border border-blue-100 mb-2">
                {technician.expertise}
            </span>
            <p className="text-stone-600 text-sm line-clamp-2">
            {technician.description}
            </p>
        </div>
        
        <div className="mt-auto space-y-2 pt-3 border-t border-stone-100">
            <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-stone-700 font-medium">
                    <Tag size={14} className="text-green-600" />
                    <span>{technician.priceDescription}</span>
                </div>
            </div>
            
            <a 
                href={`tel:${technician.contactInfo}`}
                className="flex items-center justify-center gap-2 w-full py-2 mt-2 bg-slate-800 text-white rounded-lg text-sm font-medium hover:bg-slate-900 transition-colors shadow-sm"
            >
                <Phone size={14} />
                <span>{technician.contactInfo}</span>
            </a>
        </div>
      </div>
    </div>
  );
};