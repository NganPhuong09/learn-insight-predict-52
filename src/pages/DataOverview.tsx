import React from "react";

const DataOverview = () => {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold">Giới thiệu bộ dữ liệu sử dụng</h2>
      <p>
        <strong>MOOCCubeX</strong> là một kho dữ liệu quy mô lớn do Nhóm Kỹ
        thuật Tri thức của Đại học Thanh Hoa phát triển, với sự hỗ trợ từ
        XuetangX – một trong những nền tảng MOOC lớn nhất Trung Quốc. Kho dữ
        liệu này được thiết kế nhằm phục vụ cho nghiên cứu về{" "}
        <em>học tập thích ứng</em> trong môi trường các khóa học trực tuyến mở
        rộng (MOOCs).
      </p>

      <h3 className="text-xl font-medium">Đặc điểm nổi bật của MOOCCubeX:</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>Phạm vi rộng:</strong> Thu thập dữ liệu từ nhiều nguồn tài
          nguyên MOOC và giáo dục bên ngoài, bao gồm hành vi học tập, luyện tập
          và thảo luận của sinh viên.
        </li>
        <li>
          <strong>Quy mô lớn:</strong> Với quy mô vượt trội so với các kho dữ
          liệu giáo dục mở khác, hỗ trợ nghiên cứu các mô hình học sâu.
        </li>
        <li>
          <strong>Tổ chức theo khái niệm:</strong> Dữ liệu được tổ chức dựa trên
          các khái niệm chi tiết, giúp dễ truy cập và mô hình hóa.
        </li>
      </ul>

      <h3 className="text-xl font-medium">Cấu trúc dữ liệu bao gồm:</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>4.216 khóa học: tiêu đề, mô tả và tài nguyên liên quan.</li>
        <li>230.263 video: tiêu đề và phụ đề bài giảng.</li>
        <li>358.265 bài tập: thông tin và câu hỏi chi tiết.</li>
        <li>637.572 khái niệm: trích xuất từ nội dung khóa học.</li>
        <li>
          Hơn 296 triệu bản ghi hành vi từ 3.330.294 sinh viên: bao gồm xem
          video, làm bài tập và thảo luận.
        </li>
      </ul>

      <h3 className="text-xl font-medium">Framework dữ liệu:</h3>
      <p>
        Dữ liệu được chia thành hai phần chính:
        <br />
        – <strong>Thông tin về khóa học (Course Resource)</strong>
        <br />
        – <strong>Hành vi của người học (Student Behaviour)</strong>
      </p>
    </div>
  );
};

export default DataOverview;
