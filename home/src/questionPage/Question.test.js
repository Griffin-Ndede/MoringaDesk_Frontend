import { render, screen, document } from '@testing-library/react';
import QuestionPage from './questionPage';

test('renders the question page', () => {
    render(<QuestionPage />);
  });