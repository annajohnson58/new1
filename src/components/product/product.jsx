
import React, { useState } from 'react'
import './product.css'

import { FaTrash } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import add_product_icon from '../../assets/addproduct.png'
import Croissants from '../../assets/Croissants.jpg'

import Sourdough_Bread from '../../assets/Sourdough Bread.jpg'

import Apple_Pie from '../../assets/Apple Pie.jpg'

const Product = () => {
const[user,setUsers]=useState();
  const [products, setProducts] = useState([
    { id: 1, name:'Croissants',img:Croissants,title:'' ,price:'30',Category:'pastries' },
    { id: 2, name:'Apple pie',title:'' ,img:Sourdough_Bread,price:'32',Category:'pies' },
    { id: 3, name:'Sourdough Bread',title:'' ,img:Apple_Pie,price:'30',Category:'pastries' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleDelete = (id) => {
    setUsers(products.filter((product) => product.id !== id));
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    
    <>
<div className="mainp">
    
    <div className='list-product'>
<h1>All products list</h1>
<div className="section">
    <table style={{ width: '1000px', height:'600px',background:'white' }}>
      <thead>
        <tr>
          <th style={{ padding: '10px', border: '1px solid black',background:' #D0B8A8'  }}>ID</th>
          <th style={{ padding: '10px', border: '1px solid black',background:' #D0B8A8'  }}>PRODUCT</th>
          <th style={{ padding: '10px', border: '1px solid black',background:' #D0B8A8'  }}>TITLE</th>
          <th style={{ padding: '10px', border: '1px solid black',background:' #D0B8A8'  }}>PRICE</th>
          <th style={{ padding: '10px', border: '1px solid black',background:' #D0B8A8'  }}>REMOVE</th>
        </tr>
      </thead>
      <tbody>
      {filteredProducts.map((product) => (
          <tr key={product.id}>
            <td style={{ padding: '10px', border: '1px solid black' }}>{product.id}</td>
            <td style={{ padding: '10px', border: '1px solid black' }}><img style={{width:'100px'}} src={product.img}alt=''/>{product.name}</td>
            
            <td style={{ padding: '10px', border: '1px solid black' }}>{product.title}</td>
            <td style={{ padding: '10px', border: '1px solid black' }}>{product.price}</td>

            
            <td style={{ padding: '10px', border: '1px solid black' }}>
            
             <FaTrash  style={{color:"red",marginRight:'40px',fontSize:"20"}}onClick={() => handleDelete(user.id)} />
            
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
</div>

<div className="product"><div className="product-item">
  <img src={add_product_icon} onClick={()=>navigate('/addproduct')} style={{width:'40px'}}alt="" />
  <p>Add Product</p>
</div></div>
</div>

    
</>
   
    
  )
};

export default Product;


