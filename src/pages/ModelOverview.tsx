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
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-gray-700">
                  <span className="font-bold">🎯 Mục tiêu:</span> Tính trọng số các thành phần trong VEI và EEI để phục vụ tính toán chỉ số BSI.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Entropy Model */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileCheck className="h-5 w-5 text-blue-500" />
                      Mô hình Entropy
                    </CardTitle>
                    <CardDescription>
                      Đo độ bất định (information gain) của từng chỉ số con
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <strong>Ý tưởng:</strong> 
                      <p className="text-sm text-gray-600">
                        Chỉ số nào cung cấp nhiều thông tin hơn sẽ có trọng số cao hơn.
                      </p>
                    </div>
                    <div>
                      <strong>Ứng dụng:</strong>
                      <ul className="list-disc list-inside text-sm text-gray-600 pl-2">
                        <li>VEI: Tính entropy của PTR, SBTR, SFTR, WR, CR → chuẩn hóa thành trọng số α₁ đến α₅.</li>
                        <li>EEI: Tương tự với score_ratio, correct_first_try, correct_ratio, engagement_score, consistency_score.</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Ưu điểm:</strong>
                      <p className="text-sm text-gray-600">
                        Đơn giản, không yêu cầu phân phối chuẩn.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* PCA Model */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GitCompareArrows className="h-5 w-5 text-green-500" />
                      Mô hình PCA
                    </CardTitle>
                    <CardDescription>
                      Principal Component Analysis
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <strong>Ý tưởng:</strong> 
                      <p className="text-sm text-gray-600">
                        Biến đổi dữ liệu thành các thành phần chính → xác định tầm quan trọng của từng chỉ số qua phương sai đóng góp.
                      </p>
                    </div>
                    <div>
                      <strong>Ứng dụng:</strong>
                      <ul className="list-disc list-inside text-sm text-gray-600 pl-2">
                        <li>VEI & EEI: Dùng PCA để xác định đặc trưng chính, từ đó tính trọng số dựa trên tỷ lệ phương sai.</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Ưu điểm:</strong>
                      <p className="text-sm text-gray-600">
                        Giảm nhiễu, giảm chiều không gian, làm nổi bật đặc trưng chính.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* CRITIC Model */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-purple-500" />
                      Mô hình CRITIC
                    </CardTitle>
                    <CardDescription>
                      CRiteria Importance Through Intercriteria Correlation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <strong>Ý tưởng:</strong> 
                      <p className="text-sm text-gray-600">
                        Kết hợp độ biến thiên và mối tương quan giữa các chỉ số để xác định trọng số khách quan.
                      </p>
                    </div>
                    <div>
                      <strong>Công thức:</strong>
                      <p className="text-sm font-mono bg-gray-100 p-2 rounded">
                        wi = σi × Σ(1 - corr(i,j))
                      </p>
                    </div>
                    <div>
                      <strong>Ứng dụng:</strong>
                      <p className="text-sm text-gray-600">
                        VEI & EEI: Trọng số αi phản ánh mức đóng góp của từng đặc trưng, cân nhắc cả độ biến thiên và mức "trùng lặp thông tin".
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Tab 2: Mô hình dự đoán */}
            <TabsContent value="prediction-models" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Softmax Regression */}
                <Card className="border-amber-200 bg-amber-50">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Softmax Regression</CardTitle>
                      <Badge className="bg-amber-500">Baseline</Badge>
                    </div>
                    <CardDescription>
                      Mô hình phân loại tuyến tính
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <strong>Mô tả:</strong> 
                      <p className="text-sm text-gray-600">
                        Mô hình phân loại tuyến tính mở rộng từ logistic regression cho bài toán nhiều lớp.
                      </p>
                    </div>
                    <div>
                      <strong>Ứng dụng:</strong>
                      <p className="text-sm text-gray-600">
                        Phân loại BSI thành 5 mức độ từ 0 đến 4. Dùng làm baseline ban đầu, dễ triển khai.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* SVM */}
                <Card>
                  <CardHeader>
                    <CardTitle>Support Vector Machine</CardTitle>
                    <CardDescription>
                      Phân loại bằng siêu phẳng tối ưu
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <strong>Mô tả:</strong> 
                      <p className="text-sm text-gray-600">
                        Phân loại bằng cách tìm siêu phẳng tối ưu, có thể dùng kernel để xử lý phi tuyến.
                      </p>
                    </div>
                    <div>
                      <strong>Ứng dụng:</strong>
                      <p className="text-sm text-gray-600">
                        Phân loại chính xác mức độ BSI trong không gian đặc trưng phức tạp.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* LightGBM */}
                <Card>
                  <CardHeader>
                    <CardTitle>LightGBM</CardTitle>
                    <CardDescription>
                      Mô hình boosting hiệu suất cao
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <strong>Mô tả:</strong> 
                      <p className="text-sm text-gray-600">
                        Mô hình boosting tối ưu tốc độ và bộ nhớ, hoạt động tốt với dữ liệu lớn và nhiều đặc trưng.
                      </p>
                    </div>
                    <div>
                      <strong>Ứng dụng:</strong>
                      <p className="text-sm text-gray-600">
                        Dự đoán BSI từ đặc trưng VEI, EEI, CSI với hiệu suất cao và khả năng xử lý mất cân bằng dữ liệu.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* CatBoost */}
                <Card>
                  <CardHeader>
                    <CardTitle>CatBoost</CardTitle>
                    <CardDescription>
                      Boosting cho dữ liệu phân loại
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <strong>Mô tả:</strong> 
                      <p className="text-sm text-gray-600">
                        Boosting của Yandex, xử lý tốt dữ liệu phân loại và giảm overfitting.
                      </p>
                    </div>
                    <div>
                      <strong>Ứng dụng:</strong>
                      <p className="text-sm text-gray-600">
                        Áp dụng tốt cho thang đo BSI, tận dụng cả đặc trưng liên tục và phân loại.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* GA Stacking */}
                <Card className="border-amber-200 bg-amber-50 md:col-span-2 lg:col-span-1">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>GA Stacking</CardTitle>
                      <Badge className="bg-amber-500">Đề xuất</Badge>
                    </div>
                    <CardDescription>
                      Kết hợp mô hình với thuật toán di truyền
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <strong>Mô tả:</strong> 
                      <p className="text-sm text-gray-600">
                        Kết hợp nhiều mô hình học máy, dùng thuật toán di truyền (Genetic Algorithm) để chọn mô hình và tối ưu trọng số tổ hợp.
                      </p>
                    </div>
                    <div>
                      <strong>Ứng dụng:</strong>
                      <p className="text-sm text-gray-600">
                        Nâng cao độ chính xác bằng cách kết hợp đầu ra của LightGBM, CatBoost, SVM… một cách tối ưu.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
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
          <div className="mt-10">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
              <BookOpen className="h-5 w-5 text-research-primary" />
              Tài liệu tham khảo
            </h3>
            <Separator className="my-4" />
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">Quinlan, J. R. (1986). Induction of Decision Trees. Machine Learning, 1(1), 81–106.</p>
                <a href="https://hunch.net/~coms-4771/quinlan.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1 mt-1">
                  🔗 https://hunch.net/~coms-4771/quinlan.pdf
                </a>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">Shannon, C. E. (1948). A Mathematical Theory of Communication. Bell System Technical Journal, 27(3), 379–423.</p>
                <a href="https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1 mt-1">
                  🔗 https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf
                </a>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">Jolliffe, I. T. (2002). Principal Component Analysis (2nd ed.). Springer.</p>
                <a href="https://cda.psych.uiuc.edu/statistical_learning_course/Jolliffe%20I.%20Principal%20Component%20Analysis%20(2ed.%2C%20Springer%2C%202002).pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1 mt-1">
                  🔗 https://cda.psych.uiuc.edu/statistical_learning_course/Jolliffe%20I.%20Principal%20Component%20Analysis%20(2ed.%2C%20Springer%2C%202002).pdf
                </a>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">Diakoulaki, D., Mavrotas, G., & Papayannakis, L. (1995). Determining Objective Weights in Multiple Criteria Problems: The CRITIC Method. Computers & Operations Research, 22(7), 763–770.</p>
                <a href="https://www.researchgate.net/publication/220470918_Determining_objective_weights_in_multiple_criteria_problems_The_CRITIC_method" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1 mt-1">
                  🔗 https://www.researchgate.net/publication/220470918_Determining_objective_weights_in_multiple_criteria_problems_The_CRITIC_method
                </a>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">Friedman, J., Hastie, T., & Tibshirani, R. (2001). The Elements of Statistical Learning: Data Mining, Inference, and Prediction. Springer.</p>
                <a href="https://www.sas.upenn.edu/~fdiebold/NoHesitations/BookAdvanced.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1 mt-1">
                  🔗 https://www.sas.upenn.edu/~fdiebold/NoHesitations/BookAdvanced.pdf
                </a>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">Ke, G., Meng, Q., Finley, T., et al. (2017). LightGBM: A Highly Efficient Gradient Boosting Decision Tree. In Advances in Neural Information Processing Systems, 30.</p>
                <a href="https://proceedings.neurips.cc/paper/6907-lightgbm-a-highly-efficient-gradient-boosting-decision-tree.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1 mt-1">
                  🔗 https://proceedings.neurips.cc/paper/6907-lightgbm-a-highly-efficient-gradient-boosting-decision-tree.pdf
                </a>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">Dorogush, A. V., Ershov, V., & Gulin, A. (2018). CatBoost: Gradient Boosting with Categorical Features Support. arXiv preprint arXiv:1810.11363.</p>
                <a href="https://arxiv.org/pdf/1810.11363.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1 mt-1">
                  🔗 https://arxiv.org/pdf/1810.11363.pdf
                </a>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">Sivanandam, S. N., & Deepa, S. N. (2007). Introduction to Genetic Algorithms. Springer.</p>
                <a href="https://download.e-bookshelf.de/download/0000/0122/17/L-G-0000012217-0002345540.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1 mt-1">
                  🔗 https://download.e-bookshelf.de/download/0000/0122/17/L-G-0000012217-0002345540.pdf
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModelOverview;
