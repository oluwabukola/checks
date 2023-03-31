import React from 'react'; 
import { Link, withRouter } from 'react-router-dom';
import { editRegion } from './store/actions/employeeActions';
import { getRegion } from './store/actions/displayActions';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { connect } from 'react-redux';
import Nav from './Nav';
import User from './User';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';

let letters = RegExp(/^[A-Za-z]+$/);
const formValid =({formErrors, ...rest} ) => {
    let valid = true;
    console.log(formErrors);
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });
    Object.values(rest).forEach(val => {
        val.length === 0 && (valid = false);
    });
        return valid;
 }
const loaderCss = css`
margin: 150px auto 10px auto;
border-color:white;
`

class EditRegion extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            region: {},
            loading: false,
            formErrors: {
            name: '',  
            }
        }
    }

    componentDidMount() {
        const params = this.props.match.params;
        console.log(this.props);
        this.props.getRegion(params.id);
        this.setState({
        region: this.props.region
        })
        console.log('region data', this.props.region);
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let errors = this.state.formErrors
        console.log('errors', errors)
        if (formValid(this.state)) {
            const params = this.props.match.params;
            const { region } = this.state;
            console.log('sending...', params.id);
            
            const data = {
            id: params.id,
            name: region.name,
            }
            this.setState({
                loading: true
            });

            this.props.editRegion(data).then(datum => {
                this.setState({
                    loading: false
                });
                toast.notify('Region successfully edited!');
                console.log('Success:', datum)
               // this.props.history.push('/employeeInfo')
                    
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            
            
         }
        else {
        console.error('Form inValid');
        }
      //this.props.history.push('/CreateEmployee');
    }
    

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let formErrors = this.state.formErrors;
        let region = this.state.region
        switch (name) {
            
            case 'name': formErrors.name = letters.test(value) &&  value.length > 2 
            ? "" : 'minimum of 3 letters required' ;
            break;
        
        default:
            break;
        }  
 
        this.setState({ formErrors: formErrors });
        region[name] = value
        this.setState({region})
        console.log(this.state)
    }
    render() {
        
        const { region} = this.props;
        console.log('edit', region);
        return (
            <div>
                {this.state.loading ?
                    <div className="sweet-loading">
                        <CircleLoader css={loaderCss} size={100}
                            color={"#2b4f81"}
                            loading={true} />
                    </div> :
                    <div className="home-page">
                        <Nav />
                    
                        <div className="rest">
                            <User />
                        <button type="button" className="back-btn" onClick={this.handleBack}><i class="fas fa-arrow-left"></i>Back</button>
                        <hr />
                        <form className="region-form">
                            <label>Region Name</label>
                            <input type="text" className="addname"
                                name="name"
                                onChange={this.handleChange}
                                defaultValue={region.name}
                                placeholder="Enter region name" required /><br />
                            <button type='button' className="region-submit" onClick={this.handleSubmit}>Submit</button>
    
                        </form>
                        </div>
                        </div>
                
                }
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('prop reqion', state.region.regionName);
    return {
        region: state.region.oneregion,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
         getRegion: (region) => dispatch(getRegion(region)),
        // getEmployee: (employee) => dispatch(displayEmployee(employee)),
        editRegion: (region) => dispatch(editRegion(region))
        
    }
    
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditRegion));
