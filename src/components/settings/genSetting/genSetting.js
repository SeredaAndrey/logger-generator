import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

import { getUserToken } from 'redux/authSelector';
import { fetchGeneratorSetting } from 'serviceAPI/APIservice';

const GenSettingPage = () => {
  const token = useSelector(getUserToken);
  const navigation = useNavigate();
  // const [generatorSetting, setGeneratorSetting] = useState({
  //   brand: null,
  //   type: null,
  //   firstChangeOilReglament: null,
  //   nextChangeOilReglament: null,
  //   electricalPower: null,
  //   dataFirstStart: null,
  //   workingFirsStart: null,
  //   oilVolume: null,
  //   fuelVolume: null,
  //   _id: null,
  // });

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchGeneratorSetting(token);
        !data && navigation('/settings/generator/createNewGenerator');
        // data && setGeneratorSetting(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(generatorSetting);

  return (
    <div>
      <p>Generator Setting</p>
      <Outlet />
    </div>
  );
};

export default GenSettingPage;
