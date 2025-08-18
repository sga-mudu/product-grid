import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Heart } from "lucide-react";
import type { Product } from "./data";


interface ProductCardProps{
    product: Product;
    onToggleLike: (productId: number) => void;
}
export default function ProductCard({product, onToggleLike}: ProductCardProps){
    return(
        <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
            <CardHeader className="p-0">
                <img src="{product.image}" 
                className="w-full h-48 object-cover rounded-t-lg" />
            </CardHeader>
            <CardContent className="flex-grow p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4 border-t">
                <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                <button
                    onClick={() => onToggleLike(product.id)}// ?
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label={product.isLiked ? "Unlike product" : "Like product"} // ?
                    >
                    <Heart
                        size={20}
                        fill={product.isLiked ? "red" : "none"}
                        color={product.isLiked ? "red" : "gray"}
                    />
                </button>
            </CardFooter>
        </Card>
    );
}

