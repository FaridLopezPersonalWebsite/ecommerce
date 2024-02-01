// import React, { useEffect, useState } from "react";
// import { getAllProducts } from "../../Pages/API"; 

// const ProductDisplay = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await getAllProducts();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching product data:", error);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Product List</h1>
//       {products.map((product) => (
//         <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
//           <h2>{product.title}</h2>
//           <img src={product.image} alt={product.title} style={{ maxWidth: "100px" }} />
//           <p>Description: {product.description}</p>
//           <p>ID: {product.id}</p>
//           <p>Price: ${product.price}</p>
//           <p>Category: {product.category}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductDisplay;



