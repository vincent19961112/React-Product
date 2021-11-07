import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
 HeaderWrapper,
 Logo,
 Nav,
 NavItem,
 NavSearch,
 Addition,
 Button,
 SearchWrapper,
 SearchInfo,
 SearchInfoTitle,
 SearchInfoSwitch,
 SearchInfoItem
} from './style';

class Header extends Component {
  
  getListArea(){   
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter,handleMouseLeave, handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];

    
    
    if(newList.length) {
      for(let i =(page - 1)* 30; i <= page * 30; i++){
        pageList.push(
          <SearchInfoItem key={newList[i].ID}>{newList[i].Name}</SearchInfoItem>
          )
        }
      }
    if(focused || mouseIn){
    return (
      <SearchInfo
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
       >
        <SearchInfoTitle>熱門搜索
          <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage)}>換一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <div>
          {pageList}
        </div>
      </SearchInfo>
        )
      }else{
        return null;
      }
  }

  render(){
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
    return (
<>
    <HeaderWrapper>
    <Logo/>
    <Nav>
    <NavItem className='left active'>首頁</NavItem>
    <NavItem className='left'>下載App</NavItem>
    <NavItem className='right'>登陸</NavItem>
    <NavItem className='right'>
      <i className='iconfont'>&#xe636;</i>
    </NavItem>
    <SearchWrapper>
    <CSSTransition
        in={focused}
        timeout={200}
        classNames='slide'
      > 
        <NavSearch
          className={focused ? 'focused' : ''}
          onFocus={()=>handleInputFocus(list)}
          onBlur={handleInputBlur}
        ></NavSearch>
    </CSSTransition>
        <i  className={focused ? 'focused iconfont' : 'iconfont'}>
        &#xe6aa;
        </i>
        {this.getListArea()}
    </SearchWrapper>
    </Nav>
    <Addition>
    <Button className='writting'>註冊</Button>
    <Button className='reg'>
      <i className='iconfont'>&#xe6ba;</i>
      寫文章
      </Button>
    </Addition>
    </HeaderWrapper>
</>
    )
  }

}

const mapStateToProps = (state) =>{
  return {
  //  focused: state.get('header').get('focused')
  focused: state.getIn(['header','focused']),
  mouseIn: state.getIn(['header','mouseIn']),
  list: state.getIn(['header','list']),
  page:state.getIn(['header','page']),
  totalPage: state.getIn(['header','totalPage'])
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    handleInputFocus(list){
      if(list.size === 0 ) {
      dispatch(actionCreators.getList());
      } 
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage){
      if(page < totalPage){
        dispatch(actionCreators.changePage(page + 1))
      }else{
        dispatch(actionCreators.changePage(1))
      }
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Header)