import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Gauge, Video, ClipboardCheck, MessageCircle, BookOpen } from "lucide-react";

const BSIOverview = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6">
         <div className="p-6 space-y-10 bg-white rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Thang đo mức độ hài lòng (Behavioral Satisfaction Index - BSI)
          </h2>

          {/* Giới thiệu chung */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
            BSI là chỉ số dự đoán mức độ hài lòng của sinh viên đối với từng khóa học cụ thể, dựa trên hành vi học tập ban đầu như: xem video, làm bài tập và để lại bình luận.
            <br />
          </div>

          {/* Cơ sở lý luận mới bổ sung */}
          <div className="border border-gray-200 rounded-xl bg-blue-50 p-5">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800 mb-3">
              <BookOpen className="w-5 h-5 text-blue-500" />
              Cơ sở lý luận
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <h4 className="font-semibold text-blue-600 mb-2">Xem video & làm bài tập</h4>
                <p className="text-gray-700 mb-3">
                  Theo Kizilcec et al. (2013), hai hành vi cốt lõi này là nền tảng của hành vi học MOOC. 
                  Dựa vào chúng, người học có thể được phân loại thành các nhóm hành vi điển hình như: 
                  completing, auditing, disengaging và sampling – phản ánh mức độ cam kết với khóa học.
                </p>
                <blockquote className="pl-4 border-l-4 border-blue-200 italic text-gray-600">
                  "Interactions with video lectures and assessments [are] the primary features of most MOOCs."
                  <footer className="text-sm text-gray-500 mt-1">— Kizilcec et al., 2013</footer>
                </blockquote>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <h4 className="font-semibold text-blue-600 mb-2">Bình luận (Comment / Forum Participation)</h4>
                <p className="text-gray-700 mb-3">
                  Bình luận mang tính xây dựng thể hiện mức độ tham gia xã hội và phản ánh tư duy bậc cao của người học. 
                  Nghiên cứu của Liu et al. (2020) cho thấy bình luận tích cực có liên hệ mạnh với kết quả học tập cao 
                  và sự hài lòng trong môi trường học trực tuyến.
                </p>
                <blockquote className="pl-4 border-l-4 border-blue-200 italic text-gray-600">
                  "Constructive behavior has a greater impact on the learning outcome…"
                  <footer className="text-sm text-gray-500 mt-1">— Liu et al., 2020</footer>
                </blockquote>
              </div>
            </div>
            
            <div className="mt-4 text-gray-700">
              <p className="font-medium mb-1">Tài liệu tham khảo:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Kizilcec et al. (2013) – <em>Deconstructing Disengagement in MOOCs</em>.</li>
                <li>Liu et al. (2020) – <em>Investigating the Relationship between Learners' Cognitive Participation and Learning Outcome</em>.</li>
              </ul>
            </div>
          </div>

          {/* Phân loại theo điểm */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Phân loại mức độ hài lòng</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-gray-700">
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-center">
                <div className="font-bold">0</div>
                <div>Rất không hài lòng<br /><span className="text-sm">0.00 – 0.20</span></div>
              </div>
              <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg text-center">
                <div className="font-bold">1</div>
                <div>Không hài lòng<br /><span className="text-sm">0.20 – 0.40</span></div>
              </div>
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
                <div className="font-bold">2</div>
                <div>Bình thường<br /><span className="text-sm">0.40 – 0.60</span></div>
              </div>
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-center">
                <div className="font-bold">3</div>
                <div>Hài lòng<br /><span className="text-sm">0.60 – 0.80</span></div>
              </div>
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-center">
                <div className="font-bold">4</div>
                <div>Rất hài lòng<br /><span className="text-sm">0.80 – 1.00</span></div>
              </div>
            </div>
          </div>
          
          {/* Công thức chung */}
          <div className="border border-gray-200 rounded-xl bg-gray-50 p-5">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800 mb-2">
              <Gauge className="w-5 h-5 text-blue-500" />
              Công thức tổng quát
            </h3>
            <div className="bg-white p-4 rounded-lg border text-center shadow-sm">
              <p className="text-lg font-semibold mb-2">
                BSI = w₁ × VEI + w₂ × EEI + w₃ × CSI
              </p>
              <p className="text-sm text-gray-600 italic">
                Trong đó: w₁, w₂, w₃ là trọng số tương ứng của các chỉ số VEI, EEI và CSI.
              </p>
            </div>
            <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
              <li><strong>VEI:</strong> Video Engagement Index – mức độ tương tác với video</li>
              <li><strong>EEI:</strong> Exercise Engagement Index – mức độ tương tác với bài tập</li>
              <li><strong>CSI:</strong> Comment Sentiment Index – chỉ số cảm xúc trong bình luận</li>
            </ul>
          </div>
        
          {/* VEI */}
          <div className="border border-gray-200 rounded-xl bg-purple-50 p-5">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800 mb-2">
              <Video className="w-5 h-5 text-purple-500" />
              VEI – Video Engagement Index
            </h3>
            <p className="text-gray-700 mb-2">Đo mức độ tương tác của người học với video.</p>
            <div className="bg-white p-4 rounded-lg border text-center shadow-sm mb-3">
              <p className="text-lg font-semibold">
                VEI = α₁ × PTR + α₂ × SBTR + α₃ × WR  + α₄ × average_speed
              </p>
              <p className="text-sm text-gray-600 italic mt-1">
                Trong đó: α₁ đến α₄ là trọng số của các thành phần trong chỉ số VEI.
                <br />
                Tổng trọng số bằng 1.
              </p>
            </div>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li><strong>PTR:</strong> Tỷ lệ dừng</li>
              <li><strong>SBTR:</strong> Tỷ lệ tua lại</li>
              <li><strong>WR: </strong>Tỷ lệ thời gian video ở tốc độ thực tế</li>
              <li><strong>average_speed: </strong>Tốc độ xem trung bình</li>
            </ul>
          </div>
        
          {/* EEI */}
          <div className="border border-gray-200 rounded-xl bg-teal-50 p-5">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800 mb-2">
              <ClipboardCheck className="w-5 h-5 text-teal-500" />
              EEI – Exercise Engagement Index
            </h3>
            <p className="text-gray-700 mb-2">Đo mức độ tương tác với bài tập.</p>
            <div className="bg-white p-4 rounded-lg border text-center shadow-sm mb-3">
              <p className="text-lg font-semibold">
                EEI = α₁ × score_ratio + α₂ × correct_first_try + α₃ × avg_attempts + α₄ × engagement_score + α₅ × consistency_score + α₆ × accuracy_std
              </p>
              <p className="text-sm text-gray-600 italic mt-1">
                Trong đó: α₁ đến α₆ là trọng số của từng yếu tố đánh giá hiệu quả học tập.
                <br>
                Tổng trọng số bằng 1.
              </p>

            </div>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li><strong>Score Ratio:</strong> Tỷ lệ điểm đạt được trên tổng số</li>
              <li><strong>Correct First Try:</strong> Làm đúng ngay lần đầu</li>
              <li><strong>Correct Ratio:</strong> Tỷ lệ làm đúng</li>
              <li><strong>Engagement Score:</strong> Tỷ lệ bài đã làm</li>
              <li><strong>Consistency Score:</strong> Tỷ lệ bài làm đúng liên tiếp</li>
            </ul>
          </div>
        
          {/* CSI */}
          <div className="border border-gray-200 rounded-xl bg-pink-50 p-5">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800 mb-2">
              <MessageCircle className="w-5 h-5 text-pink-500" />
              CSI – Comment Sentiment Index
            </h3>
          
            <p className="text-gray-700 text-sm mb-3">
              Đánh giá cảm xúc trong bình luận của sinh viên.
            </p>
          
            {/* Công thức */}
            <div className="bg-white p-4 rounded-lg border text-center shadow-sm mb-4">
              <p className="text-base font-semibold">
                CSI = sentiment_score × length_score
              </p>
            </div>
          
            {/* Giải thích */}
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li><strong>Sentiment Score:</strong> -1 (tiêu cực), 0 (trung tính), 1 (tích cực)</li>
              <li><strong>Length Bonus:</strong> Dài hơn → trọng số lớn hơn</li>
            </ul>
          
            {/* Mức điểm theo độ dài */}
            <div className="mt-4">
              <h4 className="font-semibold text-sm text-gray-800 mb-2">Mức điểm theo độ dài bình luận:</h4>
              <ul className="list-none text-sm text-gray-700 ml-4 space-y-1">
                <li>- Ngắn (&lt;10 từ): 0.0</li>
                <li>- Trung bình (10–29 từ): 0.2</li>
                <li>- Dài (30–50 từ): 0.4</li>
                <li>- Rất dài (≥50 từ): 0.6</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BSIOverview;
