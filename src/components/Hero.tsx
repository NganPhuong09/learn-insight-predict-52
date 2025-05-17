
import React, { useState } from 'react';
import { ArrowRight, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";

// Types for satisfaction levels and metrics
type SatisfactionLevel = 'Rất hài lòng' | 'Hài lòng' | 'Bình thường' | 'Không hài lòng' | 'Rất không hài lòng';

type Metric = {
  name: string;
  value: number;
  threshold: number;
  description: string;
};

const Hero = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<SatisfactionLevel | null>(null);

  // Data for the satisfaction levels with percent and color
  const satisfactionLevels = [
    { name: 'Rất hài lòng', percent: 65, color: 'bg-green-500', min: 0.8 },
    { name: 'Hài lòng', percent: 20, color: 'bg-blue-500', min: 0.6 },
    { name: 'Bình thường', percent: 10, color: 'bg-yellow-500', min: 0.5 },
    { name: 'Không hài lòng', percent: 3, color: 'bg-orange-500', min: 0.4 },
    { name: 'Rất không hài lòng', percent: 2, color: 'bg-red-500', min: 0 }
  ];

  // Sample metrics data for each satisfaction level
  const getMetricsForLevel = (level: SatisfactionLevel): Metric[] => {
    const levelData = satisfactionLevels.find(l => l.name === level);
    const minThreshold = levelData?.min || 0;
    
    // For demonstration purposes, generating example metrics
    return [
      {
        name: 'VEI (Video Engagement Index)',
        value: level === 'Rất hài lòng' ? 0.85 : 
               level === 'Hài lòng' ? 0.75 : 
               level === 'Bình thường' ? 0.55 : 
               level === 'Không hài lòng' ? 0.45 : 0.35,
        threshold: minThreshold,
        description: 'Mức độ tương tác với video'
      },
      {
        name: 'EEI (Exercise Engagement Index)',
        value: level === 'Rất hài lòng' ? 0.9 : 
               level === 'Hài lòng' ? 0.65 : 
               level === 'Bình thường' ? 0.58 : 
               level === 'Không hài lòng' ? 0.42 : 0.3,
        threshold: minThreshold,
        description: 'Mức độ tương tác với bài tập'
      },
      {
        name: 'CSI (Comment Sentiment Index)',
        value: level === 'Rất hài lòng' ? 0.82 : 
               level === 'Hài lòng' ? 0.72 : 
               level === 'Bình thường' ? 0.53 : 
               level === 'Không hài lòng' ? 0.38 : 0.25,
        threshold: minThreshold,
        description: 'Chỉ số cảm xúc trong bình luận'
      },
      {
        name: 'BSI (Behavioral Satisfaction Index)',
        value: level === 'Rất hài lòng' ? 0.86 : 
               level === 'Hài lòng' ? 0.70 : 
               level === 'Bình thường' ? 0.55 : 
               level === 'Không hài lòng' ? 0.42 : 0.30,
        threshold: minThreshold,
        description: 'Chỉ số hài lòng tổng hợp'
      }
    ];
  };

  // Handle clicking on a satisfaction level bar
  const handleLevelClick = (level: SatisfactionLevel) => {
    setSelectedLevel(level);
    setDialogOpen(true);
  };

  return (
    <div className="bg-gradient-to-br from-research-light via-white to-research-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-research-primary/30 bg-research-light text-sm text-research-primary font-medium">
              <span className="mr-1">✨</span> Nghiên cứu giáo dục trực tuyến
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Dự đoán sớm <span className="text-research-primary">độ hài lòng</span> của học viên đối với 1 khóa học cụ thể
            </h1>
            <p className="text-lg text-gray-600 md:pr-10">
              Sử dụng học máy và khai phá dữ liệu từ hành vi học tập để dự đoán
              mức độ hài lòng, nâng cao trải nghiệm và chất lượng khóa học trực tuyến.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
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
          
          <div className="opacity-0 animate-fade-in animate-delay-200 lg:flex justify-end">
            <div className="relative">
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
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{item.name}</span>
                          <span className="font-medium">{item.percent}%</span>
                        </div>
                        <div 
                          className="w-full bg-gray-200 rounded-full h-2 cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => handleLevelClick(item.name as SatisfactionLevel)}
                        >
                          <div
                            className={`${item.color} h-2 rounded-full`}
                            style={{ width: `${item.percent}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-3 bg-research-light rounded-lg">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Gợi ý cải thiện:</span> Tăng cường tính tương tác của bài giảng và hỗ trợ học viên kịp thời
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dialog for detailed metrics */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">
              Chi tiết mức độ: {selectedLevel}
            </DialogTitle>
            <DialogDescription className="text-center">
              Thông tin chi tiết các chỉ số đánh giá
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-3">
            {selectedLevel && getMetricsForLevel(selectedLevel).map((metric, index) => (
              <div key={index} className="border rounded-lg p-4 transition-all">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{metric.name}</h4>
                  <span 
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      metric.value >= metric.threshold 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {metric.value.toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{metric.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                  <div
                    className={`h-1.5 rounded-full ${
                      metric.value >= metric.threshold 
                        ? 'bg-green-500' 
                        : 'bg-red-500'
                    }`}
                    style={{ width: `${metric.value * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>0</span>
                  <span className="font-medium">
                    Yêu cầu: ≥ {metric.threshold.toFixed(2)}
                  </span>
                  <span>1.0</span>
                </div>
              </div>
            ))}
            
            <div className="bg-gray-50 p-3 rounded-lg mt-4">
              <h5 className="font-medium mb-1">Tiêu chuẩn phân loại</h5>
              <ul className="text-xs space-y-1 text-gray-600">
                <li>• Rất hài lòng: tất cả chỉ số ≥ 0.8</li>
                <li>• Hài lòng: 0.6 ≤ chỉ số &lt; 0.8</li>
                <li>• Bình thường: 0.5 ≤ chỉ số &lt; 0.6</li>
                <li>• Không hài lòng: 0.4 ≤ chỉ số &lt; 0.5</li>
                <li>• Rất không hài lòng: chỉ số &lt; 0.4</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Hero;
