
import React from 'react';
import { ArrowRight, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
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
                    {[
                      { name: 'Rất hài lòng', percent: 65, color: 'bg-green-500' },
                      { name: 'Hài lòng', percent: 20, color: 'bg-blue-500' },
                      { name: 'Bình thường', percent: 10, color: 'bg-yellow-500' },
                      { name: 'Không hài lòng', percent: 3, color: 'bg-orange-500' },
                      { name: 'Rất không hài lòng', percent: 2, color: 'bg-red-500' },
                    ].map((item, index) => (
                      <div key={index} className="space-y-1">
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
    </div>
  );
};

export default Hero;
