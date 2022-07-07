import {SearchOutlined, HeartOutlined,ShoppingOutlined} from '@ant-design/icons'
import { Dropdown } from 'antd';
import "./navbar.css"
// import { useState } from "react"
// import { HomePage, AboutPage,FavouritePage} from "../../pages"

const drop = ([
    <div id="drop-men" style={{ width: '1360px', height: '500px', display: 'flex', border: '1pt solid black',backgroundColor:'#f5f6fa' }}>
        <div style={{ width: '20%', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'left', flexDirection: 'column', width: '100%', height: '50%', marginTop: '10px', marginLeft: '50px', fontSize: 'large', fontWeight: 'bold' }}>
                <a href="" style={{ color: 'black' }}>SALES</a>
                <a href="" style={{ color: 'black' }}>NEW IN</a>
                <a href="" style={{ color: 'black' }}>LIFESTYLE</a>
            </div>
        </div>
        <div style={{ marginTop: '70px', display: 'flex', width: '100%', height: '100%' }}>
            <li style={{ height: '80%',display:'flex', flexDirection:'column',width:'20%',marginLeft: '30px'}}>
                <a href="" style={{color: 'black', fontSize: 'large', fontWeight: 'bold' }}>MEN'S CLOTHING</a>
                <a href="" style={{color:'black'}}> TShirt</a>
                <a href="" style={{color:'black'}}> SweatShirt</a>
                <a href="" style={{color:'black'}}>Jackets</a>
                <a href="" style={{color:'black'}}>Shirts</a>
                <a href="" style={{color:'black'}}> Pants</a>
                <a href="" style={{color:'black'}}> Tracksuits</a>
                <a href="" style={{color:'black'}}> Baselayer and underwear</a>
                <a href="" style={{color:'black'}}> Hive Apparel</a>
            </li>
            <li style={{ height: '80%',display:'flex', flexDirection:'column',width:'20%', marginLeft: '20px',color:'black'}}>
                <a href="" style={{color: 'black',fontSize: 'large', fontWeight: 'bold' }}>MEN'S SHOES</a>
                <a href="" style={{color:'black'}}> Trainers</a>
                <a href="" style={{color:'black'}}> Handball Shoes</a>
                <a href="" style={{color:'black'}}>Gym Shoes</a>
                <a href="" style={{color:'black'}}>Indoor Shoes</a>
                <a href="" style={{color:'black'}}> Slide</a>
                <a href="" style={{color:'black'}}> HIVE Sneakers</a>
            </li>
            <li style={{ marginLeft: '20px',height: '80%',display:'flex', flexDirection:'column',width:'20%',color:'black'}}>
                <a href="" style={{ color: 'black',fontSize: 'large', fontWeight: 'bold' }}>ACCESORIES</a>
                <a href="" style={{color:'black'}}>Sports Bags</a>
                <a href="" style={{color:'black'}}>Socks</a>
                <a href="" style={{color:'black'}}>Hats</a>
                <a href="" style={{color:'black'}}>Others Bags</a>
                <a href="" style={{color:'black'}}> Others Accesories</a>
            </li>
            <li style={{marginLeft: '20px', height: '80%',display:'flex', flexDirection:'column',width:'20%',color:'black'}}>
                <a href="" style={{color: 'black',fontSize: 'large', fontWeight: 'bold' }}>SPORT</a>
                <a href="" style={{color:'black'}}>Football</a>
                <a href="" style={{color:'black'}}>Handball</a>
                <a href="" style={{color:'black'}}>Volleyball</a>
                <a href="" style={{color:'black'}}>Running</a>
                <a href="" style={{color:'black'}}>Training</a>
            </li>
        </div>
    </div>,
    <div id="drop-women" style={{ width: '1360px', height: '500px', display: 'flex', border: '1pt solid black',backgroundColor:'#f5f6fa' }}>
        <div style={{ width: '20%', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'left', flexDirection: 'column', width: '100%', height: '50%', marginTop: '10px', marginLeft: '50px', rowGap: '15px', fontSize: 'large', fontWeight: 'bold' }}>
                <a href="" style={{ color: 'black' }}>SALES</a>
                <a href="" style={{ color: 'black' }}>NEW IN</a>
                <a href="" style={{ color: 'black' }}>LIFESTYLE</a>
            </div>
        </div>
        <div style={{ marginTop: '70px', display: 'flex', width: '100%', height: '100%' }}>
            <li style={{ height: '80%',display:'flex', flexDirection:'column',width:'20%',marginLeft: '30px'}}>
                <a href="" style={{color: 'black', fontSize: 'large', fontWeight: 'bold' }}>WOMEN'S CLOTHING</a>
                <a href="" style={{color:'black'}}> TShirt and Tops</a>
                <a href="" style={{color:'black'}}>Hoodies and SweatShirt</a>
                <a href="" style={{color:'black'}}>Tights</a>
                <a href="" style={{color:'black'}}>Shirts</a>
                <a href="" style={{color:'black'}}> Pants</a>
                <a href="" style={{color:'black'}}> Tracksuits</a>
                <a href="" style={{color:'black'}}> Baselayer and underwear</a>
                <a href="" style={{color:'black'}}> Dresses</a>
                <a href="" style={{color:'black'}}> jackets</a>
                <a href="" style={{color:'black'}}> Hive Apparel</a>

            </li>
            <li style={{ height: '80%',display:'flex', flexDirection:'column',width:'20%', marginLeft: '20px',color:'black'}}>
                <a href="" style={{color: 'black',fontSize: 'large', fontWeight: 'bold' }}>WOMEN'S SHOES</a>
                <a href="" style={{color:'black'}}> Trainers</a>
                <a href="" style={{color:'black'}}> Handball Shoes</a>
                <a href="" style={{color:'black'}}>Gym Shoes</a>
                <a href="" style={{color:'black'}}>Indoor Shoes</a>
                <a href="" style={{color:'black'}}> Slide</a>
                <a href="" style={{color:'black'}}> HIVE Sneakers</a>
            </li>
            <li style={{ marginLeft: '20px',height: '80%',display:'flex', flexDirection:'column',width:'20%',color:'black'}}>
                <a href="" style={{ color: 'black',fontSize: 'large', fontWeight: 'bold' }}>ACCESORIES</a>
                <a href="" style={{color:'black'}}>Sports Bags</a>
                <a href="" style={{color:'black'}}>Socks</a>
                <a href="" style={{color:'black'}}>Hats,Scraves,and Gloves</a>
                <a href="" style={{color:'black'}}>Towels</a>
                <a href="" style={{color:'black'}}>Others Bags</a>
                <a href="" style={{color:'black'}}> Others Accesories</a>
            </li>
            <li style={{marginLeft: '20px', height: '80%',display:'flex', flexDirection:'column',width:'20%',color:'black'}}>
                <a href="" style={{color: 'black',fontSize: 'large', fontWeight: 'bold' }}>SPORT</a>
                <a href="" style={{color:'black'}}>Football</a>
                <a href="" style={{color:'black'}}>Handball</a>
                <a href="" style={{color:'black'}}>Volleyball</a>
                <a href="" style={{color:'black'}}>Running</a>
                <a href="" style={{color:'black'}}>Training</a>
                <a href="" style={{color:'black'}}>Yoga</a>
            </li>
        </div>
    </div>,
    <div id="drop-kids" style={{ width: '1360px', height: '500px', display: 'flex', border: '1pt solid black',backgroundColor:'#f5f6fa' }}>
        <div style={{ width: '20%', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'left', flexDirection: 'column', width: '100%', height: '50%', marginTop: '10px', marginLeft: '50px', rowGap: '15px', fontSize: 'large', fontWeight: 'bold' }}>
                <a href="" style={{ color: 'black' }}>SALES</a>
                <a href="" style={{ color: 'black' }}>NEW IN</a>
                <a href="" style={{ color: 'black' }}>KID STORIES</a>
                <a href="" style={{ color: 'black' }}>FLIYING SUPERKIDS</a>
            </div>
        </div>
        <div style={{ marginTop: '70px', display: 'flex', width: '100%', height: '100%' }}>
            <li style={{ height: '80%',display:'flex', flexDirection:'column',width:'20%',marginLeft: '30px'}}>
                <a href="" style={{color: 'black', fontSize: 'large', fontWeight: 'bold' }}>BABY 0-4 YEARS</a>
                <a href="" style={{color:'black'}}>Bodysuits</a>
                <a href="" style={{color:'black'}}> Sweatshirts</a>
                <a href="" style={{color:'black'}}>Zip and Jackets</a>
                <a href="" style={{color:'black'}}>Pants and Leggings</a>
                <a href="" style={{color:'black'}}>Tracksuits</a>
                <a href="" style={{color:'black'}}> One Pieces</a>
                <a href="" style={{color:'black'}}>Dresses and skirts</a>
                <a href="" style={{color:'black'}}>T-shirts</a>
                <a href="" style={{color:'black'}}>Shorts</a>
                <a href="" style={{color:'black'}}>Swimwear</a>
                <a href="" style={{color:'black'}}>Outerwear</a>
                <a href="" style={{color:'black'}}>Accesories</a>
            </li>
            <li style={{ height: '80%',display:'flex', flexDirection:'column',width:'20%', marginLeft: '20px',color:'black'}}>
                <a href="" style={{color: 'black',fontSize: 'large', fontWeight: 'bold' }}>BABY 4-6 YEARS</a>
                <a href="" style={{color:'black'}}>T-shirt and tops</a>
                <a href="" style={{color:'black'}}> Hoodies and sweatshirts</a>
                <a href="" style={{color:'black'}}>Zip and Jackets</a>
                <a href="" style={{color:'black'}}>Pants and Leggings</a>
                <a href="" style={{color:'black'}}>Tracksuits</a>
                <a href="" style={{color:'black'}}>Jumpsuits</a>
                <a href="" style={{color:'black'}}>Dresses and skirts</a>
                <a href="" style={{color:'black'}}>Underwear and nightwear</a>
                <a href="" style={{color:'black'}}>Shorts</a>
                <a href="" style={{color:'black'}}>Swimwear</a>
                <a href="" style={{color:'black'}}>Outerwear</a>
                <a href="" style={{color:'black'}}>Accesories</a>
            </li>
            <li style={{ marginLeft: '20px',height: '80%',display:'flex', flexDirection:'column',width:'20%',color:'black'}}>
                <a href="" style={{ color: 'black',fontSize: 'large', fontWeight: 'bold' }}>KID SHOES</a>
                <a href="" style={{color:'black'}}>Baby shoes</a>
                <a href="" style={{color:'black'}}>Baby Boots</a>
                <a href="" style={{color:'black'}}>Trainers</a>
                <a href="" style={{color:'black'}}>winter Boots</a>
                <a href="" style={{color:'black'}}>Sandal and Slip-on</a>
                <a href="" style={{color:'black'}}>Indoor Shoes</a>
            </li>
            <li style={{ marginLeft: '20px',height: '80%',display:'flex', flexDirection:'column',width:'20%',color:'black'}}>
                <a href="" style={{ color: 'black',fontSize: 'large', fontWeight: 'bold' }}>OUTWEAR</a>
                <a href="" style={{color:'black'}}>Jackets</a>
                <a href="" style={{color:'black'}}>Winter jackets</a>
                <a href="" style={{color:'black'}}>Rainsuits</a>
                <a href="" style={{color:'black'}}>Overtrousers</a>
                <a href="" style={{color:'black'}}>Snowsuits</a>
                <a href="" style={{color:'black'}}>Softshell and fleece</a>
                <a href="" style={{color:'black'}}>Accesories</a>
            </li>
            <li style={{marginLeft: '20px', height: '80%',display:'flex', flexDirection:'column',width:'20%',color:'black'}}>
                <a href="" style={{color: 'black',fontSize: 'large', fontWeight: 'bold' }}>SPORTWEAR</a>
                <a href="" style={{color:'black'}}>Football</a>
                <a href="" style={{color:'black'}}>Handball</a>
                <a href="" style={{color:'black'}}>Activewear</a>
                <a href="" style={{color:'black'}}>Gymnastic Clothes</a>
                <a href="" style={{color:'black'}}>Swimming</a>
                <a href="" style={{color:'black'}}>Club Jersey</a>
            </li>
        </div>
    </div>,
    <div id="drop-sports" style={{ width: '1360px', height: '500px', display: 'flex', border: '1pt solid black',backgroundColor:'#f5f6fa' }}>
        <div style={{ width: '20%', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'left', flexDirection: 'column', width: '100%', height: '50%', marginTop: '10px', marginLeft: '50px', rowGap: '15px', fontSize: 'large', fontWeight: 'bold' }}>
                <a href="" style={{ color: 'black' }}>SALES</a>
                <a href="" style={{ color: 'black' }}>NEW IN</a>
            </div>
        </div>
        <div style={{ marginTop: '70px', display: 'flex', width: '100%', height: '100%' }}>
            <li style={{ height: '80%',display:'flex', flexDirection:'column',width:'20%',marginLeft: '30px'}}>
                <a href="" style={{color: 'black', fontSize: 'large', fontWeight: 'bold' }}>FOOTBALL</a>
                <a href="" style={{color:'black'}}> Football Jerseys</a>
                <a href="" style={{color:'black'}}> Football Shorts</a>
                <a href="" style={{color:'black'}}> Football Pants</a>
                <a href="" style={{color:'black'}}> Football Socks</a>
                <a href="" style={{color:'black'}}> Football Jackets</a>
                <a href="" style={{color:'black'}}> Football and Accesories</a>
                <a href="" style={{color:'black'}}> Goalkeeper and Referee</a>
            </li>
            <li style={{ height: '80%',display:'flex', flexDirection:'column',width:'20%', marginLeft: '20px',color:'black'}}>
                <a href="" style={{color: 'black',fontSize: 'large', fontWeight: 'bold' }}>HANDBALL</a>
                <a href="" style={{color:'black'}}> Handball Shorts</a>
                <a href="" style={{color:'black'}}> Handball Shoes</a>
                <a href="" style={{color:'black'}}>Handball Jerseys</a>
                <a href="" style={{color:'black'}}>Handball Pants</a>
                <a href="" style={{color:'black'}}> Handball and Accesories</a>
                <a href="" style={{color:'black'}}> XK Collection</a>
            </li>
            <li style={{ marginLeft: '20px',height: '80%',display:'flex', flexDirection:'column',width:'20%',color:'black'}}>
                <a href="" style={{ color: 'black',fontSize: 'large', fontWeight: 'bold' }}>FITNESS</a>
                <a href="" style={{color:'black'}}>T-shirts and shirts</a>
                <a href="" style={{color:'black'}}>Tights and sports</a>
                <a href="" style={{color:'black'}}>Tops and Sports Bras</a>
                <a href="" style={{color:'black'}}>Training Jackets</a>
                <a href="" style={{color:'black'}}>Gym Shoes</a>
            </li>
            <li style={{marginLeft: '20px', height: '80%',display:'flex', flexDirection:'column',width:'20%',color:'black'}}>
                <a href="" style={{color: 'black',fontSize: 'large', fontWeight: 'bold' }}>VOLLEYBALL</a>
                <a href="" style={{color:'black'}}>Volleyball Shoes</a>
                <a href="" style={{color:'black'}}>Volleyball Shorts</a>
                <a href="" style={{color:'black'}}>Volleyball Pants</a>
                <a href="" style={{color:'black'}}>Volleyball and Accesories</a>
            </li>
            <li style={{marginLeft: '20px', height: '80%',display:'flex', flexDirection:'column',width:'20%',color:'black'}}>
                <a href="" style={{color: 'black',fontSize: 'large', fontWeight: 'bold' }}>CLUB JERSEYS</a>
                <a href="" style={{color:'black'}}>The Danish Superliga</a>
                <a href="" style={{color:'black'}}>Danish National Team</a>
                <a href="" style={{color:'black'}}>Astralis</a>
                <a href="" style={{color:'black'}}>Premiere League</a>
                <a href="" style={{color:'black'}}>Others</a>
            </li>
            <li style={{marginLeft: '20px', height: '80%',display:'flex', flexDirection:'column',width:'20%',color:'black'}}>
                <a href="" style={{color: 'black',fontSize: 'large', fontWeight: 'bold' }}>OTHERS</a>
                <a href="" style={{color:'black'}}>Yoga</a>
                <a href="" style={{color:'black'}}>Running</a>
                <a href="" style={{color:'black'}}>Basketball</a>
                <a href="" style={{color:'black'}}>Gymnastic</a>
            </li>
        </div>
    </div>
]);

