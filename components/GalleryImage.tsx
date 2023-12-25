import React from 'react'
import Image from '@/components/Image'

interface GalleryProps {
  images: string[]
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <Image src={image} alt={`Image ${index + 1}`} className="gallery-image" />
        </div>
      ))}
    </div>
  )
}

export default Gallery
