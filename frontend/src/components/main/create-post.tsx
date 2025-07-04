'use client';

import Image from 'next/image';
import { Video, ImageIcon, Smile } from 'lucide-react';

export default function CreatePost() {
  return (
    <div className="bg-[#242526] p-4 rounded-lg shadow mb-4 text-white">
      <div className="flex items-center gap-3">
        <Image
          src="/avatar-user.jpg"
          alt="User"
          width={40}
          height={40}
          className="rounded-full"
        />
        <input
          className="bg-[#3A3B3C] rounded-full px-4 py-3 flex-1 text-md outline-none"
          placeholder="Lê ơi, bạn đang nghĩ gì thế?"
        />
      </div>
      <div className="flex justify-between mt-4 px-4 text-sm text-gray-300">
        <Option icon={<Video className="text-red-500" size={18} />} label="Video trực tiếp" />
        <Option icon={<ImageIcon className="text-green-500" size={18} />} label="Ảnh/video" />
        <Option icon={<Smile className="text-yellow-400" size={18} />} label="Cảm xúc" />
      </div>
    </div>
  );
}

function Option({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 hover:bg-[#3A3B3C] p-2 rounded cursor-pointer">
      {icon}
      <span>{label}</span>
    </div>
  );
}
