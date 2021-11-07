import styled from 'styled-components';

export const HomeWrapper = styled.div`
 overflow: hidden;
 width: 960px;
 margin: 0 auto;
`

export const HomeLeft = styled.div`
 margin-left: 15px;
 padding-top: 30px;
 width: 625px;
 .banner-img{
  width:625px;
  height:270px;
 }
`

export const HomeRight = styled.div`
 width: 240px;
 float: right;
`

export const TopicWrapper = styled.div`
 overflow:hidden;
 padding: 20px 0 10px 0;
 margin-left: -18px;
 border-bottom: 1px solid red;
`

export const TopicItem = styled.div`
 float: left;
 background: #f7f7f7;
 height:32px;
 padding-right: 10px;
 margin-right:10px;
 margin-left:18px;
 line-height:32px;
 color:#000;
 margin-bottom:15px;
 border: 1px solid #dcdcdc;
 .topic-pic{
  display:block;
  float:left;
  width:32px;
  height:32px;
 }
`

export const ListItem = styled.div`
 overflow: hidden;
 padding: 20px 0;
 border-bottom: 1px solid #dcdcdc;
 .pic{
  width:125px;
  height:100px;
  float:right;
 }
`

export const ListInfo = styled.div`
 width: 500px;
 float: left;
 .title {
  line-height:27px;
  font-size:18px;
  font-weight:bold;
  color:#333;
 }
 .dec {
  line-height: 24px;
  font-size: 13px;
 }
`