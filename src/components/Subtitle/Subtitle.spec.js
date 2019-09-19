import Title from './Index.svelte';
import { render, cleanup } from '@testing-library/svelte';

beforeEach(cleanup);
describe('Subtitle', () => {
  it('should have subtile', () => {
    const { getByText } = render(Title, { props: { title: 'Subtitle' } });
    expect(getByText('Subtitle'));
  });
});