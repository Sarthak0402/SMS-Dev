import React from "react";
import './Admin_reg.css';
import img from '../video-player.png';


function Admin_reg() {
    return (
        <div className="container-main">
            <div className='LoginForm'>
                <h1 className='login'> Institute Registeration</h1>
                <div className='inputs'>
                    <div>
                        {/* <h4>Username/ID</h4> */}
                        <label for='name'>Name of the student</label>
                        <input type='text' placeholder='Name' className='User' id="name"></input>
                    </div>
                    <div className='user'>
                        <label for='city'>City</label>
                        <input list="cities" placeholder='Select City' className='User' id="city" />
                        <datalist id="cities">
                            <option value="Pune" />
                            <option value="Mumbai" />
                            <option value="Delhi" />
                            <option value="Bangalore" />
                            <option value="Noida" />
                        </datalist>
                    </div>
                    <div className='user'>
                        <label for='school'>School No.</label>
                        <input type='text' placeholder='+91 XXXXXXXXXX' className='User' id="school">
                        </input>
                    </div>
                    <div className='user'>
                        <label for='logo'>Logo</label>
                        <input type='text' placeholder='Upload School Logo' className='User' id="logo">
                        </input>
                    </div>
                    <div className='user'>
                        <label for='board'>Board</label>
                        <input list="boards" placeholder='Select Board' className='User' id="board" />
                        <datalist id="boards">
                            <option value="SSC" />
                            <option value="CBSE" />
                            <option value="ICSE" />
                            <option value="IB" />
                            <option value="IGCSE" />
                        </datalist>
                    </div>

                    <button className='btn-login'>Next</button>
                </div>

            </div>
            <div className="side">
            <div className="video">
                <div className="header">Video Guided Setup Process</div>
                <div className="video-box">
                    <img src={img}></img>
                </div>

            </div>
            <div className="foot">
                <h3>Footer Links go here</h3>
                <div>
                    FEATURES
                </div>
                <div>
                    ABOUT US
                </div>
            </div>
            </div>
        </div>
    )
}

export default Admin_reg;