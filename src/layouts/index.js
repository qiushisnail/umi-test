import { Layout, Menu } from "antd";
import Link from 'umi/link'
import styles from "./index.css";
import { Component } from 'react';

const { Header, Footer, Content } = Layout;
const { Item } = Menu

export default class extends Component {
  render() {
    const selectedKeys = [this.props.location.pathname]
    return (
      // 上中下布局
      <Layout>
        {/* 页头 */}
        <Header className={styles.header}>
          <img
            className={styles.logo}
            src="https://img.kaikeba.com/logo-new.png"
          />
          <Menu theme='dark' mode='horizontal' style={{ lineHeight: '64px' }}
            selectedKeys={selectedKeys}>

            <Item key='/'>
              <Link to='/'>商品</Link>
            </Item>
            <Item key='/users'>
              <Link to='/users'>用户</Link>
            </Item>
            <Item key='/about'>
              <Link to='/about'>关于</Link>
            </Item>
          </Menu>
        </Header>
        {/* 内容 */}
        <Content className={styles.content}>
          <div className={styles.box}>{this.props.children}</div>
        </Content>
        {/* 页脚 */}
        <Footer className={styles.footer}>开课吧</Footer>
      </Layout>
    );
  }
}
