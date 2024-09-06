import React from 'react';
import ThemedText from './ui-elements/ThemedText';

const OverlayEffect = ({ data, onClick, isLoading, error }) => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-10 gap-4">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error loading data</p>
        ) : (
          data?.map((item, index) => (
            <div
              key={index}
              className={`flex items-center flex-col justify-center cursor-pointer relative overflow-hidden bg-darkprimary border border-1 border-border text-center rounded-xl transition-transform duration-500`}
              style={{ aspectRatio: '1 / 1' }}
              onClick={(e) => onClick(e, index, item)}
            >
              <div className="w-[80px]">
                <img src={item.imageUrl} className="max-[100%]" />
              </div>
              <div className="inset-0 flex items-center justify-center text-white">
                <ThemedText className="font-urbanist font-bold text-[18px] mt-2">
                  {item.name}
                </ThemedText>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Overlay effect */}
      <div
        className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-10 gap-4 select-none pointer-events-none absolute inset-0"
        style={{
          opacity: 'var(--opacity, 0)',
          mask: `
                radial-gradient(
                  25rem 25rem at var(--x) var(--y),
                  #000 1%,
                  transparent 50%
                )`,
          WebkitMask: `
                radial-gradient(
                  25rem 25rem at var(--x) var(--y),
                  #000 1%,
                  transparent 50%
                )`,
        }}
      >
        {data?.map((item, index) => (
          <div
            key={index}
            className="flex items-center flex-col justify-center cursor-pointer relative overflow-hidden border border-1 border-secondary text-center rounded-xl transition-transform duration-500"
            style={{ aspectRatio: '1 / 1' }}
          >
            <div className="w-[80px]">
              <img src={item.imageUrl} className="max-[100%]" />
            </div>
            <div className="inset-0 flex items-center justify-center text-white">
              <ThemedText className="font-urbanist font-bold text-[18px] mt-2">
                {item.name}
              </ThemedText>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OverlayEffect;
