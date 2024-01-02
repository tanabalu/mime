import React, { useState } from 'react';
import { Typography, Upload, type UploadProps } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import styles from './index.less';

const { Dragger } = Upload;
const { Paragraph } = Typography;

export default function Layout() {
  const [type, setType] = useState('');

  const props: UploadProps = {
    name: 'file',
    maxCount: 1,
    className: styles.upload,
    beforeUpload(file) {
      console.log('before', file);
      setType(file.type);
    },
  };

  return (
    <div className={styles.container}>
      <h2>文件 MIME 检测</h2>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">点击或拖拽文件到此区域</p>
        <p className="ant-upload-hint">
          本地文件 MIME 检测，无数据泄漏风险
        </p>
      </Dragger>
      <p>
        <span className={styles.label}>文件类型：</span>
        <Paragraph copyable>{type || '未知'}</Paragraph>
      </p>
    </div>
  );
}
