import Image from 'next/image';
import React from 'react';

const Showcase = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-8">
      {/* Most Clicked */}
      <Image
        alt="Most CLICKED"
        src="/image1.png"
        width={418}
        height={286}
        loading="lazy"
      />

      {/* Most Watchlisted */}
      <Image
        alt="Watchlisted"
        src="/image2.png"
        width={418}
        height={286}
        loading="lazy"
      />

      {/* Hottest Listing */}
      <Image
        alt="ottest Listing"
        src="/image3.png"
        width={418}
        height={286}
        loading="lazy"
      />
    </div>
  );
};

export default Showcase;
