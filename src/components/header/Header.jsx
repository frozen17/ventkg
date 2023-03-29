import React, { useState, useEffect }  from "react";
  import logo from "../../logo.svg";
  import { Link } from "react-router-dom";
  import { ABOUT_ROUTE, CARD_ROUTE, HOME_ROUTE, OBJECTS_ROUTE, SERVICES_ROUTE } from "../../utils/Consts";
  import "./Header.css";
  import "../../App.css";
  import "../../bootstrap.min.css";
  import i18n from "../../i18n";
  import { useTranslation } from "react-i18next";
  import useLocalStorage from "../../hooks/use-localstorage";
  import MenuItem from '@mui/material/MenuItem';
  import PropTypes from 'prop-types';
  import AppBar from '@mui/material/AppBar';
  import Box from '@mui/material/Box';
  import CssBaseline from '@mui/material/CssBaseline';
  import Divider from '@mui/material/Divider';
  import Drawer from '@mui/material/Drawer';
  import IconButton from '@mui/material/IconButton';

  import MenuIcon from '@mui/icons-material/Menu';
  import Toolbar from '@mui/material/Toolbar';
  import Typography from '@mui/material/Typography';
  import TopBar from "../topbar/TopBar";
  import axios from 'axios';



  const Header = (props) => {
    const [menu, setMenu] = useState(null);
    const [ icons, setIcons] = useState(null)
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };

      
  const getData = async () => {
    try {
      await axios
        .get(`http://192.168.88.167/wp-json/wp/v2/menu`)
        .then(res => setMenu(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  const getIconData = async () => {
    try {
      await axios
        .get(`http://192.168.88.167/wp-json/wp/v2/social_media`)
        .then(res => setIcons(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    getIconData();
  }, []);

    const {t} = useTranslation()
    const pages = [{
      "name": t("main"),
      "url":HOME_ROUTE,
      "id":1
    },
    {
      "name": t("aboutus"),
      "url":ABOUT_ROUTE,
      "id":2

    },
    {
      "name": t("ourobject"),
      "url": OBJECTS_ROUTE,
      "id":3

    },
    {
      "name": t("ourservices"),
      "url": SERVICES_ROUTE,
      "id":4
    },
    {
      "name": t("ourcatalog"),
      "url": CARD_ROUTE,
      "id": 5
    }
  ];

    const [language, setLanguage] = useLocalStorage('language', 'ru')

    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
        <Link
            to={HOME_ROUTE}
            className="navbar-brand d-flex align-items-center justify-content-center"
          >
            <img className="img-fluid me-3" src={logo} alt=""  style={{width: "150px"}} />
          </Link>
        </Typography>
        <Divider />
        <Box >
            {menu?.map((item) => (
              <div key={item.id} style={{display: "flex", flexDirection: "column"}}>
                <Link  style={{color: "#111", margin: "8px 0"}} to={item.acf.menu_one_url} sx={{ color: '#fff' }}>
                {localStorage.getItem('language') == '"ru"' && item.acf.menu_one_ru}
              {localStorage.getItem('language') == '"en"' && item.acf.menu_one_en}
              {localStorage.getItem('language') == '"kgz"' && item.acf.menu_one_kgz}
              </Link>
              <Link  style={{color: "#111", margin: "8px 0"}} to={item.acf.menu_two_url} sx={{ color: '#fff' }}>
              {localStorage.getItem('language') == '"ru"' && item.acf.menu_two_ru}
              {localStorage.getItem('language') == '"en"' && item.acf.menu_two_en}
              {localStorage.getItem('language') == '"kgz"' && item.acf.menu_two_kgz}
              </Link>
              <Link  style={{color: "#111", margin: "8px 0"}} to={item.acf.menu_three_url} sx={{ color: '#fff' }}>
              {localStorage.getItem('language') == '"ru"' && item.acf.menu_three_ru}
              {localStorage.getItem('language') == '"en"' && item.acf.menu_three_en}
              {localStorage.getItem('language') == '"kgz"' && item.acf.menu_three_kgz}
              </Link>
              <Link  style={{color: "#111", margin: "8px 0"}} to={item.acf.menu_four_url} sx={{ color: '#fff' }}>
              {localStorage.getItem('language') == '"ru"' && item.acf.menu_four_ru}
              {localStorage.getItem('language') == '"en"' && item.acf.menu_four_en}
              {localStorage.getItem('language') == '"kgz"' && item.acf.menu_four_kgz}
              </Link>
              <Link  style={{color: "#111", margin: "8px 0"}} to={item.acf.menu_five_url} sx={{ color: '#fff' }}>
              {localStorage.getItem('language') == '"ru"' && item.acf.menu_five_ru}
              {localStorage.getItem('language') == '"en"' && item.acf.menu_five_en}
              {localStorage.getItem('language') == '"kgz"' && item.acf.menu_five_kgz}
              </Link>
              </div>


              
            ))}
        </Box>
        <div className="chooseLng">

<MenuItem sx={{border: "2px solid #fff", borderRadius: "5px", margin: "3px", color: "#111"}} className="lng" onClick={() => handleChangeLanguage('en', setLanguage('en'))} value={'en'}><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png" className="imgLng" alt="" /> EN</MenuItem>
<MenuItem sx={{border: "2px solid #fff", borderRadius: "5px", margin: "3px", color: "#111"}} className="lng" onClick={() => handleChangeLanguage('ru', setLanguage('ru'))} value={'ru'}><img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png"  className="imgLng" alt="" /> RU</MenuItem>
<MenuItem sx={{border: "2px solid #fff", borderRadius: "5px", margin: "3px", color: "#111"}} className="lng" onClick={() => handleChangeLanguage('kgz', setLanguage('kgz'))} value={'kgz'}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1200px-Flag_of_Kyrgyzstan.svg.png" className="imgLng" alt="" /> KGZ</MenuItem>
</div>
        
      </Box>
    );
    const container = window !== undefined ? () => window().document.body : undefined;

    const handleChangeLanguage = (language, e) => {
    i18n.changeLanguage(language)
    }




    return (
      <Box  sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar className="AppBar-header navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5" component="nav" >
        <TopBar/>
        
        <Toolbar sx={{justifyContent:"space-between"}}>
          <Link
            to={HOME_ROUTE}
            className="navbar-brand d-flex align-items-center"
          >
            <img className="img-fluid me-3" src={logo} alt=""  style={{width: "150px"}} />
          </Link>
          <Box sx={{ display: {xs:"none", sm: "none", md:'block' } }}>
            {menu?.map((item) => (
              <div key={item.id}>
              <Link  style={{color: "#fff", margin: "0 15px"}} to={item.acf.menu_one_url} sx={{ color: '#fff' }}>
              {localStorage.getItem('language') == '"ru"' && item.acf.menu_one_ru}
              {localStorage.getItem('language') == '"en"' && item.acf.menu_one_en}
              {localStorage.getItem('language') == '"kgz"' && item.acf.menu_one_kgz}
              </Link>
              <Link  style={{color: "#fff", margin: "0 15px"}} to={item.acf.menu_two_url} sx={{ color: '#fff' }}>
              {localStorage.getItem('language') == '"ru"' && item.acf.menu_two_ru}
              {localStorage.getItem('language') == '"en"' && item.acf.menu_two_en}
              {localStorage.getItem('language') == '"kgz"' && item.acf.menu_two_kgz}
              </Link>
              <Link  style={{color: "#fff", margin: "0 15px"}} to={item.acf.menu_three_url} sx={{ color: '#fff' }}>
              {localStorage.getItem('language') == '"ru"' && item.acf.menu_three_ru}
              {localStorage.getItem('language') == '"en"' && item.acf.menu_three_en}
              {localStorage.getItem('language') == '"kgz"' && item.acf.menu_three_kgz}
              </Link>
              <Link  style={{color: "#fff", margin: "0 15px"}} to={item.acf.menu_four_url} sx={{ color: '#fff' }}>
              {localStorage.getItem('language') == '"ru"' && item.acf.menu_four_ru}
              {localStorage.getItem('language') == '"en"' && item.acf.menu_four_en}
              {localStorage.getItem('language') == '"kgz"' && item.acf.menu_four_kgz}
              </Link>
              <Link  style={{color: "#fff", margin: "0 15px"}} to={item.acf.menu_five_url} sx={{ color: '#fff' }}>
              {localStorage.getItem('language') == '"ru"' && item.acf.menu_five_ru}
              {localStorage.getItem('language') == '"en"' && item.acf.menu_five_en}
              {localStorage.getItem('language') == '"kgz"' && item.acf.menu_five_kgz}
              </Link>
              </div>


              
            ))}
          </Box>
          <div >
            {icons?.map((icon) => (
              <ul key={icon.id} className="h-100 d-lg-inline-flex align-items-center d-none">
                <li>
                  <a
                    className="btn btn-square rounded-circle bg-light text-primary me-2"
                    href={icon.acf.icon_url}
                  >
                    <i className={icon.acf.icon} aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            ))}

            </div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, ml:"auto", display: { md: 'none' }, float:"inline-end"}}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor="top"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      
    </Box>

    );
        };

  Header.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
  export default Header;