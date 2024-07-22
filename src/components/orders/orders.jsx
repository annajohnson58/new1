import React, { useState } from 'react';
import './orders.css';

const Order = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'John Doe', items: ['Cake'], total: 25.99, status: 'Pending' },
    { id: 2, customer: 'Jane Smith', items: ['Bread'], total: 35.99, status: 'Shipped' },
    { id: 3, customer: 'Mike Johnson', items: ['Donuts'], total: 15.99, status: 'Delivered' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  

  const handleStatusChange = (orderId, status) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === orderId) {
        return { ...order, status };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const filteredOrders = orders.filter((order) => {
    if (activeCategory === 'All') {
      return order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return (
        order.status === activeCategory &&
        order.customer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  });

  return (
    <div className='orders'>
       <ul className='nav-menu'>
    <li onClick={()=>handleCategoryChange('All')} >All Orders{activeCategory=="All"?<hr/>:<></>}</li>
    <li onClick={()=>handleCategoryChange('Pending')}>Pending{activeCategory=="Pending"?<hr/>:<></>}</li>
    <li onClick={()=>handleCategoryChange('Shipped')}>Shipped{activeCategory=="Shipped"?<hr/>:<></>}</li>
    <li onClick={()=>handleCategoryChange('Delivered')}>Delivered{activeCategory=="Delivered"?<hr/>:<></>}</li>
    
</ul> 
     
      <div className="content">
        <h2>{activeCategory} Orders</h2>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          style={{ marginRight: '10px' }}
        />
        <table style={{ width: '1200px', height: '600px', background: 'white' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px', border: '1px solid black',background:' #D0B8A8' }}>ID</th>
              <th style={{ padding: '10px', border: '1px solid black',background:' #D0B8A8' }}>Customer</th>
              <th style={{ padding: '10px', border: '1px solid black',background:' #D0B8A8' }}>Orders</th>
              <th style={{ padding: '10px', border: '1px solid black',background:' #D0B8A8' }}>Price</th>
              <th style={{ padding: '10px', border: '1px solid black' ,background:' #D0B8A8'}}>Status</th>
            </tr>
          </thead>
          <tbody >
            {filteredOrders.map((order) => (
              <tr  key={order.id}>
                <td style={{ padding: '10px', border: '1px solid black' }}>{order.id}</td>
                <td style={{ padding: '10px', border: '1px solid black' }}>{order.customer}</td>
                <td style={{ padding: '10px', border: '1px solid black' }}>{order.items.join(', ')}</td>
                <td style={{ padding: '10px', border: '1px solid black' }}>${order.total}</td>
                <td style={{ padding: '10px', border: '1px solid black',width:'80px' }}>
                  {order.status === 'Pending' && (
                    <span style={{ color: 'white',background:'red',border:'2px solid red',borderRadius:'8px' ,height:'40px',marginRight:'25px',marginLeft:'50px' }}>{order.status}</span>
                  )}
                  {order.status === 'Shipped' && (
                    <span style={{ color: 'white',background:'orange',border:'2px solid orange',borderRadius:'8px' ,height:'40px',marginRight:'25px',marginLeft:'50px'}}>{order.status}</span>
                  )}
                   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  {order.status === 'Delivered' && (
                    <span style={{ color: 'white',background:'green',border:'2px solid green',borderRadius:'8px',height:'40px',marginRight:'60px',marginLeft:'50px'  }}>{order.status}</span>
                  )}

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 
 
                  <select 
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
