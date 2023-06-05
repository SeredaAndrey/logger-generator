import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGeneratorSetting } from 'redux/settingOperations';
import { getSettingIsPresent } from 'redux/settingsSelector';

import GeneratorSettingsForm from './genSettingForm';

const GenSettingPage = () => {
  const settingsIsPresent = useSelector(getSettingIsPresent);
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

  console.log('settingsIsPresent: ', settingsIsPresent);
  return (
    <div>
      <GeneratorSettingsForm />
    </div>
  );
};

export default GenSettingPage;
