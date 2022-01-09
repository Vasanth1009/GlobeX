import { Table } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { columns } from '../services/wordCounter-service.js';
import { getWordCounts } from '../stores/wordCountStore.js';

function Dashboard() {
  const user = useSelector((state) => state.user);
  const wordCounts = useSelector((state) => state.wordCounts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWordCounts(user.userId));
  }, [user, dispatch]);

  return (
    <div className="dashboard">
      <div className="pane url-header-pane bg-gray-100">
        {wordCounts.length
          ? wordCounts[0].webURL.slice(0, 50).concat('...')
          : ''}
      </div>
      <div className="pane counter-pane shadow">
        <div className="counter-pane-left">
          <h1 className="font-bold text-2xl">Total Word Count</h1>
          <h1 className="font-extrabold text-8xl text-blue-600">
            {wordCounts.length ? wordCounts[0].count : ''}
          </h1>
        </div>
        <div> "WooHoo! You’re doing a good job!"</div>
      </div>
      <div>
        <h1 className="text-3xl font-bold">Word Count History</h1>
        <Table
          style={{ padding: '14px 0' }}
          scroll={{ x: 1000 }}
          rowKey={(record) => record._id}
          columns={columns}
          dataSource={wordCounts}
        ></Table>
      </div>
    </div>
  );
}

export default Dashboard;
