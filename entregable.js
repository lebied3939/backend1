class ProductManager {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
      return product;
    }
  
    getProducts() {
      return this.products;
    }
  }
  
  const productManager = new ProductManager();
  
  productManager.addProduct({
    title: 'Remera lisa',
    description: 'remera lisa de algodón',
    price: 5000,
    thumbnail: 'https://acortar.link/7JtvnF',
    code: 'remera15',
    stock: 20,
  });
  
  productManager.addProduct({
    title: 'campera',
    description: 'campera de alta calidad',
    price: 8000,
    thumbnail: 'https://acortar.link/k9XeOz',
    code: 'campera23',
    stock: 15,
  });


  console.log(productManager.getProducts());
