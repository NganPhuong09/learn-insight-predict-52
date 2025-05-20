
import React from "react";
import Navbar from "@/components/Navbar";
import { ArrowLeft, BarChart2, BookOpen, Brain, FileCheck, GitCompareArrows, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const ModelOverview = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6">
        <Button 
          variant="outline" 
          onClick={handleBackClick}
          className="mb-4 flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Quay lại
        </Button>
        
        <div className="p-6 space-y-6 bg-white rounded-2xl shadow-md">
          <div className="flex items-center space-x-2">
            <BarChart2 className="h-8 w-8 text-research-primary" />
            <h2 className="text-3xl font-bold text-gray-800">Mô hình dự đoán mức độ hài lòng (BSI)</h2>
          </div>

          <Tabs defaultValue="weight-models" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="weight-models">1. Mô hình tìm trọng số</TabsTrigger>
              <TabsTrigger value="prediction-models">2. Mô hình dự đoán</TabsTrigger>
              <TabsTrigger value="emotion-models">3. Mô hình gán nhãn cảm xúc</TabsTrigger>
            </TabsList>

            {/* Tab 1: Mô hình tìm trọng số */}
            <TabsContent value="weight-models" className="space-y-6 mt-6">
              // ... keep existing code (weight models content)
            </TabsContent>

            {/* Tab 2: Mô hình dự đoán */}
            <TabsContent value="prediction-models" className="space-y-6 mt-6">
              // ... keep existing code (prediction models content)
            </TabsContent>

            {/* Tab 3: Mô hình gán nhãn cảm xúc cho bình luận */}
            <TabsContent value="emotion-models" className="space-y-6 mt-6">
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-gray-700">
                  <span className="font-bold">🎯 Mục tiêu:</span> Gán nhãn cảm xúc cho bình luận của người dùng để phân tích mức độ hài lòng.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Googletrans */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-cyan-500" />
                      Công cụ: Googletrans
                    </CardTitle>
                    <CardDescription>
                      Công cụ xử lý đa ngôn ngữ
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <strong>Ý tưởng:</strong> 
                      <p className="text-sm text-gray-600">
                        Chuẩn hóa ngôn ngữ đầu vào về tiếng Anh để các mô hình và từ điển tiếng Anh có thể xử lý được dữ liệu đa ngôn ngữ.
                      </p>
                    </div>
                    <div>
                      <strong>Ưu điểm:</strong>
                      <p className="text-sm text-gray-600">
                        Tự động, dễ tích hợp, hỗ trợ đa ngôn ngữ, giúp mở rộng phạm vi xử lý bình luận quốc tế.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Phương pháp Từ khóa cảm xúc */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileCheck className="h-5 w-5 text-green-500" />
                      Phương pháp Từ khóa cảm xúc
                    </CardTitle>
                    <CardDescription>
                      Từ điển cảm xúc AFINN
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <strong>Ý tưởng:</strong> 
                      <p className="text-sm text-gray-600">
                        Tách từ trong câu, tra điểm cảm xúc của từng từ trong từ điển AFINN để ước lượng mức độ cảm xúc tổng thể của câu.
                      </p>
                    </div>
                    <div>
                      <strong>Ưu điểm:</strong>
                      <p className="text-sm text-gray-600">
                        Nhanh, đơn giản, giải thích được điểm cảm xúc dựa trên từ khóa, không cần huấn luyện mô hình phức tạp.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Mô hình phân loại cảm xúc */}
                <Card className="border-amber-200 bg-amber-50">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center gap-2">
                        <Brain className="h-5 w-5 text-purple-500" />
                        DistilBERT
                      </CardTitle>
                      <Badge className="bg-amber-500">Đề xuất</Badge>
                    </div>
                    <CardDescription>
                      Fine-tuned trên SST-2
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <strong>Ý tưởng:</strong> 
                      <p className="text-sm text-gray-600">
                        Sử dụng mô hình học sâu DistilBERT được tinh chỉnh trên bộ dữ liệu SST-2 để phân loại cảm xúc toàn câu dựa trên ngữ cảnh đầy đủ.
                      </p>
                    </div>
                    <div>
                      <strong>Ưu điểm:</strong>
                      <p className="text-sm text-gray-600">
                        Độ chính xác cao, hiểu được ngữ nghĩa và mối quan hệ giữa các từ, hiệu quả với các câu dài và phức tạp hơn phương pháp từ điển đơn thuần.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* References Section */}
          // ... keep existing code (references section)
        </div>
      </main>
    </div>
  );
};

export default ModelOverview;

