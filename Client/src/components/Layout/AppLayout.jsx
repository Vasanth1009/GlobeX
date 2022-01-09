import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import TopBar from '../NavigationaBar/TopBar.jsx';

function AppLayout() {
  const { Content } = Layout;

  return (
    <Layout className="layout">
      <TopBar />
      <Content className="content">
        <Outlet />
      </Content>
    </Layout>
  );
}

export default AppLayout;
