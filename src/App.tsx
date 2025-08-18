import { useState } from "react";
import { Input } from "./components/ui/input.tsx";
import Header from "./helpers/Header.tsx"
import { products, type Product } from "./helpers/data.ts";
import ProductCard  from "./helpers/ProductCard.tsx";


function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [productList, setProductList] =  useState<Product[]>(products);

  const filteredProducts = productList.filter(product => 
product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const toggleLike = (productId: number) =>{
    setProductList(prev => prev.map(product =>
      product.id === productId 
      ? {...product, isLiked: !product.isLiked}
      : product
    ));
  };


  return(<>
    <Header/>
    <div className="container mx-auto px-4 py-8">
      {/* Search bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">Product Showcase</h1>
        <div className="w-full md:w-64">
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Product grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onToggleLike={toggleLike}
            />
          ))}
        </div>
      )}

    </div>
  </>);
}

export default App;
