
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Home, ArrowLeft, Star } from "lucide-react";
import { useState } from "react";
import { ProductDetailsDialog } from "@/components/ProductDetailsDialog";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "home-decor", name: "Home Decor" },
    { id: "garden", name: "Garden Items" },
    { id: "kitchen", name: "Kitchen Ware" },
    { id: "corporate", name: "Corporate Gifts" }
  ];

  const allProducts = [
    {
      id: 1,
      name: "Rustic Terracotta Bowls",
      price: "₹1,200",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      description: "Handcrafted bowls perfect for serving and decoration",
      rating: 4.8,
      category: "kitchen"
    },
    {
      id: 2,
      name: "Garden Planters Set",
      price: "₹1,800",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
      description: "Beautiful planters to enhance your garden space",
      rating: 4.9,
      category: "garden"
    },
    {
      id: 3,
      name: "Decorative Vases",
      price: "₹950",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      description: "Elegant vases for modern home decoration",
      rating: 4.7,
      category: "home-decor"
    },
    {
      id: 4,
      name: "Traditional Water Pots",
      price: "₹1,500",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop",
      description: "Classic terracotta water storage with natural cooling",
      rating: 4.6,
      category: "kitchen"
    },
    {
      id: 5,
      name: "Artisan Tea Set",
      price: "₹2,200",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      description: "Complete tea set for authentic experience",
      rating: 4.9,
      category: "kitchen"
    },
    {
      id: 6,
      name: "Wind Chimes Collection",
      price: "₹1,100",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
      description: "Melodious terracotta wind chimes for outdoor spaces",
      rating: 4.5,
      category: "garden"
    },
    {
      id: 7,
      name: "Corporate Gift Set",
      price: "₹3,500",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      description: "Premium terracotta gift collection for corporate clients",
      rating: 4.8,
      category: "corporate"
    },
    {
      id: 8,
      name: "Table Lamp Collection",
      price: "₹1,800",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop",
      description: "Handcrafted terracotta lamps for ambient lighting",
      rating: 4.6,
      category: "home-decor"
    },
    {
      id: 9,
      name: "Garden Fountain",
      price: "₹4,500",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      description: "Elegant terracotta fountain for garden enhancement",
      rating: 4.9,
      category: "garden"
    },
    {
      id: 10,
      name: "Wall Art Panels",
      price: "₹2,800",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
      description: "Artistic terracotta wall panels for modern homes",
      rating: 4.7,
      category: "home-decor"
    },
    {
      id: 11,
      name: "Executive Desk Set",
      price: "₹2,500",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      description: "Professional terracotta desk accessories",
      rating: 4.8,
      category: "corporate"
    },
    {
      id: 12,
      name: "Spice Storage Jars",
      price: "₹800",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop",
      description: "Traditional terracotta jars for spice storage",
      rating: 4.5,
      category: "kitchen"
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  const handleViewDetails = (product: any) => {
    setSelectedProduct(product);
    setDialogOpen(true);
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-amber-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={goBack}
                className="text-amber-700 hover:text-amber-900"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-red-600 rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-amber-700 to-red-700 bg-clip-text text-transparent">
                  Art of Terra - Products
                </h1>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-800">
            Our Complete Collection
          </h2>
          <p className="text-xl text-amber-600 max-w-2xl mx-auto">
            Explore our extensive range of handcrafted terracotta products across different categories
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 mb-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id 
                  ? "bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700" 
                  : "border-amber-600 text-amber-700 hover:bg-amber-50"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 pb-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 border-amber-200 bg-white/80 backdrop-blur-sm hover:-translate-y-2 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium text-amber-800">{product.rating}</span>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-amber-800 group-hover:text-amber-900">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-amber-600 text-sm">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-amber-800">{product.price}</span>
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700"
                      onClick={() => handleViewDetails(product)}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-amber-600">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <ProductDetailsDialog 
        product={selectedProduct}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
};

export default Products;
