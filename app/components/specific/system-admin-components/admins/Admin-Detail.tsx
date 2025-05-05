// Insurance Admin Detail Page
// Insurance company name

'use client';
import React from 'react';
import Sidebar from '../common/Sidebar';
import Header from '../../../common/Header';

const AdminDetail = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 flex justify-center items-start py-12">
          <div className="w-full max-w-4xl bg-white border-2 rounded-lg shadow-sm relative p-12">
            <h2 className="text-2xl font-bold mb-8 text-gray-700">Insurance Company Name</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-600">Company Name</label>
                <input
                  type="text"
                  value="Health Insurance"
                  disabled
                  className="w-full p-2 bg-gray-100 border border-gray-300 rounded text-gray-700 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-600">Company Code</label>
                <input
                  type="text"
                  value="EH"
                  disabled
                  className="w-full p-2 bg-gray-100 border border-gray-300 rounded text-gray-700 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-600">License Number</label>
                <input
                  type="text"
                  value="TYC76329830"
                  disabled
                  className="w-full p-2 bg-gray-100 border border-gray-300 rounded text-gray-700 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-600">Company Website</label>
                <input
                  type="text"
                  value="https://www.site.com"
                  disabled
                  className="w-full p-2 bg-gray-100 border border-gray-300 rounded text-gray-700 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-600">Company email</label>
                <input
                  type="email"
                  value="healthinsurance@gmail.com"
                  disabled
                  className="w-full p-2 bg-gray-100 border border-gray-300 rounded text-gray-700 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-600">Contact Number</label>
                <input
                  type="text"
                  value="+925789237895"
                  disabled
                  className="w-full p-2 bg-gray-100 border border-gray-300 rounded text-gray-700 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-600">Company Address</label>
                <input
                  type="text"
                  value="DL, Ababe Street, Manila"
                  disabled
                  className="w-full p-2 bg-gray-100 border border-gray-300 rounded text-gray-700 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-600">Description</label>
                <input
                  type="text"
                  value="Lorem ipsum quick/popup(eg PMA)."
                  disabled
                  className="w-full p-2 bg-gray-100 border border-gray-300 rounded text-gray-700 text-sm"
                />
              </div>
              {/* Buttons */}
              <div className="col-span-2 flex justify-center mt-8 gap-8">
                <button
                  type="button"
                  className="bg-white text-red-600 border border-red-600 font-semibold py-2 px-12 rounded hover:bg-red-50 transition"
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="bg-gray-800 text-white font-semibold py-2 px-12 rounded hover:bg-gray-900 transition"
                >
                  Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDetail;
