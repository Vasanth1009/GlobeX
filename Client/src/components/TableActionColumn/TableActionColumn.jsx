import { Space, Popconfirm } from 'antd';
import { useDispatch } from 'react-redux';

import { HiOutlineTrash, HiOutlineStar } from 'react-icons/hi';
import { deleteWordCount, updateWordCount } from '../../stores/wordCountStore';

function TableActionColumn({ record }) {
  const dispatch = useDispatch();

  const confirm = (id) => {
    dispatch(deleteWordCount(id));
  };

  return (
    <div>
      <Space size="middle">
        <HiOutlineStar
          color="#fca311"
          fill={record.isFavorite ? '#fca311' : '#ffffff'}
          onClick={() => {
            record.isFavorite = !record.isFavorite;
            dispatch(updateWordCount(record._id, record));
          }}
        />
        <Popconfirm
          title="Sure to delete?"
          onConfirm={() => confirm(record._id)}
        >
          <HiOutlineTrash color="#D14212" />
        </Popconfirm>
      </Space>
    </div>
  );
}

export default TableActionColumn;
