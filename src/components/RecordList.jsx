
import React from 'react';

const RecordList = ({ records, onDelete, onEdit }) => {
  return (
    <div>
      {records.map((record) => (
        <div
          key={record.id}
          className="flex items-center justify-between p-4 border-b last:border-none">
        
          <div>
            <p className="font-bold">{record.category}</p>
            <p className="text-sm text-gray-500">{record.date}</p>
            <p className="text-sm text-gray-700">{record.description}</p>
          </div>

          <div>
            <p className="font-semibold">${record.amount}</p>
          </div>

          <div className="flex space-x-2 gap-4">
            <button
              onClick={() => onEdit(record.id)}
              className="text-blue-500">
              Edit
            </button>

            <button
              onClick={() => onDelete(record.id)}
              className="text-blue-500">
             Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecordList;

  