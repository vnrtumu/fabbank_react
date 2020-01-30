import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import {OutTable, ExcelRenderer} from 'react-excel-renderer'
import styled from 'styled-components'
import Navbar from "./navbar";
import axios from 'axios'
import Loader from 'react-loader-spinner';
import './upload2.css';


class Basic extends Component {
  constructor() {
    super();
   
    this.state = {
      files: [],
      columns:[],
      rows:[],
      selectedFile:"",
      display:true
    };
  }
  onDrop = (files) => {
      console.log(files)
    // this.setState({files})
    ExcelRenderer(files[0], (err, resp) => {
      
      console.log(resp)
        if(err){
          console.log(err);            
        }
        else{
          this.setState({
            //   cols: resp.cols,
              
              columns:resp.rows.shift(),
              rows: resp.rows,
              selectedFile:files[0]
              // file:resp.name
              
            });
            
          }
          console.log(this.state.selectedFile)
        }
      );  
  };

  handleSave = (e) =>{
    const {rows} = this.state
    // const {selectedFile} = this.state
    /*
    this.state.selectedfile.map(val=>{
      return val;
    })
    */
    e.preventDefault();
    const data = new FormData() 
    data.append('select_file', this.state.selectedFile)
    
    axios.post(`/api/import`,data)
    .then(res=>{
      console.log(res);
      const {success,logdata,status} = res.data;
      console.log(logdata)
    if(status)  {
      alert("data exists")
    }
    else{
    
      alert("successfully Saved");
    }
      
      this.props.history.push('/table')
    })
    .catch(err=>{
      console.log(err)
    })
    
  }

  handleRemove = (e) =>{
      this.setState({
        selectedFile:"",
        columns:[],
        rows:[]

      })
  }

  render() {
    const StyledDiv = styled.div`
   height:80px;
   background-color:#cccccc3d;
   border:2px dashed #77777780;
   width:600px;
   margin:0 auto;
   padding:8px 2px;
   margin-top:30px;
    `

    return (
      <div>
  
       <Navbar />
      <Dropzone onDrop={this.onDrop}>
        {({getRootProps, getInputProps}) => (
          <section className="container">
            <StyledDiv {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
              <i class="fas fa-file-upload fa-2x" aria-hidden="true"></i>
              {/* <i class="fa fa-cloud-file-upload" aria-hidden="true"></i> */}

              <p>Drag 'n' drop some files here, or click to select files</p>
      
            </StyledDiv>
            {/* <aside>
              <h4>Files</h4>
              <ul>{files}</ul>
            </aside> */}
            {
            this.state.selectedFile != ""
            ?
             <p className="mt-3 filename">{this.state.selectedFile.name}
                <i className="fas fa-times-circle ml-2" onClick={(e)=>this.handleRemove(e)}></i>
             </p>
             :
             ""
  }
          </section>
        )}
      </Dropzone>

  
      
      <div>
                  {
                  this.state.rows.length > 0
                  ?
                  <button className="btn btn-primary mt-2" onClick={(e) =>this.handleSave(e)}>Save</button>
                  :
                  ""
  }
                </div>
      <div className="container">
        {this.state.columns.length > 0 && this.state.rows.length > 0 
        ?
      <table className="table table-bordered mt-5">
                    <thead>
                      
                       {
                         this.state.columns.length > 0 &&
                           this.state.columns.map(val=>{
                               return(
                                   
                                   <th>{val}</th>
                                  
                               )
                           })
                       }
                    </thead>
                    <tbody>
                        {
                          this.state.rows.length > 0 &&
                            this.state.rows.map((item,idx) =>{
                                return(
                                    <tr>
                                       {
                                           item.map(val =>{
                                               return(
                                                   <td>{val}</td>
                                               )
                                           })
                                       }
                                    </tr>
                                )
                            })
                        }
                        
                      
                    </tbody>
                </table>
                :
                ""
                      }
                </div>
                <div>
                  {
                  this.state.rows != "" 
                  ?
                  <button className="btn btn-primary" onClick={(e) =>this.handleSave(e)}>Save</button>
                  :
                  ""
  }
                </div>

      </div>


    );
  }
}

export default Basic