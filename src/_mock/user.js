import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const userName = [
  'Đặng Mai Anh',
  'Võ Hoàng Long',
  'Lưu Cao Vĩnh Trinh',
  'Đặng Nhật Phi',
  'Dương Vĩnh Nghi',
  'Nguyễn Tiến Dương',
  'Cao Trung Kiên',
  'Trần Bảo Minh',
  'Huỳnh Hiển Bảo Yến',
  'Nguyễn Vũ Minh Thư',
  'Lê Vũ Trung',
  'Phạm Hòa Chính',
  'Nguyễn Hoàng Phi Hùng',
  'Huỳnh Minh Quang',
  'Đỗ Hoàng Khôi',
  'Huỳnh Phạm Hồng Thủy',
  'Nguyễn Hồng Viết',
  'Nguyễn Hữu Tuấn',
  'Huỳnh Trần Mỹ Hoàng',
  'Bùi Phạm Tường Vi',
  'Nguyễn Kim Trình',
  'Nguyễn Phương Bảo Vy',
  'Vũ Mạnh Cường',
  'Trịnh Ngọc Lâm',
  'Lý Thị Bé',
  'Khổng Trung Hiếu',
  'Vũ Huỳnh Nhật Hạ',
  'Hoàng Long Vũ',
  'Nguyễn Vũ Minh Thư',
  'Nguyễn Thị Thu Liên',
  'Nguyễn Minh Quang',
  'Nguyễn Phan Ngọc Tuyên',
  'Lê Châu Minh Nhi',
  'Ngô Minh Nghĩa',
  'Lê Văn Hoàn',
  'Nguyễn Anh Phi',
  'Phùng Thị Hạ Thi',
  'Lý Thị Bé',
  'Vương Thịnh Đạt',
  'Lê Thị Tường Vy',
  'Huỳnh Hiển Bảo Yến',
  'Nguyễn Tiến Huy',
  'Quách Trường An',
  'Hồ Ngọc Hiệp',
  'Trần Bá Vương',
  'Nguyễn Bình Khang',
  'Nguyễn Thị Ngọc Nga',
  'Trần Trương Thu Thủy',
  'Nguyễn Thảotuyết Nhi',
  'Đỗ Hoàng Khôi',
  'Võ Thị Minh Hậu',
  'Trần Tuấn Anh',
];

export const users = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: userName[index],
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer',
  ]),
}));
