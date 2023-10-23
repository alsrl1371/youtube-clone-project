import React, { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  useEffect(() => setText(keyword || ''), [keyword]);
  return (
    <header className='flex w-full p-4 mb-4 text-2xl border-b border-zinc-600'>
      <Link to='/' className='flex items-center'>
        <BsYoutube className='mt-2 text-4xl text-brand' />
        <h1 className='ml-2 text-3xl font-bold'>Youtube</h1>
      </Link>
      <form
        className='flex items-center justify-center w-full'
        onSubmit={handleSubmit}
      >
        <input
          className='text-lg w-7/12 h-12 py-3 px-2 pl-[16px] bg-black rounded-l-full outline-none text-gray-50 focus:border-blue-400'
          type='text'
          placeholder='Search..'
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button className='h-12 px-4 py-3 transition duration-100 ease-in-out rounded-r-full bg-zinc-600 hover:bg-blue-400'>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
