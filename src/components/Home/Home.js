import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';

export default function Home() {
    const [items, setItems] = useState([]);

    const getItems = async () => {
        const response = await fetch('http://localhost:9000/items');
        setItems(await response.json());
        // console.log(response.json())
    }
    useEffect(() => {
        getItems();
    }, [])
    return (
        <>
           <Navbar/>

            <main className="menu-main">
                <section className="menu-main__content">
                    <div className="items">
                        {
                            items.map((curEle) => {
                                return (
                                    <div className='allItems'>
                                        <div className="item">
                                            <img src={curEle.imgUrl} alt="" />
                                            {/* <div>image</div>  */}
                                            <div className="item-details">
                                                <h2 className="title">{curEle.name}</h2>
                                                <span className="price">{curEle.price}</span>
                                                <a href="#" className="add-to-cart" >Add to cart</a>
                                                
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>

                </section>

            </main>
        </>
    )
}
