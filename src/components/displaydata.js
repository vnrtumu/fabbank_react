import React,{Component  } from "react"
import axios from "axios";

class DisplayData extends Component{
    state={
        data:{
            merchant_name:"",
            floor:"",
            street_number:"",
            route:"",
            locality:"",
            city:"",
            state_emirate_code:"",
            country:"",
            postal_code:"",
            address:"",
            icon_logo:"",
            phone_number:"",
            name:"",
            rating:"",
            reviews:"",
            type:"",
            vicinity:"",
            website:"",
            stock_price:"",
            founded:"",
            ceo:"",
            founders:"",
            owned_by:"",
            industry:"",
            headquarters:"",
            products:"",
            services:"",
            twitter_handle:""
         }
    }
   
    componentDidMount(){
        console.log(this.props.match.params.id)
        const data ={
         merchant_id:this.props.match.params.id
        }
        axios.post(`http://fabbank.ml/api/showSingleMerchant`,data)
        .then(res=>{
            console.log(res);
            const {success} = res.data;
            this.setState({
                data:{...success[0]}
            })
        })
        .catch(err=>{
            console.log(err)
        })
     }

    render(){
        return(
            <div>
                <h1>Individual Merchant Details</h1>
                <div className="container mt-5">
                    <div className="card">
                        <div class="row">
                            <div class="col-sm-6 form-group float-left">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>Merchant Name:</b></label>
                                <span>{this.state.data.merchant_name || " - "}</span>
                                </div>
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>Floor:</b></label>
                                <span>{this.state.data.floor || " - "}</span>
                                </div>
                            </div>
                    
                            <div class="row">
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>Street Number:</b></label>
                                <span>{this.state.data.street_number || " - "}</span>
                                </div>
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>Route:</b></label>
                                <span>{this.state.data.route || " - "}</span>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>Locality:</b></label>
                                <span>{this.state.data.locality || " - "}</span>
                                </div>
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>City:</b></label>
                                <span>{this.state.data.city || " - "}</span>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>State Code:</b></label>
                                <span>{this.state.data.state_emirate_code || " - "}</span>
                                </div>
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>Country:</b></label>
                                <span>{this.state.data.country || " - "}</span>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>Postal Code:</b></label>
                                <span>{this.state.data.postal_code || " - "}</span>
                                </div>
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>Address:</b></label>
                                <span>{this.state.data.address || " - "}</span>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>Icon Logo:</b></label>
                                <span>{this.state.data.icon_logo || " - "}</span>
                                </div>
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>Phone Number:</b></label>
                                <span>{this.state.data.phone_number || " - "}</span>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>Name:</b></label>
                                <span>{this.state.data.name || " - "}</span>
                                </div>
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>Rating:</b></label>
                                <span>{this.state.data.rating || " - "}</span>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>Reviews:</b></label>
                                <span>{this.state.data.reviews || " - "}</span>
                                </div>
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>Type:</b></label>
                                <span>{this.state.data.type || " - "}</span>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>vicinity:</b></label>
                                <span>{this.state.data.vicinity || " - "}</span>
                                </div>
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>Website:</b></label>
                                <span>{this.state.data.website || " - "}</span>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>Stock Price:</b></label>
                                <span>{this.state.data.stock_price || " - "}</span>
                                </div>
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>Founded:</b></label>
                                <span>{this.state.data.founded || " - "}</span>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>CEO:</b></label>
                                <span>{this.state.data.ceo || " - "}</span>
                                </div>
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>Founders:</b></label>
                                <span>{this.state.data.founders || " - "}</span>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>Owned By:</b></label>
                                <span>{this.state.data.owned_by || " - "}</span>
                                </div>
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>Industry:</b></label>
                                <span>{this.state.data.industry || " - "}</span>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>Headquarters:</b></label>
                                <span>{this.state.data.headquarters || " - "}</span>
                                </div>
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>Products:</b></label>
                                <span>{this.state.data.products || " - "}</span>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>Sewrvices:</b></label>
                                <span>{this.state.data.services || " - "}</span>
                                </div>
                                <div class="col-sm-6 form-group">
                                <label for="formGroupExampleInput" className="float-left pl-2"><b>Twitter Handle:</b></label>
                                <span>{this.state.data.twitter_handle || " - "}</span>
                                </div>
                            </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default DisplayData