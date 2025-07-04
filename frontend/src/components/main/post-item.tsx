'use client';

import Image from 'next/image';
import { MoreHorizontal } from 'lucide-react';

export default function PostItem() {
  return (
    <div className="bg-[#242526] rounded-lg shadow p-4 mb-4 text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3">
          <Image src="/user-avatar.jpg" alt="User" width={36} height={36} className="rounded-full" />
          <div>
            <p className="text-sm font-semibold">TOP Comments</p>
            <span className="text-xs text-gray-400">3 phút trước · 🌐</span>
          </div>
        </div>
        <MoreHorizontal className="cursor-pointer text-gray-400" />
      </div>

      {/* Caption */}
      <p className="text-sm mb-2">
        Ai tài trợ cho ông áo xanh kia đôi dép khác đi. Đang xúc động mà dép cứ tuột hoài zậy 🤣🤣
      </p>

      {/* Video */}
      <div className="rounded-lg overflow-hidden max-h-[400px]">
        <video controls className="w-full">
          <source src="/sample-video.mp4" type="video/mp4" />
          <track
            kind="captions"
            src="/sample-video-captions.vtt"
            srcLang="vi"
            label="Vietnamese"
            default
          />
          {/* Fallback text for browsers that do not support the video element */}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