export default function Navbar() {
    return (
        <>
            <div id="nav-menu">
                <img src="" alt=""></img>
                <Dropdown overlay={drop[0]} style={{ marginLeft: '30px' }}>
                    <div>
                        <a onClick={(e) => e.preventDefault()}></a>
                        MEN
                    </div>
                </Dropdown>
                <Dropdown overlay={drop[1]} style={{ marginLeft: '30px' }}>
                    <div>
                        <a onClick={(e) => e.preventDefault()}></a>
                        WOMEN
                    </div>
                </Dropdown>
                <Dropdown overlay={drop[2]} style={{ marginLeft: '30px' }}>
                    <div>
                        <a onClick={(e) => e.preventDefault()}></a>
                        KIDS
                    </div>
                </Dropdown>
                <Dropdown overlay={drop[3]} style={{ marginLeft: '30px' }}>
                    <div>
                        <a onClick={(e) => e.preventDefault()}></a>
                        SPORTS
                    </div>
                </Dropdown>
                <div style={{marginRight:'auto'}}>
                    <a href="" style={{ color: 'black' }}> COMPANY KARMA</a>
                </div>
                <SearchOutlined style={{fontSize:'32px',transform:'translateX(40px) translateY(15px)', color:'grey'}}/>
                <input type="search" style={{width:'15%', height:'63px',border:'0.1pt solid grey',textIndent:'20%',borderBottom:'none',borderTop:'none'}}></input>
                <div style={{width:'10%', height:'65px',marginTop:'0px',marginLeft:'0px',border:'0.001pt solid grey',textAlign:'center',borderBottom:'none',borderTop:'none'}}>
                    <a href="">
                        <HeartOutlined style={{fontSize:'18px',color:'grey'}}/> 
                    </a>
                </div>
                <div style={{width:'10%', height:'65px',marginTop:'0px',marginLeft:'0px',border:'0.1pt solid grey',textAlign:'center',borderBottom:'none',borderTop:'none'}}>
                    <a href="">
                    <ShoppingOutlined style={{fontSize:'18px',color:'grey'}}/>
                    </a>
                </div>
            </div>
        </>
    )
}

