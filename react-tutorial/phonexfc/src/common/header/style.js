import styled from 'styled-components';
import logoPic from '../../statics/memories.png';

export const HeaderWrapper = styled.div`
 height: 58px;
 border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
 href: '/'
})`
 position: absolute;
 height: 50px;
 top: 0;
 left: 0;
 display: block;
 width: 50px;
 background: url(${logoPic});
 background-size: contain;
`

export const Nav = styled.div`
 width: 960px;
 height: 100%;
 padding-right: 70px;
 box-sizing:border-box;
 margin: 0 auto;
`

export const NavItem = styled.div`
line-height: 56px;
padding: 0 17px;
font-size: 17px;
color: #333;
&.left{
 float: left;
}
&.right{
 float: right;
 color:#969696
}
&.active {
 color: #ea6f5a;
}
`

export const SearchWrapper = styled.div`
 position: relative; 
 float: left;

 .iconfont {
  position: absolute;
  right: 5%;
  bottom: 5px;
  width: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  &.focused {
   background: #777;
   color: #fff;
  }
 }
` 

export const NavSearch = styled.input.attrs({
 placeholder: '搜索'
})`
 
 &.slide-enter {
  transition: all .2s ease-out; 
 }
 &.slide-enter-active {
  width: 240px;
 }
 &.slide-exit {
  transition: all .2s ease-out; 
 }
 &.slide-exit-active {
  width: 160px;
 }

 margin-top: 9px;
 padding: 0 30px 0 20px;
 font-size: 14px;
 margin-left: 20px;
 box-sizing: border-box;
 width: 160px;
 height: 38px;
 border: none;
 outline: none;
 border-radius: 19px;
 background: #eee;
 color: #666;
 &::placeholder {
  color:#999
 }
 &.focused {
  width: 240px;
 }
`
export const SearchInfo = styled.div`
 position: absolute;
 top:56px;
 left:0;
 width:240px;
 padding: 0 20px;
 box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.2); 
 background: #fff;
` 

export const SearchInfoTitle = styled.div`
 margin-top: 20px;
 margin-bottom: 15px;
 line-height: 20px;
 font-size: 14px;
 color:#969696;
` 

export const SearchInfoSwitch = styled.span`
 float: right;
 font-size: 12px;
`

export const SearchInfoItem = styled.a`
 display:block;
 float: left;
 margin-right:10px;
 margin-bottom: 15px;
 line-height: 20px;
 padding: 0 5px;
 font-size: 12px;
 border:1px solid #ddd;
 color:#787878;
 border-radius: 3px;
` 

export const Addition = styled.div`
 position: absolute;
 top: 0;
 right: 0;
 height: 56px;
`

export const Button = styled.div`
 float: right;
 margin-top: 9px;
 line-height: 38px;
 margin-right: 20px;
 padding: 0 20px;
 border-radius: 19px;
 border: 1px solid #ec6149;
 font-size: 14px;
 &.reg {
  color: #ec6149;
 }
 &.writting {
  color: #fff;
  background:#ec6149;
 }
`  