import React,{ Component } from "react";
import axios from "axios";

class Data extends Component{
    state={
     data:{
         id:"",
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
       axios.post(`/api/showSingleMerchant`,data)
       .then(res=>{
           console.log(res);
           const {success} = res.data;
           this.setState({
               data:success[0]
           })
       })
       .catch(err=>{
           console.log(err)
       })
    }

    handleSaveData = (e) =>{
        e.preventDefault()
        const details ={
            id:this.props.match.params.id,
            merchant_name:this.state.data.merchant_name,
            floor:this.state.data.floor,
            street_number:this.state.data.street_number,
            route:this.state.data.route,
            locality:this.state.data.locality,
            city:this.state.data.city,
            state_emirate_code:this.state.data.state_emirate_code,
            country:this.state.data.country,
            postal_code:this.state.data.postal_code,
            address:this.state.data.address,
            icon_logo:this.state.data.icon_logo,
            phone_number:this.state.data.phone_number,
            name:this.state.data.name,
            rating:this.state.data.rating,
            reviews:this.state.data.reviews,
            type:this.state.data.type,
            vicinity:this.state.data.vicinity,
            website:this.state.data.website,
            stock_price:this.state.data.stock_price,
            founded:this.state.data.founded,
            ceo:this.state.data.ceo,
            founders:this.state.data.founders,
            owned_by:this.state.data.owned_by,
            industry:this.state.data.industry,
            headquarters:this.state.data.headquarters,
            products:this.state.data.products,
            services:this.state.data.services,
            twitter_handle:this.state.data.twitter_handle
        }
        axios.post(`/api/updateMerchantDetails`,details)
        .then(res=>{
            console.log(res)
            const {success} = res.data
            this.setState({
                data:success[0]
            })
            alert("Data Updated Successfully")
            this.props.history.push('/table')
        })
        .catch(err =>{
            console.log(err)
        })
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        const {data} = this.state
        this.setState({
            
            data :{
                [name] : value
            }
        })
    }

    handleCancel = (e) =>{
        this.props.history.push('/table')
    }

    handleNext = (e) =>{
        // this.props.match.params.id
        e.preventDefault()
        this.props.history.push(`/table/${parseInt(this.props.match.params.id) + 1}`)

        // console.log(this.props.match.params.id)
        const data ={
         merchant_id:this.props.match.params.id + 1
        }
        axios.post(`/api/showSingleMerchant`,data)
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
        const {data} = this.state
        return(
            <div>
                <form class="mt-5">
                    <div class="container">
                        <h1>Editing the table data</h1>
                <div class="row mt-5">
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>Merchant Name</b></label>
                         <input type="text" class="form-control" value={data.merchant_name} name="merchant_name" onChange={(e)=>this.handleChange(e)} />
                        </div>
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>Floor</b></label>
                         <input type="text" class="form-control" value={data.floor} name="floor" onChange={(e)=>this.handleChange(e)} />
                        </div>
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>Street</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.street_number} name="street_number" onChange={(e)=>this.handleChange(e)} />
                        </div>
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>Route</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.route} name="route" onChange={(e)=>this.handleChange(e)} />
                        </div>
   
  </div>
  <div class="row">
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>Locality</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.locality} name="locality" onChange={(e)=>this.handleChange(e)}/>
                        </div>
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>City</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.city} name="City" onChange={(e)=>this.handleChange(e)}/>
                        </div>
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>State Code</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.state_emirate_code} name="state_emirate_code" onChange={(e)=>this.handleChange(e)} />
                        </div>
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>Country</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.country} name="country" onChange={(e)=>this.handleChange(e)} />
                        </div>
   
  </div>
  <div class="row">
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>Postal Code</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.postal_code} name="postal_code" onChange={(e)=>this.handleChange(e)} />
                        </div>
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>Address</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.address} name="address" onChange={(e)=>this.handleChange(e)} />
                        </div>
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>Logo</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.icon_logo} name="icon_logo" onChange={(e)=>this.handleChange(e)}/>
                        </div>
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>Phone Number</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.phone_number} name="phone_number" onChange={(e)=>this.handleChange(e)} />
                        </div>
   
  </div>
  <div class="row">
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>Name</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.name} name="name" onChange={(e)=>this.handleChange(e)} />
                        </div>
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>Rating</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.rating} name="rating" onChange={(e)=>this.handleChange(e)}/>
                        </div>
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>Reviews</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.reviews} name="reviews" onChange={(e)=>this.handleChange(e)} />
                        </div>
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>Type</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.type} name="type" onChange={(e)=>this.handleChange(e)} />
                        </div>
   
  </div>
  <div class="row">
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>Vicinity</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.vicinity} name="vicinity" onChange={(e)=>this.handleChange(e)}/>
                        </div>
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>Website</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.website} name="website" onChange={(e)=>this.handleChange(e)} />
                        </div>
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>Stock Price</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.stock_price} name="stock_price" onChange={(e)=>this.handleChange(e)} />
                        </div>
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>Founded</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.founded} name="founded" onChange={(e)=>this.handleChange(e)} />
                        </div>
   
  </div>
  <div class="row">
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>CEO</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.ceo} name="ceo" onChange={(e)=>this.handleChange(e)} />
                        </div>
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>Founders</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.founders} name="founders" onChange={(e)=>this.handleChange(e)} />
                        </div>
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>Owned By</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.owned_by} name="owned_by" onChange={(e)=>this.handleChange(e)} />
                        </div>
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>Industry</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.industry} name="industry" onChange={(e)=>this.handleChange(e)} />
                        </div>
   
  </div>

  <div class="row">
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>Head Quarters</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.headquarters} name="headquarters" onChange={(e)=>this.handleChange(e)} />
                        </div>
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>Products</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.products}  name="products" onChange={(e)=>this.handleChange(e)} />
                        </div>
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>Products</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.services} name="services" onChange={(e)=>this.handleChange(e)} />
                        </div>
                        <div class="col-sm-3 form-group">
                         <label for="formGroupExampleInput" className="float-left pl-2"><b>Products</b></label>
                         <input type="text" class="form-control" placeholder=" " value={data.twitter_handle} name="twitter_handle" onChange={(e)=>this.handleChange(e)} />
                        </div>
   
  </div>
    
  
  </div>
  <div>
      <button class="btn btn-primary mr-2" onClick={(e)=>this.handleSaveData(e)}>Save</button>
      <button class="btn btn-danger mr-2" onClick={(e) => this.handleCancel(e)}>Cancel</button>
      <button  className="btn btn-info" onClick={(e)=>this.handleNext(e)}>Next</button>
  </div>
                </form>
                
            </div>
        )
    }
}

export default Data