import Navbar from "../navbar";

const DefaultLayout = (props) => {

    return (
        <div className='w-full h-full'>
            <Navbar/>
            <main> { props.children } </main>
        </div>
    );
}
 
export default DefaultLayout;