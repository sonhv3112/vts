import './Home.css';
import { useState } from 'react'
import { FaPlus, FaVimeo, FaMicrophone, FaTimes, FaTable } from 'react-icons/fa'
import { AiFillSetting } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";

function Row() { 
  return (
    <div className='container-row'>
      <input type="datetime" value={"1000-10-10"}></input>
      <input type="text" value={"Hrs"}></input>
      <input type="datetime"></input>
      <input type="text" value={"Design Mock Up"}></input>
      <button className='mic-btn trans'><FaMicrophone/></button>
    </div>
  )
}

function ShadowButton(props) { 
  return (
    <button className='shadow-button-container'> 
      <div className='shadow-button'/>
      {props.name}
    </button>
  );
}

function Home() {
  const navigate = useNavigate();

  const [listRow, setListRow] = useState([]);

  return (
    <div className='container'>
      <header className="App-header">
        <p style={{fontFamily: 'consolas', fontSize: '2rem', fontWeight: 'bold', margin: 0, marginLeft: '3%', marginRight: 'auto'}}>
          Vertec
        </p>
        <button type="button" className="close-btn"><FaTimes/></button>
        <div className='header-container'>
          <FaVimeo/>
          <FaTable/>
          <AiFillSetting onClick={() => navigate('/setting')}/>
        </div>
      </header>
      <div className='table-container'>
        <Row></Row>
        <Row></Row>
        <Row></Row>
      </div>  
      <div className='footer'>
        <button className='add-btn trans'><FaPlus /></button>
        <div className='btn-group'>
          <ShadowButton name="Cancel"/>
          <ShadowButton name="Submit"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
