import { render } from '@testing-library/react';
import Pagination from '@/components/Pagination';

describe('Pagination', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Pagination
        totalItems={100}
        itemsPerPage={10}
        currentPage={1}
        onPageChange={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });
});