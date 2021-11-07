import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import axios from 'axios';
import { 
 HomeWrapper,
 HomeLeft, 
 HomeRight
} from './style';

class Home extends Component {

 render(){
  return (
   <HomeWrapper>
    <HomeLeft>
     <img className='banner-img' src='https://images.unsplash.com/photo-1614788679832-7879205af178?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80'
     alt=''
     />
     <Topic/>
     <List/>
    </HomeLeft>
    <HomeRight>
     <Recommend />
     <Writer/>
    </HomeRight>
   </HomeWrapper>
  )
 }

 componentDidMount() {
  axios.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$format=JSON').then((res)=>{
   const result = res.data;
   const action = {
    type: 'change_home_data',
    topicList: result
   }
   this.props.changeHomeData(action)
  })
 }

}

const mapDispatch = (dispatch) => ({
 changeHomeData(action) {
  dispatch(action)
 }
})

export default connect(null, mapDispatch)(Home)