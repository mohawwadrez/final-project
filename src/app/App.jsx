import React from "react"
import Router from "./router/Router"
import Layout from "./component/Layout"
import './app.css'
const App = () => {
    return (
        <Layout>
            <Router />
        </Layout>
    )
}
export default App;