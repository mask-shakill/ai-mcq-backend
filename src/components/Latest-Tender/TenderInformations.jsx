import React, { useState } from "react";
import { MdKeyboardArrowRight, MdOutlineArrowBackIos } from "react-icons/md";

const sampleTenders = [
  {
    id: "T001",
    title: "Office Supplies Procurement",
    publishDate: "2023-05-01",
    link: "#",
  },
  {
    id: "T002",
    title: "IT Equipment Procurement",
    publishDate: "2023-05-02",
    link: "#",
  },
  {
    id: "T003",
    title: "Furniture Procurement",
    publishDate: "2023-05-03",
    link: "#",
  },
  {
    id: "T004",
    title: "Stationery Procurement",
    publishDate: "2023-05-04",
    link: "#",
  },
  {
    id: "T005",
    title: "Software Solutions Procurement",
    publishDate: "2023-05-05",
    link: "#",
  },
  {
    id: "T006",
    title: "Vehicle Procurement",
    publishDate: "2023-05-06",
    link: "#",
  },
  {
    id: "T007",
    title: "Building Maintenance Procurement",
    publishDate: "2023-05-07",
    link: "#",
  },
  {
    id: "T008",
    title: "Cleaning Services Procurement",
    publishDate: "2023-05-08",
    link: "#",
  },
  {
    id: "T009",
    title: "Security Services Procurement",
    publishDate: "2023-05-09",
    link: "#",
  },
  {
    id: "T010",
    title: "Consultancy Services Procurement",
    publishDate: "2023-05-10",
    link: "#",
  },
  // Add more tenders as needed
];

const ITEMS_PER_PAGE = 5;

function TenderInformation() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(sampleTenders.length / ITEMS_PER_PAGE);
  const currentItems = sampleTenders.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#0d9488] text-white">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Sl No
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Tender Id
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Tender Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Publish Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Link
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.map((tender, index) => (
              <tr key={tender.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {tender.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {tender.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {tender.publishDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a
                    href={tender.link}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="flex gap-x-1 items-center"
          >
            <MdOutlineArrowBackIos /> Previous
          </button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="flex items-center gap-x-1"
          >
            Next <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TenderInformation;
