import { Link } from "react-router-dom";
import { Dropdown } from "antd";
import {
  SearchOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import "./navbar.css";


const drop = [
  <div
    id="drop-men"
    style={{
      width: "1360px",
      height: "500px",
      display: "flex",
      border: "1pt solid black",
      backgroundColor: "#f5f6fa",
    }}
  >
    <div style={{ width: "20%", height: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "left",
          flexDirection: "column",
          width: "100%",
          height: "50%",
          marginTop: "10px",
          marginLeft: "50px",
          fontSize: "large",
          fontWeight: "bold",
        }}
      >
        <Link to="/" style={{ color: "black" }}>
          SALES
        </Link>
        <Link to="/" style={{ color: "black" }}>
          NEW IN
        </Link>
        <Link to="/" style={{ color: "black" }}>
          LIFESTYLE
        </Link>
      </div>
    </div>
    <div
      style={{
        marginTop: "70px",
        display: "flex",
        width: "100%",
        height: "100%",
      }}
    >
      <li
        style={{
          height: "80%",
          display: "flex",
          flexDirection: "column",
          width: "20%",
          marginLeft: "30px",
        }}
      >
        <Link to="/"
          style={{ color: "black", fontSize: "large", fontWeight: "bold" }}
        >
          MEN'S CLOTHING
        </Link>
        <Link to="/" style={{ color: "black" }}>
          TShirt
        </Link>
        <Link to="/" style={{ color: "black" }}>
          SweatShirt
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Jackets
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Shirts
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Pants
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Tracksuits
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Baselayer and underwear
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Hive Apparel
        </Link>
      </li>
      <li
        style={{
          height: "80%",
          display: "flex",
          flexDirection: "column",
          width: "20%",
          marginLeft: "20px",
          color: "black",
        }}
      >
        <Link to="/"
          style={{ color: "black", fontSize: "large", fontWeight: "bold" }}
        >
          MEN'S SHOES
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Trainers
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Handball Shoes
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Gym Shoes
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Indoor Shoes
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Slide
        </Link>
        <Link to="/" style={{ color: "black" }}>
          HIVE Sneakers
        </Link>
      </li>
      <li
        style={{
          marginLeft: "20px",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          width: "20%",
          color: "black",
        }}
      >
        <Link to="/"
          style={{ color: "black", fontSize: "large", fontWeight: "bold" }}
        >
          ACCESORIES
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Sports Bags
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Socks
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Hats
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Others Bags
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Others Accesories
        </Link>
      </li>
      <li
        style={{
          marginLeft: "20px",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          width: "20%",
          color: "black",
        }}
      >
        <Link to="/"
          style={{ color: "black", fontSize: "large", fontWeight: "bold" }}
        >
          SPORT
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Football
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Handball
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Volleyball
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Running
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Training
        </Link>
      </li>
    </div>
  </div>,
  <div
    id="drop-women"
    style={{
      width: "1360px",
      height: "500px",
      display: "flex",
      border: "1pt solid black",
      backgroundColor: "#f5f6fa",
    }}
  >
    <div style={{ width: "20%", height: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "left",
          flexDirection: "column",
          width: "100%",
          height: "50%",
          marginTop: "10px",
          marginLeft: "50px",
          rowGap: "15px",
          fontSize: "large",
          fontWeight: "bold",
        }}
      >
        <Link to="/" style={{ color: "black" }}>
          SALES
        </Link>
        <Link to="/" style={{ color: "black" }}>
          NEW IN
        </Link>
        <Link to="/" style={{ color: "black" }}>
          LIFESTYLE
        </Link>
      </div>
    </div>
    <div
      style={{
        marginTop: "70px",
        display: "flex",
        width: "100%",
        height: "100%",
      }}
    >
      <li
        style={{
          height: "80%",
          display: "flex",
          flexDirection: "column",
          width: "20%",
          marginLeft: "30px",
        }}
      >
        <Link to="/"
          style={{ color: "black", fontSize: "large", fontWeight: "bold" }}
        >
          WOMEN'S CLOTHING
        </Link>
        <Link to="/" style={{ color: "black" }}>
          TShirt and Tops
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Hoodies and SweatShirt
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Tights
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Shirts
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Pants
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Tracksuits
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Baselayer and underwear
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Dresses
        </Link>
        <Link to="/" style={{ color: "black" }}>
          jackets
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Hive Apparel
        </Link>
      </li>
      <li
        style={{
          height: "80%",
          display: "flex",
          flexDirection: "column",
          width: "20%",
          marginLeft: "20px",
          color: "black",
        }}
      >
        <Link to="/"
          style={{ color: "black", fontSize: "large", fontWeight: "bold" }}
        >
          WOMEN'S SHOES
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Trainers
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Handball Shoes
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Gym Shoes
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Indoor Shoes
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Slide
        </Link>
        <Link to="/" style={{ color: "black" }}>
          HIVE Sneakers
        </Link>
      </li>
      <li
        style={{
          marginLeft: "20px",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          width: "20%",
          color: "black",
        }}
      >
        <Link to="/"
          style={{ color: "black", fontSize: "large", fontWeight: "bold" }}
        >
          ACCESORIES
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Sports Bags
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Socks
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Hats,Scraves,and Gloves
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Towels
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Others Bags
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Others Accesories
        </Link>
      </li>
      <li
        style={{
          marginLeft: "20px",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          width: "20%",
          color: "black",
        }}
      >
        <Link to="/"
          style={{ color: "black", fontSize: "large", fontWeight: "bold" }}
        >
          SPORT
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Football
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Handball
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Volleyball
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Running
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Training
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Yoga
        </Link>
      </li>
    </div>
  </div>,
  <div
    id="drop-kids"
    style={{
      width: "1360px",
      height: "500px",
      display: "flex",
      border: "1pt solid black",
      backgroundColor: "#f5f6fa",
    }}
  >
    <div style={{ width: "20%", height: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "left",
          flexDirection: "column",
          width: "100%",
          height: "50%",
          marginTop: "10px",
          marginLeft: "50px",
          rowGap: "15px",
          fontSize: "large",
          fontWeight: "bold",
        }}
      >
        <Link to="/" style={{ color: "black" }}>
          SALES
        </Link>
        <Link to="/" style={{ color: "black" }}>
          NEW IN
        </Link>
        <Link to="/" style={{ color: "black" }}>
          KID STORIES
        </Link>
        <Link to="/" style={{ color: "black" }}>
          FLIYING SUPERKIDS
        </Link>
      </div>
    </div>
    <div
      style={{
        marginTop: "70px",
        display: "flex",
        width: "100%",
        height: "100%",
      }}
    >
      <li
        style={{
          height: "80%",
          display: "flex",
          flexDirection: "column",
          width: "20%",
          marginLeft: "30px",
        }}
      >
        <Link to="/"
          style={{ color: "black", fontSize: "large", fontWeight: "bold" }}
        >
          BABY 0-4 YEARS
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Bodysuits
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Sweatshirts
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Zip and Jackets
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Pants and Leggings
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Tracksuits
        </Link>
        <Link to="/" style={{ color: "black" }}>
          One Pieces
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Dresses and skirts
        </Link>
        <Link to="/" style={{ color: "black" }}>
          T-shirts
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Shorts
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Swimwear
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Outerwear
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Accesories
        </Link>
      </li>
      <li
        style={{
          height: "80%",
          display: "flex",
          flexDirection: "column",
          width: "20%",
          marginLeft: "20px",
          color: "black",
        }}
      >
        <Link to="/" style={{ color: "black", fontSize: "large", fontWeight: "bold" }}
        >
          BABY 4-6 YEARS
        </Link>
        <Link to="/" style={{ color: "black" }}>
          T-shirt and tops
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Hoodies and sweatshirts
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Zip and Jackets
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Pants and Leggings
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Tracksuits
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Jumpsuits
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Dresses and skirts
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Underwear and nightwear
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Shorts
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Swimwear
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Outerwear
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Accesories
        </Link>
      </li>
      <li
        style={{
          marginLeft: "20px",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          width: "20%",
          color: "black",
        }}
      >
        <Link to="/"
          style={{ color: "black", fontSize: "large", fontWeight: "bold" }}
        >
          KID SHOES
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Baby shoes
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Baby Boots
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Trainers
        </Link>
        <Link to="/" style={{ color: "black" }}>
          winter Boots
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Sandal and Slip-on
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Indoor Shoes
        </Link>
      </li>
      <li
        style={{
          marginLeft: "20px",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          width: "20%",
          color: "black",
        }}
      >
        <Link to="/"
          style={{ color: "black", fontSize: "large", fontWeight: "bold" }}
        >
          OUTWEAR
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Jackets
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Winter jackets
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Rainsuits
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Overtrousers
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Snowsuits
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Softshell and fleece
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Accesories
        </Link>
      </li>
      <li
        style={{
          marginLeft: "20px",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          width: "20%",
          color: "black",
        }}
      >
        <Link to="/"
          style={{ color: "black", fontSize: "large", fontWeight: "bold" }}
        >
          SPORTWEAR
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Football
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Handball
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Activewear
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Gymnastic Clothes
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Swimming
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Club Jersey
        </Link>
      </li>
    </div>
  </div>,
  <div
    id="drop-sports"
    style={{
      width: "1360px",
      height: "500px",
      display: "flex",
      border: "1pt solid black",
      backgroundColor: "#f5f6fa",
    }}
  >
    <div style={{ width: "20%", height: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "left",
          flexDirection: "column",
          width: "100%",
          height: "50%",
          marginTop: "10px",
          marginLeft: "50px",
          rowGap: "15px",
          fontSize: "large",
          fontWeight: "bold",
        }}
      >
        <Link to="/" style={{ color: "black" }}>
          SALES
        </Link>
        <Link to="/" style={{ color: "black" }}>
          NEW IN
        </Link>
      </div>
    </div>
    <div
      style={{
        marginTop: "70px",
        display: "flex",
        width: "100%",
        height: "100%",
      }}
    >
      <li
        style={{
          height: "80%",
          display: "flex",
          flexDirection: "column",
          width: "20%",
          marginLeft: "30px",
        }}
      >
        <Link to="/"
          style={{ color: "black", fontSize: "large", fontWeight: "bold" }}
        >
          FOOTBALL
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Football Jerseys
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Football Shorts
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Football Pants
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Football Socks
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Football Jackets
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Football and Accesories
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Goalkeeper and Referee
        </Link>
      </li>
      <li
        style={{
          height: "80%",
          display: "flex",
          flexDirection: "column",
          width: "20%",
          marginLeft: "20px",
          color: "black",
        }}
      >
        <Link to="/"
          style={{ color: "black", fontSize: "large", fontWeight: "bold" }}
        >
          HANDBALL
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Handball Shorts
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Handball Shoes
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Handball Jerseys
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Handball Pants
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Handball and Accesories
        </Link>
        <Link to="/" style={{ color: "black" }}>
          XK Collection
        </Link>
      </li>
      <li
        style={{
          marginLeft: "20px",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          width: "20%",
          color: "black",
        }}
      >
        <Link to="/"
          style={{ color: "black", fontSize: "large", fontWeight: "bold" }}
        >
          FITNESS
        </Link>
        <Link to="/" style={{ color: "black" }}>
          T-shirts and shirts
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Tights and sports
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Tops and Sports Bras
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Training Jackets
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Gym Shoes
        </Link>
      </li>
      <li
        style={{
          marginLeft: "20px",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          width: "20%",
          color: "black",
        }}
      >
        <Link to="/"
          style={{ color: "black", fontSize: "large", fontWeight: "bold" }}
        >
          VOLLEYBALL
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Volleyball Shoes
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Volleyball Shorts
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Volleyball Pants
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Volleyball and Accesories
        </Link>
      </li>
      <li
        style={{
          marginLeft: "20px",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          width: "20%",
          color: "black",
        }}
      >
        <Link to="/"
          style={{ color: "black", fontSize: "large", fontWeight: "bold" }}
        >
          CLUB JERSEYS
        </Link>
        <Link to="/" style={{ color: "black" }}>
          The Danish Superliga
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Danish National Team
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Astralis
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Premiere League
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Others
        </Link>
      </li>
      <li
        style={{
          marginLeft: "20px",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          width: "20%",
          color: "black",
        }}
      >
        <Link to="/" style={{ color: "black", fontSize: "large", fontWeight: "bold" }}
        >
          OTHERS
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Yoga
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Running
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Basketball
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Gymnastic
        </Link>
      </li>
    </div>
  </div>,
];

export default function Navbar() {

  return (
    <div id="nav-menu">
      <Link to="/" id="logo">
        <img
          src="https://www.hummel.net/on/demandware.static/-/Library-Sites-hummel-shared/default/dwfdab3d01/homepage/logo.svg"
          alt=""
        ></img>
      </Link>
      <Dropdown overlay={drop[0]} style={{ marginLeft: "30px" }}>
        <div>
          <Link to="/" onClick={(e) => e.preventDefault()}></Link>
          MEN
        </div>
      </Dropdown>
      <Dropdown overlay={drop[1]} style={{ marginLeft: "30px" }}>
        <div>
          <Link to="/" onClick={(e) => e.preventDefault()}></Link>
          WOMEN
        </div>
      </Dropdown>
      <Dropdown overlay={drop[2]} style={{ marginLeft: "30px" }}>
        <div>
          <Link to="/" onClick={(e) => e.preventDefault()}></Link>
          KIDS
        </div>
      </Dropdown>
      <Dropdown overlay={drop[3]} style={{ marginLeft: "30px" }}>
        <div>
          <Link to="/" onClick={(e) => e.preventDefault()}></Link>
          SPORTS
        </div>
      </Dropdown>
      <div style={{ marginRight: "auto" }}>
        <Link to="/about" style={{ color: "black" }}>
          COMPANY KARMA
        </Link>
      </div>
      <SearchOutlined
        style={{
          fontSize: "20px",
          transform: "translateX(40px)",
          color: "grey",
        }}
      />
      <form style={{width:'200px'}}>
        <input
          type="search"
          style={{
            width: "100%",
            height: "63px",
            border: "0.1pt solid grey",
            textIndent: "25%",
            borderBottom: "none",
            borderTop: "none",
          }}
        ></input>

      </form>
      <div
        style={{
          width: "10%",
          height: "65px",
          marginTop: "0px",
          marginLeft: "0px",
          border: "0.001pt solid grey",
          textAlign: "center",
          borderBottom: "none",
          borderTop: "none",
          borderRight:"0.1pt solid grey"
        }}
      >
        <Link to="/favourite">
          <HeartOutlined style={{ fontSize: "18px", color: "grey" }} />
        </Link>
      </div>
    </div>
  );
}
