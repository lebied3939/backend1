class ProductManager {
    constructor() {
      this.products = [];
      this.lastId = 0;
    }
  
    addProduct(product) {
      // Validamos que el campo "code" no se repita
      const codeExists = this.products.some((p) => p.code === product.code);
      if (codeExists) {
        throw new Error(`El código "${product.code}" ya existe`);
      }
  
      // Generamos un ID que se incremente solo 
      this.lastId++;
      const newProduct = { ...product, id: this.lastId };
  
      this.products.push(newProduct);
      return newProduct;
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
      if (!product) {
        throw new Error(`No se encontró ningún producto con el ID ${id}`);
      }
      return product;
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
    title: 'Campera',
    description: 'campera de alta calidad',
    price: 8000,
    thumbnail: 'https://acortar.link/k9XeOz',
    code: 'campera23',
    stock: 25,
  });
  
  console.log(productManager.getProducts());
  
  console.log(productManager.getProductById(1));