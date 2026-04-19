import { useState } from 'react';

// Placeholder component in case image generation is added later
export const ImageGallery = ({ imageUrls = [] }: { imageUrls?: string[] }) => {
  const [loading, setLoading] = useState(true);

  if (imageUrls.length === 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-surface rounded-lg shadow-sm border border-primary/10 overflow-hidden hover-lift transition-all duration-300 ease-in-out"
          >
            <div className="w-full h-48 bg-gradient-to-br from-bg to-secondary/20 flex items-center justify-center">
              <span className="text-dim text-sm">Generated Image {i + 1}</span>
            </div>
            <div className="p-4">
              <h3 className="font-display text-primary text-lg">Untitled Concept</h3>
              <p className="text-dim text-sm mt-1">AI-generated design exploration</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {imageUrls.map((src, i) => (
        <div
          key={i}
          className="bg-surface rounded-lg shadow-sm border border-primary/10 overflow-hidden hover-lift transition-all duration-300 ease-in-out"
        >
          <img
            src={src}
            alt={`Generated artwork ${i + 1}`}
            className="w-full h-48 object-cover transition-opacity duration-300"
            onLoad={() => setLoading(false)}
            loading="lazy"
          />
          <div className="p-4">
            <h3 className="font-display text-primary text-lg">Concept {i + 1}</h3>
            <p className="text-dim text-sm mt-1">AI-generated visual</p>
          </div>
        </div>
      ))}
    </div>
  );
};