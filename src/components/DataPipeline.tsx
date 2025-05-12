
import React from 'react';
import { ArrowRight } from 'lucide-react';

const DataPipeline = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 opacity-0 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pipeline xử lý dữ liệu</h2>
          <p className="text-lg text-gray-600">
            Quy trình xử lý dữ liệu từ các nguồn thô đến mô hình BSI (Behavior Satisfaction Index)
          </p>
        </div>

        <div className="relative">
          {/* Pipeline Steps */}
          <div className="hidden md:flex justify-center items-center mb-10">
            <div className="w-full max-w-5xl flex justify-between relative">
              {/* Connection lines */}
              <div className="absolute top-10 h-1 bg-research-primary/70 w-full z-0"></div>
              
              {/* Step 1 */}
              <div className="relative z-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-research-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                    1
                  </div>
                  <h3 className="font-semibold text-gray-900">Thu thập dữ liệu</h3>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative z-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-research-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-900">Làm sạch dữ liệu</h3>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative z-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-research-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-900">Tạo biến</h3>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative z-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-research-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                    4
                  </div>
                  <h3 className="font-semibold text-gray-900">Mô hình BSI</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-10 relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-10 bottom-10 w-1 bg-research-primary/70 z-0"></div>

            {/* Step 1 */}
            <div className="flex items-start gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-8 h-8 rounded-full bg-research-primary text-white flex items-center justify-center text-sm font-bold z-10">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Thu thập dữ liệu</h3>
                <p className="text-gray-600 text-sm">Tập hợp dữ liệu từ các nguồn như khoá học, người dùng, bình luận, tương tác với video và bài tập</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-8 h-8 rounded-full bg-research-primary text-white flex items-center justify-center text-sm font-bold z-10">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Làm sạch dữ liệu</h3>
                <p className="text-gray-600 text-sm">Xử lý dữ liệu thiếu, loại bỏ nhiễu và chuẩn hóa các biến</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-8 h-8 rounded-full bg-research-primary text-white flex items-center justify-center text-sm font-bold z-10">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Tạo biến</h3>
                <p className="text-gray-600 text-sm">Tạo các biến VEI, EEI và CSI từ dữ liệu người dùng</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-8 h-8 rounded-full bg-research-primary text-white flex items-center justify-center text-sm font-bold z-10">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Mô hình BSI</h3>
                <p className="text-gray-600 text-sm">Xây dựng và huấn luyện mô hình dự đoán hành vi thỏa mãn (BSI)</p>
              </div>
            </div>
          </div>

          {/* Pipeline Details */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Data */}
            <div className="opacity-0 animate-fade-in animate-delay-300 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Dữ liệu đầu vào</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-research-primary mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium">course.json:</span> Thông tin về các khóa học</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-research-primary mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium">user.json:</span> Dữ liệu người dùng</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-research-primary mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium">comment.json:</span> Bình luận của người dùng</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-research-primary mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium">user-video.json:</span> Tương tác của người dùng với video</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-research-primary mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium">user-problem.json:</span> Thông tin về bài tập mà người dùng đã làm</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-research-primary mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium">problem.json:</span> Thông tin bài tập</span>
                </li>
              </ul>
            </div>
            {/* Output - Phân loại mức độ hài lòng */}
<div className="opacity-0 animate-fade-in animate-delay-600 bg-white rounded-lg shadow-md p-6">
  <h3 className="text-xl font-semibold text-gray-900 mb-4">Output - Phân loại mức độ hài lòng</h3>
  <ul className="space-y-3">
    <li className="flex items-start gap-3">
      <ArrowRight className="h-5 w-5 text-research-primary mt-0.5 flex-shrink-0" />
      <span><span className="font-medium">Rất hài lòng:</span> Người dùng có mức độ hài lòng rất cao với khóa học, video, hoặc bài tập.</span>
    </li>
    <li className="flex items-start gap-3">
      <ArrowRight className="h-5 w-5 text-research-primary mt-0.5 flex-shrink-0" />
      <span><span className="font-medium">Hài lòng:</span> Người dùng cảm thấy hài lòng, nhưng có thể có một vài điểm chưa hoàn hảo.</span>
    </li>
    <li className="flex items-start gap-3">
      <ArrowRight className="h-5 w-5 text-research-primary mt-0.5 flex-shrink-0" />
      <span><span className="font-medium">Bình thường:</span> Người dùng cảm thấy bình thường, không có cảm giác đặc biệt tích cực hay tiêu cực.</span>
    </li>
    <li className="flex items-start gap-3">
      <ArrowRight className="h-5 w-5 text-research-primary mt-0.5 flex-shrink-0" />
      <span><span className="font-medium">Không hài lòng:</span> Người dùng cảm thấy không hài lòng, có thể có một số vấn đề cần cải thiện.</span>
    </li>
    <li className="flex items-start gap-3">
      <ArrowRight className="h-5 w-5 text-research-primary mt-0.5 flex-shrink-0" />
      <span><span className="font-medium">Rất không hài lòng:</span> Người dùng rất không hài lòng, có thể do nhiều vấn đề lớn gây ảnh hưởng đến trải nghiệm.</span>
    </li>
  </ul>
</div>

            {/* Data Schema */}
            <div className="opacity-0 animate-fade-in animate-delay-400 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cấu trúc dữ liệu</h3>
              <div className="overflow-auto max-h-64 text-sm">
                <code className="whitespace-pre text-xs text-gray-800 font-mono">
{`root
 |-- user_id: long (nullable = true)
 |-- video_id: long (nullable = true)
 |-- course_id: integer (nullable = true)
 |-- comment_id: long (nullable = true)
 |-- name: string (nullable = true)
 |-- gender: long (nullable = true)
 |-- school: string (nullable = true)
 |-- year_of_birth: long (nullable = true)
 |-- enroll_time: string (nullable = true)
 |-- field: array (nullable = true)
 |    |-- element: string (containsNull = true)
 |-- course_name: string (nullable = true)
 |-- comment_text: string (nullable = true)
 |-- comment_create_time: timestamp (nullable = true)
 |-- video_duration: double (nullable = true)
 |-- rewind_time: double (nullable = true)
 |-- fast_forward_time: double (nullable = true)
 |-- first_local_start_time: string (nullable = true)
 |-- actual_watch_time: double (nullable = true)
 |-- weighted_watch_time: double (nullable = true)
 |-- average_speed: double (nullable = true)
 |-- problem_id: long (nullable = true)
 |-- is_correct: integer (nullable = true)
 |-- attempts: integer (nullable = true)
 |-- score: double (nullable = true)
 |-- ex_submit_time: timestamp_ntz (nullable = true)
 |-- problem_score: double (nullable = true)
 |-- ex_type: long (nullable = true)
 |-- ex_typetext: string (nullable = true)
 |-- exercise_id: integer (nullable = true)
 |-- total_pause_time: double (nullable = true)`}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPipeline;
