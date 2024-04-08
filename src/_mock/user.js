import { sample } from 'lodash';

// Danh sách các tên người và công ty Việt Nam (bạn có thể mở rộng danh sách này)
const vietnameseNames = [
  "Nguyễn Văn Anh",
  "Trần Thị Bình",
  "Lê Văn Cương",
  "Phạm Thị Dưỡng",
  "Hoàng Văn Dương",
  "Nguyễn Thị Lan",
  "Trần Văn Hùng",
  "Lê Thị Hương",
  "Phạm Văn Tâm",
  "Đặng Thị Mai",
  "Nguyễn Thành Hưng",
  "Trần Thị Hoa",
  "Lê Văn Đạt",
  "Phạm Thị Linh",
  "Hoàng Thị Ngọc",
  "Nguyễn Văn Bảo",
  "Trần Thị Ngân",
  "Lê Văn Hòa",
  "Phạm Thị Loan",
  "Đặng Văn Tuấn",
  "Nguyễn Thị Thủy",
  "Trần Văn Nam",
  "Lê Thị Ngọc",
  "Phạm Văn Lâm",
  "Hoàng Văn Hùng",
  // Thêm các tên người khác ở đây...
];
const vietnameseNames2 = [
  "Nguyễn Thị Bình",
  "Trần Bình lê",
  "Lê Vũ Cường",
  "Phạm Văn Cường",
  "Hoàng Văn Dương",
  "Nguyễn Thị Lan",
  "Trần Văn Hùng",
  "Lê Văn Hương",
  "Phạm Văn Tâm",
  "Đặng Thị Mai",
  "Nguyễn Văn Hưng",
  "Trần Văn Hoa",
  "Lê Văn Đạt",
  "Phạm Thị Linh",
  "Hoàng Văn Ngọc",
  "Nguyễn Văn Bảo",
  "Trần Thị Ngân",
  "Lê Thị Hòa",
  "Phạm Thị Loan",
  "Đặng Văn Tuấn",
  "Nguyễn Thị Thủy",
  "Trần Thị Nam",
  "Lê Thị Ngọc",
  "Phạm Thị Lâm",
  "Hoàng Văn Hùng",
  // Thêm các tên người khác ở đây...
];


// Hàm chuyển đổi tên người thành email
const nameToEmail = (name) => {
 
  const normalizedName = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
 
  const [firstName, lastName] = normalizedName.split(" ");

  const email = `${firstName}${lastName}@gmail.com`;
  return email;
};



const usersWithEmails = vietnameseNames.map((name) => ({
  name,
  email: nameToEmail(name),
}));

usersWithEmails.sort((a, b) => (a.email > b.email ? 1 : -1));


// Tạo mảng chứa các cặp email của người dùng và email của con tương ứng
// Tạo danh sách email của người giám sát từ vietnameseNames2
const supervisorEmails = vietnameseNames2.map(name => nameToEmail(name));
const mapStatusToColor = (status) => {
  switch (status) {
    case 'active':
      return 'success'; // Màu xanh cho trạng thái active
    case 'deactive':
    case 'banned':
      return 'error'; // Màu đỏ cho trạng thái deactive và banned
    default:
      return 'text.primary';
  }
};
// Tạo dữ liệu người dùng với email của người giám sát tương ứng
export const users = usersWithEmails.map(({ name, email }, index) => {
  const supervisorEmail = supervisorEmails[index];
  const status = sample(['active', 'deactive']);
  return {
    id: index + 1,
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
    name,
    company: email,
    isVerified: Math.random() < 0.5,
    status: sample(['Active', 'Active']),
    role: supervisorEmail,
    color: mapStatusToColor(status),
  };
});
