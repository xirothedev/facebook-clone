'use client';

import Image from 'next/image';

const stories = [
  { name: 'Ng Thảo', img: '/story1.jpg' },
  { name: 'Hồng Trang Đỏ', img: '/story2.jpg' },
  { name: 'Lê Hoàng Việt', img: '/story3.jpg' },
  { name: 'Hứa Thị Ánh Nguyệt', img: '/story4.jpg' },
];

export default function StoriesList() {
  return (
    <div className="flex overflow-x-auto gap-3 pb-2 mb-4">
      <StoryCard name="Bạn" img="/user-avatar.jpg" isCreate />
      {stories.map((s, i) => (
        <StoryCard key={i} name={s.name} img={s.img} />
      ))}
    </div>
  );
}

function StoryCard({ name, img, isCreate = false }: { name: string; img: string; isCreate?: boolean }) {
  return (
    <div className="min-w-[100px] h-[170px] bg-[#3A3B3C] rounded-lg overflow-hidden relative cursor-pointer">
      <Image src={img} alt={name} fill className="object-cover" />
      <div className="absolute bottom-0 bg-black/60 text-xs p-1 w-full text-center">{isCreate ? 'Tạo tin' : name}</div>
    </div>
  );
}
