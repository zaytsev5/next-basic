import '../styles/globals.css'
import Navigator from  '../components/Navigator'

function MyApp({ Component, pageProps }) {

    return (
        <div>
            <Navigator />
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
