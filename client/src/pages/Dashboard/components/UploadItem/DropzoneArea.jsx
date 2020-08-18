import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
//import { makeStyles } from '@material-ui/core/styles'

/*const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  
}));*/
class DropzoneArea2 extends Component{
  constructor(props){
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files){
    this.setState({
      files: files
    });
  }
  render(){
    return (
      <DropzoneArea
        //className={}
        onChange={this.handleChange.bind(this)}
        />
    )
  }
}
 
export default DropzoneArea2