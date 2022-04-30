import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import _ from "lodash"
import { userInfo } from 'os'
import { setDefaultResultOrder } from 'dns'


function App(){
  const [result, setResult] = useState();
  const [number1,setNumber1]=useState();
  const [number2,setNumber2]=useState([]);
  const [number3,setNumber3]=useState('');
  const [number4,setNumber4]=useState('');
  const [number5,setNumber5]=useState('');
  const [number6,setNumber6]=useState('');
  const [number7,setNumber7]=useState('');
  const [number8,setNumber8]=useState('');
  const [number9,setNumber9]=useState('');
  const [number10,setNumber10]=useState('');
  const [number11,setNumber11]=useState('');
  const [number12,setNumber12]=useState('');
  const [number13,setNumber13]=useState('');
  const [number14,setNumber14]=useState('');
  const [number15,setNumber15]=useState('');
  const [number16,setNumber16]=useState('');
  const [number17,setNumber17]=useState('');
  const [number18,setNumber18]=useState('');
  const [number19,setNumber19]=useState('');
  const [number20,setNumber20]=useState('');
  const [number21,setNumber21]=useState('');
  const [number22,setNumber22]=useState('');
  const [number23,setNumber23]=useState('');
  //
  const [number24,setNumber24]=useState('');
  const [number25,setNumber25]=useState('');
  const [number26,setNumber26]=useState('');
  const [number27,setNumber27]=useState('');
  const [number28,setNumber28]=useState('');
  const [number29,setNumber29]=useState('');
  const [number30,setNumber30]=useState('');
  const [number31,setNumber31]=useState('');
  const [number32,setNumber32]=useState('');
  const [number33,setNumber33]=useState('');
  const [number34,setNumber34]=useState('');
  const [number35,setNumber35]=useState('');
  const [number36,setNumber36]=useState('');
  const [number37,setNumber37]=useState('');
  const [number38,setNumber38]=useState('');
  const [number39,setNumber39]=useState('');
  const [number40,setNumber40]=useState('');
  const [number41,setNumber41]=useState('');
  const [number42,setNumber42]=useState('');
  const [number43,setNumber43]=useState('');
  const [number44,setNumber44]=useState('');
  const [number45,setNumber45]=useState('');
  const [number46,setNumber46]=useState('');
  //
  const [number47,setNumber47]=useState('');
  const [number48,setNumber48]=useState('');
  const [number49,setNumber49]=useState('');
  const [number50,setNumber50]=useState('');
  const [number51,setNumber51]=useState('');
  const [number52,setNumber52]=useState('');
  const [number53,setNumber53]=useState('');
  const [number54,setNumber54]=useState('');
  const [number55,setNumber55]=useState('');
  const [number56,setNumber56]=useState('');
  const [number57,setNumber57]=useState('');
  const [number58,setNumber58]=useState('');
  const [number59,setNumber59]=useState('');
  const [number60,setNumber60]=useState('');
  const [number61,setNumber61]=useState('');
  const [number62,setNumber62]=useState('');
  const [number63,setNumber63]=useState('');
  const [number64,setNumber64]=useState('');
  const [number65,setNumber65]=useState('');
  const [number66,setNumber66]=useState('');
  const [number67,setNumber67]=useState('');
  const [number68,setNumber68]=useState('');
  const [number69,setNumber69]=useState('');
  const handleChange1 = (e) => {
    setNumber1(e.target.value);
  }
  const handleChange2 = (e) => {
    setNumber2(e.target.value);
  }
  const handleChange3 = (e) => {
    setNumber3(e.target.value);
  }
  const handleChange4 = (e) => {
    setNumber4(e.target.value);
  }
  const handleChange5 = (e) => {
    setNumber5(e.target.value);
  }
  const handleChange6 = (e) => {
    setNumber6(e.target.value);
  }
  const handleChange7 = (e) => {
    setNumber7(e.target.value);
  }
  const handleChange8 = (e) => {
    setNumber8(e.target.value);
  }
  const handleChange9 = (e) => {
    setNumber9(e.target.value);
  }
  const handleChange10 = (e) => {
    setNumber10(e.target.value);
  }
  const handleChange11 = (e) => {
    setNumber11(e.target.value);
  }
  const handleChange12 = (e) => {
    setNumber12(e.target.value);
  }
  const handleChange13 = (e) => {
    setNumber13(e.target.value);
  }
  const handleChange14 = (e) => {
    setNumber14(e.target.value);
  }
  const handleChange15 = (e) => {
    setNumber15(e.target.value);
  }
  const handleChange16 = (e) => {
    setNumber16(e.target.value);
  }
  const handleChange17 = (e) => {
    setNumber17(e.target.value);
  }
  const handleChange18 = (e) => {
    setNumber18(e.target.value);
  }
  const handleChange19 = (e) => {
    setNumber19(e.target.value);
  }
  const handleChange20 = (e) => {
    setNumber20(e.target.value);
  }
  const handleChange21 = (e) => {
    setNumber21(e.target.value);
  }
  const handleChange22 = (e) => {
    setNumber22(e.target.value);
  }
  const handleChange23 = (e) => {
    setNumber23(e.target.value);
  }
  const handleChange24 = (e) => {
    setNumber24(e.target.value);
  }
  const handleChange25 = (e) => {
    setNumber25(e.target.value);
  }
  const handleChange26 = (e) => {
    setNumber26(e.target.value);
  }
  const handleChange27 = (e) => {
    setNumber27(e.target.value);
  }
  const handleChange28 = (e) => {
    setNumber28(e.target.value);
  }
  const handleChange29 = (e) => {
    setNumber29(e.target.value);
  }
  const handleChange30 = (e) => {
    setNumber30(e.target.value);
  }
  const handleChange31 = (e) => {
    setNumber31(e.target.value);
  }
  const handleChange32 = (e) => {
    setNumber32(e.target.value);
  }
  const handleChange33 = (e) => {
    setNumber33(e.target.value);
  }
  const handleChange34 = (e) => {
    setNumber34(e.target.value);
  }
  const handleChange35 = (e) => {
    setNumber35(e.target.value);
  }
  const handleChange36 = (e) => {
    setNumber36(e.target.value);
  }
  const handleChange37 = (e) => {
    setNumber37(e.target.value);
  }
  const handleChange38 = (e) => {
    setNumber38(e.target.value);
  }
  const handleChange39 = (e) => {
    setNumber39(e.target.value);
  }
  const handleChange40 = (e) => {
    setNumber40(e.target.value);
  }
  const handleChange41 = (e) => {
    setNumber41(e.target.value);
  }
  const handleChange42 = (e) => {
    setNumber42(e.target.value);
  }
  const handleChange43 = (e) => {
    setNumber43(e.target.value);
  }
  const handleChange44 = (e) => {
    setNumber44(e.target.value);
  }
  const handleChange45 = (e) => {
    setNumber45(e.target.value);
  }
  const handleChange46 = (e) => {
    setNumber46(e.target.value);
  }
  //
  const handleChange47 = (e) => {
    setNumber47(e.target.value);
  }
  const handleChange48 = (e) => {
    setNumber48(e.target.value);
  }
  const handleChange49 = (e) => {
    setNumber49(e.target.value);
  }
  const handleChange50 = (e) => {
    setNumber50(e.target.value);
  }
  const handleChange51 = (e) => {
    setNumber51(e.target.value);
  }
  const handleChange52 = (e) => {
    setNumber52(e.target.value);
  }
  const handleChange53 = (e) => {
    setNumber53(e.target.value);
  }
  const handleChange54 = (e) => {
    setNumber54(e.target.value);
  }
  const handleChange55 = (e) => {
    setNumber55(e.target.value);
  }
  const handleChange56 = (e) => {
    setNumber56(e.target.value);
  }
  const handleChange57 = (e) => {
    setNumber57(e.target.value);
  }
  const handleChange58 = (e) => {
    setNumber58(e.target.value);
  }
  const handleChange59 = (e) => {
    setNumber59(e.target.value);
  }
  const handleChange60 = (e) => {
    setNumber60(e.target.value);
  }
  const handleChange61 = (e) => {
    setNumber61(e.target.value);
  }
  const handleChange62 = (e) => {
    setNumber62(e.target.value);
  }
  const handleChange63 = (e) => {
    setNumber63(e.target.value);
  }
  const handleChange64 = (e) => {
    setNumber64(e.target.value);
  }
  const handleChange65 = (e) => {
    setNumber65(e.target.value);
  }
  const handleChange66 = (e) => {
    setNumber66(e.target.value);
  }
  const handleChange67 = (e) => {
    setNumber67(e.target.value);
  }
  const handleChange68 = (e) => {
    setNumber68(e.target.value);
  }
  const handleChange69 = (e) => {
    setNumber69(e.target.value);
  }
  const handleNumber = () => {
    //const data = [number1,number2,number3,number4,number5,number6,number7,number8,number9,number10,number11,number12,number13,number14,number15,number16,number17,number18,number19,number20,number21,number22,number23];
    //const data2 = [number24,number25,number26,number27,number28,number29,number30,number31,number32,number33,number34,number35,number36,number37,number38,number39,number40,number41,number42,number43,number44,number45,number46];
    //const data3 = [number47,number48,number49,number50,number51,number52,number53,number54,number55,number56,number57,number58,number59,number60,number61,number62,number63,number64,number65,number66,number67,number68,number69];
    //const data = [number1];
    const data = [];
    data.push(number1.split(','));
    const data2 = [];
    data2.push(number2.split(','));
    const data3 = [];
    data3.push(number3.split(','));
    const result = _.values(_.groupBy(data[0])).map(d => ({number: d[0], count: d.length}));
    const result2 = _.values(_.groupBy(data2[0])).map(d => ({number: d[0], count: d.length}));
    const result3 = _.values(_.groupBy(data3[0])).map(d => ({number: d[0], count: d.length}));
    const max1 = _.maxBy(result, function(o) { return o.count; });
    const max2 = _.maxBy(result2, function(o) { return o.count; });
    const max3 = _.maxBy(result3, function(o) { return o.count; });
    setResult(max1.number+max2.number+max3.number);
    const result_ct1 = result.map(a => (  
      a.count == 1 ? a.number: null
    ))
    const result_ct2 = result2.map(a => (  
      a.count == 3 ? a.number: null
    ))
    const result_ct3 = result3.map(a => (  
      a.count == 3 ? a.number: null
    ))
    //console.log('result_ct1',result_ct1);
    //console.log('result_ct2',result_ct2);
    //console.log('result_ct3',result_ct3);
    //var myArray = [701,704,771,774,791,794,702,705,772,775,792,795,700,703,706,709,770,773,776,779,790,793,796,799,751,754,752,755,750,753,756,759,721,724,741,744,781,784,722,742,782,725,745,785,720,723,726,729,740,743,746,749,780,783,786,789];
    //const sort = _.sortBy(myArray);
    //console.log(sort);
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div style={{display: "block"}}>
          <div className='col-1'>
              <span>DÃY SỐ 1</span>
              <input type="text" value={number1} onChange={handleChange1} />
          </div>
          <div className='col-1'>
              <span>DÃY SỐ 2</span>
              <input type="text" value={number2} onChange={handleChange2} />
          </div>
          <div className='col-1'>
              <span>DÃY SỐ 3</span>
              <input type="text" value={number3} onChange={handleChange3} />
          </div>
        </div>
        <button type="button" onClick={handleNumber}>Check</button>
        <div style={{color:"#ff0000", fontSize:"20px"}}>
          {result}
        </div>
         
      </main>
    </div>
  )
}

export default App
