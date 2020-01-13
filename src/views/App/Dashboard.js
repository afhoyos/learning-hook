import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import { GridComponent } from '../../components/globally/GridComponent';
import { Example1 } from '../../components/hooks/example-1';
import '../../styles/Dashboard.scss';
const { Footer, Content } = Layout;

function App() {
   return (
      <Router>
         <Layout style={{ minHeight: '100vh' }}>
            <Content style={{ padding: '0px 10px', background: '#fff' }}>
               <Row>
                  <Col span={14}>
                     <h3> Go to an example ... </h3>
                     <GridComponent>
                        {' '}
                        <Link to="/example-1">Ex #1</Link>{' '}
                     </GridComponent>
                  </Col>

                  <Col span={10}>
                     <h3> Here examples! </h3>
                     <Switch>
                        <Route path="/example-1">
                           {' '}
                           <>
                              <Example1 />
                           </>
                        </Route>
                     </Switch>
                  </Col>
               </Row>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
               Powered by Andres F. Hoyos (c) 2020
            </Footer>
         </Layout>
      </Router>
   );
}

export default App;
