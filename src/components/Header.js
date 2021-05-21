import styled from 'styled-components'

function Header(props) {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src="/images/home-logo-zc.png" height="34px" width="34px" alt="" />
                    </a>
                </Logo>
                
                <Search>
                    <div>
                        <input type="text" placeholder="Search"/>
                    </div>
                    <SearchIcon>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        width="16"
                        height="16"
                        focusable="false"
                        >
                        <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
                    </svg>
                    </SearchIcon>
                </Search>

                <Nav>
                    <NavListWrap>
                        <NavList className="active">
                            <a> 
                                <img src="/images/nav-home.svg"/>
                                <span>Home</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a> 
                                <img src="/images/nav-notifications.svg"/>
                                <span>Notifications</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a> 
                                <img src="/images/nav-network.svg"/>
                                <span>Community</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a> 
                                <img src="/images/nav-messaging.svg"/>
                                <span>Messages</span>
                            </a>
                        </NavList>
                        <User>
                            <a>
                                <img src="/images/user.svg"/>
                                <span>Me</span>
                                <img src="/images/down-icon.svg" />
                            </a>

                            <SignOut>
                                <a>
                                    SignOut
                                </a>
                            </SignOut>
                        </User>
                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    background-color: white;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    left: 0;
    padding: 0 24px;
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100vw;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1128px;    
`
const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px
    
`
const Search = styled.div`
    opacity: 1;
    flex-grow:1;
    position: relative;
    & > div {
        max-width: 280px;
        input{
            border: none;
            box-shadow: none;
            background-color: #eef3f8;
            color: rgba(0,0,0,0.6);
            width: 218px;
            padding: 0 8px 0 40px;
            line-height: 1.75;
            font-weight: 400;
            font-size: 14px;
            height: 34px;
            border-color: #dce6f1;
            vertical-align: text-top;
        
        }
        
    }
`


const SearchIcon = styled.div`
    width: 40px;
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 2px;
    margin: 0;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;


`

const Nav = styled.nav`
    /* margin-left: auto; */
    display: block;
    @media(max-width:768px){
        position: fixed;
        left: 0;
        bottom: 0;
        background: white;
        width: 100%;
    }
`
const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
    justify-content: space-around;
    .active{
        span:after{
            content: '';
            transform: scale(1);
            border-bottom: 2px solid var(--white, #fff);
            bottom: 0;
            left: 0;
            position: absolute;
            transition: transform 0.2a ease-in-out;
            width: 100%; 
            border-color: rgba(0,0,0,0.9);
        }
    }
`
const NavList = styled.li`
    display: flex;
    align-items: center;
    a{
        align-items: center;
        background: transparent;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight: 400;
        justify-content: center;
        min-width: 80px;
        min-height: 42px;
        line-height: 1.5;
        position: relative;
        text-decoration: none;
        span{
            color: rgba(0,0,0,0.6);
            display: flex;
            align-items: center;
        }
        @media(max-width: 768px){
            min-width:70px;
        }
    }
    &:hover, &:active{
        a{
            span{
                color: rgba(0,0,0,0.9);
            }
        }
        cursor: pointer;
    }
`
const SignOut = styled.div`
    position: absolute;
    top: 45px;
    background: white;
    border-radius: 0 0 5px 5px;
    width: 100px;
    height: 40px;
    font-size: 16px;
    transition-duration: 167ms;
    text-align: center;
    display: none;
`

const User = styled(NavList)`
    a > svg {
        width: 24px;
        border-radius: 50%;
    }
    a > img {
        width:24px;
        height: 24px;
        border-radius: 50%;
    }
    span{
        display: flex;
        align-items: center;
    }

    &:hover{
        ${SignOut} {
            align-items: center;
            display: flex;
            justify-content: center;
        }
    }
`

export default Header
