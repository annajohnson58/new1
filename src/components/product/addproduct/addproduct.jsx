import React, { useState } from 'react'
import './addproduct.css'
import upload_area from '../../../assets/upload.svg'
import { useNavigate } from 'react-router-dom';



 const Addproduct = () => {
    const[image,setImage]=useState(false);
    const navigate=useNavigate();
    const[productdetails,setProductdetails]=useState({
        name:"",
        image:"",
        category:"cake",
        new_price:"",
        old_price:""
    })
    const imageHandler=(e)=>{
setImage(e.target.files[0]);
    }
    const changeHandler=(e)=>{
        setProductdetails({...productdetails,[e.target.name]:e.target.value})
    }
    
  return (
    <div className="class">
    <div className='add-product'>
        <h2>Add Product</h2>
<div className="addproduct-itemfield">
    <p>Product title</p>
    <input value={productdetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
</div>
<div className="addproduct-price">
    <div className="addproduct-itemfield">
        <p>Price</p>
        <input value={productdetails.old_price} onChange={changeHandler}type="text" name="old_price" placeholder='Type here' />

    </div>
    <div className="addproduct-itemfield">
        <p>Offer Price</p>
        <input value={productdetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Type here' />
        
    </div>
</div>
<div className="addproduct-itemfield">
    <p>Product Category</p>
    <select value={productdetails.category} onChange={changeHandler}name="category" className='add-product-selector'>
        <option value="cake">Cake</option>
        <option value="dessert">Dessert</option>
        <option value="pastery">Pastery</option>
    </select>

</div>
<div className="addproduct-itemfield">
    <label htmlFor="file-input">
        <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumbnail-img' alt=""  style={{width:'45px',heigth:'45px'}}/>

    </label>
    <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
</div>

<button onClick={()=>navigate('/product')}className='addproduct-button'>ADD</button>
    </div>
    </div>
  )
}
export default Addproduct;

