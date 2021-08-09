import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PrettyDecentEditor from '../../../../index';
describe('<PrettyDecentButton />', () => {
    const TableBtn = () => {
        return (
            <PrettyDecentEditor
            toolbarProps={{
                options: [
                    'table',
                ],
            }}
        />
        );
    };
    it('should render', () => {
        expect(render(<TableBtn />)).toBeTruthy();
    });

    describe('Given a user toggling the button', () => {
        it('should show a popper with grid selection', () => {
            render(<TableBtn />);
            const btn = screen.getByTestId('table-btn')
            userEvent.click(btn);
            const popper = screen.getByTestId('table-selection');
            expect(popper).toBeInTheDocument();
        });

        it('should insert a table based on the grid size selected', () => {
            render(<TableBtn />);
            const editor = screen.getByTestId('pretty-decent-editor')
            userEvent.click(editor)
            const btn = screen.getByTestId('table-btn')
            userEvent.click(btn);
            const gridItem = screen.getByTestId('table-grid-row2-col3');
            userEvent.click(gridItem);
            // screen.getByTestId('pd-table');
        });
    });
});
