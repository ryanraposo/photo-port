import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


import About from '..';


afterEach(cleanup)


describe('About component', () => {
    // Test 1
    it('renders', () => {
        render(<About />);
    });
    // Test 2
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
});