
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
      description: "Dự đoán sớm mức độ hài lòng của học viên giúp cải thiện chất lượng giảng dạy, giảm tỷ lệ bỏ học, tối ưu hóa tài nguyên và nâng cao uy tín của nền tảng. Thông qua phân tích dữ liệu và học máy, các tổ chức giáo dục có thể chủ động phát hiện vấn đề, điều chỉnh kịp thời để nâng cao trải nghiệm học tập và hiệu quả đào tạo."
    },
    {
      icon: <Database className="h-5 w-5 text-research-primary" />,
      title: "Dữ liệu phong phú",
      description: "Sử dụng dữ liệu từ MOOCCubeX với nhiều đặc trưng về hành vi học tập, tương tác và kết quả của học viên."
    },
    {
      icon: <BarChart className="h-5 w-5 text-research-primary" />,
      title: "Mô hình dự đoán",
      description: "Áp dụng các kỹ thuật học máy tiên tiến để dự đoán mức độ hài lòng theo 5 mức từ dữ liệu hành vi."
    },
    {
      icon: <BookOpen className="h-5 w-5 text-research-primary" />,
      title: "Tính mới",
      description: "Nếu các nghiên cứu trước đó tập trung vào phân tích các thông số của khóa học để xác định mức độ hài lòng trên mặt bằng chung sinh viên, công trình của chúng tôi mang tính mới qua việc tập trung vào mức độ tương tác của từng học viên để xác định mức độ hài lòng đặc thù của học viên đó. Việc này được thực thi qua việc sử dụng các phương pháp học máy để dự đoán dựa trên các chỉ số cụ thể như bình luận, tần suất làm bài tập, và mức độ xem video bài giảng của học viên." + 
      " - Kết hợp nhiều yếu tố đầu vào: Việc sử dụng nhiều chỉ số như bình luận, mức độ thực hiện bài tập và xem video của học viên để tạo ra một mô hình dự đoán đa chiều là một đóng góp mới cho nghiên cứu về sự hài lòng trong giáo dục." + 
      " - Áp dụng mô hình học máy trong giáo dục: Đề tài sử dụng các phương pháp học máy hiện đại để phân tích dữ liệu và dự đoán mức độ hài lòng của học viên, điều này đánh dấu một bước tiến mới trong nghiên cứu giáo dục." + 
      " - Kết quả tập trung vào học viên: Với mục tiêu dự đoán mức độ hài lòng của từng học viên đối với một khóa học cụ thể, công trình mở ra hướng nghiên cứu mới mang tính cá nhân hóa cao."
    }
  ];

  return (
    <div className="bg-white py-16">
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
            <Card key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
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
                <p className="text-gray-700">Đề xuất các biện pháp cải thiện khóa học dựa trên kết quả dự đoán</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="bg-research-primary hover:bg-research-primary/90">
                <Link to="/dashboard">
                  Khám phá chi tiết <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResearchOverview;
