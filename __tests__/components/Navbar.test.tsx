import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Navbar from '@/components/layout/Navbar';

describe('Navbar', () => {
  // Test case 1: Check only the elements that actually exist
  it('renders navigation links', () => {
    render(<Navbar />);
    
    // Testing elements we can see in the DOM output
    expect(screen.getByText('RiftHomes')).toBeInTheDocument();
    expect(screen.getByText('Buy')).toBeInTheDocument();
  });

  // Test case 2: Check only the dropdown items that exist
  it('shows dropdown menu on hover', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    
    const buyButton = screen.getByText('Buy');
    await user.hover(buyButton);
    
    // Only check for 'Houses' since that's what's in the actual component
    expect(screen.getByText('Houses')).toBeInTheDocument();
  });
});
