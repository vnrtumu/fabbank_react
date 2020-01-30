import React,{Component  } from "react"
import Navbar from "./navbar";
import axios from "axios";
import SearchResults from 'react-filter-search' 
import { MDBDataTable } from 'mdbreact';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import './table.css';
import Loader from 'react-loader-spinner';

class Table extends Component{
    state={
      display : true,
        data1:{
            columns: [
                {
                    label: 'Sl No',
                    field: 'id',
                    sort: 'asc',
                    
                  },
              {
                label: 'Name',
                field: 'merchant_name',
                sort: 'asc',
                
              },
              
              {
                label: 'Floor',
                field: 'floor',
                sort: 'asc',
                
              },
              {
                label: 'Street Number',
                field: 'street_number',
                sort: 'asc',
                
              },
              {
                label: 'Route',
                field: 'route',
                sort: 'asc',
                
              },
              {
                label: 'Locality',
                field: 'locality',
                sort: 'asc',
                
              },
              {
                label: 'City',
                field: 'city',
                sort: 'asc',
                
              },
              {
                label: 'State COde',
                field: 'state_emirate_code',
                sort: 'asc',
                
              },
              {
                label: 'Country',
                field: 'country',
                sort: 'asc',
                
              },
              {
                label: 'Postal Code',
                field: 'postal_code',
                sort: 'asc',
                
              },
              {
                label: 'Address',
                field: 'address',
                sort: 'asc',
                
              },
              {
                label: 'Icon/Logo',
                field: 'icon_logo',
                sort: 'asc',
                
              },
              {
                label: 'Phone Number',
                field: 'phone_number',
                sort: 'asc',
                
              },
              {
                label: 'Name',
                field: 'name',
                sort: 'asc',
                
              },
              {
                label: 'Rating',
                field: 'rating',
                sort: 'asc',
                
              },
              {
                label: 'Reviews',
                field: 'reviews',
                sort: 'asc',
                
              },
              
              {
                label: 'Type',
                field: 'type',
                sort: 'asc',
                
              },
              {
                label: 'Vicinity',
                field: 'vicinity',
                sort: 'asc',
                
              },
              {
                label: 'Website',
                field: 'website',
                sort: 'asc',
                
              },
              {
                label: 'StocK Price',
                field: 'stock_price',
                sort: 'asc',
                
              },
              {
                label: 'Founded',
                field: 'founded',
                sort: 'asc',
                
              },
              {
                label: 'CEO',
                field: 'ceo',
                sort: 'asc',
                
              },
              {
                label: 'Founders',
                field: 'founders',
                sort: 'asc',
                
              },
              {
                label: 'Owned By',
                field: 'owned_by',
                sort: 'asc',
                
              },
              {
                label: 'Industry',
                field: 'industry',
                sort: 'asc',
                
              },
              {
                label: 'HeadQuarters',
                field: 'headquarters',
                sort: 'asc',
                
              },
              {
                label: 'Products',
                field: 'products',
                sort: 'asc',
                
              },
              
              {
                label: 'Services',
                field: 'services',
                sort: 'asc',
                
              },
              {
                label: 'Twitter Handle',
                field: 'twittwer_handle',
                sort: 'asc',
                
              },
              {
                label: 'Actions',
                field:  'button',
                sort: 'asc',
                
              }
              
            
            ],
              rows:[
                
              ]
        }
        
        // search:"",
        // filteredData:[]
    }

    handleEdit = (e,val) =>{
        // axios.post(`/api/updateMerchantDetails`)
        this.props.history.push(`/table/${val.id}`)
    }

    // handleChange = event => {
    //     const { value } = event.target;
    //     this.setState({ search:value });
    //   };

    componentDidMount(){
        const { data1 } = this.state
        let { columns,rows } = data1
        // const {rows} = this.state.data1
        axios.get(`http://fabbank.ml/api/displayAllMerchants`)
        .then(res=>{
            console.log(res);
            const {success} = res.data
            const { search,data } = this.state;
            rows = success.map( item => {
                item["button"] = <div>

<MDBBtn color="purple" size="sm" onClick={(e)=>this.handleEdit(e,item)}>Edit</MDBBtn>
<MDBBtn color="purple" size="sm" onClick={(e)=>this.handleView(e,item)}>View</MDBBtn>
                </div>
                
                return item
                // return {
                //     ...item,
                //     button: <MDBBtn color="purple" size="sm">Edit</MDBBtn>
                // }
            })
        // const filteredData = success.filter(element => {
        //   return element.merchant_name.toLowerCase().includes(search.toLowerCase());
        // });
            this.setState({
                data1:{
                ...data1,
                rows
                }
            })
            // data1["rows"] = rows
            // this.setState({
            //     data1
            // })
            
        })
        .catch(err=>{
            console.log(err)
        })
    }

