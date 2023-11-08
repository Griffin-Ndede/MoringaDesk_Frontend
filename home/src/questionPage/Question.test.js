// import React from 'react';
// import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; // Import for better assertions
// import QuestionPage from './questionPage';

// describe('QuestionPage Component', () => {
//   it('renders without errors', () => {
//     render(<QuestionPage tags={[]} questionTags={[]} />);
//   });

//   it('displays the question details', () => {
//     // Mock the question data for testing
//     const questionData = {
//       id: 1,
//       title: 'Sample Question',
//       description: 'This is a sample question.',
//       code: 'console.log("Hello, World!");',
//       user: {
//         username: 'sample_user',
//         id: 2,
//       },
//       responses: [],
//     };

//     render(<QuestionPage tags={[]} questionTags={[]} />);
//     // You should use appropriate selectors to query the elements
//     expect(screen.getByText('Sample Question')).toBeInTheDocument();
//     expect(screen.getByText('This is a sample question.')).toBeInTheDocument();
//     expect(screen.getByText('console.log("Hello, World!");')).toBeInTheDocument();
//     expect(screen.getByText('@sample_user:')).toBeInTheDocument();
//   });

//   it('toggles the response pop-up', async () => {
//     render(<QuestionPage tags={[]} questionTags={[]} />);

//     // Click the "Post Response" button
//     fireEvent.click(screen.getByTitle('Post Response'));

//     // Expect the response pop-up to be displayed
//     await waitFor(() => {
//       expect(screen.getByText('Post Response')).toBeInTheDocument();
//     });

//     // Click the "Close" button to close the pop-up
//     fireEvent.click(screen.getByText('Close'));

//     // Expect the response pop-up to be closed
//     await waitFor(() => {
//       expect(screen.queryByText('Post Response')).toBeNull();
//     });
//   });

//   // You can write similar tests for other interactions and functionalities

//   it('deletes a question', () => {
//     // Mock the fetch request and confirm dialog using jest.fn()
//     global.fetch = jest.fn(() =>
//       Promise.resolve({
//         json: () => Promise.resolve({}),
//       })
//     );
//     global.confirm = jest.fn(() => true);

//     render(<QuestionPage tags={[]} questionTags={[]} />);

//     // Click the "Delete" button
//     fireEvent.click(screen.getByText('Delete'));

//     // Expect the confirmation dialog to have been called
//     expect(global.confirm).toHaveBeenCalled();

//     // Expect the fetch request to have been called with the delete URL
//     expect(global.fetch).toHaveBeenCalledWith(
//       'https://moringa-yjml.onrender.com/questions/1',
//       {
//         method: 'DELETE',
//       }
//     );
//   });
// });
