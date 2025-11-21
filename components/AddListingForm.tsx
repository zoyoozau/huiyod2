import React, { useState } from 'react';
import { Category, LearningActivity } from '../types';
import { Image as ImageIcon } from 'lucide-react';

interface AddListingFormProps {
  onSubmit: (activity: LearningActivity) => void;
  onCancel: () => void;
}

export const AddListingForm: React.FC<AddListingFormProps> = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<Category>(Category.OTHER);
  const [description, setDescription] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [location, setLocation] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  
  // Mock image upload - in real app we'd handle file upload
  const [imagePreview, setImagePreview] = useState('https://picsum.photos/800/600'); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newActivity: LearningActivity = {
      id: Date.now().toString(),
      title,
      description,
      category,
      ownerName,
      location,
      contactInfo,
      imageUrl: imagePreview,
      createdAt: Date.now(),
    };
    onSubmit(newActivity);
  };

  const inputClassName = "w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all shadow-sm";

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8 my-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-stone-800">ลงทะเบียนแหล่งเรียนรู้</h2>
        <p className="text-stone-500 mt-2">แบ่งปันภูมิปัญญาและทักษะของคุณให้ชุมชนได้รู้จัก</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">ชื่อกิจกรรมการเรียนรู้</label>
          <input
            type="text"
            required
            className={inputClassName}
            placeholder="เช่น การสานตะกร้า, ทำปุ๋ยหมัก"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">หมวดหมู่</label>
          <select
            className={inputClassName}
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
          >
            {Object.values(Category).map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">รายละเอียดกิจกรรม</label>
          <textarea
            required
            className={`${inputClassName} min-h-[120px]`}
            placeholder="อธิบายเกี่ยวกับกิจกรรม สิ่งที่จะได้เรียนรู้ หรือจุดเด่น..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Owner & Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">ชื่อผู้สอน / เจ้าของ</label>
            <input
              type="text"
              required
              className={inputClassName}
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
            />
          </div>
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
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">สถานที่ตั้ง (หมู่บ้าน/ตำบล)</label>
          <input
            type="text"
            required
            className={inputClassName}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Image (Mock) */}
        <div>
           <label className="block text-sm font-medium text-stone-700 mb-1">รูปภาพประกอบ</label>
           <div className="border-2 border-dashed border-stone-200 rounded-xl p-6 flex flex-col items-center justify-center text-stone-400 hover:border-orange-400 hover:bg-orange-50 transition-colors cursor-pointer bg-stone-50">
              <ImageIcon size={48} className="mb-2 opacity-50"/>
              <span className="text-sm">คลิกเพื่ออัปโหลดรูปภาพ (จำลอง)</span>
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
            ยืนยันการลงทะเบียน
          </button>
        </div>
      </form>
    </div>
  );
};