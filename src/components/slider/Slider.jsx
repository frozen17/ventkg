import React, { useState, useEffect } from 'react';
import './Slider.scss';
import axios from 'axios';

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";


const Slider = () => {

	const [partners, setPartners] = useState(null)
	const [open, setOpen] = React.useState(false);
	const [selectedLogo, setSelectedLogo] = useState([])
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));


	const getData = async () => {
		try {
		  await axios.get(`http://192.168.88.167/wp-json/wp/v2/partners`).then(res => setPartners(res.data))
		}
		catch (error) {
		  console.log(error)
		}
	
	  }
	
	  useEffect(() => {
		getData();
	  }, [])

	  const handleClickOpen = (id, rendered, logo, ru_descr, en_descr, kgz_descr) => {
		setOpen(true);
		setSelectedLogo([id, rendered, logo, ru_descr, en_descr, kgz_descr])
	  };
	
	  const handleClose = () => {
		setOpen(false);
	  };



    return (
		<div>
<div className="slider" id='slider'>
<Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                        component={'div'}
                      >
                        <DialogTitle id="responsive-dialog-title">
                        {selectedLogo[1]}
                        </DialogTitle>
                        <DialogContent component={'div'}>
                          <DialogContentText component={'div'}>
                            <div style={{
                              display: 'flex', justifyContent: 'center', width: "55%",  height: "15vh", margin: "15px auto"
                            }}>
                              <img  src={selectedLogo[2]} alt="" />
                            </div>
                          
                          <DialogContentText component={'span'} className="selected-descr">
                            {localStorage.getItem('language') == '"ru"' && selectedLogo[3]}
                            {localStorage.getItem('language') == '"en"' && selectedLogo[4]}
                            {localStorage.getItem('language') == '"kgz"' && selectedLogo[5]}
                          </DialogContentText>
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions component={'div'}>
                          <Button onClick={handleClose} autoFocus>
                            Назад
                          </Button>
                        </DialogActions>
                      </Dialog>
				{partners?.map((partner) => (
					<div key={partner.id} className="slide-track">

						<div className="slide">
							<img onClick={() => handleClickOpen(partner.id, partner.title.rendered, partner.acf.logo, partner.acf.ru_descr, partner.acf.en_descr, partner.acf.kgz_descr)} src={partner.acf.logo} className='partners-vent' alt="" />
						</div>

						


					</div>
				))}

	</div>
	</div>

    );
};

export default Slider;