module.exports = {
  project: {
    ios: {},
    android: {},
  },
  // Disable codegen for react-native-screens due to compatibility issue
  codegenConfig: {
    libraries: [
      {
        name: '@react-native-async-storage/async-storage',
      },
      {
        name: 'react-native-gesture-handler',
      },
      {
        name: 'react-native-safe-area-context',
      },
      // Exclude react-native-screens from codegen
      // {
      //   name: 'react-native-screens',
      // },
      {
        name: 'react-native-svg',
      },
    ],
  },
};
