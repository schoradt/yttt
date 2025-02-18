export const localStorageServiceMock = {
  saveData: jest.fn(),
  getData: jest.fn().mockReturnValue('')
};
