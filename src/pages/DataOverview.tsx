
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Table, BarChart4, FileSpreadsheet, ListFilter } from "lucide-react";

const DataOverview = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Dữ liệu phong phú</h1>
              <p className="text-lg text-gray-600 mb-8">
                Phân tích chi tiết về dữ liệu MOOCCubeX và các đặc trưng học tập của người dùng
              </p>

              {/* Dataset Overview */}
              <Card className="mb-8">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-research-light">
                      <Database className="h-5 w-5 text-research-primary" />
                    </div>
                    <CardTitle>Tổng quan bộ dữ liệu</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Bộ dữ liệu MOOCCubeX được thu thập từ các khóa học trực tuyến lớn, bao gồm dữ liệu về hành vi học tập 
                    của hơn 2,800 học viên qua 128 khóa học khác nhau. Bộ dữ liệu bao gồm thông tin chi tiết về:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Thông tin cá nhân và học thuật của học viên (ẩn danh)</li>
                    <li>Lịch sử tương tác với nội dung khóa học (xem video, tài liệu)</li>
                    <li>Hoạt động làm bài tập và kiểm tra</li>
                    <li>Tương tác trên diễn đàn và bình luận</li>
                    <li>Đánh giá và phản hồi về khóa học</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Data Features */}
              <Card className="mb-8">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-research-light">
                      <Table className="h-5 w-5 text-research-primary" />
                    </div>
                    <CardTitle>Đặc trưng dữ liệu</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-900">Đặc trưng hành vi</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Thời gian xem video</li>
                        <li>Tần suất tạm dừng/tiếp tục</li>
                        <li>Tốc độ phát video</li>
                        <li>Tỷ lệ hoàn thành video</li>
                        <li>Thời gian làm bài tập</li>
                        <li>Số lần thử lại bài tập</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-900">Đặc trưng tương tác</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Số bình luận</li>
                        <li>Độ dài bình luận</li>
                        <li>Thời gian giữa các lần đăng nhập</li>
                        <li>Mức độ tương tác với diễn đàn</li>
                        <li>Phản hồi từ giảng viên</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Data Processing */}
              <Card className="mb-8">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-research-light">
                      <ListFilter className="h-5 w-5 text-research-primary" />
                    </div>
                    <CardTitle>Xử lý dữ liệu</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Quy trình xử lý dữ liệu bao gồm các bước sau để đảm bảo chất lượng và độ tin cậy:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                    <li>Làm sạch dữ liệu - loại bỏ các giá trị thiếu, outliers và dữ liệu không hợp lệ</li>
                    <li>Chuẩn hóa các đặc trưng số học để đưa về cùng thang đo</li>
                    <li>Mã hóa các biến phân loại</li>
                    <li>Tạo các đặc trưng mới từ dữ liệu gốc</li>
                    <li>Chia dữ liệu thành tập huấn luyện và tập kiểm tra</li>
                  </ol>
                </CardContent>
              </Card>

              {/* Feature Engineering */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-research-light">
                      <BarChart4 className="h-5 w-5 text-research-primary" />
                    </div>
                    <CardTitle>Kỹ thuật đặc trưng</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Để nâng cao khả năng dự đoán, chúng tôi xây dựng các chỉ số tổng hợp từ dữ liệu thô:
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Video Engagement Index (VEI)</h3>
                      <p className="text-gray-700">
                        Chỉ số đo lường mức độ tương tác của học viên với nội dung video, tính toán dựa trên thời gian xem, 
                        tốc độ phát, số lần tạm dừng và tỷ lệ hoàn thành.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Exercise Engagement Index (EEI)</h3>
                      <p className="text-gray-700">
                        Đo lường mức độ tham gia làm bài tập của học viên, dựa trên số lượng bài tập hoàn thành, 
                        thời gian làm bài và số lần thử lại.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Social Interaction Score (SIS)</h3>
                      <p className="text-gray-700">
                        Đánh giá mức độ tương tác xã hội của học viên trong khóa học, bao gồm số lượng và chất lượng 
                        bình luận, câu hỏi và phản hồi.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DataOverview;
