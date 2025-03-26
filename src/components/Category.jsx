import Data from "@/data/Data"

const Category = () => {
  return (
    <div className="mt-40">
      <h2 className="title max-lg:-mt-8 lg:mt-4">Browse By Type</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20 ">
        {
          Data.Category.map((category) => (
            <div key={category.id} className="flex flex-col items-center border rounded-xl p-2 border-gray-300 hover:shadow-md hover:shadow-gray-300 cursor-pointer transition-all duration-300">
              <img src={category.icon} alt={category.name} width={40} height={40} />
              <h2 className="mt-2">{category.name}</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Category