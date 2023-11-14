import React, { useState } from 'react';
import { yearsList } from '../utils';


const SearchFilter = ({ onFilterChange, onFilterReset }) => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [originalLaunch, setOriginalLaunch] = useState('');
  const [type, setType] = useState('');


  const handleFilterChange = () => {
    let filters = { search, status, originalLaunch, type };
    onFilterChange(filters);
  };

  return (
    <div className="py-4 bg-gray-100 border rounded-md shadow-md my-4 px-4">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Search:</label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter search term"
          className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="unknown">Inactive</option>
          <option value="retired">Retired</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600"> Launch Year:</label>

        <select
          value={originalLaunch}
          onChange={(e) => setOriginalLaunch(e.target.value)}
          className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        >
          {yearsList?.map((yr) => {
            return <option key={yr} value={yr}>{yr}</option>
          })}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Type:</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="">All</option>
          <option value="crewed">Crewed</option>
          <option value="cargo">Cargo</option>
        </select>
      </div>

      <button
        onClick={handleFilterChange}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700"
      >
        Search
      </button>
      <button
        onClick={onFilterReset}
        className=" ml-4 bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:border-gray-700"
      >
        Reset
      </button>
    </div>
  );
};

export default SearchFilter;