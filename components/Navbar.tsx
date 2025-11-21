import React from 'react';
import { ViewState } from '../types';
import { BookOpen, PlusCircle, Search, Home } from 'lucide-react';

interface NavbarProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onChangeView }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-200 py-2 md:py-0 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => onChangeView('HOME')}
          >
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white mr-3 shadow-lg shrink-0">
              <BookOpen size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-stone-800 leading-tight">ห้วยยอด<span className="text-orange-600">เรียนรู้</span></h1>
              <p className="text-xs text-stone-500">ภูมิปัญญาท้องถิ่นสู่สากล</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => onChangeView('HOME')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                currentView === 'HOME' 
                  ? 'bg-orange-100 text-orange-700' 
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              <span className="flex items-center gap-2"><Home size={16}/> หน้าแรก</span>
            </button>
            <button
              onClick={() => onChangeView('EXPLORE')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                currentView === 'EXPLORE' 
                  ? 'bg-orange-100 text-orange-700' 
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              <span className="flex items-center gap-2"><Search size={16}/> ค้นหา</span>
            </button>
            <button
              onClick={() => onChangeView('REGISTER_SELECTION')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                currentView === 'ADD_LISTING' || currentView === 'ADD_TECHNICIAN' || currentView === 'REGISTER_SELECTION'
                  ? 'bg-orange-600 text-white shadow-md hover:bg-orange-700' 
                  : 'bg-stone-800 text-white hover:bg-stone-700'
              }`}
            >
              <span className="flex items-center gap-2"><PlusCircle size={16}/> สร้างโพสต์ / ลงทะเบียน</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Bottom Bar (Sticky) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 flex justify-around p-3 pb-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50">
        <button onClick={() => onChangeView('HOME')} className={`flex flex-col items-center p-2 ${currentView === 'HOME' ? 'text-orange-600' : 'text-stone-400'}`}>
          <Home size={24} />
          <span className="text-xs mt-1">หน้าแรก</span>
        </button>
        <button onClick={() => onChangeView('EXPLORE')} className={`flex flex-col items-center p-2 ${currentView === 'EXPLORE' ? 'text-orange-600' : 'text-stone-400'}`}>
          <Search size={24} />
          <span className="text-xs mt-1">ค้นหา</span>
        </button>
        <button onClick={() => onChangeView('REGISTER_SELECTION')} className={`flex flex-col items-center p-2 ${['ADD_LISTING', 'ADD_TECHNICIAN', 'REGISTER_SELECTION'].includes(currentView) ? 'text-orange-600' : 'text-stone-400'}`}>
          <PlusCircle size={24} />
          <span className="text-xs mt-1">สร้างโพสต์</span>
        </button>
      </div>
    </nav>
  );
};