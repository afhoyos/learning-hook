import React from 'react';
import './Dashboard.scss';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
const { Footer, Content } = Layout;

function App() {
   return (
      <Router>
         <Layout style={{ minHeight: '100vh' }}>
            <Content style={{ padding: '0px 10px', background: '#fff' }}>
               <Row>
                  <Col span={14}>
                     <h3> Go to an example ... </h3>
                  </Col>

                  <Col span={10}>
                     <h3> Here examples! </h3>
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
