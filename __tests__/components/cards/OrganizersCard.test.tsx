import { render } from '@testing-library/react-native';
import OrganizersCard from '../../../components/cards/OrganizersCard';

describe('OrganizersCard', () => {
  it('renders the component', () => {
    const { getByText } = render(<OrganizersCard />);

    const card = getByText('Developed by:');
    expect(card).toBeTruthy();
  });
});
