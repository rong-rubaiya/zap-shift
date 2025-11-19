import React, { useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { MapContainer, Marker, Popup, TileLayer,  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';

const Coverage = () => {
  const data=useLoaderData()
  console.log(data);
  const position = [23.6850, 90.3563]
  const mapref=useRef(null)

  const handleSearch=e=>{
    e.preventDefault()
    const location=e.target.location.value;
    const district =data.find(c=>c.district.toLowerCase().includes(location.toLowerCase()))
    if(district){
      const coord=[district.latitude,district.longitude]
      mapref.current.flyTo(coord,14)
    }
  }
  return (
    <div className="w-full flex flex-col  py-10">
      
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-teal-900 mb-6">
        We are available in <span className="text-teal-800">64 districts</span>
      </h1>

      {/* Search Bar */}
      <div className="flex items-center w-full max-w-xl bg-white shadow-md border border-gray-200 rounded-full px-4 py-3 mb-6">
        
        <FiSearch className="text-gray-500 text-xl mr-3" />

       <form onSubmit={handleSearch}>
         <input
          type="text"
          name='location'
          placeholder="Search here"
          className="w-full outline-none text-gray-700 "
        />

       <input 
       className="bg-lime-400 hover:bg-lime-500 text-teal-900 font-semibold px-6 py-2 rounded-full transition-all ml-[400px]"
       type="submit" value="Search" />

       </form>
     
      </div>
         <div>
           <MapContainer
           className='w-full border h-[800px]' 
           center={position} 
           zoom={7} 
           scrollWheelZoom={false}
           ref={mapref}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
   {
    data.map((center,index)=>
      <Marker key={index} position={[center.latitude,center.longitude]}>
    <Popup> <strong>{center.district}</strong> <br /> Service area:{center.covered_area.join(',')}</Popup>
   </Marker>
    )
   }
  </MapContainer>,
        </div>
    </div>
  );
};

export default Coverage;