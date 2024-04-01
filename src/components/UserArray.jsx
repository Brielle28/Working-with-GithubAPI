import { useState } from "react";
import { user } from "./user";
import { IoClose } from "react-icons/io5";

const UserArray = () => {
  const [Search, setSearch] = useState(""); // this usestate is for the input area for search
  const [LikedUser, setLikedUser] = useState([]); //initialise an empty array inorder to add any liked user
  const [CountLike, setCountLike] = useState(0); // this usestate is for counting the number of liked user, intially it is set to zero
  const [isdisplay, setIsdisplay] = useState(true);

  const HandleSearch = (event) => {
    //this displays the value thereby enhancing live search
    setSearch(event.target.value);
  };

  const HandleLike = (userLogin) => {
    if (LikedUser.includes(userLogin)) {
      // If already liked, remove from likedUsers
      setLikedUser(LikedUser.filter((login) => login !== userLogin));
      setCountLike(CountLike - 1);
    } else {
      // If not liked, add to likedUsers
      setLikedUser([...LikedUser, userLogin]);
      setCountLike(CountLike + 1);
    }
  };

  const Toggle  = () =>{
    setIsdisplay(!isdisplay);
  }

  return (
    <>
      <div className="flex items-center justify-center mt-[50px] mb-12 gap-6">
        <input
          type="text"
          placeholder="search"
          value={Search}
          onChange={HandleSearch}
          className="w-[700px] flex h-[50px] bg-green-200 rounded-3xl shadow-lg shadow-green-500/50 text-center"
        />
        <button className="btn bg-green-200 rounded-3xl shadow-lg shadow-green-500/50">
          Liked Users: {CountLike}
        </button>
        <button className="btn bg-green-200 rounded-3xl shadow-lg shadow-green-500/50" onClick={Toggle}>
          Toggle
        </button>
      </div>
      {/* liked users  */}
      <div className="flex flex-wrap items-start justify-center gap-2">
        {LikedUser.map((item) => {
          console.log(item, "item");
          return (
            <div
              key={item.id}
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            >
              <p>{item}</p>
              <button>
                <IoClose
                  className="text-red-500"
                  onClick={() => HandleLike(item)} //invokes the handlelike function do onclicks checks weather the user is in the likeduser array if it does, it removes it
                />
              </button>
            </div>
          );
        })}
      </div>
      {/* github users  */}
      <div className="flex justify-center w-screen text-center h-screen gap-[45px] flex-wrap"
      style={{ display: isdisplay ? "flex" : "none" }}
      >
        {user // this the array of object generated with the github api key and is imported in this component
          .filter((item) => {
            if (Search.toLowerCase() === "") {
              return true; // Return true to include all items when Search is empty
            } else {
              return (
                item.login.toLowerCase().includes(Search.toLowerCase()) ||
                item.html_url.toLowerCase().includes(Search.toLowerCase()) ||
                item.avatar_url.toLowerCase().includes(Search.toLowerCase())
              );
            }
          })
          .map((item) => {
            return (
              <div key={item.id} className="mt-[50px]">
                <img
                  src={item.avatar_url}
                  alt=""
                  className="h-[280px] w-[280px] rounded-3xl"
                />
                <button className="-translate-y-60 translate-x-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    onClick={() => HandleLike(item.login)}
                    fill={LikedUser.includes(item.login) ? "red" : "none"}
                    stroke={LikedUser.includes(item.login) ? "red" : "red"}
                    className="text-[25px] cursor-pointer"
                  >
                    <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27" />
                  </svg>
                </button>
                <p className="text-[25px] font-[Poppins] text-green-900">
                  Name: {item.login}
                </p>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-green-800 mt-1">
                  <a
                    href={item.html_url}
                    target="_blank"
                    className="text-white"
                  >
                    {" "}
                    GitHub profile{" "}
                  </a>
                </button>
              </div>
            );
          })}
      </div>
      {/* Toggle view */}
       <div className="block justify-center w-screen text-center h-screen gap-[45px] flex-wrap"
       style={{ display: isdisplay ? "none" : "flex" }} >
        {user // this the array of object generated with the github api key and is imported in this component
          .filter((item) => {
            if (Search.toLowerCase() === "") {
              return true; // Return true to include all items when Search is empty
            } else {
              return (
                item.login.toLowerCase().includes(Search.toLowerCase()) ||
                item.html_url.toLowerCase().includes(Search.toLowerCase()) ||
                item.avatar_url.toLowerCase().includes(Search.toLowerCase())
              );
            }
          })
          .map((item) => {
            return (
              <div key={item.id} className="mt-[50px] flex gap-5">
                <img
                  src={item.avatar_url}
                  alt=""
                  className="h-[150px] w-[150px] rounded-full"
                />
                <div className="flex flex-col space-y-2 mt-[20px]">
                <button className="flex flex-row gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    onClick={() => HandleLike(item.login)}
                    fill={LikedUser.includes(item.login) ? "red" : "none"}
                    stroke={LikedUser.includes(item.login) ? "red" : "red"}
                    className="text-[25px] cursor-pointer translate-y"
                  >
                    <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27" />
                  </svg>
                <p className="text-[25px] font-[Poppins] text-green-900">
                  {item.login}
                </p>
                </button>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-green-800 mt-1 ">
                  <a
                    href={item.html_url}
                    target="_blank"
                    className="text-white"
                  >
                    {" "}
                    GitHub profile{" "}
                  </a>
                </button>
              </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default UserArray;
