import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { getUserToken } from 'redux/authSelector';

axios.defaults.baseURL = 'https://logger-generator-rest-api.onrender.com';

const fetchUserData = async token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  try {
    const { data } = await axios.get('api/owner');
    return data;
  } catch (error) {
    toast.error(error);
  }
};

const UserSettingPage = () => {
  const token = useSelector(getUserToken);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const { userData } = await fetchUserData(token);
        setUserData(userData);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  console.log(userData);

  return (
    <>
      <h2>User Setting</h2>
    </>
  );
};
export default UserSettingPage;
