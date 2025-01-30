import { render } from '@testing-library/react';
import NavBar from '@/components/NavBar';

describe('NavBar', () => {
  it('renders correctly', () => {
    const { container } = render(<NavBar />);
    expect(container).toMatchSnapshot();
  });
});

