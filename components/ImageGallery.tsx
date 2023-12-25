// pages/index.tsx
import React from 'react';
import Link from 'next/link';
import Gallery from '../components/GalleryImage';

const ImageGallery: React.FC = () => {
   // Placeholder image URLs
   const galleryImages = [
    '/static/insta/1.jpg',
    '/static/insta/2.jpg',
    '/static/insta/3.jpg',
    '/static/insta/4.jpg',
    '/static/insta/5.jpg',
    '/static/insta/6.jpg',
    '/static/insta/7.jpg',
    '/static/insta/8.jpg',
    '/static/insta/9.jpg',
    '/static/insta/10.jpg',
  ];

  return (
    <div className="mx-auto">
      <div>
        <h2 className="text-l mb-4">through the lens, I paint the world in pixel...</h2>
        <Gallery images={galleryImages} />
      </div>
    </div>
  );
};

export default ImageGallery;
