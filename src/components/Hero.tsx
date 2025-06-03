import React, { useState } from 'react';
import { ArrowRight, BarChart2, Video, ClipboardCheck, MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Hero = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  
  // Các mức độ hài lòng và tiêu chí đánh giá
const satisfactionLevels = [
  { name: 'Rất hài lòng', percent: 65, color: 'bg-green-500', threshold: 0.80 },
  { name: 'Hài lòng', percent: 20, color: 'bg-blue-500', threshold: 0.60 },
  { name: 'Bình thường', percent: 10, color: 'bg-yellow-500', threshold: 0.50 },
  { name: 'Không hài lòng', percent: 3, color: 'bg-orange-500', threshold: 0.40 },
  { name: 'Rất không hài lòng', percent: 2, color: 'bg-red-500', threshold: 0.00 },
];

  
  // Khóa học mẫu cho từng mức độ hài lòng
  const mockCourses = {
  "Rất hài lòng": [
    { 
      id: 1, 
      name: "Lập Trình Web Nâng Cao", 
      bsi: 0.87,
      vei: 0.88,
      eei: 0.91,
      csi: 0.85,
    },
    { 
      id: 2, 
      name: "Machine Learning cơ bản", 
      bsi: 0.83,
      vei: 0.81,
      eei: 0.85,
      csi: 0.84,
    },
  ],
  "Hài lòng": [
    { 
      id: 3, 
      name: "Python cho người mới bắt đầu", 
      bsi: 0.73,
      vei: 0.70,
      eei: 0.68,
      csi: 0.72,
    },
    { 
      id: 4, 
      name: "Thuật toán cơ bản", 
      bsi: 0.66,
      vei: 0.62,
      eei: 0.65,
      csi: 0.67,
    },
  ],
  "Bình thường": [
    { 
      id: 5, 
      name: "Cơ sở dữ liệu", 
      bsi: 0.56,
      vei: 0.54,
      eei: 0.53,
      csi: 0.52,
    },
    { 
      id: 6, 
      name: "Front-end cơ bản", 
      bsi: 0.51,
      vei: 0.50,
      eei: 0.55,
      csi: 0.51,
    },
  ],
  "Không hài lòng": [
    { 
      id: 7, 
      name: "Đồ họa máy tính", 
      bsi: 0.45,
      vei: 0.44,
      eei: 0.46,
      csi: 0.41,
    },
    { 
      id: 8, 
      name: "IoT cơ bản", 
      bsi: 0.43,
      vei: 0.42,
      eei: 0.45,
      csi: 0.40,
    },
  ],
  "Rất không hài lòng": [
    { 
      id: 9, 
      name: "Kiến trúc máy tính", 
      bsi: 0.18,
      vei: 0.20,
      eei: 0.22,
      csi: 0.19,
    },
    { 
      id: 10, 
      name: "Công nghệ phần mềm", 
      bsi: 0.25,
      vei: 0.27,
      eei: 0.24,
      csi: 0.26,
    },
  ],
};


  // Các mô tả và tiêu chí đánh giá cho từng mức độ
 const criteriaByLevel = {
  "Rất hài lòng": {
    description: "Các khóa học có mức độ hài lòng rất cao, với BSI ≥ 0.80.",
    criteria: [
      "BSI ≥ 0.80: Tổng chỉ số hài lòng rất cao",
      "VEI ≥ 0.80: Học viên xem video đầy đủ và tương tác tích cực",
      "EEI ≥ 0.80: Hoàn thành hầu hết bài tập với kết quả tốt",
      "CSI ≥ 0.80: Bình luận tích cực, chi tiết và mang tính xây dựng"
    ]
  },
  "Hài lòng": {
    description: "Các khóa học có mức độ hài lòng cao, với 0.60 ≤ BSI < 0.80.",
    criteria: [
      "0.60 ≤ BSI < 0.80: Tổng chỉ số hài lòng cao",
      "0.60 ≤ VEI < 0.80: Học viên xem phần lớn nội dung video",
      "0.60 ≤ EEI < 0.80: Hoàn thành phần lớn bài tập",
      "0.60 ≤ CSI < 0.80: Bình luận tích cực, hỗ trợ"
    ]
  },
  "Bình thường": {
    description: "Các khóa học có mức độ hài lòng trung bình, với 0.50 ≤ BSI < 0.60.",
    criteria: [
      "0.50 ≤ BSI < 0.60: Tổng chỉ số hài lòng trung bình",
      "0.50 ≤ VEI < 0.60: Học viên xem khoảng một nửa số video",
      "0.50 ≤ EEI < 0.60: Làm bài tập ở mức trung bình",
      "0.50 ≤ CSI < 0.60: Bình luận trung lập hoặc chưa rõ xu hướng"
    ]
  },
  "Không hài lòng": {
    description: "Các khóa học có mức độ hài lòng thấp, với 0.40 ≤ BSI < 0.50.",
    criteria: [
      "0.40 ≤ BSI < 0.50: Tổng chỉ số hài lòng thấp",
      "0.40 ≤ VEI < 0.50: Học viên xem ít video",
      "0.40 ≤ EEI < 0.50: Bài tập ít được hoàn thành",
      "0.40 ≤ CSI < 0.50: Bình luận tiêu cực nhẹ"
    ]
  },
  "Rất không hài lòng": {
    description: "Các khóa học có mức độ hài lòng rất thấp, với BSI ≤ 0.30.",
    criteria: [
      "BSI ≤ 0.30: Tổng chỉ số hài lòng rất thấp",
      "VEI ≤ 0.30: Học viên hầu như không xem video",
      "EEI ≤ 0.30: Hầu như không làm bài tập",
      "CSI ≤ 0.30: Bình luận tiêu cực hoặc không có phản hồi"
    ]
  }
};


  // Định nghĩa style cho các mức độ hài lòng
  const satisfactionStyles = {
    "Rất hài lòng": { bg: "bg-emerald-50", border: "border-emerald-200", textColor: "text-emerald-800" },
    "Hài lòng": { bg: "bg-green-50", border: "border-green-200", textColor: "text-green-800" },
    "Bình thường": { bg: "bg-yellow-50", border: "border-yellow-200", textColor: "text-yellow-800" },
    "Không hài lòng": { bg: "bg-orange-50", border: "border-orange-200", textColor: "text-orange-800" },
    "Rất không hài lòng": { bg: "bg-red-50", border: "border-red-200", textColor: "text-red-800" },
  };
  
  // Hàm kiểm tra xem giá trị có đạt ngưỡng của mức độ hài lòng hay không
  const getCriteriaStatus = (value, level) => {
    const matchedLevel = satisfactionLevels.find(l => l.name === level);
    return value >= matchedLevel.threshold;
  };
  
  // Hàm tạo ra class cho badge
  const getBadgeClass = (value, level) => {
    const isPass = getCriteriaStatus(value, level);
    return isPass 
      ? "bg-green-100 text-green-800 border-green-200" 
      : "bg-red-100 text-red-800 border-red-200";
  };
  
  // Hiển thị giá trị với badge
  const renderValueWithBadge = (value, level) => {
    const isPass = getCriteriaStatus(value, level);
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getBadgeClass(value, level)}`}>
        {value.toFixed(2)} {isPass ? "✓" : "✗"}
      </span>
    );
  };

  return (
    <div className="bg-gradient-to-br from-research-light via-white to-research-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="space-y-6 max-w-5xl mx-auto opacity-0 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-research-primary/30 bg-research-light text-sm text-research-primary font-medium">
              <span className="mr-1">✨</span> Nghiên cứu giáo dục trực tuyến
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Dự đoán sớm <span className="text-research-primary">độ hài lòng</span> của học viên đối với một khóa học cụ thể
            </h1>
            <p className="text-lg text-gray-600 md:pr-10">
              Sử dụng học máy và khai phá dữ liệu từ hành vi học tập để dự đoán
              mức độ hài lòng, nâng cao trải nghiệm và chất lượng khóa học trực tuyến.
            </p>
            <div className="flex items-center justify-center flex-col  sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <Button asChild size="lg" className="bg-research-primary hover:bg-research-primary/90">
                <Link to="/dashboard">
                  Xem Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/data-overview">Khám phá dữ liệu</Link>
              </Button>
            </div>
          </div>
          
          {/* <div className="opacity-0 animate-fade-in animate-delay-200 lg:flex justify-center">
            <div className="relative w-full max-w-4xl">
              <div className="absolute inset-0 bg-research-primary/5 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-research-primary/10 px-5 py-3 flex items-center border-b border-gray-200">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="mx-auto text-sm text-gray-500 font-medium">Kết quả dự đoán</div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Mức độ hài lòng</h3>
                    <BarChart2 className="h-5 w-5 text-research-primary" />
                  </div>
                  
                  <div className="space-y-3">
                    {satisfactionLevels.map((item, index) => (
                      <div 
                        key={index} 
                        className="space-y-1 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors"
                        onClick={() => setSelectedLevel(item.name)}
                      >
                        <div className="flex justify-between text-sm">
                          <span>{item.name}</span>
                          <span className="font-medium">{item.percent}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`${item.color} h-2 rounded-full`}
                            style={{ width: `${item.percent}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      
      {/* Dialog cho phép hiển thị chi tiết khi người dùng click vào mức độ hài lòng */}
      {/* <Dialog open={!!selectedLevel} onOpenChange={() => setSelectedLevel(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className={`text-2xl font-bold ${satisfactionStyles[selectedLevel]?.textColor || ''}`}>
              Chi tiết mức độ: {selectedLevel}
            </DialogTitle>
            <DialogDescription>
              {selectedLevel && criteriaByLevel[selectedLevel]?.description}
            </DialogDescription>
          </DialogHeader>
          
          {selectedLevel && (
            <div className="space-y-6"> */}
              {/* Tiêu chí đánh giá */}
              {/* <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold mb-2">Tiêu chí đánh giá:</h3>
                <ul className="space-y-1">
                  {criteriaByLevel[selectedLevel]?.criteria.map((criterion, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <span className="text-green-600">✓</span> {criterion}
                    </li>
                  ))}
                </ul>
              </div> */}
              
              {/* Danh sách các khóa học thuộc mức độ này */}
              {/* <div>
                <h3 className="text-lg font-semibold mb-3">Các khóa học thuộc mức độ này</h3>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Tên khóa học</TableHead>
                        <TableHead className="text-center">BSI</TableHead>
                        <TableHead className="text-center">
                          <div className="flex items-center justify-center gap-1">
                            <Video className="h-4 w-4 text-purple-500" /> 
                            <span>VEI</span>
                          </div>
                        </TableHead>
                        <TableHead className="text-center">
                          <div className="flex items-center justify-center gap-1">
                            <ClipboardCheck className="h-4 w-4 text-teal-500" /> 
                            <span>EEI</span>
                          </div>
                        </TableHead>
                        <TableHead className="text-center">
                          <div className="flex items-center justify-center gap-1">
                            <MessageCircle className="h-4 w-4 text-pink-500" /> 
                            <span>CSI</span>
                          </div>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedLevel && mockCourses[selectedLevel]?.map((course) => (
                        <TableRow key={course.id}>
                          <TableCell className="font-medium">{course.name}</TableCell>
                          <TableCell className="text-center font-semibold">{course.bsi.toFixed(2)}</TableCell>
                          <TableCell className="text-center">
                            {renderValueWithBadge(course.vei, selectedLevel)}
                          </TableCell>
                          <TableCell className="text-center">
                            {renderValueWithBadge(course.eei, selectedLevel)}
                          </TableCell>
                          <TableCell className="text-center">
                            {renderValueWithBadge(course.csi, selectedLevel)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div> */}
              
              {/* Phân tích vấn đề của khóa học */}
              {/* <div className={`p-4 rounded-lg ${satisfactionStyles[selectedLevel]?.bg} ${satisfactionStyles[selectedLevel]?.border}`}>
                <h3 className="font-semibold mb-2">Đặc điểm của khóa học ở mức độ này:</h3>
                <ul className="space-y-1 text-sm">
                  {selectedLevel === "Rất hài lòng" && (
                    <>
                      <li>• Nội dung video hấp dẫn, tương tác cao</li>
                      <li>• Bài tập thực tế, phù hợp với nội dung học</li>
                      <li>• Cộng đồng học viên tích cực, hỗ trợ nhau</li>
                    </>
                  )}
                  {selectedLevel === "Hài lòng" && (
                    <>
                      <li>• Nội dung video tốt nhưng có thể cải thiện</li>
                      <li>• Bài tập đa dạng, đáp ứng mục tiêu học tập</li>
                      <li>• Phản hồi giữa học viên và giảng viên khá tốt</li>
                    </>
                  )}
                  {selectedLevel === "Bình thường" && (
                    <>
                      <li>• Video dài, thiếu điểm nhấn</li>
                      <li>• Bài tập thường xuyên nhưng chưa thực sự hiệu quả</li>
                      <li>• Tương tác trong cộng đồng học viên hạn chế</li>
                    </>
                  )}
                  {selectedLevel === "Không hài lòng" && (
                    <>
                      <li>• Video thiếu hấp dẫn, khó hiểu</li>
                      <li>• Bài tập không gắn với thực tiễn, quá khó hoặc quá dễ</li>
                      <li>• Ít tương tác, phản hồi chậm từ giảng viên</li>
                    </>
                  )}
                  {selectedLevel === "Rất không hài lòng" && (
                    <>
                      <li>• Video kém chất lượng, hầu như không có tương tác</li>
                      <li>• Bài tập không rõ ràng, thiếu hướng dẫn</li>
                      <li>• Không có hoặc rất ít hỗ trợ từ giảng viên</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog> */}
    </div>
  );
};

export default Hero;
