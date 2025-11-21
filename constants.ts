import { LearningActivity, Category, Technician } from './types';

export const INITIAL_ACTIVITIES: LearningActivity[] = [
  {
    id: '1',
    title: 'การสานตะกร้าไม้ไผ่',
    description: 'เรียนรู้ศิลปะการสานตะกร้าจากไม้ไผ่ท้องถิ่น กับปราชญ์ชาวบ้านที่มีประสบการณ์กว่า 40 ปี สอนตั้งแต่การเลือกไม้ การจักตอก จนถึงการขึ้นรูปเป็นตะกร้าสวยงามและแข็งแรง',
    category: Category.CRAFTS,
    ownerName: 'ลุงสมหมาย',
    location: 'หมู่ 3 ต.ห้วยยอด',
    imageUrl: 'https://mpics.mgronline.com/pics/Images/566000011536704.JPEG',
    contactInfo: '081-234-5678',
    createdAt: Date.now() - 100000,
  },
  {
    id: '2',
    title: 'การทำบ้านดิน',
    description: 'เวิร์คช็อปการสร้างบ้านจากดินธรรมชาติ เทคนิคการผสมดินแกลบ การก่อกำแพง และการฉาบผิว ให้เย็นสบายและประหยัดพลังงาน เหมาะสำหรับผู้ที่สนใจวิถีชีวิตแบบพึ่งพาตนเอง',
    category: Category.CONSTRUCTION,
    ownerName: 'สวนแต่แรก',
    location: 'หมู่ที่5 ต.ห้วยยอด',
    imageUrl: 'https://share.google/4Sf2tTXr3iDy7Wvgf', // Note: This URL provided by user might be broken, keeping as requested or fallback to previous working one if needed. Assuming placeholder logic handles broken images.
    contactInfo: '0866275668',
    createdAt: Date.now() - 200000,
  },
  {
    id: '3',
    title: 'เหมืองแร่ดีบุก ร่อนแร่ดีบุก',
    description: 'ย้อนรอยประวัติศาสตร์ยุคเหมืองแร่เฟื่องฟูของห้วยยอด สาธิตวิธีการร่อนแร่ด้วยเลียงแบบโบราณ เรียนรู้วิถีชีวิตชาวเหมือง และสัมผัสอุปกรณ์จริงที่ใช้ในอดีต',
    category: Category.CULTURE,
    ownerName: 'กลุ่มรักษ์เมืองเก่า',
    location: 'ตลาดห้วยยอด',
    imageUrl: 'https://trangtoday.net/wp-content/uploads/2022/09/%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%81%E0%B9%88%E0%B8%B2%E0%B8%AB%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%A2%E0%B8%AD%E0%B8%94_%E0%B9%92%E0%B9%92%E0%B9%90%E0%B9%99%E0%B9%91%E0%B9%90_10-1024x576.jpg',
    contactInfo: '075-123-456',
    createdAt: Date.now() - 300000,
  },
  {
    id: '4',
    title: 'เกษตรอินทรีย์วิถีไทย',
    description: 'เรียนรู้การปลูกผักสวนครัวรั้วกินได้ การทำปุ๋ยหมักชีวภาพ และการเลี้ยงไก่ไข่อารมณ์ดี เพื่อสร้างแหล่งอาหารที่ปลอดภัยในครัวเรือน',
    category: Category.AGRICULTURE,
    ownerName: 'สวนลุงแดง',
    location: 'ต.นาวง',
    imageUrl: 'https://picsum.photos/id/292/800/600',
    contactInfo: '086-555-4444',
    createdAt: Date.now() - 400000,
  }
];

export const INITIAL_TECHNICIANS: Technician[] = [
  {
    id: 't1',
    name: 'ลุงหว่าง',
    expertise: 'รับซ่อมท่อประปา / ปั๊มน้ำ',
    description: 'ซ่อมท่อแตก ท่อรั่ว เปลี่ยนก๊อก เดินท่อใหม่ ปั๊มน้ำไม่ทำงาน เรียกใช้ได้ตลอดครับ ราคาชาวบ้าน',
    location: 'ซอย 5 เทศบาลห้วยยอด',
    contactInfo: '089-111-2222',
    priceDescription: 'ค่าแรงเริ่มต้น 150 บาท',
    imageUrl: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800',
    isVerified: true
  },
  {
    id: 't2',
    name: 'ลุงเท่ง',
    expertise: 'รับตัดต้นไม้ / แต่งสวน',
    description: 'รับจ้างตัดแต่งกิ่งไม้ ตัดต้นไม้ใหญ่ที่เสี่ยงล้ม เคลียร์พื้นที่รกร้าง มีเครื่องมือพร้อม ทีมงานคนกันเอง',
    location: 'ต.เขากอบ',
    contactInfo: '081-999-8888',
    priceDescription: 'ประเมินราคาตามหน้างาน (ถูกกว่าจ้างบริษัท)',
    imageUrl: 'https://images.unsplash.com/photo-1592421780763-4344d90d35c1?auto=format&fit=crop&q=80&w=800',
    isVerified: true
  },
  {
    id: 't3',
    name: 'ช่างบ่าว',
    expertise: 'ซ่อมมอเตอร์ไซค์ / ปะยางนอกสถานที่',
    description: 'รถเสีย สตาร์ทไม่ติด ยางรั่วกลางทาง โทรหาช่างบ่าว บริการถึงที่ ในเขตห้วยยอด',
    location: 'ตลาดห้วยยอด',
    contactInfo: '090-555-6666',
    priceDescription: 'ค่าบริการตามระยะทาง + ค่าอะไหล่',
    imageUrl: 'https://images.unsplash.com/photo-1592853625601-bb9d23da12fc?auto=format&fit=crop&q=80&w=800',
    isVerified: false
  }
];

export const CATEGORIES = Object.values(Category);