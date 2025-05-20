
import React from 'react';
import { Gauge, Video, ClipboardCheck, MessageCircle, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BSIFormula = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Thang đo mức độ hài lòng (Behavioral Satisfaction Index)
          </h2>
          
          <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
            <p className="text-gray-700 mb-6 text-center">
              BSI là chỉ số dự đoán mức độ hài lòng của sinh viên đối với từng khóa học cụ thể, 
              dựa trên hành vi học tập ban đầu.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800 mb-3">
                <Gauge className="w-5 h-5 text-research-primary" />
                Công thức tổng quát
              </h3>
              <div className="bg-white p-6 rounded-lg border border-gray-100 text-center shadow-sm">
                <p className="text-xl font-medium mb-3">
                  BSI = w₁ × VEI + w₂ × EEI + w₃ × CSI
                </p>
                <p className="text-sm text-gray-600 italic">
                  Trong đó: w₁, w₂, w₃ là trọng số tương ứng của các chỉ số VEI, EEI và CSI.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold flex items-center gap-2 text-gray-800 mb-2">
                  <Video className="w-4 h-4 text-purple-500" />
                  VEI
                </h4>
                <p className="text-sm text-gray-600">
                  Video Engagement Index – đo mức độ tương tác của học viên với các nội dung video
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold flex items-center gap-2 text-gray-800 mb-2">
                  <ClipboardCheck className="w-4 h-4 text-teal-500" />
                  EEI
                </h4>
                <p className="text-sm text-gray-600">
                  Exercise Engagement Index – đo mức độ tương tác với bài tập và kết quả thực hiện
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold flex items-center gap-2 text-gray-800 mb-2">
                  <MessageCircle className="w-4 h-4 text-pink-500" />
                  CSI
                </h4>
                <p className="text-sm text-gray-600">
                  Comment Sentiment Index – phân tích cảm xúc trong bình luận của học viên
                </p>
              </div>
            </div>

            {/* Phần tham khảo mới */}
            <Card className="mb-8 bg-gray-50 border-dashed">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-800 mb-4">
                  <BookOpen className="w-5 h-5 text-research-primary" />
                  Cơ sở lý luận cho chỉ số BSI
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <h4 className="font-medium text-research-primary mb-2">Xem video & làm bài tập</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Theo Kizilcec et al. (2013), hai hành vi cốt lõi này là nền tảng của hành vi học MOOC. 
                      Dựa vào chúng, người học có thể được phân loại thành các nhóm hành vi điển hình như: 
                      completing, auditing, disengaging và sampling – phản ánh mức độ cam kết với khóa học.
                    </p>
                    <blockquote className="pl-3 border-l-2 border-research-primary italic text-sm text-gray-600">
                      "Interactions with video lectures and assessments [are] the primary features of most MOOCs."
                      <footer className="text-xs text-gray-500 mt-1">— Kizilcec et al., 2013</footer>
                    </blockquote>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <h4 className="font-medium text-research-primary mb-2">Bình luận (Comment / Forum Participation)</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Bình luận mang tính xây dựng thể hiện mức độ tham gia xã hội và phản ánh tư duy bậc cao của người học. 
                      Nghiên cứu của Liu et al. (2020) cho thấy bình luận tích cực có liên hệ mạnh với kết quả học tập cao 
                      và sự hài lòng trong môi trường học trực tuyến.
                    </p>
                    <blockquote className="pl-3 border-l-2 border-research-primary italic text-sm text-gray-600">
                      "Constructive behavior has a greater impact on the learning outcome…"
                      <footer className="text-xs text-gray-500 mt-1">— Liu et al., 2020</footer>
                    </blockquote>
                  </div>
                </div>
                
                <div className="mt-4 text-sm text-gray-600">
                <p className="font-medium">Tài liệu tham khảo:</p>
              
                {/* New references added */}
                <div className="bg-gray-50 p-4 rounded-lg mt-2">
                  <p className="font-medium">
                    Kizilcec, R. F., Piech, C., & Schneider, E. (2013). Deconstructing Disengagement in MOOCs. In LAK '13: Proceedings of the Third International Conference on Learning Analytics and Knowledge.
                  </p>
                  <a
                    href="https://dl.acm.org/doi/10.1145/2460296.2460330"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-1 mt-1"
                  >
                    🔗 https://dl.acm.org/doi/10.1145/2460296.2460330
                  </a>
                </div>
              
                <div className="bg-gray-50 p-4 rounded-lg mt-2">
                  <p className="font-medium">
                    Liu, Z., Zhang, W., Sun, J., & Cheng, H. (2020). Investigating the Relationship between Learners' Cognitive Participation and Learning Outcome. In CSEDU 2020: Proceedings of the 12th International Conference on Computer Supported Education.
                  </p>
                  <a
                    href="https://doi.org/10.5220/0009338900260033"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-1 mt-1"
                  >
                    🔗 https://doi.org/10.5220/0009338900260033
                  </a>
                </div>
            
              </div>

            
            <div className="text-center">
              <Button asChild>
                <Link to="/bsi-overview" className="flex items-center justify-center">
                  Xem chi tiết
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BSIFormula;
