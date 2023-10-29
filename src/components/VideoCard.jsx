import React, { useState } from 'react';
import { formatAgo } from '../util/data';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === 'list';
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageStyle = {
    borderRadius: isHovered ? '0' : '16px', // 더 둥글게 조절할 수 있는 값을 사용
    transition: 'border-radius 0.3s', // border-radius에만 트랜지션 적용
  };

  return (
    <li
      className={isList ? 'flex gap-1 m-2 cursor-pointer' : 'cursor-pointer'}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img
        style={imageStyle}
        className={
          isList
            ? `w-60 mr-2 my-[2px] transition-transform duration-300 transform ${
                isHovered ? '' : 'rounded-lg'
              }`
            : `w-full mr-2 my-[2px] transition-transform duration-300 transform ${
                isHovered ? '' : 'rounded-lg'
              }`
        }
        src={thumbnails.medium.url}
        alt={title}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <div>
        <p className='my-2 font-semibold line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}
