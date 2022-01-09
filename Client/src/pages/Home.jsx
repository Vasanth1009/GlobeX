import { Button, Form, Input, notification } from 'antd';
import { useState } from 'react';
import homesvg from '../assets/svg/home.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addWordCount } from '../stores/wordCountStore';

function Home() {
  const [webUrl, setWebUrl] = useState('');
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const openNotificationWithIcon = (type, message, duration) => {
    notification[type]({
      message,
      duration: 3,
    });
  };

  const countWords = async () => {
    if (webUrl === '') {
      openNotificationWithIcon('error', 'Enter the URL.');
    } else if (!user) {
      openNotificationWithIcon('warning', 'Need to login or signup first.');
    } else if (webUrl !== '') {
      if (
        webUrl.match(
          /^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i
        )
      ) {
        await axios
          .get(webUrl)
          .then((response) => {
            const words = response.data.replace(/[^A-Za-z']+/g, ' ').trim();
            const totalwords = words.split(' ').filter((word) => word !== '');
            dispatch(
              addWordCount({
                webURL: webUrl,
                count: totalwords.length,
                userId: user.userId,
              })
            );
            openNotificationWithIcon('success', 'Successful');
            navigate('/dashboard');
          })
          .catch((e) => {
            openNotificationWithIcon(
              'error',
              'Please try some other blog site'
            );
          });
      } else {
        openNotificationWithIcon('error', 'Enter the valid URL.');
      }
    }
  };

  return (
    <div className="home">
      <div className="flex justify-evenly">
        <div className="max-w-xl home-left">
          <h1 className="font-extrabold text-6xl tracking-normal leading-tight">
            Unable to check your webpage word count?
          </h1>
          <h4 className="text-2xl font-normal">
            No worries! <span className="logo-name">Globex</span> will guide
            you!
          </h4>
        </div>
        <div>
          <img src={homesvg} alt="home" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-normal">
          Check the last time when you checked the webpage word count.
        </h1>
        <Form className="flex" onFinish={countWords}>
          <Input
            type="text"
            placeholder="Put your website URL here. Eg. https://www.growth.cx/"
            className="url-input"
            onChange={(event) => setWebUrl(event.target.value)}
          />
          <Button
            type="primary"
            className="button url-button"
            htmlType="submit"
          >
            Get insights
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Home;