    handleView = (e,val) =>{
        this.props.history.push(`/displaydata/${val.id}`)
    }

   

    // handleInputChange = event => {
    //     const search = event.target.value;
    
    //     this.setState(prevState => {
    //       const filteredData = prevState.data.filter(element => {
    //         return element.merchant_name.toLowerCase().includes(search.toLowerCase());
    //       });
    
    //       return {
    //         search,
    //         filteredData
    //       };
    //     });
    //   };
     
    

    render(){
        const { data, search } = this.state;
        return(
            <div>
                <Navbar />
                <div className="container-fluid">
                
          
          {/* <div>{this.state.filteredData.map(i => <p>{i.name}</p>)}</div> */}
                 {/* <table className="table table-bordered mt-5">
                <thead> 
                    <tr>
                        <th>Id</th>
                        <th>Customer name</th>
                        <th>Floor</th>
                        <th>Street Number</th>
                        <th>Route</th>
                        <th>Locality</th>
                        <th>City</th>
                        <th>State Code</th>
                        <th>Country</th>
                        <th>Postal Code</th>
                        <th>Address</th>
                        <th>Icon Logo</th>
                        <th>Phone Number</th>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Reviews</th>
                        <th>Type</th>
                        <th>Vicinity</th>
                        <th>Website</th>
                        <th>Stock Price</th>
                        <th>Founded</th>
                        <th>CEO</th>
                        <th>Founders</th>
                        <th>Owned By</th>
                        <th>Industry</th>
                        <th>Head Quarters</th>
                        <th>Products</th>
                        <th>Services</th>
                        <th>twitter Handle</th>
                        <th>Actions</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.data.map(val=>{
                            return(
                                <tr>
                                    <td>{val.id}</td>
                                    <td className="w-25">{val.merchant_name}</td>
                                    <td>{val.floor}</td>
                                    <td>{val.street_number}</td>
                                    <td>{val.route}</td>
                                    <td>{val.locality}</td>
                                    <td>{val.city}</td>
                                    <td>{val.state_emirate_code}</td>
                                    <td>{val.country}</td>
                                    <td>{val.postal_code}</td>
                                    <td>{val.address} </td>
                                    <td> {val.icon_logo} </td>
                                    <td>{val.phone_number}</td>
                                    <td>{val.name} </td>
                                    <td>{val.rating}</td>
                                    <td> {val.reviews} </td>
                                    <td> {val.type}</td>
                                    <td>{val.vicinity}</td>
                                    <td>{val.website}</td>
                                    <td>{val.stock_price}</td>
                                    <td>{val.founded}</td>
                                    <td>{val.ceo}</td>
                                    <td>{val.founders}</td>
                                    <td>{val.owned_by}</td>
                                    <td> {val.industry} </td>
                                    <td>{val.headquarters}</td>
                                    <td> {val.products} </td>
                                    <td> {val.services} </td>
                                    <td>{val.twitter_handle}</td>
                                    <td>
                                        <button className="btn btn-primary mr-2" onClick={(e)=>this.handleEdit(e,val)}>Edit</button>
                                        <button className="btn btn-danger" onClick={(e)=>this.handleView(e,val)}>View</button>
                                        
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table> */}
            
            
             
            
            { 
            this.state.data1.rows.length > 0 && this.state.display 
            ?
                <MDBDataTable
                    noBottomColumns={true}
                    bordered
                    data={this.state.data1}
                    paging={false}
                    />
                    :
                    <Loader
            type="Circles"
            color="#00BFFF"
            height={100}
            width={100}
            // timeout={3000}
            visible={this.state.display}
            // color={"tomato"}
          />
            }
          </div>            

            </div>
           
        )
    }
}



export default Table