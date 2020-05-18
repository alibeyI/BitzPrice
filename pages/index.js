import Fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Prices from '../components/Prices'
import React, { useState } from 'react'
const Index = ({ bpi }) => {
    return (
    <Layout>
        <div>
            <h1>Welcome to IndexPrice👋</h1>
            <p>Check current bitcoin rate</p>
            <Prices bpi={bpi} />
        </div>
    </Layout>
)
}

Index.getInitialProps = async function () {
    const result = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await result.json();
        return {
            bpi: data
        }
}

export default Index