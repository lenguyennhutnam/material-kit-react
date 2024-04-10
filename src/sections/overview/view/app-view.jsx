/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
// import { useState } from 'react';
import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// import Iconify from 'src/components/iconify';

// import AppTasks from '../app-tasks';
import AppNewsUpdate from '../app-news-update';
import AppOrderTimeline from '../app-order-timeline';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
// import AppTrafficBySite from '../app-traffic-by-site';
import AppCurrentSubject from '../app-current-subject';
import AppConversionRates from '../app-conversion-rates';

// Thêm hàm lấy ngẫu nhiên một người dùng từ mảng

// ----------------------------------------------------------------------
function randomArray(length, min, max) {
  let res = [];
  for (let i = 0; i < length; i++) {
    res.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return res;
}

const contentLabel = [
  'Chống phá Đảng',
  'Phân biệt chủng tộc',
  'Phân biệt giới tính',
  'Người lớn (18+)',
  'Bạo lực',
];
const lineChartData = [
  randomArray(11, 15, 70),
  randomArray(11, 30, 50),
  randomArray(11, 20, 80),
  randomArray(11, 30, 100),
  randomArray(11, 40, 110),
];
const contents = [
  {
    name: 'Chống phá Đảng',
    value: lineChartData[0].reduce((total, current) => total + current, 0),
  },
  {
    name: 'Phân biệt chủng tộc',
    value: lineChartData[1].reduce((total, current) => total + current, 0),
  },
  {
    name: 'Phân biệt giới tính',
    value: lineChartData[2].reduce((total, current) => total + current, 0),
  },
  {
    name: 'Người lớn (18+)',
    value: lineChartData[3].reduce((total, current) => total + current, 0),
  },
  {
    name: 'Bạo lực',
    value: lineChartData[4].reduce((total, current) => total + current, 0),
  },
];
function splitNumberRandomly(originalNumber, number) {
  let splitNumbers = [];

  // Generate four random numbers
  for (let i = 0; i < number; i++) {
    let randomNumber = Math.floor(Math.random() * originalNumber);
    splitNumbers.push(randomNumber);
    originalNumber -= randomNumber;
  }

  // The fifth number is whatever remains to ensure the sum remains unchanged
  splitNumbers.push(originalNumber);

  return splitNumbers;
}

// ----------------------------------------------------------------------
function setMail(str) {
  const accentuatedChars =
    'àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴĐ';
  const unaccentuatedChars =
    'aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyydAAAAAAAAAAAAAAAAAEEEEEEEEEEEIIIIIOOOOOOOOOOOOOOOOOUUUUUUUUUUUYYYYYD';

  const charMap = {};
  for (let i = 0; i < accentuatedChars.length; i++) {
    charMap[accentuatedChars.charAt(i)] = unaccentuatedChars.charAt(i);
  }

  return str
    .split('')
    .map((char) => charMap[char] || char)
    .join('');
}
export default function AppView() {
  const vietnameseNames = [
    'Nguyễn Văn An',
    'Trần Thị Bình',
    'Lê Văn Cường',
    'Phạm Thị Dung',
    'Hoàng Văn Em',
    'Nguyễn Thị Nhung',
    'Trần Văn Giang',
    'Lê Thị Hà',
    'Phạm Văn Tú',
    'Hoàng Thị Thắm',
  ];
  const vietnameseUsers = vietnameseNames.map((name, index) => ({
    id: index + 1,
    title: name,
    description: `${setMail(name.split(' ')[2] + name.split(' ')[0] + name.split(' ')[1]).toLowerCase()}@gmail.com`, // Email sẽ lấy phần họ của tên và ghép với domain example.com
    image: `/assets/images/avatars/avatar_${index + 1}.jpg`, // Hình ảnh (đã có sẵn)
    postedAt: faker.date.recent(), // Ngày đăng ký (tạo ngẫu nhiên)
  }));
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Thống kê nội dung độc hại
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title={contents[0].name}
            total={contents[0].value}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title={contents[1].name}
            total={contents[1].value}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title={contents[2].name}
            total={contents[2].value}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title={contents[3].name}
            total={contents[3].value}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title={contents[4].name}
            total={contents[4].value}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_baoluc.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            chart={{
              labels: [
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
                '12/01/2023',
                '01/09/2024',
                '02/01/2024',
                '03/01/2024',
              ],
              series: [
                {
                  name: 'Chống phá Đảng',
                  type: 'line',
                  fill: 'solid',
                  data: lineChartData[0],
                },
                {
                  name: 'Phân biệt chủng tộc',
                  type: 'line',
                  fill: 'solid',
                  data: lineChartData[1],
                },
                {
                  name: 'Phân biệt giới tính',
                  type: 'line',
                  fill: 'solid',
                  data: lineChartData[2],
                },
                {
                  name: 'Người lớn (18+)',
                  type: 'line',
                  fill: 'solid',
                  data: lineChartData[3],
                },
                {
                  name: 'Bạo lực',
                  type: 'line',
                  fill: 'solid',
                  data: lineChartData[4],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={1} md={1} lg={4}>
          <AppCurrentVisits
            chart={{
              series: [
                { label: contents[0].name, value: contents[0].value },
                { label: contents[1].name, value: contents[1].value },
                { label: contents[2].name, value: contents[2].value },
                { label: contents[3].name, value: contents[3].value },
                { label: contents[4].name, value: contents[4].value },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="Top 10 Web truy cập nhiều nhất"
            subheader="(+43%) than last month"
            chart={{
              series: [
                { label: 'nettruyen.com', value: 400 },
                { label: 'Gamevui.com', value: 430 },
                { label: 'Truyensex.com', value: 448 },
                { label: 'facebook.com', value: 470 },
                { label: 'xlxx.com', value: 540 },
                { label: 'Phimmoi.net', value: 580 },
                { label: 'Youtube.com', value: 690 },
                { label: 'Truyentranh.com', value: 780 },
                { label: '18+.net', value: 700 },
                { label: 'Dovui.net', value: 500 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Tỷ lệ nội dung truy cập"
            chart={{
              categories: [
                'Chơi Game',
                'Xem Phim',
                'Học Tập',
                'Đọc truyện',
                'Web Đồi Trụy',
                'Nghe Nhạc',
              ],
              series: [
                { name: 'Loại 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Loại 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Loại 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="Người dùng vừa đăng ký"
            list={vietnameseUsers}
            // list={[...Array(5)].map((_, index) => ({

            // id: faker.string.uuid(),
            // title: faker.person.jobTitle(),
            // description: faker.commerce.productDescription(),
            // image: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            // postedAt: faker.date.recent(),

            // }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Web truy cập mới nhất"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [' vlxx.com', ' truyensex.com', ' 18plus.com', ' hentai.com', ' vietan.com'][
                index
              ],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid>

        {/* <Grid xs={12} md={6} lg={4}>
          <AppTrafficBySite
            title="Traffic by Site"
            list={[
              {
                name: 'FaceBook',
                value: 323234,
                icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,
              },
              {
                name: 'Google',
                value: 341212,
                icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,
              },
              {
                name: 'Linkedin',
                value: 411213,
                icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,
              },
              {
                name: 'Twitter',
                value: 443232,
                icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,
              },
            ]}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={8}>
          <AppTasks
            title="Tasks"
            list={[
              // { id: '1', name: 'Create FireStone Logo' },
              // { id: '2', name: 'Add SCSS and JS files if required' },
              // { id: '3', name: 'Stakeholder Meeting' },
              // { id: '4', name: 'Scoping & Estimations' }, 
              // { id: '5', name: 'Sprint Showcase' },
            ]}
          />
        </Grid> */}
      </Grid>
    </Container>
  );
}
