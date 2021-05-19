import React, { useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Fade, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import homeIcon from './../img/home.png'
import {Link} from 'react-router-dom'
export default function BayangQiblat () {

const [bayangbayangQIblat, setBayangbayangQiblat]=useState(0)
const [bujurTempatJah, setBujurTempatJah]=useState(0)
const [bujurTempatQoh, setBujurTempatQoh]=useState(0)
const [lintangJah, setLintangJah]=useState(0)
const [lintangQoh, setLintangQoh]=useState(0)
const [deklinasiJah, setDeklinasiJah]=useState(0)
const [deklinasiqoh, setDeklinasiqoh]=useState(0)
const [deklinasini, setDeklinasini]=useState(0)
const [equationOfTimeJah, setEquationOfTimeJah]=useState(0)
const [equationOfTimeQoh, setEquationOfTimeQoh]=useState(0)
const [equationOfTimeni, setEquationOfTimeni]=useState(0)
const [fadeIn, setFadeIn] = useState(false);
const [modal, setModal]= useState(true);
const [dDeklinasi, setDdeklanasi]=useState("darjah");
const [dEquation, setDequation]=useState("darjah");
const [deklinasidesimal, setDeklinasidesimal]=useState(0)
const [equationdesimal, setEquationdesimal]=useState(0)

const toggle = () => setFadeIn(true);
const openModal = () => setModal(!modal);

function check (){
  // if(!bujurTempatJah || !bujurTempatQoh || !lintangJah || !lintangQoh || !deklinasiJah || !deklinasiqoh || !deklinasini || !equationOfTimeJah || !equationOfTimeQoh || !equationOfTimeni){
    
    openModal()
  // }else if(!deklinasiJah || !deklinasiqoh || !deklinasini || !equationOfTimeJah || !equationOfTimeQoh || !equationOfTimeni){
    // console.log('masuk')
    // openModal()
    console.log(modal)
  // }
}

function modals(){
  <Modal isOpen={modal} toggle={modal} >
    <ModalHeader toggle={modal}>Modal title</ModalHeader>
    <ModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={openModal}>Ok</Button>
    </ModalFooter>
  </Modal>
}

function ConvertDMSToDD(degrees, minutes, seconds, direction) {
  var dd = degrees + minutes/60 + seconds/(60*60);
  
  if (direction == "S" || direction == "W") {
    dd = dd * -1;
  } // Don't do anything for N or E
  return dd;
}

// var deg=bayangQiblat
var lat=10
function ConvertDEGToDMS(deg) {
  var absolute = Math.abs(deg);
  
  var degrees = Math.floor(absolute);
  var minutesNotTruncated = (absolute - degrees) * 60;
  var minutes = Math.floor(minutesNotTruncated);
  var seconds = ((minutesNotTruncated - minutes) * 60).toFixed(2);
  
      
      // return degrees + "°" + minutes + "'" + seconds + "\"";
      return degrees + "°" + minutes + "\"";
}

function hitungBayangQiblat() {
  var bt=ConvertDMSToDD(parseInt(bujurTempatJah),parseInt(bujurTempatQoh),0,0)
  var lintang=ConvertDMSToDD(parseInt(lintangJah),parseInt(lintangQoh),0,0)
  var DDdeklanasi=ConvertDMSToDD(parseInt(deklinasiJah),parseInt(deklinasiqoh),parseInt(deklinasini),0)
  var deklinasi=dDeklinasi==='darjah'? DDdeklanasi : deklinasidesimal
  var DDequation = ConvertDMSToDD(parseInt(equationOfTimeJah),parseInt(equationOfTimeQoh),parseInt(equationOfTimeni),0)
  var equationOfTime= dEquation === 'darjah' ? DDequation : equationdesimal
  var nontri=0.017453293
  var tri=57.29577951
  
  var fadlu=bt - ConvertDMSToDD(39,50,0,0)
  var QiblatBarat=Math.atan(Math.cos(lintang*nontri)*Math.tan(ConvertDMSToDD(21,25,0,0)*nontri)/Math.sin(fadlu*nontri)-Math.sin(lintang*nontri)/Math.tan(fadlu*nontri))*tri
  var QiblatUtara=90-QiblatBarat
  var S=Math.atan(1/Math.tan(QiblatUtara*nontri)/Math.sin(lintang*nontri))*tri
  var C=Math.acos((Math.cos(S*nontri)*Math.tan(deklinasi*nontri))/Math.tan(lintang*nontri))*tri
  var K=(105-bt)/15
  var bayangQiblat=12-equationOfTime+K+(S+C)/15
  
  // console.log(lintangJah)
  // console.log("p",lintang)
  // console.log("d",deklinasi)
  // console.log("e",equationOfTime)
  // console.log(ConvertDMSToDD(21,25,0,0))
  // // console.log("qb",Math.cos(lintang)*Math.tan(ConvertDMSToDD(21,25,0,0))/Math.sin(fadlu)-Math.sin(lintang)/Math.tan(fadlu))
  
  // console.log("fadlu", fadlu)
  // console.log("Qb", QiblatBarat)
  // console.log("QU", QiblatUtara)
  // console.log("S", S)
  // console.log("C", C)
  // console.log("K",K)
  // console.log("Bayang Qiblat", bayangQiblat)
  toggle()
  return setBayangbayangQiblat(ConvertDEGToDMS(bayangQiblat))
}



// {modals()}
console.log(dDeklinasi)
  return(
      <div> 
      <div style={{textAlign:'center', fontSize:'24pt', marginTop:"19px"}}>
        Program Bayang Bayang Qiblat
      </div>
      <div className="container isian">
        <Form>
            <div className="btlt">
              <FormGroup style={{marginRight:"60px"}}>
                <Label for="bujur">Bujur Tempat</Label>
                <div className="d-flex">
                  <Input type="text" onChange={(e)=>setBujurTempatJah(e.target.value)} name="dbujur" className="tw-80 mr-10" id="iddbujur" placeholder="Jah" />
                  <Input type="text" onChange={(e)=>setBujurTempatQoh(e.target.value)} name="mbujur" className="tw-80" id="idmbujur" placeholder="Qoh" />
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="lintang" style={{textAlign:"right", width:"100%"}} >Lintang Tempat</Label>
                <div className="d-flex">
                  <Input type="text" onChange={(e)=>setLintangJah(e.target.value)} name="dlintang" className="tw-80 mr-10" id="iddlintang" placeholder="Jah" />
                  <Input type="text" onChange={(e)=>setLintangQoh(e.target.value)} name="mlintang" className="tw-80" id="idmlintang" placeholder="Qoh" />
                </div>
              </FormGroup>
            </div>
            <div className="btlt">
              <FormGroup>
                <Label for="deklinasi">Deklinasi</Label>
                <div style={{marginBottom:"10px"}}></div>
                <Input type="radio" name="radio1" onClick={()=>setDdeklanasi("darjah")}/> Darjah
                <Input type="radio" name="radio1" onClick={()=>setDdeklanasi("desimal")} style={{marginLeft:"10px"}}/> Desimal
                  <Fade in={dDeklinasi === "darjah" ? true : false}>
                    <div className="d-flex">
                      <Input type="text" onChange={(e)=>setDeklinasiJah(e.target.value)} name="dDeklinasi" className="tw-80 mr-10" id="iddDeklinasi" placeholder="Jah" />
                      <Input type="text" onChange={(e)=>setDeklinasiqoh(e.target.value)} name="mDeklinasi" className="tw-80 mr-10" id="idmDeklinasi" placeholder="Qoh" />
                      <Input type="text" onChange={(e)=>setDeklinasini(e.target.value)} name="dDeklinasi" className="tw-80" id="iddDeklinasi" placeholder="Ni" />
                    </div>
                </Fade>
                <Fade in={dDeklinasi === "desimal" ? true : false}>
                    <div className="d-flex">
                      <Input type="text" onChange={(e)=>setDeklinasidesimal(e.target.value)} name="dDeklinasi" className="mr-10" id="iddDeklinasi" placeholder="0" />
                    </div>
                </Fade>
              </FormGroup>
              <FormGroup>
                <Label for="equation" style={{textAlign:"right", width:"100%"}}>Equation Of time</Label>
                <div ></div>
                <div>
                  <Input type="radio" name="radio1" onClick={()=>setDequation("darjah")}/> Darjah
                  <Input type="radio" name="radio1" onClick={()=>setDequation("desimal")} style={{marginLeft:"10px"}}/> Desimal
                </div>
                <Fade in={dEquation === "darjah" ? true : false} >
                <div className="d-flex" style={{marginTop:"10px"}}>
                  <Input type="text" onChange={(e)=>setEquationOfTimeJah(e.target.value)} width="20" name="dequation" className="tw-80 mr-10" id="iddequation" placeholder="Jah" />
                  <Input type="text" onChange={(e)=>setEquationOfTimeQoh(e.target.value)} name="mequation" className="tw-80 mr-10" id="idmequation" placeholder="Qoh" />
                  <Input type="text" onChange={(e)=>setEquationOfTimeni(e.target.value)} name="dequation" className="tw-80" id="iddequation" placeholder="Ni" />
                </div>
                </Fade>
                <Fade in={dEquation === "desimal" ? true : false}>
                    <div className="d-flex">
                      <Input type="text" onChange={(e)=>setEquationdesimal(e.target.value)} name="dDeklinasi" className="mr-10" id="iddDeklinasi" placeholder="0" />
                    </div>
                </Fade>
              </FormGroup>
            </div>
          <div className=" tombol"> 
            <Button onClick={hitungBayangQiblat} className="w-100 btn-success">Hitung</Button>
          </div>
        </Form>
      </div>
      <Fade in={fadeIn} >
        <div className="container hasil">Jam {bayangbayangQIblat} WIB.</div>
      </Fade>
      <div className="gohome">
        <Link to="/">
          <img src={homeIcon}/>
       </Link>   
      </div>
      <div className="codeby">
        code by: hisbu | Kampung sawah, 20 Mei 21 
      </div>
    </div>
  )
}