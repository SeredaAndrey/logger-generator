import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGeneralSetting } from 'redux/settingOperations';

import GeneralSettingForm from './generalSetingForm';

const GeneralSettingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(fetchGeneralSetting());
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <GeneralSettingForm />
    </div>
  );
};

export default GeneralSettingPage;
