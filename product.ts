export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: "id",
            title: "Product ID",
            type: "string",
            description: "Unique identifier for the product",
          },
          {
            name: "name",
            title: "Product Name",
            type: "string",
            description: "Name of the product",
          },
          {
            name: "image",
            title: "Product Image",
            type: "image",
            options: {
              hotspot: true,
            },
            description: "Upload the product image",
          },
          {
            name: "price",
            title: "Price",
            type: "number",
            description: "Price of the product in your currency",
          },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'category',
            type: 'string',
            title: 'Category'
        },
        {
            name: 'stock',
            type: 'number',
            title: 'Stock Quantity'
        },
      
    ],
};