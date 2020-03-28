module.exports = {
  name: 'louis',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/louis',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ],
  // https://github.com/nrwl/nx/issues/1439#issuecomment-498150791
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts']
};
