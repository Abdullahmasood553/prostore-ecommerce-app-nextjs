'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { CartItem } from "@/types";
import { toast } from "sonner"; 
import { addItemToCart } from "@/lib/actions/cart.actions";

const AddToCart = ({ item }: { item: CartItem }) => {

    const router = useRouter();
    

    const handleAddToCart = async () => {
        const res = await addItemToCart(item);

        if (!res.success) { 
            toast.error(res.message);
            return;
        }

        // Handle Success add to cart
        toast.success(res.message, {
            action: {
              label: "Go To Cart",
              onClick: () => router.push("/cart"),
            },
          });
    }

    
    return <Button className="w-f ull" type="button" onClick={handleAddToCart}><Plus /> Add To Cart</Button>
}
 
export default AddToCart;