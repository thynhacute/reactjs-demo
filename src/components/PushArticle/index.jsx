import * as React from 'react';
import "./styles.scss"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BsCoin } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { MDBRipple } from 'mdb-react-ui-kit';
import { Stack } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { useEffect } from 'react';

const PushArticle = () => {
    const [product, setProduct] = useState('');
    const [selectedCard, setSelectedCard] = useState('');
    const [selectedCoin, setSelectedCoin] = useState('');
    const { productId } = useParams();

    const accessToken = JSON.parse(localStorage.getItem("access_token"));
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://2hand.monoinfinity.net/api/v1.0/product/${productId}`);
                const productData = response?.data;
                setProduct(productData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProduct();
    }, [productId]);

    const handleCardSelection = (card) => {
        setSelectedCard(card);
        handleCardSelect(card);
    };
    // go back
    const negative = useNavigate();
    const handleGoBack = () => {
        negative('/my-product');
    };

    const handleCardSelect = (cardValue) => {
        setSelectedCard(cardValue);

        if (cardValue === "1") {
            setSelectedCoin("5");
        } else if (cardValue === "3") {
            setSelectedCoin("10");
        } else if (cardValue === "7") {
            setSelectedCoin("20");
        }
    };

    const handlePayment = async () => {
        const payload = {
            priority: parseInt(selectedCard)
        };
        try {
            if (accessToken) {
                const boostRank = await axios.post(
                    `https://2hand.monoinfinity.net/api/v1.0/product/boost-rank/${productId}`,
                    payload,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${accessToken?.token}`,
                        },
                    }
                );
                if (boostRank?.status === 201) {
                    negative("/my-product");
                }
            } else {
                console.log("Access token not found");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price);
    const timestamp = 1689328226488; // Giá trị timestamp Unix
    const date = new Date(timestamp); // Tạo đối tượng Date từ timestamp

    console.log(date);
    console.log("card:", selectedCard)
    return (
        <div className="container-article">
            <div className="product-card">
                <div className="image-container">
                    {product?.imageUrl && product.imageUrl.length > 0 && (
                        <img src={product.imageUrls[0]} alt="Product" className="product-image" />
                    )}
                </div>
                <div className="details-container">
                    <h3 className="product-name">{product.name && product.name.charAt(0).toUpperCase() + product.name.slice(1)}</h3>
                    <p className="product-price">
                        {formattedPrice}</p>
                </div>
            </div>
            <div className='push-article'>
                <Card sx={{
                    m: 1, minWidth: 275,
                    backgroundColor: selectedCard == 1 ? '#DCFB7B' : '',
                    '&:hover': {
                        backgroundColor: '#d9ee99',
                    },
                }} onClick={() => handleCardSelection('1')}>
                    <CardContent >
                        <Typography>
                            <h3>1 ngày <ArrowCircleUpOutlinedIcon color="success" fontSize="large" /></h3>
                        </Typography>
                        <div className="price-container">
                            <Typography >
                                <h4 className="mb-1 me-1 text-primary">5 <BsCoin
                                />   </h4>
                                <span className="text-secondary">
                                    <s>10<BsCoin
                                    /></s>
                                </span>
                            </Typography>
                            <span className="badge bg-danger ms-2">-50%</span>
                        </div>
                    </CardContent>
                </Card>
                <Card sx={{
                    m: 1, minWidth: 275,
                    backgroundColor: selectedCard == 3 ? '#DCFB7B' : '',
                    '&:hover': {
                        backgroundColor: '#d9ee99',
                    },
                }} onClick={() => handleCardSelection('3')}>
                    <CardContent >
                        <Typography>
                            <h3>3 ngày <ArrowCircleUpOutlinedIcon color="success" fontSize="large" /></h3>
                        </Typography>
                        <div className="price-container">
                            <Typography >
                                <h4 className="mb-1 me-1 text-primary">10 <BsCoin
                                />   </h4>
                                <span className="text-secondary">
                                    <s>20<BsCoin /></s>
                                </span>
                            </Typography>
                            <span className="badge bg-danger ms-2">-50%</span>
                        </div>
                    </CardContent>
                </Card>
                <Card sx={{
                    m: 1, minWidth: 275,
                    backgroundColor: selectedCard == 7 ? '#DCFB7B' : '',
                    '&:hover': {
                        backgroundColor: '#d9ee99',
                    },
                }} onClick={() => handleCardSelection('7')}>
                    <CardContent >
                        <Typography>
                            <h3>7 ngày <ArrowCircleUpOutlinedIcon color="success" fontSize="large" /></h3>
                        </Typography>
                        <div className="price-container">
                            <Typography >
                                <h4 className="mb-1 me-1 text-primary">20 <BsCoin
                                />   </h4>
                                <span className="text-secondary">
                                    <s>40<BsCoin /></s>
                                </span>
                            </Typography>
                            <span className="badge bg-danger ms-2">-50%</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className='action-container'>
                <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
                    <Button fullWidth onClick={handlePayment} variant="contained">
                        {selectedCard ? `Thanh toán | ${selectedCoin}` : 'Thanh toán'}
                        {selectedCard && <BsCoin />}
                    </Button>
                    <Button fullWidth onClick={handleGoBack} variant="outlined">Quay lại</Button>
                </Stack>
            </div>
        </div>
    );
}

export default PushArticle