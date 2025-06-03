import React from 'react';
import { TrendingUp, Database, BarChart, BookOpen, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ResearchOverview = () => {
  const features = [
    {
      icon: <TrendingUp className="h-5 w-5 text-research-primary" />,
      title: "Tính cấp thiết",
      description: "Dự đoán sớm mức độ hài lòng của học viên giúp cải thiện chất lượng giảng dạy, giảm tỷ lệ bỏ học, tối ưu hóa tài nguyên và nâng cao uy tín của nền tảng. Việc dự đoán được thực hiện ngay trong quá trình học, thay vì chờ đến khi khóa học kết thúc, cho phép các tổ chức giáo dục kịp thời phát hiện vấn đề và can thiệp sớm để nâng cao trải nghiệm học tập và hiệu quả đào tạo.",
      link: ""
    },
    {
      icon: <Database className="h-5 w-5 text-research-primary" />,
      title: "Bộ dữ liệu",
      description: "Sử dụng dữ liệu từ MOOCCubeX với nhiều đặc trưng về hành vi học tập, tương tác và kết quả của học viên.",
      link: "/data-overview"
    },
    {
      icon: <BarChart className="h-5 w-5 text-research-primary" />,
      title: "Mô hình dự đoán",
      description: "Áp dụng các kỹ thuật học máy tiên tiến để dự đoán mức độ hài lòng theo 5 mức từ dữ liệu hành vi.",
      link: "/model-overview"
    },
    {
      icon: <BookOpen className="h-5 w-5 text-research-primary" />,
      title: "Tính mới",
      description: "Không giống các nghiên cứu trước chỉ phân tích thông số khóa học ở mức tổng thể, đề tài này tập trung vào mức độ tương tác cá nhân của từng học viên (bình luận, làm bài, xem video) để dự đoán mức độ hài lòng bằng các mô hình học máy hiện đại, từ đó mở ra hướng tiếp cận cá nhân hóa và nâng cao hiệu quả phân tích trong giáo dục trực tuyến.",
      link: ""
    }
  ];

  return (
    <div id="research-overview" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 opacity-0 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tổng quan nghiên cứu</h2>
          <p className="text-lg text-gray-600">
            Nghiên cứu tập trung dự đoán mức độ hài lòng của học viên dựa trên hành vi học tập ban đầu, 
            nhằm cải thiện chất lượng và trải nghiệm khóa học trực tuyến.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`opacity-0 animate-fade-in ${feature.link ? "cursor-pointer hover:shadow-md transition-shadow" : ""}`} 
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              onClick={() => feature.link && window.location.assign(feature.link)}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-research-light">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
                {feature.link && (
                  <div className="mt-4 flex justify-end">
                    <Link to={feature.link} className="text-research-primary hover:underline flex items-center text-sm font-medium">
                      Xem chi tiết <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 opacity-0 animate-fade-in animate-delay-500">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Mục tiêu nghiên cứu</CardTitle>
              <CardDescription>Hướng đến giải quyết các vấn đề thực tiễn trong giáo dục trực tuyến</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <div className="min-w-[24px] flex justify-center">
                  <div className="w-6 h-6 rounded-full bg-research-primary flex items-center justify-center text-white font-bold text-sm">1</div>
                </div>
                <p className="text-gray-700">Xác định sớm mức độ hài lòng của học viên để cải thiện trải nghiệm kịp thời</p>
              </div>
        
              <div className="flex gap-3">
                <div className="min-w-[24px] flex justify-center">
                  <div className="w-6 h-6 rounded-full bg-research-primary flex items-center justify-center text-white font-bold text-sm">2</div>
                </div>
                <p className="text-gray-700">Phân tích các yếu tố ảnh hưởng đến sự hài lòng trong học tập trực tuyến</p>
              </div>
        
              <div className="flex gap-3">
                <div className="min-w-[24px] flex justify-center">
                  <div className="w-6 h-6 rounded-full bg-research-primary flex items-center justify-center text-white font-bold text-sm">3</div>
                </div>
                <p className="text-gray-700">Xây dựng mô hình dự đoán tự động dựa trên dữ liệu hành vi học tập</p>
              </div>

        
              <div className="flex gap-3">
                <div className="min-w-[24px] flex justify-center">
                  <div className="w-6 h-6 rounded-full bg-research-primary flex items-center justify-center text-white font-bold text-sm">4</div>
                </div>
                <p className="text-gray-700">Đo lường và kiểm soát chất lượng dữ liệu, nếu phát hiện lỗi thời thì tự động đào tạo lại mô hình</p>
              </div>
        
              <div className="flex gap-3">
                <div className="min-w-[24px] flex justify-center">
                  <div className="w-6 h-6 rounded-full bg-research-primary flex items-center justify-center text-white font-bold text-sm">5</div>
                </div>
                <p className="text-gray-700">Theo dõi và đánh giá hiệu quả mô hình theo thời gian</p>
              </div>
        
              <div className="flex gap-3">
                <div className="min-w-[24px] flex justify-center">
                  <div className="w-6 h-6 rounded-full bg-research-primary flex items-center justify-center text-white font-bold text-sm">6</div>
                </div>
                <p className="text-gray-700">Tối ưu phân bổ tài nguyên giảng dạy nhờ dự báo sớm</p>
              </div>
      
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResearchOverview;
