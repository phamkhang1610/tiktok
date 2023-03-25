const { override, useBabelRc } = require("customize-cra");
// lấy hàm useBabelRC từ thư viên customiz-cra
module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc()
);