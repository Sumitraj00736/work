import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

function VideoCard() {
  return (
    <>
      <div className="relative max-w-4xl mx-auto mt-10  rounded-xl overflow-hidden" style={{ maxWidth: '1240px' }}>
        <div className="relative w-full" style={{ paddingTop: '52.25%' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Hgg7M3kSqyE"
            playing={true}
            controls={false}
            loop={true}     
            width="100%"
            height="100%"
            className="absolute top-0 left-0 rounded-xl"
            muted={true}

          />
        </div>
      </div>

      <div className="lg:mx-20 px-6 py-4 md:px-10 md:py-8">
        <h2
          className="font-bold text-3xl md:text-4xl left-0 leading-tight"
          style={{
            fontFamily: 'Poppins, sans-serif',
            color: '#5F026E',
          }}
        >
          Join the community of Quarkfin partners
        </h2>
        <p className="font-semibold mt-2 text-6xl leading-tight">
          <Link
            to="/partnership"
            className="hover:underline"
            style={{
              color: '#FFD700',
              fontFamily: 'Poppins',
              textDecoration: 'none',
            }}
          >
            Become a partner &gt;
          </Link>
        </p>
      </div>
    </>
  );
}

export default VideoCard;
