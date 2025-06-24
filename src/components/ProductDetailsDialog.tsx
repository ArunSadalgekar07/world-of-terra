
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MessageCircle } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  rating: number;
}

interface ProductDetailsDialogProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProductDetailsDialog = ({ product, open, onOpenChange }: ProductDetailsDialogProps) => {
  if (!product) return null;

  const handleContactForBuying = () => {
    const phoneNumber = "+919876543210";
    const message = `Hi, I'm interested in buying ${product.name}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-amber-800">{product.name}</DialogTitle>
          <DialogDescription className="text-amber-600">
            Handcrafted terracotta piece with traditional artistry
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="font-medium text-amber-800">{product.rating} out of 5</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-amber-600 text-lg">{product.description}</p>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-amber-800">Features:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-amber-100 text-amber-800">Handmade</Badge>
                <Badge variant="secondary" className="bg-amber-100 text-amber-800">Well Baked</Badge>
                <Badge variant="secondary" className="bg-amber-100 text-amber-800">Eco-Friendly</Badge>
                <Badge variant="secondary" className="bg-amber-100 text-amber-800">Well Finished</Badge>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-amber-800">Care Instructions:</h4>
              <ul className="text-amber-600 text-sm space-y-1">
                <li>• Clean with dry cloth</li>
                <li>• Avoid harsh chemicals</li>
                <li>• Store in dry place</li>
                <li>• Handle with care</li>
              </ul>
            </div>
            
            <div className="pt-4 border-t">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-amber-800">{product.price}</span>
                <Badge className="bg-green-100 text-green-800">Available</Badge>
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700"
                size="lg"
                onClick={handleContactForBuying}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact for Buying
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
