import { renderHook } from '@testing-library/react';
import { waitFor } from '@testing-library/react';
import { useWatches } from './useWatches';

test('loads watches from sampleData', async () => {
  const { result } = renderHook(() => useWatches());

  await waitFor(() => {
    expect(result.current.watches.length).toBeGreaterThan(0);
  });
});
