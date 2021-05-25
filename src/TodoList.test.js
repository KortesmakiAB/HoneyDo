import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from './TodoList';

test('if smoking', () => {
  render(<TodoList />);
});

it('matches snapshot', () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

test('can enter data, submit form, then see new list item.', () => {
    render(<TodoList />);

    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();

    userEvent.type(screen.getByLabelText('New task'), 'TEST TODO.');
    userEvent.click(screen.getByRole('button', { name: 'Add Task'}));

    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByText('TEST TODO.')).toBeInTheDocument();

});