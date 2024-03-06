// create cosntant object product for amazon
const product = {
    name : "", 
    price : "", 
    category : "", 
    manufacturer : "", 
    ratings : "", 
    description : "",

    updateName(newName){
        this.name = newName;
    },
    updatePrice(newPrice){
        this.price = newPrice;
    },
    updateCategory(newCategory){
        this.category = newCategory;
    },
    updateManufacturer(newManufacturer){
        this.manufacturer = newManufacturer;
    },
    updateRating(newRating){
        this.ratings = newRating;
    },
    updateDescription(newDescription){
        this.description = newDescription;
    }
};

// update product
product.updateName("Amazon Smart Plug, works with Alexa")
product.updatePrice(24.99)
product.updateCategory("Electronics")
product.updateManufacturer("Amazon")
product.updateRating(4.7)
product.updateDescription("Amazon Smart Plug works with Alexa to add voice control to any electrical socket")
// print product details
console.log(product)

// convert object to json string and exclude update methods
const productDetails = JSON.stringify(product, (key, value) => {
    // exclude update methods
    return typeof value == 'function' ? undefined : value;
}, 2);

console.log(productDetails)