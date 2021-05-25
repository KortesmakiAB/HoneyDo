import { render, screen } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test('if smoking.', () => {
  render(<NewTodoForm />);
});

it('matches snapshot.', () => {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
});

it('has a form field & button.', () => {
    render(<NewTodoForm />);
    
    expect(screen.getByLabelText('New task')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add Task'})).toBeInTheDocument();
});