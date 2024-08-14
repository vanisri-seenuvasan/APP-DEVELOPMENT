import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/OrderDetails.css'; // Import the updated CSS file

const OrderDetails = () => {
    const [orderDetails, setOrderDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/property-action/')
            .then(response => {
                console.log('API Response:', response.data); // Debug the response data
                const latestOrder = response.data.slice(-1)[0];
                setOrderDetails(latestOrder);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching order details:', error);
                setLoading(false);
            });
    }, []);
    
    return (
        <div className="order-details-container">
            <h1>Thank you for your order!</h1>
            {loading ? (
                <p className="loading-message">Loading...</p>
            ) : orderDetails ? (
                <div>
                    <h2>Order Placed Successfully</h2>
                    {orderDetails.image && (
                        <img src={orderDetails.image} alt={orderDetails.name} className="property-image" />
                    )}
                    <p className="large-font"><strong>Property ID:</strong> {orderDetails.id}</p>
                    <p className="large-font"><strong>Property Name:</strong> {orderDetails.name}</p>
                </div>
            ) : (
                <p className="loading-message">No order details found.</p>
            )}
        </div>
    );
};

export default OrderDetails;
