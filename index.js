const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Dùng middleware để phục vụ các tệp tĩnh từ thư mục 'checkpoint'
app.use(express.static(path.join(__dirname, 'checkpoint')));

// Định tuyến để phục vụ file index.html khi truy cập root URL
app.get('/checkpoint', (req, res) => {
  res.sendFile(path.join(__dirname, 'checkpoint', 'index.html'));
});

// Khởi động máy chủ
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
