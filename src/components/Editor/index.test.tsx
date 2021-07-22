import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PrettyDecentEditor from '../../index';

describe('<PrettyDecentEditor />', () => {
    const Component = () => (
        <PrettyDecentEditor
            toolbarProps={{
                options: [
                    'bold',
                    'italic',
                    'underline',
                    'code',
                    'block-quote',
                    'table',
                    'link',
                    'numbered-list',
                    'bulleted-list',
                    'strikethrough',
                    'placeholders'
                ],
            }}
        />
    );

    it('should render', () => {
        expect(render(<Component />)).toBeTruthy();
    });

    describe('Given default mark buttons', () => {
        it('should render a bold button as default', () => {
            render(<Component />);
            const bold = screen.getByTestId('bold-btn');
            expect(bold).toBeInTheDocument();
        });

        it('should render a italics button as default', () => {
            render(<Component />);
            const bold = screen.getByTestId('italic-btn');
            expect(bold).toBeInTheDocument();
        });
        it('should render a underline button as default', () => {
            render(<Component />);
            const bold = screen.getByTestId('underline-btn');
            expect(bold).toBeInTheDocument();
        });

        it('should render a code button as default', () => {
            render(<Component />);
            const bold = screen.getByTestId('code-btn');
            expect(bold).toBeInTheDocument();
        });
    });
    describe('Given default block buttons', () => {
        it('should render a table button as default', () => {
            render(<Component />);
            const bold = screen.getByTestId('table-btn');
            expect(bold).toBeInTheDocument();
        });

        it('should render a quote button as default', () => {
            render(<Component />);
            const bold = screen.getByTestId('quote-btn');
            expect(bold).toBeInTheDocument();
        });

        it('should render a ol button as default', () => {
            render(<Component />);
            const bold = screen.getByTestId('ol-btn');
            expect(bold).toBeInTheDocument();
        });
        it('should render a ul button as default', () => {
            render(<Component />);
            const bold = screen.getByTestId('ul-btn');
            expect(bold).toBeInTheDocument();
        });
        it('should render a link button as default', () => {
            render(<Component />);
            const link = screen.getByTestId('link-btn');
            expect(link).toBeInTheDocument();
        });
    });

    describe('Editable Area', () => {
        it('should render a <p> block as default', () => {
            const utils = render(<Component />);
            const span = utils.container.querySelector('[name=pretty-decent-editor] p');
            expect(span).toBeInTheDocument();
        });
    });

    describe('Toolbar Integration', () => {
        describe('Mark Buttons', () => {
            it('should a <strong> tag on click of bold', () => {
                const { container } = render(<Component />);
                const btn = screen.getByTestId('bold-btn');
                userEvent.click(btn);
                const strong = container.querySelector('[name=pretty-decent-editor] strong');
                expect(strong).toBeInTheDocument;
            });
            it('should a <u> tag on click of underline', () => {
                const { container } = render(<Component />);
                const btn = screen.getByTestId('underline-btn');
                userEvent.click(btn);
                const undelrine = container.querySelector('[name=pretty-decent-editor] u');
                expect(undelrine).toBeInTheDocument;
            });
            it('should a <em> tag on click of italics', () => {
                const { container } = render(<Component />);
                const btn = screen.getByTestId('italic-btn');
                userEvent.click(btn);
                const italics = container.querySelector('[name=pretty-decent-editor] em');
                expect(italics).toBeInTheDocument;
            });
            it('should a <code> tag on click of code', () => {
                const { container } = render(<Component />);
                const btn = screen.getByTestId('code-btn');
                userEvent.click(btn);
                const code = container.querySelector('[name=pretty-decent-editor] code');
                expect(code).toBeInTheDocument;
            });
        });
        describe('Block Buttons', () => {
            it('should a <table> and <tbody> tag on click of table', () => {
                const { container } = render(<Component />);
                const btn = screen.getByTestId('table-btn');
                userEvent.click(btn);
                const table = container.querySelector('[name=pretty-decent-editor] table tbody');
                expect(table).toBeInTheDocument;
            });
            it('should a <blockquote> tag on click of quote', () => {
                const { container } = render(<Component />);
                const btn = screen.getByTestId('quote-btn');
                userEvent.click(btn);
                const blockquote = container.querySelector('[name=pretty-decent-editor] blockquote');
                expect(blockquote).toBeInTheDocument;
            });
            it('should a <ol> tag on click of Ordered List', () => {
                const { container } = render(<Component />);
                const btn = screen.getByTestId('ol-btn');
                userEvent.click(btn);
                const ol = container.querySelector('[name=pretty-decent-editor] ol');
                expect(ol).toBeInTheDocument;
            });
            it('should a <ul> tag on click of ul', () => {
                const { container } = render(<Component />);
                const btn = screen.getByTestId('ul-btn');
                userEvent.click(btn);
                const ul = container.querySelector('[name=pretty-decent-editor] ul');
                expect(ul).toBeInTheDocument;
            });
        });

        describe('Components', () => {
            it('should render a placeholder component', () => {
                const { container } = render(<Component />);
                const placeholders = container.querySelector('[title=Placeholders]');
                expect(placeholders).toBeInTheDocument;
            });
        });
    });
});
