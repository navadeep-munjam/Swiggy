// import React from 'react';
// import { LucideIcon } from 'lucide-react'; // Make sure to install lucide-react or use your icon import

function CategoryCard({ image, name, onClick, Icon }) {
  return (
    <div
      className="
        w-[120px] h-[120px] md:w-[180px] md:h-[180px]
        rounded-3xl
        border border-[#ececec]
        bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef]
        shadow-[8px_8px_24px_#d1d9e6,-8px_-8px_24px_#ffffff]
        hover:shadow-[4px_4px_16px_#d1d9e6,-4px_-4px_16px_#ffffff]
        transition-all duration-300
        flex flex-col items-center justify-center
        cursor-pointer
        relative
        overflow-hidden
      "
      onClick={onClick}
    >
      {/* Lucide Icon or Image */}
      <div className="flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#f4f7fb] shadow-inner mb-2 relative z-10">
        {Icon ? (
          <Icon size={40} strokeWidth={2.2} className="text-[#ff4d2d]" />
        ) : (
          <img
            src={image}
            alt={name || 'Category'}
            className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full"
          />
        )}
      </div>
      {/* Glassmorphism label */}
      <div className="
        absolute bottom-3 left-1/2 -translate-x-1/2
        px-4 py-1
        bg-white/60
        backdrop-blur-md
        rounded-xl
        shadow
        text-center
        text-base md:text-lg
        font-semibold
        text-gray-700
        z-20
        border border-[#ececec]
      ">
        {name}
      </div>
      {/* Decorative neumorphic highlight */}
      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/60 blur-[6px] z-0" />
    </div>
  );
}

export default CategoryCard;