import React, { useState, useEffect } from 'react';
import SearchFilter from './SearchFilter';
import { capitalizeFirstLetter } from '../utils';
import Modal from './modal';
import { useSelector, useDispatch } from 'react-redux';
import { setCapsules } from '../store/capsulesSlice';

const ListCapsules = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.capsules);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [selectedCapsule, setSelectedCapsule] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);



  useEffect(() => {
    fetchCapsules();
    // eslint-disable-next-line 
  }, []);

  const fetchCapsules = async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v3/capsules');
      const data = await response.json();
      // setData(data);
      dispatch(setCapsules(data))
      setFilteredData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const paginateData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleFilterChange = (filters) => {
    const filteredResult = data.filter((capsule) => {
      return (
        capsule.details?.toLowerCase().includes(filters.search?.toLowerCase()) &&
        (filters.status === '' || capsule.status === filters.status) &&
        (filters.originalLaunch === '' || capsule.original_launch?.toLowerCase().includes(filters.originalLaunch?.toLowerCase())) &&
        (filters.type === '' || capsule.type === filters.type)
      );
    });

    setFilteredData(filteredResult);
    setCurrentPage(1);
  };

  const handleFilterReset = () => {
    setFilteredData(data);
    setCurrentPage(1);
  }

  const openModal = (capsule) => {
    setSelectedCapsule(capsule);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCapsule(null);
    setIsModalOpen(false);
  };


  return (
    <div className="container mx-auto px-4">

      <SearchFilter onFilterChange={handleFilterChange} onFilterReset={handleFilterReset} />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" id="capsules">
          {isLoading && <div className="text-center">Loading...</div>}
          {error && <div className="text-center text-red-500">{error}</div>}
          {paginateData().map((capsule, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 cursor-pointer" onClick={() => openModal(capsule)}>
              <div className="text-xl font-semibold mb-2">{capitalizeFirstLetter(capsule.capsule_id)}</div>
              <div className="text-gray-700 mb-4">{capsule.details}</div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm font-semibold">Status:</span> {capsule.status === 'unknown' ? 'Inactive' : 'Active'}
                </div>
                <div>
                  <span className="text-sm font-semibold">Type:</span> {capsule.type}
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm font-semibold">Mission:</span>{' '}
                {capsule.missions.length > 0 ? capsule.missions[0].name : 'N/A'}
              </div>
            </div>
          ))}

        </div>
        {paginateData().length === 0 ? (
          <div className="text-center mt-4">No results found.</div>
        ) : null}
      </div>
      <div className="mt-4 flex justify-center">
        {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`mx-2 px-4 py-2 ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
          >
            {page}
          </button>
        ))}
      </div>
      {isModalOpen && selectedCapsule && <Modal open={isModalOpen} selectedCapsule={selectedCapsule} closeModal={closeModal} />}
    </div>
  );
};

export default ListCapsules;