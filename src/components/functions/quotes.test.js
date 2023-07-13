import React from 'react';
import { render, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Quote from './quotes';

const mock = new MockAdapter(axios);
const mockResponse = {
  quote: 'Test quote',
  author: 'Test author',
};

mock.onGet('https://api.api-ninjas.com/v1/quotes?category=courage').reply(200, [mockResponse]);

describe('Quote', () => {
  it('should render loading message initially', () => {
    const { getByText } = render(<Quote />);
    const loadingElement = getByText((content) => content.includes('Loading...'));
    expect(loadingElement).toBeInTheDocument();
  });

  it('should render error message if request fails', async () => {
    mock.onGet('https://api.api-ninjas.com/v1/quotes?category=courage').reply(500);
    let getByText;

    await act(async () => {
      const renderResult = render(<Quote />);
      getByText = renderResult.getByText;
    });

    await waitFor(() => {
      expect(getByText('We learn from mistakes -lRebornsl')).toBeInTheDocument();
    });
  });
});
