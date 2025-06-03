# EduSatisPred: Dự đoán mức độ hài lòng trong học trực tuyến

## Giới thiệu

**EduSatisPred** là một dự án nghiên cứu tập trung vào việc dự đoán mức độ hài lòng của học viên trong môi trường học trực tuyến. Dự án này sử dụng các kỹ thuật học máy tiên tiến để phân tích hành vi học tập ban đầu của học viên (như xem video, làm bài tập và bình luận) nhằm cung cấp một chỉ số sớm về mức độ hài lòng (Behavioral Satisfaction Index - BSI). Mục tiêu chính là cải thiện chất lượng giảng dạy, giảm tỷ lệ bỏ học, tối ưu hóa tài nguyên và nâng cao uy tín của nền tảng học trực tuyến bằng cách cho phép các tổ chức giáo dục kịp thời phát hiện vấn đề và can thiệp sớm.

## Tổng quan nghiên cứu

Nghiên cứu này bao gồm các khía cạnh chính sau:

* **Tính cấp thiết:** Dự đoán sớm mức độ hài lòng của học viên giúp cải thiện chất lượng giảng dạy, giảm tỷ lệ bỏ học, tối ưu hóa tài nguyên và nâng cao uy tín của nền tảng. Việc dự đoán được thực hiện ngay trong quá trình học, thay vì chờ đến khi khóa học kết thúc, cho phép các tổ chức giáo dục kịp thời phát hiện vấn đề và can thiệp sớm để nâng cao trải nghiệm học tập và hiệu quả đào tạo.
* **Bộ dữ liệu:** Sử dụng dữ liệu quy mô lớn từ MOOCCubeX, được phát triển bởi Nhóm Kỹ thuật Tri thức – Đại học Thanh Hoa, với sự hỗ trợ từ nền tảng MOOC lớn nhất Trung Quốc – XuetangX. Bộ dữ liệu này phục vụ nghiên cứu học tập thích ứng trong môi trường học trực tuyến quy mô lớn (MOOC). Bạn có thể truy cập dataset tại [GitHub - MOOCCubeX](https://github.com/THU-KEG/MOOCCubeX).
* **Mô hình dự đoán:** Áp dụng các kỹ thuật học máy tiên tiến để dự đoán mức độ hài lòng theo 5 mức từ dữ liệu hành vi. Đề tài này tập trung vào mức độ tương tác cá nhân của từng học viên (bình luận, làm bài, xem video) để dự đoán mức độ hài lòng bằng các mô hình học máy hiện đại, từ đó mở ra hướng tiếp cận cá nhân hóa và nâng cao hiệu quả phân tích trong giáo dục trực tuyến.

## Thang đo mức độ hài lòng (Behavioral Satisfaction Index - BSI)

BSI là chỉ số dự đoán mức độ hài lòng của sinh viên đối với từng khóa học cụ thể, dựa trên hành vi học tập ban đầu như: xem video, làm bài tập và để lại bình luận.

## Công nghệ sử dụng

Dự án này được xây dựng với các công nghệ sau:

* Vite
* TypeScript
* React
* shadcn-ui
* Tailwind CSS

## Cài đặt và Chạy dự án

Để thiết lập dự án trên môi trường cục bộ, hãy làm theo các bước sau:

1. **Clone repository:**

    ```bash
    git clone <YOUR_GIT_URL>
    ```

2. **Di chuyển vào thư mục dự án:**

    ```bash
    cd <YOUR_PROJECT_NAME>
    ```

3. **Cài đặt các dependency cần thiết:**

    ```bash
    npm i
    ```

4. **Khởi động môi trường phát triển với tính năng auto-reloading và instant preview:**

    ```bash
    npm run dev
    ```

## Triển khai

Bạn có thể triển khai dự án này bằng cách:

* Truy cập [Lovable Project](https://www.google.com/search?q=https://lovable.dev/projects/457b7e19-1163-401c-aaf3-834c5b5cc39f) và nhấp vào "Share" -\> "Publish".
* Để kết nối một domain tùy chỉnh, hãy truy cập Project \> Settings \> Domains và nhấp vào "Connect Domain". Đọc thêm tại: [Setting up a custom domain](https://www.google.com/search?q=https://docs.lovable.dev/tips-tricks/custom-domain%23step-by-step-guide).

## Liên hệ

Nếu có bất kỳ câu hỏi nào, vui lòng liên hệ: nhom4cs313@gmail.com.

-----

© 2024 EduSatisPred. Đồ án nghiên cứu khoa học.