import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const params = useParams();
  const [userData, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${params.username}`)
      .then((res) => {
        // setTimeout(() => {
        setData(res.data);
        setLoading(false);
        // }, 3000);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="mt-7">
      {!loading && (
        <div>
          <p>Name: {userData.name}</p>
          {userData.company && <p>Company: {userData.company}</p>}
          {userData.location && <p>Location: {userData.location}</p>}
          <p>No. of Followers: {userData.followers}</p>
        </div>
      )}
      {loading && (
        <div role="status" className="max-w-sm animate-pulse">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default User;
