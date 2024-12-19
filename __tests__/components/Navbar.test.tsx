import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Navbar from '@/components/layout/Navbar';

describe('Navbar', () => {
  // Test main navigation rendering
  it('renders all navigation links', () => {
    render(<Navbar />);
    
    // Test brand logo
    expect(screen.getByText('RiftHomes')).toBeInTheDocument();
    
    // Test main navigation items
    expect(screen.getByRole('button', { name: 'Buy' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Rent' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Airbnbs' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Services' })).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  // Test Buy dropdown functionality
  it('shows buy dropdown menu on hover', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    
    const buyButton = screen.getByRole('button', { name: 'Buy' });
    await user.hover(buyButton);
    
    // Test buy dropdown items
    const buyHouses = screen.getByText('Houses', { selector: 'a[href="/buy/houses"]' });
    const buyApartments = screen.getByText('Apartments', { selector: 'a[href="/buy/apartments"]' });
    const buyCommercial = screen.getByText('Commercial', { selector: 'a[href="/buy/commercial"]' });
    const buyLand = screen.getByText('Land', { selector: 'a[href="/buy/land"]' });

    expect(buyHouses).toBeInTheDocument();
    expect(buyApartments).toBeInTheDocument();
    expect(buyCommercial).toBeInTheDocument();
    expect(buyLand).toBeInTheDocument();
  });

  // Test Rent dropdown functionality
  it('shows rent dropdown menu on hover', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    
    const rentButton = screen.getByRole('button', { name: 'Rent' });
    await user.hover(rentButton);
    
    const rentHouses = screen.getByText('Houses', { selector: 'a[href="/rent/houses"]' });
    const rentApartments = screen.getByText('Apartments', { selector: 'a[href="/rent/apartments"]' });
    const rentCommercial = screen.getByText('Commercial', { selector: 'a[href="/rent/commercial"]' });

    expect(rentHouses).toBeInTheDocument();
    expect(rentApartments).toBeInTheDocument();
    expect(rentCommercial).toBeInTheDocument();
  });

  // Test Airbnbs dropdown functionality
  it('shows airbnbs dropdown menu on hover', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    
    const airbnbButton = screen.getByRole('button', { name: 'Airbnbs' });
    await user.hover(airbnbButton);
    
    const airbnbHouses = screen.getByText('Houses', { selector: 'a[href="/airbnbs/houses"]' });
    const airbnbApartments = screen.getByText('Apartments', { selector: 'a[href="/airbnbs/apartments"]' });

    expect(airbnbHouses).toBeInTheDocument();
    expect(airbnbApartments).toBeInTheDocument();
  });
    
    // Test Services dropdown functionality
  it('shows services dropdown menu on hover', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    
    const servicesButton = screen.getByRole('button', { name: 'Services' });
    await user.hover(servicesButton);
    
    const propertyManagement = screen.getByText('Property Management');
    const movingServices = screen.getByText('Moving Services');

    expect(propertyManagement).toBeInTheDocument();
    expect(movingServices).toBeInTheDocument();
  });

  // Test mobile menu functionality
  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    
    // Find and click hamburger menu
    const menuButton = screen.getByRole('button', { name: 'Toggle navigation menu' });
    await user.click(menuButton);

    // Target mobile menu items specifically using their container
  const mobileMenu = screen.getByRole('navigation', { 
    name: 'mobile-menu' 
  });

   // Use within to scope our queries to the mobile menu
  const mobileMenuLinks = within(mobileMenu);
    
    // Verify mobile menu items are visible
  expect(mobileMenu).toBeVisible();
  expect(mobileMenuLinks.getByRole('link', { name: 'Buy' })).toBeVisible();
  expect(mobileMenuLinks.getByRole('link', { name: 'Rent' })).toBeVisible();
  expect(mobileMenuLinks.getByRole('link', { name: 'Airbnbs' })).toBeVisible();
  expect(mobileMenuLinks.getByRole('link', { name: 'Services' })).toBeVisible();
});
});
