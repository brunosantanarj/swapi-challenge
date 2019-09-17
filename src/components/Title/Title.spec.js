import Title from './Index.svelte';
import { render, cleanup } from '@testing-library/svelte';

beforeEach(cleanup);
describe('Title', () => {
  it('should have title', () => {
    const { getByText } = render(Title);
    expect(getByText('SWAPI-CHALLENGE'));
  });
});