
import React from "react";
import { BookOpen, Layers, Users, Video, FileText, BrainCircuit, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DataOverview = () => {
  return (
    <div className="p-6 space-y-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold text-gray-800">Giới thiệu bộ dữ liệu MOOCCubeX</h2>

      {/* Giới thiệu tổng quan */}
      <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
        <p className="text-gray-700 leading-relaxed">
          <strong>MOOCCubeX</strong> là kho dữ liệu quy mô lớn được phát triển bởi Nhóm Kỹ thuật Tri thức – Đại học Thanh Hoa, với sự hỗ trợ từ nền tảng MOOC lớn nhất Trung Quốc – XuetangX. Bộ dữ liệu này phục vụ nghiên cứu <em>học tập thích ứng</em> trong môi trường học trực tuyến quy mô lớn (MOOC).
        </p>
      </div>

      {/* Đặc điểm nổi bật */}
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
      {/* Chất lượng dữ liệu - Link to the new page */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <Database className="w-5 h-5 text-amber-500" />
          Chất lượng dữ liệu
        </h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="hard-dimensions">
            <AccordionTrigger className="text-lg font-semibold">
              Hard Dimensions
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              {/* 1. Độ đầy đủ (Completeness) */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-base mb-2">1. Độ đầy đủ (Completeness)</h4>
                
                <div className="pl-3 space-y-2">
                  <h5 className="font-medium text-sm">a. Định nghĩa:</h5>
                  <p className="text-gray-700 text-sm">
                    Độ đầy đủ (Completeness) là mức độ dữ liệu được cung cấp đầy đủ, không thiếu giá trị quan trọng (như NaN hoặc giá trị trống). 
                    Dữ liệu đầy đủ giúp tăng độ chính xác và hiệu quả cho các mô hình phân tích và dự đoán. Thiếu dữ liệu có thể gây sai lệch kết quả, 
                    vì vậy cần đo lường và cải thiện độ đầy đủ trong quá trình xử lý dữ liệu.
                  </p>
                   <h5 className="font-medium text-sm mt-2">b. Công thức:</h5>
                  <div className="pl-3 space-y-1 text-sm">
                    <p><strong>- Completeness theo Object</strong></p>
                    <p className="text-gray-700">
                      Là tỷ lệ các giá trị không bị thiếu (NaN hoặc None) so với tổng số thuộc tính. Giá trị hoàn chỉnh
                      100% khi không có dữ liệu bị thiếu.
                    </p>
                    <p className="italic">
                      Completeness(O) = (Số lượng thuộc tính không bị thiếu / Tổng số thuộc tính) × 100%
                    </p>
                    
                    <p className="mt-2"><strong>- Completeness toàn bộ dataset</strong></p>
                    <p className="text-gray-700">
                      Completeness trung bình trên tất cả các objects với m là số lượng object.
                    </p>
                    <p className="italic">
                      Completeness = ∑ (i=1 đến m) Completeness (O_i) / m
                    </p>
                  </div>
                  
                  <h5 className="font-medium text-sm mt-2">c. Kết quả:</h5>
                  <ul className="list-disc list-inside text-sm pl-3">
                    <li>Completeness theo Object</li>
                    <li>Completeness theo toàn bộ dataset</li>
                  </ul>
                </div>
              </div>

              {/* 2. Tính nhất quán (Consistency) */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-base mb-2">2. Tính nhất quán (Consistency)</h4>
                
                <div className="pl-3 space-y-2">
                  <h5 className="font-medium text-sm">a. Định nghĩa:</h5>
                  <p className="text-gray-700 text-sm">
                    Tính nhất quán: Dữ liệu phải đồng nhất giữa các nguồn và hệ thống khác nhau, không có xung đột
                    hoặc trùng lặp. Ý tưởng đo lường: Được tính bằng tỷ lệ giữa số lượng điều kiện hợp lệ và tổng số điều kiện cần kiểm
                    tra.
                  </p>
                  
                  <h5 className="font-medium text-sm mt-2">b. Công thức:</h5>
                  <div className="pl-3 space-y-1 text-sm">
                    <p><strong>- Consistency theo Object</strong></p>
                    <p className="text-gray-700">
                      Là tỷ lệ giữa số lượng điều kiện hợp lệ trong object và tổng số điều kiện cần kiểm tra.
                      Các loại kiểm tra tính hợp lệ cơ bản:
                    </p>
                    <ul className="list-disc list-inside pl-3 text-gray-700">
                      <li>Miền giá trị (Domain Range): Giá trị nằm trong một khoảng nhất định</li>
                      <li>Dữ liệu không rỗng (Non-null): Không được để trống</li>
                      <li>Loại dữ liệu (Data Type): Phải thuộc kiểu dữ liệu nhất định</li>
                      <li>Ràng buộc logic (Logical Constraints): Giá trị phải thỏa mãn một điều kiện logic</li>
                      <li>Tính duy nhất (Uniqueness): Giá trị không trùng lặp trong tập dữ liệu</li>
                      <li>Tính khóa ngoại (Foreign Key Integrity): Giá trị phải tồn tại trong một danh sách hợp lệ.</li>
                    </ul>
                    <p className="text-gray-700 mt-1">
                      Tính Consistency (tính nhất quán) đánh giá mức độ dữ liệu không mâu thuẫn và tuân theo các quy
                      tắc logic.
                    </p>
                    <p className="italic">
                      Consistency(O) = (Số lượng điều kiện hợp lệ / Tổng số điều kiện cần kiểm tra) × 100%
                    </p>
                    
                    <p className="mt-2"><strong>- Consistency toàn bộ dataset</strong></p>
                    <p className="text-gray-700">
                      Consistency trung bình trên tất cả các objects với m là số lượng object.
                    </p>
                    <p className="italic">
                      Consistency = ∑ (i=1 đến m) Consistency (O_i) / m
                    </p>
                  </div>

                  <h5 className="font-medium text-sm mt-2">c. Kết quả:</h5>
                  <ul className="list-disc list-inside text-sm pl-3">
                    <li>Consistency theo Object</li> Đang được tính toán...
                    <li>Consistency theo toàn bộ dataset</li> Đang được tính toán...
                  </ul>
                </div>
              </div>
              
              {/* 3. Timeliness */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-base mb-2">3. Timeliness</h4>
                
                <div className="pl-3 space-y-2">
                  <h5 className="font-medium text-sm">a. Định nghĩa:</h5>
                  <p className="text-gray-700 text-sm">
                    Tính kịp thời: Dữ liệu phải được cập nhật và phản ánh tình hình hiện tại, không bị lỗi thời.
                    Ý tưởng đo lường: Đo lường mức độ dữ liệu có sẵn đúng thời điểm cần thiết để sử dụng.
                  </p>
                  <h5 className="font-medium text-sm mt-2">b. Công thức:</h5>
                  <div className="pl-3 space-y-1 text-sm">
                    <p><strong>- Timeliness theo Object</strong></p>
                    <p className="text-gray-700">
                      Là tỷ lệ dữ liệu cập nhật đúng hạn.
                    </p>
                    <p className="italic">
                      Timeliness(O) = (Số lần cập nhật đúng hạn / Tổng số lần cập nhật) × 100%
                    </p>
                    
                    <p className="mt-2"><strong>- Timeliness toàn bộ dataset</strong></p>
                    <p className="text-gray-700">
                      Timeliness trung bình trên tất cả các objects với m là số lượng object.
                    </p>
                    <p className="italic">
                      Timeliness = ∑ (i=1 đến m) Timeliness (O_i) / m
                    </p>
                  </div>
                  <h5 className="font-medium text-sm mt-2">c. Kết quả:</h5>
                  <p className="text-gray-700 text-sm">
                    Đang được tính toán...
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
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
  );
};

export default DataOverview;
