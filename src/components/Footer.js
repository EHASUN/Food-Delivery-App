import React from 'react'

import { Container } from 'reactstrap';

class Footer extends React.Component{
    constructor (props){
        super(props)
        this.state = {

        }
    }


    render(){
        return(
            <Container style={{backgroundColor:'#F8F9FA'}} className='shadow'>            
            <div className="row text-center d-flex justify-content-center pt-5 mb-3">
        

              <div className="col-md-2 mb-3" >
                <h6 className="text-uppercase font-weight-bold" >
                  <a href="#!" style={{color:'#28A745'}}>About us</a>
                </h6>
              </div>

        

              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!" style={{color:'#28A745'}}>Products</a>
                </h6>
              </div>

        

              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!" style={{color:'#28A745'}}>Awards</a>
                </h6>
              </div>

        

              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!" style={{color:'#28A745'}}>Help</a>
                </h6>
              </div>

              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!" style={{color:'#28A745'}}>Contact</a>
                </h6>
              </div>

        
            </div>
                
       
            </Container>

        )

    }
}

export default Footer





