import { renderHook } from '@testing-library/react';
import { waitFor } from '@testing-library/react';
import useFavorites from './useFavorites';

test('loads favorite watches', async () => {
    const fakeFavorites = [
    { id: 1, brand: 'Casio', price: 20.00 },
    { id: 2, brand: 'Rolex', price: 10000.00 }
    ];
    localStorage.setItem("favorites", JSON.stringify(fakeFavorites));

    const { result } = renderHook(() => useFavorites());
    await waitFor(() => {
        expect(result.current.favorites).toBeDefined();
        expect(result.current.favorites.length).toBe(2);
        expect(result.current.favorites[0].brand).toBe("Casio");
    });
});

