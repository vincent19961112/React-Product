import React, { Component } from 'react';
import { ListItem, ListInfo } from '../style';
import { connect } from 'react-redux';

class List extends Component {

 render(){
  const { list } = this.props;
  return (
 <>
   {
     list.map((item) => {
      return (
       <ListItem key={item.get('id')}>
         <img alt='' className='pic' src={item.get('imgUrl')}/>
          <ListInfo>
           <h3 className='title'>{item.get('title')}</h3>
           <p className='dsc'>{item.get('desc')}</p>
          </ListInfo>
       </ListItem>
      )
     })
    }
 </>
  )
 }

}

const mapState = (state) => ({
 list: state.getIn(['Home','articleList'])
})

export default connect(mapState, null)(List)