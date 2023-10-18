import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => youtube.search(keyword));

  // 데이터가 아직 로딩 중이면 Loading 표시
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // 데이터 로딩이나 에러 발생 시 에러 메시지 표시
  if (error) {
    return <p>Something is wrong 😅</p>;
  }

  return (
    <>
      <div>Videos {keyword ? `🔍${keyword}` : '✨'}</div>
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
