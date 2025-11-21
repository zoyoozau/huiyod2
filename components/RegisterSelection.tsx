import React from 'react';
import { BookOpen, Wrench, ArrowRight } from 'lucide-react';

interface RegisterSelectionProps {
  onSelect: (type: 'ACTIVITY' | 'TECHNICIAN') => void;
}

export const RegisterSelection: React.FC<RegisterSelectionProps> = ({ onSelect }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-stone-800 mb-3">คุณต้องการลงทะเบียนอะไร?</h2>
        <p className="text-stone-500">เลือกประเภทข้อมูลที่คุณต้องการแบ่งปันให้กับชุมชน</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Option 1: Learning Activity */}
        <button 
          onClick={() => onSelect('ACTIVITY')}
          className="group relative bg-white p-8 rounded-3xl shadow-sm border-2 border-stone-100 hover:border-orange-500 hover:shadow-xl transition-all duration-300 text-left flex flex-col h-full overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
          
          <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 relative z-10 group-hover:bg-orange-600 group-hover:text-white transition-colors">
            <BookOpen size={32} />
          </div>
          
          <h3 className="text-2xl font-bold text-stone-800 mb-3 group-hover:text-orange-600 transition-colors">
            แหล่งเรียนรู้ / กิจกรรม
          </h3>
          <p className="text-stone-500 mb-8 flex-grow">
            แบ่งปันความรู้ ภูมิปัญญา การทำอาหาร หรืองานฝีมือ เปิดบ้านให้คนในชุมชนได้เข้ามาเรียนรู้
          </p>
          
          <div className="flex items-center text-orange-600 font-medium">
            ลงทะเบียนแหล่งเรียนรู้ <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>

        {/* Option 2: Technician */}
        <button 
          onClick={() => onSelect('TECHNICIAN')}
          className="group relative bg-white p-8 rounded-3xl shadow-sm border-2 border-stone-100 hover:border-blue-500 hover:shadow-xl transition-all duration-300 text-left flex flex-col h-full overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
          
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 relative z-10 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <Wrench size={32} />
          </div>
          
          <h3 className="text-2xl font-bold text-stone-800 mb-3 group-hover:text-blue-600 transition-colors">
            ช่างชุมชน / งานบริการ
          </h3>
          <p className="text-stone-500 mb-8 flex-grow">
            ฝากร้าน รับซ่อม รับจ้างทั่วไป สำหรับช่างในท้องถิ่น ราคากันเอง บริการคนในชุมชน
          </p>
          
          <div className="flex items-center text-blue-600 font-medium">
            ลงทะเบียนช่างชุมชน <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </div>
    </div>
  );
};