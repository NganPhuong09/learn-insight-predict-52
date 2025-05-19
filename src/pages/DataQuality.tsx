import React from "react";
import Navbar from "@/components/Navbar";
import { Database, FileCheck, Clock, Check, Shield, Link, ArrowLeft } from "lucide-react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DataQuality = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Navigate back to model evaluation tab
    navigate("/model-evaluation");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* Back button added at the top */}
        <div className="mb-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleGoBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> 
            Trở lại trang đánh giá mô hình
          </Button>
        </div>

        <div className="p-6 space-y-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-gray-800">Chất lượng dữ liệu MOOCCubeX</h2>

          {/* Giới thiệu ngắn gọn */}
          <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
            <p className="text-gray-700 leading-relaxed">
              Chất lượng dữ liệu là yếu tố quan trọng quyết định độ tin cậy của các mô hình và phân tích trong nghiên cứu này. 
              Chúng tôi đánh giá chất lượng dữ liệu MOOCCubeX theo nhiều tiêu chí khác nhau để đảm bảo 
              kết quả nghiên cứu chính xác và đáng tin cậy.
            </p>
          </div>
          
          {/* Hard Dimensions */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <Database className="w-5 h-5 text-amber-500" />
              Chất lượng dữ liệu
            </h3>
            
            <Accordion type="single" collapsible className="w-full">
              {/* Hard Dimensions */}
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
                        <li>Consistency theo Object</li>
                        <li>Consistency theo toàn bộ dataset</li>
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
              
              {/* Soft Dimensions */}
              <AccordionItem value="soft-dimensions">
                <AccordionTrigger className="text-lg font-semibold">
                  Soft Dimensions
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Nghiên cứu về phương pháp đo lường Accuracy gián tiếp khi không có ground truth:
                      Trong lĩnh vực DQ, ta có:
                    </p>
                    
                    <div className="space-y-4">
                      {/* Accuracy */}
                      <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                        <Check className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-base">Accuracy (Độ chính xác)</h4>
                          <p className="text-gray-700">
                            Dữ liệu phải phản ánh đúng thực tế, không có lỗi, sai sót hoặc thông tin sai lệch.
                          </p>
                        </div>
                      </div>
                      
                      {/* Reliability */}
                      <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                        <Shield className="w-5 h-5 mt-1 text-blue-500 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-base">Reliability (Độ Tin Cậy)</h4>
                          <p className="text-gray-700">
                            Đo lường mức độ đúng đắn và ổn định của dữ liệu, đảm bảo rằng dữ liệu phản ánh đúng thực tế.
                          </p>
                        </div>
                      </div>
                      
                      {/* Relevance */}
                      <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                        <Link className="w-5 h-5 mt-1 text-purple-500 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-base">Relevance (Độ Liên Quan)</h4>
                          <p className="text-gray-700">
                            Đánh giá mức độ dữ liệu phù hợp với mục tiêu phân tích hoặc dự đoán.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Navigation buttons */}
          <div className="pt-4 flex flex-col sm:flex-row sm:justify-between gap-4 border-t border-gray-200">
            <p className="text-gray-600">
              Xem thêm thông tin về bộ dữ liệu MOOCCubeX
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="outline">
                <RouterLink to="/data-overview" className="flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4" />
                  <span>Tổng quan dữ liệu</span>
                </RouterLink>
              </Button>
              <Button asChild onClick={handleGoBack}>
                <RouterLink to="/model-evaluation" className="flex items-center gap-1.5">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Về trang mô hình</span>
                </RouterLink>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DataQuality;
