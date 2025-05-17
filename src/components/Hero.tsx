import React, { useState } from 'react';
import { BarChart2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Hero = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const satisfactionLevels = [
    { name: 'Rất hài lòng', percent: 65, color: 'bg-green-500', threshold: 0.80 },
    { name: 'Hài lòng', percent: 20, color: 'bg-blue-500', threshold: 0.60 },
    { name: 'Bình thường', percent: 10, color: 'bg-yellow-500', threshold: 0.50 },
    { name: 'Không hài lòng', percent: 3, color: 'bg-orange-500', threshold: 0.40 },
    { name: 'Rất không hài lòng', percent: 2, color: 'bg-red-500', threshold: 0.30 },
  ];

  const mockCourses = {
    "Rất hài lòng": [
      { id: 1, name: "Lập Trình Web Nâng Cao", bsi: 0.87, vei: 0.89, eei: 0.92, csi: 0.85 },
      { id: 2, name: "Machine Learning cơ bản", bsi: 0.84, vei: 0.83, eei: 0.82, csi: 0.88 },
    ],
    "Hài lòng": [
      { id: 3, name: "Python cho người mới bắt đầu", bsi: 0.72, vei: 0.75, eei: 0.78, csi: 0.64 },
      { id: 4, name: "Thuật toán cơ bản", bsi: 0.65, vei: 0.82, eei: 0.61, csi: 0.70 },
    ],
    "Bình thường": [
      { id: 5, name: "Cơ sở dữ liệu", bsi: 0.56, vei: 0.59, eei: 0.62, csi: 0.49 },
      { id: 6, name: "Front-end cơ bản", bsi: 0.51, vei: 0.48, eei: 0.52, csi: 0.46 },
    ],
    "Không hài lòng": [
      { id: 7, name: "Đồ họa máy tính", bsi: 0.42, vei: 0.45, eei: 0.43, csi: 0.41 },
      { id: 8, name: "IoT cơ bản", bsi: 0.41, vei: 0.44, eei: 0.42, csi: 0.40 },
    ],
    "Rất không hài lòng": [
      { id: 9, name: "Kiến trúc máy tính", bsi: 0.25, vei: 0.28, eei: 0.27, csi: 0.26 },
      { id: 10, name: "Công nghệ phần mềm", bsi: 0.22, vei: 0.25, eei: 0.24, csi: 0.23 },
    ],
  };

  const criteriaByLevel = {
    "Rất hài lòng": {
      description: "Các khóa học có mức độ hài lòng rất cao, với BSI ≥ 0.80.",
      criteria: [
        "VEI ≥ 0.80: Học viên xem video đầy đủ, tương tác tích cực",
        "EEI ≥ 0.80: Hoàn thành hầu hết bài tập với điểm cao",
        "CSI ≥ 0.80: Bình luận tích cực và chi tiết"
      ]
    },
    "Hài lòng": {
      description: "Các khóa học có BSI từ 0.60 đến dưới 0.80.",
      criteria: [
        "0.60 ≤ VEI < 0.80",
        "0.60 ≤ EEI < 0.80",
        "0.60 ≤ CSI < 0.80"
      ]
    },
    "Bình thường": {
      description: "Các khóa học có BSI từ 0.50 đến dưới 0.60.",
      criteria: [
        "0.50 ≤ VEI < 0.60",
        "0.50 ≤ EEI < 0.60",
        "0.50 ≤ CSI < 0.60"
      ]
    },
    "Không hài lòng": {
      description: "Các khóa học có BSI từ 0.40 đến dưới 0.50.",
      criteria: [
        "0.40 ≤ VEI < 0.50",
        "0.40 ≤ EEI < 0.50",
        "0.40 ≤ CSI < 0.50"
      ]
    },
    "Rất không hài lòng": {
      description: "Các khóa học có BSI ≤ 0.30.",
      criteria: [
        "VEI ≤ 0.30",
        "EEI ≤ 0.30",
        "CSI ≤ 0.30"
      ]
    }
  };

  const satisfactionStyles = {
    "Rất hài lòng": { textColor: "text-green-600" },
    "Hài lòng": { textColor: "text-blue-600" },
    "Bình thường": { textColor: "text-yellow-600" },
    "Không hài lòng": { textColor: "text-orange-600" },
    "Rất không hài lòng": { textColor: "text-red-600" },
  };

  return (
    <div className="bg-gradient-to-br from-research-light via-white to-research-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in">
            {/* Hero content */}
          </div>
          <div className="opacity-0 animate-fade-in animate-delay-200 lg:flex justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-research-primary/5 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden w-[28rem]">
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
          </div>
        </div>
      </div>

      <Dialog open={!!selectedLevel} onOpenChange={() => setSelectedLevel(null)}>
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
            <>
              <div className="mb-4">
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  {criteriaByLevel[selectedLevel].criteria.map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ul>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tên khóa học</TableHead>
                    <TableHead>BSI</TableHead>
                    <TableHead>VEI</TableHead>
                    <TableHead>EEI</TableHead>
                    <TableHead>CSI</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockCourses[selectedLevel].map((course) => (
                    <TableRow key={course.id}>
                      <TableCell>{course.name}</TableCell>
                      <TableCell>{course.bsi}</TableCell>
                      <TableCell>{course.vei}</TableCell>
                      <TableCell>{course.eei}</TableCell>
                      <TableCell>{course.csi}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Hero;
