import { connect } from 'react-redux'
import styled from 'styled-components'
import { signInAPI } from '../actions'
import { Redirect, useHistory } from 'react-router'

function Login(props) {

    const history = useHistory()

    return (
    <Container>
        {
            props.user && <Redirect to ='/home'/>
        }
        <Nav>
            <a href='/'>
                <img src="/images/zanacommunity1.svg" alt=""/>
            </a>
            <div>
                <Join>Join Now!</Join>
                <SignIn>Sign In</SignIn>
            </div>

        </Nav>
        <Section>
            <Hero>
                <h1>Welcome To YOUR Community!</h1>
                <img src="/images/Hero.svg" alt= "" />    
                
            </Hero>
            <Form>
                <Google onClick = { () => history.push('/home')}>
                    
                    <img src="/images/google-icon.svg" alt= ""/>
                    Sign In With Google
                </Google>
            </Form>
        </Section>
    </Container>
    )
}

const Container = styled.div``

const Nav = styled.nav` 
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;
    
    & > a {
        width: 137px;
        height: 35px;
        @media (max-width: 760px){
            padding: 0 5px;
        }
    }
    `

    const Join = styled.a`
        font-size: 16px;
        padding: 12px 16px;
        text-decoration: none;
        border-radius: 10px;
        color: rgba(0,0,0,0.6);
        margin-right: 12px;
        
        &:hover{
            background-color: rgba(0,0,0,0.08);
            color: rgba(0,0,0,0.9);
            cursor: pointer;
        }
    
    `
    const SignIn = styled.a`
        box-shadow: inset 0 0 0 1px #ff4133;
        color: #ff4133;
        border-radius: 24px;
        transition-duration: 167ms;
        font-size: 16px;
        font-weight: 600;
        line-height: 40px;
        padding: 10px 24px;

        &:hover{
            background-color:#f4d4a2;
            cursor: pointer;
        }
    `
    const Section = styled.section`
    display:flex;
    align-content: start;
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto;

    @media (max-width: 760px){
        margin: auto;
        min-height: 0px;
    }
    `
    const Hero = styled.div`
        width: 100%;
        h1{
            padding-bottom: 0;
            width: 55%;
            font-size: 55px;
            color: #ff4133;
            font-weight: 200;
            line-height: 70px;
            @media (max-width: 760px){
                text-align: center;
                font-size: 20px;
                line-height: 35px;
                width: 100%;
            }
        }

        img{
           /* z-index: -1; */
           width: 700px;
           position: absolute;
           bottom: 200px;
           right: -80px;
           @media(max-width: 768px){
            top: 530px;
            width: initial;
            position: initial;
            height: initial;

           }


        }
    `
    const Form = styled.div`
        margin-top: 100px;
        width: 408px;
        @media(max-width: 768px){
            margin-top:20px;
        }
   `

    const Google = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 56px;
        width: 80%;
        border-radius: 28px;
        background-color: #fff;
        box-shadow: inset 0 0 0 1px rgb( 0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%), inset 0 0 0 1px rgb( 0 0 0 /0%);
        img{
            width: 100%;
            max-width: 20px;
        }
        vertical-align: middle;
        z-index: 0;
        transition-duration: 168ms;
        font-size: 20px;
        color: rgba(0, 0 ,0 ,0.6);
        &:hover{
            cursor: pointer;
            background-color: rgba( 207, 207 ,207, 0.25);
        }
        @media(max-width:768px){
            width: 100%;
        }
    `


const mapStateToProps = (state) => {
    return{

    }
}



const mapDispatchToProps = (dispatch) => ({
    signIn: () => dispatch(signInAPI()),
})

export default connect(mapStateToProps,  mapDispatchToProps)(Login)