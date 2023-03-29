import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import RestApi from '../../utils/RestApi'
import PocketBase from 'pocketbase';
import "../card/Card.css"
import urlData from '../../url.json'
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import styled from "styled-components";
const StyledDiv = styled.div
`
  padding: 1px 5px;

  @media (min-width: 200px) {
    padding: 1px 5px;}

  @media (min-width: 768px) {
    padding: 5px 15px;}`;

const Card = () => {



    const [catalog, setCatalog] = useState(null)
    const [language, setLanguage] = useState("")





    const getData = async () => {
        await axios.get('http://192.168.88.167/wp-json/wp/v2/catalog?per_page=100').then(res => setCatalog(res.data))

    }

    useEffect(() => {
        getData();
    }, [])



    return (

        <div>



            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">

                <div className="container text-center py-5">
                    <h1 className="display-4 text-white animated slideInDown mb-4">Catalog</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                        </ol>
                    </nav>
                </div>

            </div>

            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                        <ListGroup  >
                            <ListGroup.Item action href="#link1">
                            Автоматика для вентиляции
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                                Комплектующие
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link3">
                                Исполнения вентиляторов
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link4">
                                Дизайн
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1">
                                <h1 className="titleprod">Автоматика для вентиляции</h1>
                                <div className="productContainer" style={{ display: "flex" , flexWrap: "wrap", justifyContent: "start"}}>

                                    {catalog?.filter(ctg => ctg.acf.Kategorija === "автоматизированный").map((ctg) => (
                                        <div className=" wow fadeInLeft" key={ctg.id}>

                                            <StyledDiv><div className="card"
                                            >
                                                <div className="header" style={{  height: "19em", background: `url(${ctg.acf.image_catalog}) center / cover no-repeat`, padding: "100px" , }}>
                                                </div>
                                                <div className="footer">
                                                    <div className="title">
                                                    <h2 className="rendered">{ctg.title.rendered}</h2>
                                                    <div className="buyNow">
                                                        {ctg.acf.price}сом
                                                    </div>
                                                    </div>
                                                    
                                                </div>
                                            </div></StyledDiv>

                                        </div>))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">

                                <h1 className="titleprod">Комплектующие</h1>
                                <div className="productContainer" style={{ display: "flex" , flexWrap: "wrap", justifyContent: "start"}}>
                                    
                                        {console.log(catalog)}
                                        {catalog?.filter(ctg => ctg.acf.Kategorija === "Компоненты").map((ctg) => (
                                            <div className=" wow fadeInLeft" key={ctg.id}>

                                                <div className="card"
                                                >
                                                    <div className="header" style={{ height: "19em", background: `url(${ctg.acf.image_catalog}) center / cover no-repeat`, padding: "100px" }}>


                                                    </div>
                                                    <div className="footer">
                                                        <div className="title">
                                                            <h2 className="rendered">{ctg.title.rendered}</h2>
                                                        </div>
                                                        <button className="buyNow">
                                                            {ctg.acf.price}сом
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>))}
                                    

                                </div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="#link3">
                                <h1 className="titleprod">Исполнения вентиляторов</h1>
                                <div className="productContainer" style={{ display: "flex", flexWrap: "wrap" , justifyContent: "start"}}>

                                   
                                        {catalog?.filter(ctg => ctg.acf.Kategorija === "Вентиляция").map((ctg) => (
                                            <div className=" wow fadeInLeft" key={ctg.id}>
                                                <div className="card">
                                                    <div className="header" style={{ height: "19em", background: `url(${ctg.acf.image_catalog}) center / cover no-repeat`, padding: "100px" }}>
                                                    </div>
                                                    <div className="footer">
                                                        <div className="title">
                                                        <h2 className="rendered">{ctg.title.rendered}</h2>
                                                        </div>
                                                        <button className="buyNow">
                                                            {ctg.acf.price}сом
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>))}
                                   
                                </div>
                            </Tab.Pane>
                        
                        <Tab.Pane eventKey="#link4">
                            <h1 className="titleprod">Дизайн</h1>
                            <div className="productContainer" style={{ display: "flex", flexWrap: "wrap" , justifyContent: "start"}}>

                                
                                    {console.log(catalog)}
                                    {catalog?.filter(ctg => ctg.acf.Kategorija === "Дизайн").map((ctg) => (
                                        <div className=" wow fadeInLeft" key={ctg.id}>
                                            <div className="card">
                                                <div className="header"   style={{ height: "19em", background: `url(${ctg.acf.image_catalog}) center / cover no-repeat`, padding: "100px" , styles,Card }}>
                                                </div>
                                                <div className="footer">
                                                    <div className="title">
                                                    <h2 className="rendered">{ctg.title.rendered}</h2>
                                                    </div>
                                                    <button className="buyNow">
                                                        {ctg.acf.price}сом
                                                    </button>
                                                </div>
                                            </div>
                                        </div>))}
                            </div>
                        </Tab.Pane></Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>










            {/* <div className="card">
            <div className="header" style={{height: "17em"}}>
                <img src="assets/img/about-1.jpg" alt="Product"/>
            </div>
            <div className="footer">
                <div className="title">
                    <h2>IPhone 13 Pro</h2>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ratione tempore consequuntur voluptatem obcaecati asperiores est iusto.</p>
                <button className="buyNow"></button>
            </div>
        </div>
        <div className="card">
            <div className="header" style={{height: "17em"}}>
                <img src="assets/img/about-1.jpg" alt="Product"/>
            </div>
            <div className="footer">
                <div className="title">
                    <h2>IPhone 13 Pro</h2>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ratione tempore consequuntur voluptatem obcaecati asperiores est iusto.</p>
                <button className="buyNow">Buy Now</button>
            </div>
        </div>
        <div className="card">
            <div className="header" style={{height: "17em"}}>
                <img src="assets/img/about-1.jpg" alt="Product"/>
            </div>
            <div className="footer">
                <div className="title">
                    <h2>Sports Shoe</h2>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ratione tempore consequuntur voluptatem obcaecati asperiores est iusto.</p>
                <button className="buyNow">Buy Now</button>
            </div>
        </div> */}
        </div>



    )
}
const styles = {
    card: {
      width: '100%',
      height: 'auto',
      padding: '1rem',
      boxSizing: 'border-box',
      backgroundColor: 'white',
      boxShadow: '0px 0px 10px #ccc',
      borderRadius: '5px',
      "@media (min-width: 600px)": {
        width: '50%',
      },
      "@media (min-width: 900px)": {
        width: '33.33%',
      }
    },
  };

export default Card;

