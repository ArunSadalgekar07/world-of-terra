import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Home, ShoppingBag, Handshake, Image, Mail, Phone, MapPin, Star } from "lucide-react";
import { useState } from "react";
import { ProductDetailsDialog } from "@/components/ProductDetailsDialog";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const products = [
    {
      title: "Unique Terracotta Articles",
      description: "Handcrafted pieces that blend traditional artistry with contemporary design",
      icon: <Image className="w-8 h-8" />,
      features: ["Handmade", "Well Baked", "Well Finished"]
    },
    {
      title: "Corporate Gifting",
      description: "Ideal terracotta gifts that leave a lasting impression on your business partners",
      icon: <Handshake className="w-8 h-8" />,
      features: ["Professional Packaging", "Bulk Orders", "Custom Designs"]
    },
    {
      title: "Eco-Friendly Home Decor",
      description: "Transform your living spaces with sustainable terracotta home accessories",
      icon: <Home className="w-8 h-8" />,
      features: ["Natural Materials", "Sustainable", "Elegant Designs"]
    },
    {
      title: "Garden Decor Products",
      description: "Beautiful terracotta pieces to enhance your outdoor spaces naturally",
      icon: <Leaf className="w-8 h-8" />,
      features: ["Weather Resistant", "Eco-Friendly", "Artistic Appeal"]
    }
  ];

  const terracottaProducts = [
    {
      id: 1,
      name: "Rustic Terracotta Bowls",
      price: "₹1,200",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      description: "Handcrafted bowls perfect for serving and decoration",
      rating: 4.8
    },
    {
      id: 2,
      name: "Garden Planters Set",
      price: "₹1,800",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
      description: "Beautiful planters to enhance your garden space",
      rating: 4.9
    },
    {
      id: 3,
      name: "Decorative Vases",
      price: "₹950",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      description: "Elegant vases for modern home decoration",
      rating: 4.7
    },
    {
      id: 4,
      name: "Traditional Water Pots",
      price: "₹1,500",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop",
      description: "Classic terracotta water storage with natural cooling",
      rating: 4.6
    },
    {
      id: 5,
      name: "Artisan Tea Set",
      price: "₹2,200",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      description: "Complete tea set for authentic experience",
      rating: 4.9
    },
    {
      id: 6,
      name: "Wind Chimes Collection",
      price: "₹1,100",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
      description: "Melodious terracotta wind chimes for outdoor spaces",
      rating: 4.5
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewDetails = (product: any) => {
    setSelectedProduct(product);
    setDialogOpen(true);
  };

  const handleViewAllProducts = () => {
    window.location.href = '/products';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-amber-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-red-600 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-red-700 bg-clip-text text-transparent">
                Art of Terra
              </h1>
            </div>
            
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-amber-700 hover:text-amber-900 font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-amber-700 hover:text-amber-900 font-medium transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-amber-700 hover:text-amber-900 font-medium transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-amber-700 hover:text-amber-900 font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-amber-700 hover:text-amber-900 font-medium transition-colors"
              >
                Contact
              </button>
            </div>

            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-800 via-red-700 to-orange-800 bg-clip-text text-transparent leading-tight">
              Crafting Earth's Beauty
            </h2>
            <p className="text-xl md:text-2xl text-amber-700 mb-8 leading-relaxed">
              Discover the timeless elegance of handcrafted terracotta art. Each piece tells a story of tradition, 
              sustainability, and artistic excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('products')}
                size="lg" 
                className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-lg px-8 py-6"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Explore Products
              </Button>
              <Button 
                onClick={() => scrollToSection('about')}
                variant="outline" 
                size="lg" 
                className="border-amber-600 text-amber-700 hover:bg-amber-50 text-lg px-8 py-6"
              >
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 bg-white/60">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-amber-800">
              Our Creations
            </h3>
            <p className="text-xl text-amber-600 max-w-2xl mx-auto">
              From unique home decor to corporate gifts, each piece is handmade with care and attention to detail
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-amber-200 bg-white/80 backdrop-blur-sm hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-amber-100 to-red-100 rounded-xl text-amber-700 group-hover:from-amber-200 group-hover:to-red-200 transition-colors">
                      {product.icon}
                    </div>
                    <CardTitle className="text-2xl text-amber-800 group-hover:text-amber-900">
                      {product.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-amber-600 text-lg leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery Section with working View Details buttons */}
      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-amber-800">
              Our Terracotta Collection
            </h3>
            <p className="text-xl text-amber-600 max-w-2xl mx-auto">
              Discover our handcrafted terracotta pieces, each telling a unique story of artistry and tradition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {terracottaProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 border-amber-200 bg-white/80 backdrop-blur-sm hover:-translate-y-2 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-amber-800">{product.rating}</span>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-amber-800 group-hover:text-amber-900">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-amber-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-800">{product.price}</span>
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

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-lg px-8 py-6"
              onClick={handleViewAllProducts}
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-amber-800">
              The Art of Terra Story
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-amber-800 mb-2">Handmade</h4>
                <p className="text-amber-600">Every piece is crafted by skilled artisans with years of experience</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-amber-800 mb-2">Eco-Friendly</h4>
                <p className="text-amber-600">Sustainable materials and processes that respect our environment</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-amber-800 mb-2">Well Finished</h4>
                <p className="text-amber-600">Perfect baking and finishing techniques ensure lasting quality</p>
              </div>
            </div>
            <p className="text-lg text-amber-700 leading-relaxed">
              At Art of Terra, we believe in the timeless beauty of terracotta. Our artisans combine traditional 
              techniques with contemporary designs to create pieces that are not just decorative items, but 
              expressions of art that bring warmth and elegance to any space.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-amber-600 to-red-600">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Let's Create Together
            </h3>
            <p className="text-xl text-amber-100 mb-12">
              Ready to bring the beauty of terracotta to your space? Get in touch with us today.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Call Us</h4>
                <p className="text-amber-100">+91 98765 43210</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Email Us</h4>
                <p className="text-amber-100">hello@artofterra.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Visit Us</h4>
                <p className="text-amber-100">Artist Quarter, Craft City</p>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-white text-amber-700 hover:bg-amber-50 text-lg px-8 py-6"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-amber-900 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-red-400 rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-amber-900" />
            </div>
            <span className="text-xl font-bold">Art of Terra</span>
          </div>
          <p className="text-amber-200">
            © 2024 Art of Terra. Crafting beauty from earth with love and tradition.
          </p>
        </div>
      </footer>

      {/* Product Details Dialog */}
      <ProductDetailsDialog 
        product={selectedProduct}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
};

export default Index;
