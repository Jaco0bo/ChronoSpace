export default function FiltersSidebar() {
  return (
    <div className="filters-sidebar">
      <h3 className="filter-names">MARCAS</h3>
      <label>
        <input type="checkbox" />
        Rolex
      </label>
      <label>
        <input type="checkbox" />
        Casio
      </label>
      <label>
        <input type="checkbox" />
        Omega
      </label>
      <label>
        <input type="checkbox" />
        Patek Philippe
      </label>
       <label>
        <input type="checkbox" />
        Seiko
      </label>
      <label>
        <input type="checkbox" />
        TAG Heuer
      </label>  
      <h3 className="filter-names">PRECIO</h3>
      <label>
        <input type="checkbox" />
        Menos de $100
      </label> 
      <label>
        <input type="checkbox" />
        $100 – $500
      </label> 
      <label>
        <input type="checkbox" />
        $500 – $1.000
      </label> 
      <label>
        <input type="checkbox" />
        $1.000 – $5.000
      </label>
      <label>
        <input type="checkbox" />
        Más de $5.000
      </label> 
      <h3 className="filter-names">COLOR</h3>
      <label>
        <input type="checkbox" />
        Negro
      </label> 
      <label>
        <input type="checkbox" />
        Blanco
      </label> 
      <label>
        <input type="checkbox" />
        Gris
      </label> 
      <label>
        <input type="checkbox" />
        Plateado
      </label> 
      <label>
        <input type="checkbox" />
        Dorado
      </label> 
      <label>
        <input type="checkbox" />
        Azul
      </label> 
      <label>
        <input type="checkbox" />
        Verde
      </label> 
      <label>
        <input type="checkbox" />
        Rosado
      </label>
    </div>
  )
}