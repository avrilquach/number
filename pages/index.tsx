import Head from 'next/head'
import React, {ReactElement, ReactNode, useEffect, useMemo, useState} from "react"
import styles from '../styles/Home.module.css'
import _ from "lodash";
import {number} from "prop-types";
function App(){
  const [number1, setNumber1] = useState([9,45,99,77,43,75,56,39,24,48,23,38,97,69,79,13,64,14,47,91,48,4,59,77,66,1,59])
  const [number2, setNumber2] = useState([9,45,99,77,43,75,56,39,24,48,23,38,97,69,79,13,64,14,47,91,48,4,59,77,66,1,59])
    const [arr,setArr] = useState<any>([])
  useEffect(() => {
    if(number1 && number2){
      let result = []
      for(let i = 0; i<number1.length  ;i++) {
          for(let y = 0; y<number2.length;y++) {
              let data:any = {}
              data['number'] = number1[i]+number2[y]
              data['qty'] = 1
              result.push(data)
          }
      }
      setArr(result)
    }
  }, [number1,number2])
    const handleSubmit = () =>{
        const result:any = [];
        arr.reduce(function (res:any, value:any) {
            if (!res[value.number]) {
                res[value.number] = { number: value.number, qty: 0 };
                result.push(res[value.number]);
            }
            res[value.number].qty += value.qty;
            return res;
        }, {});
        console.log(result);
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
              <button className="btn w-100 btn-sm btn-primary fs-7 mt-3" onClick={handleSubmit}>Submit</button>
          </div>
        </main>
      </div>
  )
}

export default App
