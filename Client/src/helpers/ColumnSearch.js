import { Space, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const getColumnSearchProps = (dataIndex) => ({
  filterDropdown: ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
  }) => (
    <div style={{ padding: 8 }}>
      <Input
        placeholder={`Search ${dataIndex}`}
        value={selectedKeys[0]}
        onChange={(e) =>
          setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        onPressEnter={confirm}
        style={{ marginBottom: 8, display: 'block' }}
      />
      <Space>
        <Button onClick={clearFilters} style={{ width: 90 }}>
          Reset
        </Button>
        <Button type="primary" onClick={confirm} icon={<SearchOutlined />}>
          Search
        </Button>
      </Space>
    </div>
  ),
  filterIcon: (filtered) => (
    <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
  ),
  onFilter: (value, record) =>
    record[dataIndex]
      ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
      : '',
});

export default getColumnSearchProps;
