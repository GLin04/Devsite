import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ /* mocked response */ }),
  })
);
