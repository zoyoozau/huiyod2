import React from 'react';
import { LearningActivity } from '../types';
import { ArrowLeft, MapPin, User, Phone, Calendar } from 'lucide-react';

interface ActivityDetailViewProps {
  activity: LearningActivity;
  onBack: () => void;
}

export const ActivityDetailView: React.FC<ActivityDetailViewProps> = ({ activity, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white min-h-screen sm:min-h-0 sm:my-8 sm:rounded-2xl shadow-xl overflow-hidden animate-fade-in">
      <div className="relative h-64 sm:h-96">
        <img 
          src={activity.imageUrl} 
          alt={activity.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent sm:hidden"></div>
        <button 
          onClick={onBack}
          className="absolute top-4 left-4 bg-white/90 hover:bg-white text-stone-800 p-2 rounded-full shadow-lg transition-all backdrop-blur-sm z-10"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="absolute bottom-4 left-4 right-4 sm:hidden">
            <span className="inline-block px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-medium shadow-sm mb-2">
                {activity.category}
            </span>
            <h1 className="text-2xl font-bold text-white leading-tight">{activity.title}</h1>
        </div>
        <div className="absolute bottom-4 left-4 hidden sm:block">
            <span className="px-3 py-1 rounded-full bg-orange-600 text-white text-sm font-medium shadow-sm">
                {activity.category}
            </span>
        </div>
      </div>
      
      <div className="p-6 sm:p-10">
        <div className="hidden sm:flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
            <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-3">{activity.title}</h1>
                <div className="flex flex-wrap items-center gap-6 text-stone-500">
                    <div className="flex items-center gap-2">
                        <User size={18} className="text-orange-500" />
                        <span>โดย {activity.ownerName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-orange-500" />
                        <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-orange-500" />
                        <span>{new Date(activity.createdAt).toLocaleDateString('th-TH')}</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Mobile Meta info */}
        <div className="sm:hidden flex flex-col gap-3 text-stone-600 mb-6 pb-6 border-b border-stone-100">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-orange-500">
                    <User size={16} />
                </div>
                <span>โดย {activity.ownerName}</span>
            </div>
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-orange-500">
                    <MapPin size={16} />
                </div>
                <span>{activity.location}</span>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <h3 className="text-xl font-bold text-stone-800 mb-4">เกี่ยวกับกิจกรรม</h3>
                <p className="text-stone-600 whitespace-pre-line leading-relaxed text-lg mb-8">
                    {activity.description}
                </p>
            </div>

            <div className="lg:col-span-1">
                <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100 sticky top-24">
                    <h3 className="text-lg font-bold text-stone-800 mb-4">สนใจเรียนรู้?</h3>
                    <p className="text-stone-500 text-sm mb-4">
                        ติดต่อสอบถามรายละเอียด นัดหมายวันเวลา หรือสอบถามค่าใช้จ่ายเพิ่มเติมได้ที่
                    </p>
                    <div className="flex items-center gap-3 text-lg text-stone-800 font-semibold bg-white p-3 rounded-xl border border-stone-200 mb-4 shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                            <Phone size={20} />
                        </div>
                        <span>{activity.contactInfo}</span>
                    </div>
                    <button className="w-full py-3 bg-orange-600 text-white rounded-xl font-medium hover:bg-orange-700 transition-colors shadow-md">
                        โทรออก
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};