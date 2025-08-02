export default function FiltersSidebar({
  selectedBrands = [], 
  selectedPrices = [], 
  selectedColors = [], 
  toggleFilter 
}) {
  return (
    <div className="filters-sidebar">
      <h3 className="filter-names">MARCAS</h3>
      {["Rolex", "Casio", "Cartier", "Omega", "Patek Philippe", "Seiko", "TAG Heuer", "Audemars Piguet"].map((brand) => (
        <label key={brand}>
          <input
            type="checkbox"
            checked={selectedBrands.includes(brand)}
            onChange={() => toggleFilter("brand", brand)}
          />
          {brand}
        </label>
      ))}

      <h3 className="filter-names">PRECIO</h3>
      {[
        { label: "$15 – $35", value: "15-35" },
        { label: "$2.000 – $7.500", value: "2000-7500" },
        { label: "$7.501 – $15.000", value: "7501-15000" },
        { label: "$15.001 – $40.000", value: "15001-40000" },
        { label: "Más de $40.000", value: ">40000" },
      ].map(({ label, value }) => (
        <label key={value}>
          <input
            type="checkbox"
            checked={selectedPrices.includes(value)}
            onChange={() => toggleFilter("price", value)}
          />
          {label}
        </label>
      ))}

      <h3 className="filter-names">COLOR</h3>
      {["Negro", "Blanco", "Gris", "Plateado", "Dorado", "Azul", "Verde", "Rosado"].map((color) => (
        <label key={color}>
          <input
            type="checkbox"
            checked={selectedColors.includes(color)}
            onChange={() => toggleFilter("color", color)}
          />
          {color}
        </label>
      ))}
    </div>
  );
}
