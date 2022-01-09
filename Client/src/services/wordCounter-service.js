import TableActionColumn from '../components/TableActionColumn/TableActionColumn';
import getColumnSearchProps from '../helpers/ColumnSearch';

export const columns = [
  {
    title: 'URL',
    dataIndex: 'webURL',
    key: 'webURL',
    width: '50%',
    render: (webURL) => `${webURL}`,
    sorter: (a, b) => (a.webURL > b.webURL ? 1 : -1),
    sortDirections: ['ascend', 'descend'],
    ...getColumnSearchProps('webURL'),
  },
  {
    title: 'Word Count',
    dataIndex: 'count',
    key: 'count',
    sorter: (a, b) => (a.count > b.count ? 1 : -1),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    fixed: 'right',
    width: '25%',
    align: 'center',
    render: (_, record) => (
      <TableActionColumn record={record}></TableActionColumn>
    ),
  },
];
