import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchGeneratorSetting } from 'redux/settingOperations';

import GeneratorSettingsForm from './genSettingForm';

const GenSettingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(fetchGeneratorSetting());
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <GeneratorSettingsForm />
    </div>
  );
};

export default GenSettingPage;
