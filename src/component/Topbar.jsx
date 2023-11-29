import { Col, Row } from 'antd';

import React from 'react'
import Button from './Button';

const Topbar = () => {
  return (
    <>

     <Row justify="center" style={{background:"#0f778e",color:"white", padding:"15px"}}>
      <Col span={15} className=''>
     
    <div className='topbarleft'>
        <span>info@ticer.pk</span>
        <span>03260833833</span>
    </div>
      </Col>
      <Col span={5} className=''>
        <span>Follow Us :</span>
    

      </Col>
      
     
    </Row>
    </>
  )
}

export default Topbar