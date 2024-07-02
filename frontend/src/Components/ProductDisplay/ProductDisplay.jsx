import React, { useContext,useEffect,useState } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import location_icon from '../Assets/location_icon.jpg';
import heart_icon from '../Assets/heart_icon.webp';
import heart_filled_icon from '../Assets/heart_filled_icon.webp';
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

    const [selectedSize, setSelectedSize] = useState('');
    const [randomTags, setRandomTags] = useState([]);
    const [pincode, setPincode] = useState('');
    const [deliveryMessage, setDeliveryMessage] = useState('');
    const [randomRating, setRandomRating] = useState(10);
    const [isFavorite, setIsFavorite] = useState(false);

    const randomPincodes = ['123456', '654321', '789012', '345678', '901234'];

    useEffect(() => {
        const tags = ['Modern', 'Latest', 'Trendy', 'Popular', 'New', 'Stylish', 'Classic'];
        const shuffleAndSelectTags = () => {
            let shuffledTags = tags.sort(() => 0.5 - Math.random());
            return shuffledTags.slice(0, 2); 
        };
        setRandomTags(shuffleAndSelectTags());
        setRandomRating(Math.floor(Math.random() * 5) + 1);
    }, []);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const handlePincodeChange = (event) => {
        setPincode(event.target.value);
    };

    const checkDeliveryOptions = () => {
        if(randomPincodes.includes(pincode)) {
            setDeliveryMessage('Delivery available to this pincode.');
        } else {
            setDeliveryMessage('Delivery not available to this pincode.');
        }
    };

    const calculateDiscountPercentage = (oldPrice, newPrice) => {
        return ((oldPrice - newPrice) / oldPrice * 100).toFixed(2);
    };

    const discountPercentage = calculateDiscountPercentage(product.old_price, product.new_price);

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <img key={i} src={i <= randomRating ? star_icon : star_dull_icon} alt="star"
                    
                />
            );
        }
        return stars;
    };

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
                <img className='favorite-icon' 
                         src={isFavorite ? heart_filled_icon : heart_icon} 
                         alt="favorite" 
                         onClick={toggleFavorite} /> 
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
            {renderStars()}
            <p className='rating'>({Math.floor(randomRating).toFixed(3) * 20} reviews)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
                <div className="productdisplay-right-price-old">
                    ${product.old_price} 
                </div>
                <span className="discount-percentage">({discountPercentage}% off)</span>
            </div>
            <div className="productdisplay-right-description">
                {product.description}
            </div>
            <div className="productdisplay-right-size">
            <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                            <div
                                key={size}
                                onClick={() => handleSizeClick(size)}
                                className={`size-box ${selectedSize === size ? 'selected' : ''}`}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}><img className='cart-img' src={cart_icon} alt="" />ADD TO CART</button>
            <p className="productdisplay-right-category">
                <span>Category:</span> Women , T-Shirt
            </p>
            <p className="productdisplay-right-category">
                <span>Tags : </span>{randomTags.join(', ')}
            </p>
            <div className='productdisplay-delivery'>
                <div className='delivery-heading'>
                    <h1>Check Delivery Options</h1>
                    <img className='delivery-img' src={location_icon} alt="" />
                </div>               
                <div className="delivery-checkbox">
                    <input
                        type="text"
                        placeholder="Enter Pincode"
                        value={pincode}
                        onChange={handlePincodeChange}
                    />
                    <button onClick={checkDeliveryOptions}>Check</button>
                </div>
                <p>{deliveryMessage}</p>
            </div>
        </div>
      </div>
  )
}

export default ProductDisplay
