import React from 'react';

const AgGridTable = ({ column = [], rows = [] }) => {
  // Capitalizes the first letter of a string
  function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[1024px] border border-gray-300 shadow-md rounded-md">
        {/* Header Row */}
        <div className="flex bg-gray-200 p-3 rounded-t-md">
          {column.map((item, index) => (
            <div
              key={index}
              className={`${
                index > 0 ? 'flex-1' : 'w-[80px]'
              } text-sm font-semibold text-gray-800`}
            >
              <p>{capitalizeFirstLetter(item)}</p>
            </div>
          ))}
        </div>

        {/* Data Rows */}
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex border-t cursor-pointer hover:bg-[#888] border-gray-200 p-3 items-center transition-all duration-300 ease-in-out group hover:bg-blue-50 hover:shadow-lg hover:scale-[1.01] hover:relative hover:z-10 relative"
          >
            {column.map((colItem, colIndex) => {
              // Displaying an image if the column is 'image'
              if (colItem === 'image') {
                return (
                  <div key={colIndex} className="flex-1">
                    <div className="w-[30px] md:w-[40px] transition-transform duration-300 group-hover:scale-110">
                      <img
                        src={row.imageUrl}
                        alt="Row Item"
                        className="max-w-full rounded-full border border-gray-300"
                      />
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={colIndex}
                  className={`${
                    colIndex > 0 ? 'flex-1' : 'w-[80px]'
                  } text-sm text-gray-700 transition-colors duration-300 group-hover:text-gray-900`}
                >
                  {row[colItem]}
                </div>
              );
            })}

            {/* Optional row actions (hover effect) */}
            <div className="opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex gap-2 ml-2 absolute right-5">
              <button className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded hover:bg-blue-200 transition-colors duration-200 bg-[#800]">
                Edit
              </button>
              <button className="px-3 py-1 text-xs font-medium text-red-600 bg-red-100 rounded hover:bg-red-200 transition-colors duration-200 bg-[#800]">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgGridTable;
