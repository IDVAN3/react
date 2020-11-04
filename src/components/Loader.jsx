import React from 'react';
import { Spin } from 'antd';

const Loader = ({ loading, children }) => <Spin tip="Завантаження..." spinning={loading}>{children}</Spin>;

export default Loader;