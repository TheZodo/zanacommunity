import styled from "styled-components"

const Main = (props) => {
  return (
    <Container>
      <ShareBox>Share
        <div>
          <img src="/images/user.svg"/>
          <button> Ask Question </button>
        </div>
        <div>
          <button>
            <img  src="/images/photo-video.png" height="20px" width="20px"/>
            <span>Add Media</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" alt=""/>
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/images/three-dots.svg"/>
            </button>
          </SharedActor>
          <Description>description</Description>
          <SharedImg>
            <a>
              <img src="/images/zanaco-branch.jpg"/>
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img src="/images/up-arrow.png"/>
              </button>
            </li>
            <span>837</span>
            <li>
              <button>
                <img src="/images/download.png"/>
              </button>
            </li>
            <li>
              <button>
                <img src="/images/comment.png"/>
                <span>40</span>
              </button>
            </li>
            <li>
              <button>
                <img src="/images/share.png"/>
                <span>share</span>
              </button>
            </li>
          </SocialCounts>
        </Article>
      </div>
    </Container>
  )
}

const Container = styled.div`
  grid-area: main;
`
const CommonCard = styled.div`
  text-align: center;
  margin-bottom: 8px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%) 0 0 0 1px rgb(0 0 0 / 20%);
`
const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
     button {
      outline: none;
      color: rgba(0,0,0, 0.6);
      font-size: 14px;
      line-height: 1.4;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
     }

     &:first-child{
       display:flex;
       align-items: center;
       padding: 8px 16px 0 16px;
       img{
         width: 48px;
         border-radius: 50%;
       }
       button{
        flex-grow: 1;
        margin: 4px;
        margin-left: 10px;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0,0,0,0.15);
       }
     }
     &:nth-child(2){
       display: flex;
       align-items: center;
       padding-left: 10px;
       img{
         margin: 0 4px 0 -2px;
       }
       span{
         font-size: 10px;
       }
     }

  }
`
const Article= styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`

const SharedActor = styled(CommonCard)`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow:hidden;
    display: flex;
    text-decoration: none;

    img{
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow:hidden;
      span{
        text-align:left;
        &:first-child{
          font-size: 12px;
          font-weight: 700;
          color: rgba(0,0,0,1);
        }
        &:nth-child(n+1){
          font-size: 10px;
          color: rgba(0,0,0,0.6);
        }
      }
    }
  }
  button{
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`
const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0,0,0,0.9);
  font-size: 14px;
  text-align: left;
`

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img{
    object-fit: contain;
    width: 100%;
    height:100%100px;
  }
`
const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  list-style: none;
  li{
    margin-right: 5px;
    font-size: 12px;
    button{
      outline: none;
      color: rgba(0,0,0, 0.6);
      font-size: 14px;
      line-height: 1.4;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      img{
        width: 12px;
        height:12px;
      }
      span{
        margin-left: 8px;
      }
    
    }
    

  }
  span{
      margin-right: 5px;
      font-size: 12px;
    }
`
export default Main