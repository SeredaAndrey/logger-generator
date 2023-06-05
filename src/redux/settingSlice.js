const { createSlice } = require('@reduxjs/toolkit');
const {
  fetchGeneratorSetting,
  createNewSettingGenerator,
} = require('./settingOperations');

const initialState = {
  brand: null,
  type: null,
  firstChangeOilReglament: null,
  nextChangeOilReglament: null,
  electricalPower: null,
  dataFirstStart: null,
  workingFirsStart: null,
  oilVolume: null,
  fuelVolume: null,
  idGenerattor: null,
  isLoading: false,
  isSettingPresent: false,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  extraReducers: builder => {
    builder
      //font-stretch:
      .addCase(fetchGeneratorSetting.fulfilled, (state, action) => {
        console.log(action);
        state.brand = action.payload.settingGenerator.data.brand;
        state.type = action.payload.settingGenerator.data.type;
        state.firstChangeOilReglament =
          action.payload.settingGenerator.data.firstChangeOilReglament;
        state.nextChangeOilReglament =
          action.payload.settingGenerator.data.nextChangeOilReglament;
        state.electricalPower =
          action.payload.settingGenerator.data.electricalPower;
        state.dataFirstStart =
          action.payload.settingGenerator.data.dataFirstStart;
        state.workingFirsStart =
          action.payload.settingGenerator.data.workingFirsStart;
        state.oilVolume = action.payload.settingGenerator.data.oilVolume;
        state.fuelVolume = action.payload.settingGenerator.data.fuelVolume;
        state.idGenerattor = action.payload.settingGenerator.data._id;
        state.isLoading = false;
        state.isSettingPresent = true;
      })
      .addCase(fetchGeneratorSetting.pending, (state, action) => {
        state.isLoading = true;
        state.isSettingPresent = false;
      })
      .addCase(fetchGeneratorSetting.rejected, (state, action) => {
        state.brand = null;
        state.type = null;
        state.firstChangeOilReglament = null;
        state.nextChangeOilReglament = null;
        state.electricalPower = null;
        state.dataFirstStart = null;
        state.workingFirsStart = null;
        state.oilVolume = null;
        state.fuelVolume = null;
        state.idGenerattor = null;
        state.isLoading = false;
        state.isSettingPresent = false;
      })
      .addCase(createNewSettingGenerator.fulfilled, (state, action) => {
        console.log(action);
        state.brand = action.payload.settingGenerator.data.brand;
        state.type = action.payload.settingGenerator.data.type;
        state.firstChangeOilReglament =
          action.payload.settingGenerator.data.firstChangeOilReglament;
        state.nextChangeOilReglament =
          action.payload.settingGenerator.data.nextChangeOilReglament;
        state.electricalPower =
          action.payload.settingGenerator.data.electricalPower;
        state.dataFirstStart =
          action.payload.settingGenerator.data.dataFirstStart;
        state.workingFirsStart =
          action.payload.settingGenerator.data.workingFirsStart;
        state.oilVolume = action.payload.settingGenerator.data.oilVolume;
        state.fuelVolume = action.payload.settingGenerator.data.fuelVolume;
        state.idGenerattor = action.payload.settingGenerator.data._id;
        state.isLoading = false;
        state.isSettingPresent = true;
      })
      .addCase(createNewSettingGenerator.pending, (state, action) => {
        state.isLoading = true;
        state.isSettingPresent = false;
      })
      .addCase(createNewSettingGenerator.rejected, (state, action) => {
        state.brand = null;
        state.type = null;
        state.firstChangeOilReglament = null;
        state.nextChangeOilReglament = null;
        state.electricalPower = null;
        state.dataFirstStart = null;
        state.workingFirsStart = null;
        state.oilVolume = null;
        state.fuelVolume = null;
        state.idGenerattor = null;
        state.isLoading = false;
        state.isSettingPresent = false;
      });
  },
});

export const settingsReducer = settingsSlice.reducer;
