
import React from 'react';
import { Gauge, Video, ClipboardCheck, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BSIFormula = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Thang đo mức độ hài lòng (Behavioral Satisfaction Index)
          </h2>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
            <p className="text-gray-700 mb-4 text-center">
              BSI là chỉ số dự đoán mức độ hài lòng của sinh viên đối với từng khóa học cụ thể, 
              dựa trên hành vi học tập ban đầu.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800 mb-3">
                <Gauge className="w-5 h-5 text-research-primary" />
                Công thức tổng quát
              </h3>
              <div className="bg-white p-4 rounded-lg border border-gray-100 text-center">
                <p className="text-lg font-medium mb-2">
                  BSI = w₁ × VEI + w₂ × EEI + w₃ × CSI
                </p>
                <p className="text-sm text-gray-600 italic">
                  Trong đó: w₁, w₂, w₃ là trọng số tương ứng của các chỉ số VEI, EEI và CSI.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <h4 className="font-semibold flex items-center gap-2 text-gray-800 mb-2">
                  <Video className="w-4 h-4 text-purple-500" />
                  VEI
                </h4>
                <p className="text-sm text-gray-600">
                  Video Engagement Index – đo mức độ tương tác của học viên với các nội dung video
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <h4 className="font-semibold flex items-center gap-2 text-gray-800 mb-2">
                  <ClipboardCheck className="w-4 h-4 text-teal-500" />
                  EEI
                </h4>
                <p className="text-sm text-gray-600">
                  Exercise Engagement Index – đo mức độ tương tác với bài tập và kết quả thực hiện
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <h4 className="font-semibold flex items-center gap-2 text-gray-800 mb-2">
                  <MessageCircle className="w-4 h-4 text-pink-500" />
                  CSI
                </h4>
                <p className="text-sm text-gray-600">
                  Comment Sentiment Index – phân tích cảm xúc trong bình luận của học viên
                </p>
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
