import { useState } from 'react';
import './Setting.css';
import folderIcon from './folder.png';
import trashIcon from './trash.png';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaVimeo, FaMicrophone, FaTimes, FaTable } from 'react-icons/fa'
import { AiFillSetting } from 'react-icons/ai'

function RowSettingTable(props, children) { 
  return (
    <div style={{padding: 0, margin: 0, display: 'flex', flexDirection: 'row', width: '100%', backgroundColor: `${props.bgColor}`}}>
      {
        props.row.map((value, index) => <div key={index} className={`td-${index}`}>{value}</div>)
      }
      {
        props.row[3] ? 
          null : 
          (<div className='td-3' style={{justifyContent: 'center',}}>
            <img src={trashIcon} style={{height:'25px', width:'25px', cursor: 'pointer', }}/>
          </div>)
      }
    </div>
  ); 
}

function ShadowButton(props) { 
  return (
    <button className='shadow-button-container'> 
      <div className='shadow-button'/>
      {props.name}
    </button>
  );
}

function Setting() {
  const navigate = useNavigate(); 

  const [listVertec, setListVertec] = useState([
    ['1111-11-00', 'Project 1', 'Description 1'],
    ['1111-11-00', 'Project 1', 'Description 1'],
    ['1111-11-00', 'Project 1', 'Description 1'],
    ['1111-11-00', 'Project 1', 'Description 1'],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  const [fileName, setFileName] = useState('Choose your file'); 

  return (
      <div className='container'>
        <button type="button" className="close-btn" style={{cursor: 'pointer'}}onClick={() => navigate(-1)}><FaTimes/></button>
        <p style={{fontFamily: 'consolas', fontSize: '1.5rem', fontWeight: 'bold', margin: 0, marginLeft: '3%', }}>
          Settings
        </p>
        <div className='import-vertec'>
          <p style={{margin: '0 30px 0 50px', fontSize: '1rem', fontFamily: 'Consolas'}}>
            Import vertec
          </p>
          <div className='import-vertec-filename'>
            { fileName }
          </div>
          <div className="file-upload">
            <label htmlFor="file-input">
              <img src={folderIcon} style={{height: '40px', width: '40px', cursor: 'pointer', }}/>
            </label>
            <input id="file-input" type="file" />
          </div>
        </div>
        <div className='button-container'> 
          <ShadowButton name="Import"/>
          <ShadowButton name="Cancel"/>
        </div>
        <div style={{border: '3px solid black', margin: '0', padding: '0'}}>
          <RowSettingTable row={['Vertec', 'Project', 'Description', 'Action']} bgColor='rgb(204, 204, 204)'/>
          {
            listVertec
              .map((vertec, index) => <RowSettingTable key={index} row={vertec} bgColor={index % 2 ? 'rgb(238, 238, 238)' : 'rgb(255, 255, 255)'}/>)
          }
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{width: '300px', border: '3px solid black', margin: '10px'}}>

          </div>
          <ShadowButton name="Add New Imputation"/>
        </div>
        <ShadowButton name="Cancel"/>
        <ShadowButton name="Save"/>
      </div>
  );
}

export default Setting;
