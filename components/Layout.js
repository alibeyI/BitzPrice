import Head from 'next/head'
import Navbar from './Navbar';


const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>BitzPrice</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/cyborg/bootstrap.min.css" />
            </Head>
            <Navbar />
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}

export default Layout