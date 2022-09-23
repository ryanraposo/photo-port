import { render, cleanup, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '../';


const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};
const mockToggleModal = jest.fn();


afterEach(cleanup)


describe('Modal component', () => {
    it('renders', () => {
      render(<Modal currentPhoto={currentPhoto} />);
    });
  
    it('matches snapshot', () => {
      const { asFragment } = render(<Modal currentPhoto={currentPhoto} />)
      expect(asFragment()).toMatchSnapshot()
    });
});

describe('Click Event', () => {
    it('calls onClose handler', () => {
        // Arrange
        render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);
        // Simulate
        fireEvent.click(screen.getByText('Close this modal'));
        // Assert
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
});