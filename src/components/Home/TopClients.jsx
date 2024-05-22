import React, { useState } from "react";
import {
  MdDoubleArrow,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

const TopClients = () => {
  const clientsPerPage = 12; // Number of clients per page
  const [currentPage, setCurrentPage] = useState(1);

  const clients = [
    {
      id: 1,
      image: "https://www.alltender.com/assets/fontend/images/client/1.jpg",
    },
    {
      id: 2,
      image: "https://www.alltender.com/assets/fontend/images/client/9.jpg",
    },
    {
      id: 3,
      image: "https://www.alltender.com/assets/fontend/images/client/10.jpg",
    },
    {
      id: 4,
      image: "https://www.alltender.com/assets/fontend/images/client/8.png",
    },
    {
      id: 5,
      image: "https://www.alltender.com/assets/fontend/images/client/ec.jpg",
    },
    {
      id: 6,
      image: "https://www.alltender.com/assets/fontend/images/client/7.jpg",
    },
    {
      id: 7,
      image: "https://www.alltender.com/assets/fontend/images/client/6.png",
    },
    {
      id: 8,
      image: "https://www.alltender.com/assets/fontend/images/client/ep.png",
    },
    {
      id: 9,
      image: "https://www.alltender.com/assets/fontend/images/client/5.png",
    },
    {
      id: 3,
      image: "https://www.alltender.com/assets/fontend/images/client/3.png",
    },
    {
      id: 4,
      image: "https://www.alltender.com/assets/fontend/images/client/2.png",
    },
    {
      id: 5,
      image: "https://www.alltender.com/assets/fontend/images/client/hg.png",
    },
    {
      id: 6,
      image: "https://www.alltender.com/assets/fontend/images/client/7.jpg",
    },
    {
      id: 7,
      image: "https://www.alltender.com/assets/fontend/images/client/6.png",
    },
    {
      id: 8,
      image: "https://www.alltender.com/assets/fontend/images/client/ep.png",
    },
    {
      id: 9,
      image: "https://www.alltender.com/assets/fontend/images/client/5.png",
    },
  ];

  // Logic to get current clients based on pagination
  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = clients.slice(indexOfFirstClient, indexOfLastClient);

  // Function to handle pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-slate-100 p-6 mt-28">
      <div className="mx-16 ">
        <h1 className="flex items-center gap-x-4 text-2xl font-bold text-[#0d3c94]">
          <MdDoubleArrow /> Our Top Clients
        </h1>
        <div className="grid grid-cols-4 border-2 rounded-lg border-[#0d3c94] gap-8 p-5 mt-5">
          {currentClients.map((client) => (
            <div key={client.id} className="shadow-lg ">
              <div className="flex items-center justify-center">
                <img
                  className="w-[300px] h-[140px] rounded-lg"
                  src={client.image}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Buttons */}
        <div className="flex justify-center mt-5">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <MdKeyboardArrowLeft className="text-2xl" />
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastClient >= clients.length}
          >
            <MdKeyboardArrowRight className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopClients;
