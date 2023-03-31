/* eslint-disable import/first */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Chart }  from "react-google-charts";

import { guarantorChart, employerChart, refereeChart, addressChart, resultChart }  from './store/actions/chartActions';
import Nav from './Nav'


class Home extends React.Component{
    constructor(props) {
        super(props);

    }

    async  componentDidMount() {
        
        await this.props.guarantorChart();
        await this.props.refereeChart();
        await this.props.addressChart();
        await this.props.employerChart();
        await this.props.resultChart();
        this.pieData();
        this.pieData2();
        this.pieData3();
        this.pieData4();
        this.pieData5();
    
    }

    pieData = () => {
        const { guarantor } = this.props;
        console.log('guarantor chart', guarantor)
        let p = [];
        let header = [
              ['Verified', 'Not verified'],
           
              ['Verified', guarantor.verified],
              ['Not verified', guarantor.notverified],
            ]
       
        return header;
    }

    pieData2 = () => {
        const { referees } = this.props;
        console.log('referee chart', referees);
        let p = [];
        let header = [
              ['Verified', 'Not verified'],
           
              ['Verified', referees.verified],
              ['Not verified', referees.notverified],
            ]
       
        return header;
    }
    pieData3 = () => {
        const { previousEmployers } = this.props;
        let p = [];
        let header = [
              ['Verified', 'Not verified'],
           
              ['Verified', previousEmployers.verified],
              ['Not verified', previousEmployers.notverified],
            ]
       
        return header;
    }
    pieData4 = () => {
        const { address } = this.props;
        let p = [];
        let header = [
              ['Verified', 'Not verified'],
           
              ['Verified', address.verified],
              ['Not verified', address.notverified],
            ]
       
        return header;
    }
    pieData5 = () => {
        const { result} = this.props;
        let p = [];
        let header = [
              ['Verified', 'Not verified'],
           
              ['Verified', result.verified],
              ['Not verified', result.notverified],
            ]
       
        return header;
    }
    render() {
    
        return (
           
            <div className="home-page" >
                <div>
                    <Nav />
                </div>
                <div className="graph"> 
                    <div className="guarantor">
                         <Chart
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={
                                this.pieData()
                            }
                            options={{
                                chartArea: {
                                    height: '100%',
                                    width: '100%',
                                    top: 48,
                                    left: 48,
                                    right: 16,
                                    bottom: 48
                                  },
                                title: 'Guarantor',
                                 is3D: true,
                                   height: '100%',
                                    width: '100%'
                            }} 
                    />   
                  
                      </div>  
                      <div className="referee">    
                         <Chart
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={
                                this.pieData2()
                            }
                            options={{
                                chartArea: {
                                    height: '100%',
                                    width: '100%',
                                    top: 48,
                                    left: 48,
                                    right: 16,
                                    bottom: 48
                                  },
                                title: 'Referee',
                                 is3D: true,
                                 height: '100%',
                                    width: '100%'
                               
                            }}
                            
                    />   
                    </div>
                  
                    <div className="prev-employer">
                   
                        <Chart
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={
                                this.pieData3()
                            }
                            options={{
                                chartArea: {
                                    height: '100%',
                                    width: '100%',
                                    top: 48,
                                    left: 48,
                                    right: 16,
                                    bottom: 48
                                  },
                                title: 'Previous employer',
                                 is3D: true,
                                 height: '100%',
                                    width: '100%'
                               
                            }}
                            
                    />   
                    </div>  
                    
                    <div className="address">
                      <Chart
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={
                        this.pieData4()
                    }
                            options={{
                                chartArea: {
                                    height: '100%',
                                    width: '100%',
                                    top: 48,
                                    left: 48,
                                    right: 16,
                                    bottom: 48
                                  },
                        title: 'Address',
                        is3D: true,
                        height: '100%',
                        width: '100%'
                    }}
                    />  
                    </div>  
                    
                    <div className="result">
                    <Chart
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={
                        this.pieData5()
                    }
                            options={{
                                chartArea: {
                                    height: '100%',
                                    width: '100%',
                                    top: 48,
                                    left: 48,
                                    right: 16,
                                    bottom: 48
                                  },
                        title: 'Result',
                        is3D: true,
                        height: '100%',
                        width: '100%'
                            }}
                            />
                    </div> 
                     
                </div>
                  </div>  
        )
    }
}
const mapStateToProps = (state) => {

      return {
          guarantor: state.chart.guarantor,
          previousEmployers: state.chart.previousEmployers,
          referees: state.chart.referees,
        result: state.chart.result,
          address: state.chart.address,
      }
  }
  const mapDispatchToProps = (dispatch) => {
  
      return {
          guarantorChart: (guarantor) => dispatch(guarantorChart(guarantor)),
          employerChart: (previousEmployers) => dispatch(employerChart(previousEmployers)),
          refereeChart: (referees) => dispatch(refereeChart(referees)),
          addressChart: (address) => dispatch(addressChart(address)),
          resultChart: (result) => dispatch(resultChart(result)),
      }
      
  }   
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);
