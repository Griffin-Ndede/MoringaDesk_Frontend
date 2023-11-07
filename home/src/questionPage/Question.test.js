import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // To use toBeInTheDocument()
import fetchMock from 'jest-fetch-mock'; // Mock the fetch function
import { Provider } from 'react-redux'; // If you're using Redux
import configureStore from 'redux-mock-store'; // If you're using Redux
import QuestionPage from './questionPage';

// Mock Redux store and initial state if you're using Redux
const initialState = {
  theStore: {
    value: 1, // Set your initial value here
  },
};
const mockStore = configureStore();
const store = mockStore(initialState);

describe('QuestionPage Component', () => {
  // Define an example question data for testing
  const exampleQuestion = {
    user: { username: 'testuser' },
    title: 'Test Question',
    description: 'This is a test question',
    code: 'console.log("Hello, World!");',
    responses: [
      {
        user: { username: 'user1' },
        suggestion: 'Test response 1',
        code: 'console.log("Response 1");',
        votes: 5,
      },
      // Add more example responses here
    ],
  };

  // Mock the fetch function before each test
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should render the question and responses', async () => {
    // Mock the fetch response with the example question data
    fetchMock.mockResponseOnce(JSON.stringify(exampleQuestion));

    render(
      <Provider store={store}>
        <QuestionPage />
      </Provider>
    );

    // Use waitFor to wait for the component to render
    await waitFor(() => {
      // Check that the question and responses are rendered
      expect(screen.getByText(`@${exampleQuestion.user.username}:`)).toBeInTheDocument();
      expect(screen.getByText(exampleQuestion.title)).toBeInTheDocument();
      expect(screen.getByText(exampleQuestion.description)).toBeInTheDocument();

      // Add more assertions for rendering responses if needed
    });
  });

  it('should toggle the response pop-up when "Add" button is clicked', () => {
    render(
      <Provider store={store}>
        <QuestionPage />
      </Provider>
    );

    // Initially, the pop-up should not be in the document
    expect(screen.queryByText('Close')).toBeNull();

    // Click the "Add" button
    fireEvent.click(screen.getByText('+'));

    // Now, the pop-up should be in the document
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  // Add more test cases for interaction and state changes as needed
});