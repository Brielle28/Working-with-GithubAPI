import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { data } from "./data";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen bg-white-700">
        <div className="flex flex-row mt-10">
          <input
            type="text"
            placeholder="search @gmail.com"
            className="w-[600px] h-[40px] rounded-[40px] shadow-lg shadow-gray-900/50 text-center "
            value={search}
            onChange={handleInputChange}
          />
          <CiSearch className="-translate-y- -translate-x-20 h-6 w-8" />
        </div>
        <div className="overflow-x-auto mt-[80px]">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>email</th>
                <th>gender</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {data
                .filter((item) => {
                  if (searchTerm.toLowerCase() === "") {
                    return true; // Return true to include all items when searchTerm is empty
                  } else {
                    return (
                      item.first_name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      item.last_name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      item.email
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      item.gender
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    );
                  }
                })
                .map((item) => (
                  <tr className="bg-base-200" key={data.id}>
                    <th>{item.id}</th>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Search;
