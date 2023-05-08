import Image from 'next/image';
import React from 'react';

const PortfolioPage = ({ name }: { name: String }) => {
  return (
    <div className='container'>
      <Image
        src={`../../images/${name}_concept.jpg`}
        alt={`${name} 컨셉 페이지 사진`}
      />
    </div>
  );
};

export default PortfolioPage;
