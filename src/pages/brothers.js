import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Brother from '../components/brother'

import Grid from '@material-ui/core/Grid';
import Button from 'react-bootstrap/Button'

import './brothers.scss'

import brotherInfo from '../assets/brotherInfo'

import Popup from "reactjs-popup";



const Brothers = (props) => (
    <Layout>
        <Helmet>
            <title>Brothers</title>
            <meta name="description" content="Brothers Page" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Brothers</h1>
                    </header>
                  <Grid container spacing={3}>
                    <Grid item xs={6} sm={2}>
                      <Button>All</Button>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                      <Button>2023</Button>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                      <Button>2022</Button>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                      <Button>2021</Button>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                      <Button>2020</Button>
                    </Grid>
                  </Grid>
                  <br/>
                    <div className={'brotherGrid'}>
                      <Grid container spacing={3}>
                        {brotherInfo.map( obj => {
                          return <Grid item xs={6} sm={3} onClick={ () =>logItem(obj.name)}>
                                    <Brother name={obj.name} img={obj.img}/>
                                </Grid>
                        })}
                      </Grid>
                    </div>
                </div>
            </section>
        </div>
    </Layout>
)

function logItem(item){
  console.log(item)
}

export default Brothers
