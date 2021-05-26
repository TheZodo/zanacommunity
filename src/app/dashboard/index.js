import styled from 'styled-components'
import Main from '../components/Main'
import Leftside from '../components/Leftside'
import Rightside from '../components/Rightside'
import Header from '../components/Header'


function Home(props) {
    return (
        <>
        <Header />
        <Layout>
            <Rightside/>
            <Main/>
            <Leftside />
        </Layout>
        </>
    )
}

const Layout =styled.div`login
    display: grid;
    padding-top:200px;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    margin: 25px 0;
    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        padding: 10px 5px;
    }
`

export default Home
