"use client"

import { useState } from 'react';
import Icon from './icon';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200 last:border-b-0">
          <button
            className="flex justify-between items-center w-full py-4 px-6 text-left text-lg font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none"
            onClick={() => toggleItem(index)}
          >
            <span>{item.title}</span>
            <Icon name={openIndex === index ? 'minus' : 'plus'} className="w-5 h-5" />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-gray-600">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
