import { capitalizeFirstLetter } from '../utils';

const Modal = ({ selectedCapsule, closeModal }) => {
    return <div className="fixed inset-0 overflow-y-auto backdrop-filter backdrop-blur-sm shadow-lg ">

        <div className="flex items-center justify-center min-h-screen">

            <div style={{ height: '250px', width: '500px' }} className="bg-white p-4 rounded-lg shadow-lg">
                <button className="px-4 py-2 bg-red-400 text-white rounded float-right" onClick={closeModal}>
                    x
                </button>
                <div className="text-xl font-semibold mb-2">{capitalizeFirstLetter(selectedCapsule.capsule_id)}</div>
                <div className="text-gray-700 mb-4">{selectedCapsule.details}</div>
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-sm font-semibold">Status:</span> {selectedCapsule.status === 'unknown' ? 'Inactive' : 'Active'}
                    </div>
                    <div>
                        <span className="text-sm font-semibold">Type:</span> {selectedCapsule.type}
                    </div>
                </div>
                <div className="mt-4">
                    <span className="text-sm font-semibold">Mission:</span>{' '}
                    {selectedCapsule.missions.length > 0 ? selectedCapsule.missions[0].name : 'N/A'}
                </div>
            </div>

        </div>

    </div>

}

export default Modal;