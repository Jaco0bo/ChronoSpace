import { renderHook } from '@testing-library/react';
import { waitFor } from '@testing-library/react';
import useFilters from './useFilters';

test('loads option filters from filteredWatches', async () => {
  const sampleWatches = [
    { id: 1, brand: 'Casio', color: 'Black', price: 20.00 },
    { id: 2, brand: 'Rolex', color: 'Gold', price: 10000.00 }
  ];

  const sampleFavorites = [
    { id: 1, brand: 'Casio', color: 'Black', price: 20.00 }
  ];

  const { result } = renderHook(() => useFilters(sampleWatches, sampleFavorites));

  await waitFor(() => {
    expect(result.current.filteredWatches).toBeDefined();
    expect(result.current.filteredWatches.length).toBe(2); 
    expect(result.current.toggleFilter).toBeDefined();
  });
});
