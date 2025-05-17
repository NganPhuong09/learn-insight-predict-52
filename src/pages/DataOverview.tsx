import React from "react";
import Navbar from "@/components/Navbar";
import { BookOpen, Layers, Users, Video, FileText, BrainCircuit, BarChart2, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DataOverview = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="p-6 space-y-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-gray-800">Giới thiệu bộ dữ liệu MOOCCubeX</h2>

          {/* Giới thiệu tổng quan */}
          <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
            <p className="text-gray-700 leading-relaxed">
              <strong>MOOCCubeX</strong> là kho dữ liệu quy mô lớn được phát triển bởi Nhóm Kỹ thuật Tri thức – Đại học Thanh Hoa, với sự hỗ trợ từ nền tảng MOOC lớn nhất Trung Quốc – XuetangX. Bộ dữ liệu này phục vụ nghiên cứu <em>học tập thích ứng</em> trong môi trường học trực tuyến quy mô lớn (MOOC).  
              Bạn có thể truy cập dataset tại {" "}
              <a 
                href="https://github.com/THU-KEG/MOOCCubeX" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:underline"
              >
                GitHub - MOOCCubeX
              </a>.
            </p>
          </div>

          {/* Đặc điểm nổi bật */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-500" />
                Đặc điểm nổi bật
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4">
                <li>
                  <strong>Phạm vi rộng:</strong> Thu thập từ nhiều nguồn tài nguyên giáo dục và hành vi học tập của sinh viên.
                </li>
                <li>
                  <strong>Quy mô lớn:</strong> Hơn 296 triệu bản ghi – vượt trội so với các bộ dữ liệu giáo dục mở khác.
                </li>
                <li>
                  <strong>Tổ chức theo khái niệm:</strong> Dữ liệu được cấu trúc theo khái niệm giúp dễ trình bày và mô hình hóa.
                </li>
              </ul>
            </div>
          </div>


          {/* Cấu trúc dữ liệu */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <FileText className="w-5 h-5 text-green-500" />
              Cấu trúc dữ liệu
            </h3>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 mt-1 text-indigo-500" />
                <p>
                  <strong>4.216 khóa học:</strong> Bao gồm tiêu đề, mô tả, tài nguyên liên quan.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Video className="w-5 h-5 mt-1 text-rose-500" />
                <p>
                  <strong>230.263 video:</strong> Dữ liệu bài giảng gồm tiêu đề và phụ đề.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 mt-1 text-yellow-500" />
                <p>
                  <strong>358.265 bài tập:</strong> Thông tin bài tập và câu hỏi.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <BrainCircuit className="w-5 h-5 mt-1 text-purple-500" />
                <p>
                  <strong>637.572 khái niệm:</strong> Từ nội dung khóa học – giúp tổ chức kiến thức.
                </p>
              </div>
              <div className="flex items-start gap-3 col-span-2">
                <Users className="w-5 h-5 mt-1 text-cyan-500" />
                <p>
                  <strong>296 triệu bản ghi hành vi từ 3.330.294 sinh viên:</strong> Bao gồm xem video, làm bài tập, thảo luận.
                </p>
              </div>
            </div>
          </div>

          {/* Chất lượng dữ liệu */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <Database className="w-5 h-5 text-amber-500" />
              <Link to="/data-quality" className="hover:underline hover:text-blue-600 transition-colors">
                Chất lượng dữ liệu
              </Link>
            </h3>
            <p className="text-gray-700 leading-relaxed pl-4">
              Chất lượng dữ liệu đóng vai trò quan trọng trong hiệu quả của các mô hình dự đoán. 
              Để biết thêm chi tiết về cách đánh giá chất lượng dữ liệu MOOCCubeX, vui lòng 
              <Link to="/data-quality" className="text-blue-600 hover:underline ml-1">xem tại đây</Link>.
            </p>
          </div>
          
          {/* Framework dữ liệu */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <Layers className="w-5 h-5 text-orange-500" />
              Framework của bộ dữ liệu
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Dữ liệu MOOCCubeX được xây dựng dựa trên 2 phần chính:
            </p>
            <ul className="list-disc list-inside text-gray-700 pl-4">
              <li><strong>Thông tin khóa học (Course Resource)</strong></li>
              <li><strong>Hành vi người học (Student Behaviour)</strong></li>
            </ul>
          </div>

          <img 
            src="https://raw.githubusercontent.com/THU-KEG/MOOCCubeX/main/docs/img/framework.png" 
            alt="Framework của bộ dữ liệu MOOCCubeX" 
            className="rounded-xl shadow-md w-full max-w-3xl mx-auto"
          />

          {/* Xem dashboard */}
          <div className="pt-4 flex flex-col sm:flex-row sm:justify-between gap-4 border-t border-gray-200">
            <p className="text-gray-600">
              Bạn có thể xem trực quan hóa chi tiết về dữ liệu học viên và khóa học trong dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="outline">
                <Link to="/dashboard?tab=students" className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  <span>Dữ liệu học viên</span>
                </Link>
              </Button>
              <Button asChild>
                <Link to="/dashboard?tab=courses" className="flex items-center gap-1.5">
                  <BarChart2 className="w-4 h-4" />
                  <span>Xem dashboard</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DataOverview;
