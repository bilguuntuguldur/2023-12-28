"use client"

import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface SearchFormProps {
  onSubmit: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(searchQuery);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <label className='relative'>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Та юу хайж байна вэ?'
          className='w-80 h-10 px-10 rounded-full main_gray focus:outline-none relative'
        />
      <button type="submit" className='w-8 h-10 w-10 main_secondry_bg flex justify-center items-center search_btn'><MagnifyingGlassIcon /></button>
      </label>
    </form>
  );
};

export default SearchForm;