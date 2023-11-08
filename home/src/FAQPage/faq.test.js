import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import for better assertions
import FaqPage from './faqPage';
import root from '../index'

describe('FaqPage Component', () => {
  it('renders without errors', () => {
    render(<FaqPage questions={[]} tags={[]} />);
  });

  it('displays the "FAQs" and "Recent Questions" sections', () => {
    render(<FaqPage questions={[]} tags={[]} />);

    expect(screen.getByText('FAQs')).toBeInTheDocument();
    expect(screen.getByText('Recent Questions')).toBeInTheDocument();
  });

  it('toggles the "Post Question" pop-up', async () => {
    render(<FaqPage questions={[]} tags={[]} />);

    // Click the "Post Question" button
    fireEvent.click(screen.getByTitle('Post Question'));

    // Expect the "Post Question" pop-up to be displayed
    expect(screen.getByText('Post Question')).toBeInTheDocument();

    // Click the "Close" button to close the pop-up
    fireEvent.click(screen.getByText('Close'));

    // Expect the "Post Question" pop-up to be closed
    expect(screen.queryByText('Post Question')).toBeNull();
  });

  it('filters questions based on search input', () => {
    const mockQuestions = [
      { id: 1, title: 'Question 1', description: 'Description 1', user_id: 1 , user: { id:1, username: 'username1' }, tags: [{id: 1, name: 'Tag1'}, {id:2, name: 'Tag2'}], responses: []},
      { id: 2, title: 'Question 2', description: 'Description 2', user_id: 2, user: { id:2, username: 'username2' } ,tags: [{id: 1, name: 'Tag1'}, {id:2, name: 'Tag2'}], responses: []},
    ];

    render(<FaqPage questions={mockQuestions} tags={[]} />);

    // Type a search term into the search input
    fireEvent.change(screen.getByPlaceholderText('Search...'), {
      target: { value: 'Description 1' },
    });

    // Expect only one question to be displayed
    expect(screen.queryByText('Question 1')).toBeInTheDocument();
    expect(screen.queryByText('Question 2')).toBeNull();
  });
});
