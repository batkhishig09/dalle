import React from 'react';

import { downloadImage } from '../utils';

  // This Component takes four props: _id, name, prompt, and photo.
  const Card = ({ _id, name, prompt, photo }) => (

  <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card transition-transform transform hover:scale-105">
    <img
      className="w-full h-auto object-cover rounded-xl"
      src={photo}
      alt={prompt}
    />

    {/* This div element contains the content that is initially hidden but becomes visible when the card is hovered over. It applies various Tailwind CSS classes for styling. */}
    <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md ">
      <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>

      <div className="mt-5 flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full object-cover bg-[#9945ff] flex justify-center items-center text-white text-m font-bold">{name[0]}</div>
          <p className="text-white text-sm">{name}</p>
        </div>
        <button type="button" onClick={() => downloadImage(_id, photo)} className="outline-none w-20 h-8 text-center rounded-full border-2 text-sm border-white text-white cursor-pointer transition duration-500 ease-in-out hover:bg-white hover:text-black">
          Download
        </button>
      </div>
    </div>
  </div>
);

export default Card;