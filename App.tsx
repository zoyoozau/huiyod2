import React, { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { ExploreView } from './components/ExploreView';
import { AddListingForm } from './components/AddListingForm';
import { ActivityDetailView } from './components/ActivityDetailView';
import { RegisterSelection } from './components/RegisterSelection';
import { AddTechnicianForm } from './components/AddTechnicianForm';
import { TechnicianCard } from './components/TechnicianCard';
import { INITIAL_ACTIVITIES, INITIAL_TECHNICIANS } from './constants';
import { LearningActivity, ViewState, Technician } from './types';
import { ArrowRight, Leaf, Heart, Users, Wrench } from 'lucide-react';
import { ActivityCard } from './components/ActivityCard';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [activities, setActivities] = useState<LearningActivity[]>(INITIAL_ACTIVITIES);
  const [technicians, setTechnicians] = useState<Technician[]>(INITIAL_TECHNICIANS);
  const [selectedActivity, setSelectedActivity] = useState<LearningActivity | null>(null);

  const handleAddActivity = useCallback((newActivity: LearningActivity) => {
    setActivities((prev) => [newActivity, ...prev]);
    setCurrentView('EXPLORE');
  }, []);

  const handleAddTechnician = useCallback((newTechnician: Technician) => {
    setTechnicians((prev) => [newTechnician, ...prev]);
    setCurrentView('HOME');
    setTimeout(() => {
        const element = document.getElementById('technician-section');
        element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, []);

  const handleActivityClick = useCallback((activity: LearningActivity) => {
    setSelectedActivity(activity);
    setCurrentView('ACTIVITY_DETAILS');
    window.scrollTo(0, 0);
  }, []);

  const handleBackToExplore = useCallback(() => {
    setSelectedActivity(null);
    setCurrentView('EXPLORE');
  }, []);

  const renderContent = () => {
    switch (currentView) {
      case 'REGISTER_SELECTION':
        return (
          <RegisterSelection 
            onSelect={(type) => {
              if (type === 'ACTIVITY') setCurrentView('ADD_LISTING');
              else setCurrentView('ADD_TECHNICIAN');
            }}
          />
        );
      case 'ADD_LISTING':
        return (
          <AddListingForm 
            onSubmit={handleAddActivity} 
            onCancel={() => setCurrentView('HOME')} 
          />
        );
      case 'ADD_TECHNICIAN':
        return (
          <AddTechnicianForm 
            onSubmit={handleAddTechnician} 
            onCancel={() => setCurrentView('HOME')} 
          />
        );
      case 'EXPLORE':
        return (
          <ExploreView 
            activities={activities} 
            onActivityClick={handleActivityClick}
          />
        );
      case 'ACTIVITY_DETAILS':
        if (!selectedActivity) return null;
        return (
          <ActivityDetailView 
            activity={selectedActivity} 
            onBack={handleBackToExplore} 
          />
        );
      case 'HOME':
      default:
        return (
          <>
            {/* Hero Section */}
            <div className="relative bg-stone-900 text-white overflow-hidden">
              <div className="absolute inset-0">
                 <img 
                    src="https://picsum.photos/id/28/1920/1080" 
                    className="w-full h-full object-cover opacity-50"
                    alt="Huai Yot Landscape"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-stone-900/30"></div>
              </div>
              
              <div className="relative max-w-6xl mx-auto px-4 py-24 sm:py-32 lg:px-8 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-semibold mb-6 backdrop-blur-sm">
                    ชุมชนเข้มแข็ง แหล่งเรียนรู้ยั่งยืน
                </span>
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 font-display">
                  เปิดโลกการเรียนรู้<br/>ที่ <span className="text-orange-400">ชุมชนห้วยยอด</span>
                </h1>
                <p className="text-lg sm:text-xl text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                  ค้นพบวิถีชีวิต ภูมิปัญญา และทักษะท้องถิ่นที่น่าสนใจ ตั้งแต่การสานตะกร้าไปจนถึงการทำบ้านดิน 
                  ร่วมเรียนรู้และแบ่งปันประสบการณ์กับคนในชุมชน
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                   <button 
                     onClick={() => setCurrentView('EXPLORE')}
                     className="px-8 py-3.5 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold text-lg shadow-lg shadow-orange-600/20 transition-all flex items-center justify-center gap-2"
                   >
                     ค้นหากิจกรรม <ArrowRight size={20}/>
                   </button>
                   <button 
                     onClick={() => setCurrentView('REGISTER_SELECTION')}
                     className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-lg transition-all"
                   >
                     ฉันมีแหล่งเรียนรู้ / ฝากร้าน
                   </button>
                </div>
              </div>
            </div>

            {/* Features Stats */}
            <div className="bg-white border-b border-stone-100">
                <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-4">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Leaf size={24} />
                        </div>
                        <h3 className="font-bold text-lg text-stone-800 mb-2">ธรรมชาติบำบัด</h3>
                        <p className="text-stone-500 text-sm">เรียนรู้กับธรรมชาติ สิ่งแวดล้อม และการใช้ชีวิตที่เรียบง่าย</p>
                    </div>
                    <div className="p-4">
                        <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Heart size={24} />
                        </div>
                        <h3 className="font-bold text-lg text-stone-800 mb-2">ใส่ใจด้วยใจ</h3>
                        <p className="text-stone-500 text-sm">ทุกกิจกรรมสอนด้วยความรักและความตั้งใจของคนในชุมชน</p>
                    </div>
                    <div className="p-4">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Users size={24} />
                        </div>
                        <h3 className="font-bold text-lg text-stone-800 mb-2">สร้างสังคม</h3>
                        <p className="text-stone-500 text-sm">เชื่อมโยงผู้คนต่างวัย ต่างถิ่น ให้มาแลกเปลี่ยนเรียนรู้กัน</p>
                    </div>
                </div>
            </div>

            {/* Recent Listings Preview */}
            <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
              <div className="flex justify-between items-end mb-8">
                  <div>
                      <h2 className="text-3xl font-bold text-stone-800">กิจกรรมแนะนำล่าสุด</h2>
                      <p className="text-stone-500 mt-2">อย่าพลาดโอกาสดีๆ ในการเรียนรู้สิ่งใหม่ๆ</p>
                  </div>
                  <button 
                    onClick={() => setCurrentView('EXPLORE')}
                    className="hidden sm:flex items-center gap-1 text-orange-600 font-medium hover:text-orange-700 transition-colors"
                  >
                    ดูทั้งหมด <ArrowRight size={16} />
                  </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {activities.slice(0, 3).map((activity) => (
                  <ActivityCard 
                    key={activity.id} 
                    activity={activity} 
                    onClick={handleActivityClick}
                  />
                ))}
              </div>
              
              <div className="mt-8 text-center sm:hidden">
                  <button 
                    onClick={() => setCurrentView('EXPLORE')}
                    className="px-6 py-2 border border-stone-300 rounded-full text-stone-600 font-medium hover:bg-stone-50"
                  >
                    ดูทั้งหมด
                  </button>
              </div>
            </div>

            {/* Community Technicians Section */}
            <div id="technician-section" className="bg-slate-50 border-t border-slate-200">
                <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-4">
                            <Wrench size={14} />
                            <span>บริการชุมชน</span>
                        </div>
                        <h2 className="text-3xl font-bold text-slate-800">ช่างชุมชน ฝีมือดี ราคากันเอง</h2>
                        <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
                            รวมช่างในท้องถิ่นห้วยยอด รับซ่อมสร้าง ดูแลบ้านสวน ในราคาที่เข้าถึงได้ง่าย ช่วยเหลือเกื้อกูลกันในชุมชน
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technicians.map((tech) => (
                            <TechnicianCard key={tech.id} technician={tech} />
                        ))}
                    </div>
                    
                    <div className="mt-12 text-center">
                         <p className="text-slate-500 mb-4">คุณเป็นช่างในพื้นที่และอยากรับงาน?</p>
                         <button 
                            onClick={() => setCurrentView('REGISTER_SELECTION')}
                            className="px-8 py-3 rounded-full bg-slate-800 text-white font-medium hover:bg-slate-900 transition-colors shadow-lg"
                         >
                            ลงทะเบียนฝากร้าน
                         </button>
                    </div>
                </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <Navbar currentView={currentView} onChangeView={setCurrentView} />
      <main className="animate-fade-in">
        {renderContent()}
      </main>
      
      <footer className="bg-stone-900 text-stone-400 py-12 mt-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-white text-xl font-bold mb-4">ห้วยยอดเรียนรู้</h2>
            <p className="mb-8 max-w-md mx-auto">โครงการส่งเสริมการเรียนรู้ตลอดชีวิตเพื่อชุมชนที่ยั่งยืน</p>
            <div className="border-t border-stone-800 pt-8 text-sm">
                © 2024 Huai Yot Learning Community. All rights reserved.
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;