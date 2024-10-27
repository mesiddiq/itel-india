import FilterCard from "./FilterCard"
import FilterHeading from "./FilterHeading"

const FilterSection = () => {
  const filters = [
        {   
            id: 1,
            name: 'PRICE RANGE',
            options: ['All Price', 'Under ₹1000', '₹1000 to ₹3000', '₹3000 to ₹5000', 'Upto ₹7500']
        },
        {
            id: 2,
            name: 'PRIMARY CAMERA (FRONT)',
            options: ['8 - 11.9 MP', '12 - 15.9 MP', '16 - 47.9 MP', '48 - 63.9 MP', '64 MP & Above']
        },
        {   
            id: 3,
            name: 'SCREEN SIZE',
            options: ['4.5 in', '5 in', '5.5 in', '5.7 in & above', '6 in & above']
        },
        {
            id: 4,
            name: 'STORAGE',
            options: ['32 GB', '64 GB', '128 GB']
        }
  ]

  return (
    <aside className="mt-2" >
        <FilterHeading />
        {
            filters.map((filter) => (
                <FilterCard key={filter.id} typeOfFilter={filter.name} filterOptions={filter.options}/> 
            ))
        }
    </aside>
  )
}

export default FilterSection