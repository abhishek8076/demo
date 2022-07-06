
const  Home=()=>{
    return(<>
    <About value="hi"/>
    <p>hello</p>
    </>

    );
}
export const About=(props)=>{
    return(
        <>
        <p>{props.value}</p>
        </>
    );
}

export default Home;