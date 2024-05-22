import React, { useState } from "react";
import {
  MdDoubleArrow,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

const Events = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 8;

  const events = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-photo/team-working-together-project_23-2149273704.jpg?t=st=1716275488~exp=1716279088~hmac=905177642b1154f6147ac7b6ef977faf7821456ddbfb4bdc3d03d4671f6de951&w=740",
      title: "Request for Proposal (RFP) - IT Services",
      description:
        "A detailed RFP for IT services including software development and system maintenance.",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-photo/young-businesswoman-looking-senior-businessman-pointing-documents-his-hand_23-2147923379.jpg?t=st=1716275506~exp=1716279106~hmac=e533d05750f3e0fdbc3d3139f5562e98e0b78866007de1f93fff4f850e7cc39f&w=740",
      title: "Tender - Construction of Office Building",
      description:
        "Invitation for tender for the construction of a new office building.",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/people-office-analyzing-checking-finance-graphs_23-2150377138.jpg?t=st=1716275611~exp=1716279211~hmac=b17945431a60f449d4f342290fb421435bbc816dffbbe0de88f322f7fb273949&w=740",
      title: "Call for Bids - Supply of Office Equipment",
      description:
        "A call for bids for the supply of office equipment including computers and printers.",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/people-office-analyzing-checking-finance-graphs_23-2150377138.jpg?t=st=1716275611~exp=1716279211~hmac=b17945431a60f449d4f342290fb421435bbc816dffbbe0de88f322f7fb273949&w=740",
      title: "Call for Bids - Supply of Office Equipment",
      description:
        "A call for bids for the supply of office equipment including computers and printers.",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/people-office-analyzing-checking-finance-graphs_23-2150377138.jpg?t=st=1716275611~exp=1716279211~hmac=b17945431a60f449d4f342290fb421435bbc816dffbbe0de88f322f7fb273949&w=740",
      title: "Call for Bids - Supply of Office Equipment",
      description:
        "A call for bids for the supply of office equipment including computers and printers.",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/people-office-analyzing-checking-finance-graphs_23-2150377138.jpg?t=st=1716275611~exp=1716279211~hmac=b17945431a60f449d4f342290fb421435bbc816dffbbe0de88f322f7fb273949&w=740",
      title: "Call for Bids - Supply of Office Equipment",
      description:
        "A call for bids for the supply of office equipment including computers and printers.",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/people-office-analyzing-checking-finance-graphs_23-2150377138.jpg?t=st=1716275611~exp=1716279211~hmac=b17945431a60f449d4f342290fb421435bbc816dffbbe0de88f322f7fb273949&w=740",
      title: "Call for Bids - Supply of Office Equipment",
      description:
        "A call for bids for the supply of office equipment including computers and printers.",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/people-office-analyzing-checking-finance-graphs_23-2150377138.jpg?t=st=1716275611~exp=1716279211~hmac=b17945431a60f449d4f342290fb421435bbc816dffbbe0de88f322f7fb273949&w=740",
      title: "Call for Bids - Supply of Office Equipment",
      description:
        "A call for bids for the supply of office equipment including computers and printers.",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/people-office-analyzing-checking-finance-graphs_23-2150377138.jpg?t=st=1716275611~exp=1716279211~hmac=b17945431a60f449d4f342290fb421435bbc816dffbbe0de88f322f7fb273949&w=740",
      title: "Call for Bids - Supply of Office Equipment",
      description:
        "A call for bids for the supply of office equipment including computers and printers.",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/people-office-analyzing-checking-finance-graphs_23-2150377138.jpg?t=st=1716275611~exp=1716279211~hmac=b17945431a60f449d4f342290fb421435bbc816dffbbe0de88f322f7fb273949&w=740",
      title: "Call for Bids - Supply of Office Equipment",
      description:
        "A call for bids for the supply of office equipment including computers and printers.",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/people-office-analyzing-checking-finance-graphs_23-2150377138.jpg?t=st=1716275611~exp=1716279211~hmac=b17945431a60f449d4f342290fb421435bbc816dffbbe0de88f322f7fb273949&w=740",
      title: "Call for Bids - Supply of Office Equipment",
      description:
        "A call for bids for the supply of office equipment including computers and printers.",
    },
    // Add more events
  ];

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  return (
    <div className="mx-16 mt-32">
      <h1 className="flex items-center gap-x-4 text-2xl font-bold text-[#0d3c94]">
        <MdDoubleArrow /> Events
      </h1>

      <div className="grid grid-cols-2 gap-4 mt-10">
        {currentEvents.map((event) => (
          <div key={event.id} className="flex items-start gap-x-3">
            <div className="border p-2 rounded-lg">
              <img className="w-[120px]" src={event.image} alt="" />
            </div>
            <div>
              <a className="text-blue-500 font-semibold underline" href="">
                {event.title}
              </a>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 flex items-center py-2 mr-2 rounded-md border border-gray-300 bg-white text-gray-600 hover:bg-gray-100"
        >
          <MdKeyboardArrowLeft /> Prev
        </button>
        <button
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentEvents.length < eventsPerPage}
          className="px-4 flex items-center py-2 ml-2 rounded-md border border-gray-300 bg-white text-gray-600 hover:bg-gray-100"
        >
          Next <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Events;
