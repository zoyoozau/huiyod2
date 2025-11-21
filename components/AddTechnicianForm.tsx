import React, { useState } from 'react';
import { Technician } from '../types';
import { Image as ImageIcon, Wrench } from 'lucide-react';

interface AddTechnicianFormProps {
  onSubmit: (technician: Technician) => void;
  onCancel: () => void;
}

export const AddTechnicianForm: React.FC<AddTechnicianFormProps> = ({ onSubmit, onCancel }) => {
  const [name, setName] = useState('');
  const [expertise, setExpertise] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [priceDescription, setPriceDescription] = useState('');
  
  // Mock image upload
  const [imagePreview, setImagePreview] = useState('https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800'); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTechnician: Technician = {
      id: `t-${Date.now()}`,
      name,
      expertise,
      description,
      location,
      contactInfo,
      priceDescription,
      imageUrl: imagePreview,
      isVerified: false,
    };
    onSubmit(newTechnician);
  };

  const inputClassName = "w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-sm";

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8 my-8 border-t-4 border-blue-600">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
            <Wrench size={32} />
        </div>
        <h2 className="text-2xl font-bold text-stone-800">ลงทะเบียนช่างชุมชน</h2>
        <p className="text-stone-500 mt-2">เสนอตัวรับงานซ่อมแซมและบริการในราคามิตรภาพ</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">ชื่อช่าง / ชื่อร้าน</label>
          <input
            type="text"
            required
            className={inputClassName}
            placeholder="เช่น ช่างไข่, ร้านลุงดำการช่าง"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Expertise */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">งานที่ถนัด / บริการ</label>
          <input
            type="text"
            required
            className={inputClassName}
            placeholder="เช่น ซ่อมประปา, ตัดต้นไม้, ซ่อมมอเตอร์ไซค์"
            value={expertise}
            onChange={(e) => setExpertise(e.target.value)}
          />
        </div>

        {/* Price Description */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">ราคาโดยประมาณ</label>
          <input
            type="text"
            required
            className={inputClassName}
            placeholder="เช่น เริ่มต้น 100 บาท, ประเมินหน้างาน"
            value={priceDescription}
            onChange={(e) => setPriceDescription(e.target.value)}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">รายละเอียดเพิ่มเติม</label>
          <textarea
            required
            className={`${inputClassName} min-h-[100px]`}
            placeholder="อธิบายบริการเพิ่มเติม พื้นที่ที่รับงาน หรือเวลาทำการ..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Contact & Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">เบอร์โทรศัพท์ติดต่อ</label>
            <input
              type="text"
              required
              className={inputClassName}
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">พื้นที่ให้บริการ / ที่อยู่</label>
            <input
              type="text"
              required
              className={inputClassName}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        {/* Image (Mock) */}
        <div>
           <label className="block text-sm font-medium text-stone-700 mb-1">รูปภาพประกอบ</label>
           <div className="border-2 border-dashed border-stone-200 rounded-xl p-6 flex flex-col items-center justify-center text-stone-400 hover:border-blue-400 hover:bg-blue-50 transition-colors cursor-pointer bg-stone-50">
              <ImageIcon size={48} className="mb-2 opacity-50"/>
              <span className="text-sm">คลิกเพื่ออัปโหลดรูปโปรไฟล์หรือผลงาน (จำลอง)</span>
              <input type="file" className="hidden" onChange={() => {/* Mock implementation */}} />
           </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 py-3 rounded-xl font-medium text-stone-600 bg-stone-100 hover:bg-stone-200 transition-colors"
          >
            ยกเลิก
          </button>
          <button
            type="submit"
            className="flex-1 py-3 rounded-xl font-medium text-white bg-stone-800 hover:bg-stone-900 transition-colors shadow-lg"
          >
            ลงทะเบียนช่าง
          </button>
        </div>
      </form>
    </div>
  );
};