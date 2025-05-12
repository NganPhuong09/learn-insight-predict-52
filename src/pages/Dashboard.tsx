
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart } from "lucide-react";

const Dashboard = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
              <p className="text-gray-600">Trực quan hóa dữ liệu và kết quả dự đoán</p>
            </div>
            
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full md:w-auto grid-cols-3 md:grid-cols-5 gap-2">
                <TabsTrigger value="overview">Tổng quan</TabsTrigger>
                <TabsTrigger value="students">Học viên</TabsTrigger>
                <TabsTrigger value="courses">Khóa học</TabsTrigger>
                <TabsTrigger value="model">Mô hình</TabsTrigger>
                <TabsTrigger value="predictions">Dự đoán</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Tổng học viên</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">2,845</div>
                      <p className="text-xs text-green-600 flex items-center mt-1">
                        <span className="i-lucide-trending-up mr-1"></span>
                        +12.5% so với kỳ trước
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Khóa học</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">128</div>
                      <p className="text-xs text-green-600 flex items-center mt-1">
                        <span className="i-lucide-trending-up mr-1"></span>
                        +5.2% so với kỳ trước
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Tỉ lệ hài lòng</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">85.4%</div>
                      <p className="text-xs text-green-600 flex items-center mt-1">
                        <span className="i-lucide-trending-up mr-1"></span>
                        +3.7% so với kỳ trước
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Độ chính xác mô hình</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">92.3%</div>
                      <p className="text-xs text-green-600 flex items-center mt-1">
                        <span className="i-lucide-trending-up mr-1"></span>
                        +1.4% so với kỳ trước
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Main Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AreaChart className="h-5 w-5 text-research-primary" />
                      <span>Phân bố mức độ hài lòng theo thời gian</span>
                    </CardTitle>
                    <CardDescription>
                      Phân tích xu hướng độ hài lòng của học viên theo các giai đoạn khóa học
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-center justify-center bg-gray-50 rounded-md">
                      <div className="text-gray-500 text-center">
                        <p>Biểu đồ sẽ được hiển thị tại đây</p>
                        <p className="text-sm text-gray-400">Dữ liệu sẽ được cập nhật sau</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Two Column Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Phân bố Video Engagement Index</CardTitle>
                      <CardDescription>
                        Mức độ tương tác của học viên với video bài giảng
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-60 flex items-center justify-center bg-gray-50 rounded-md">
                        <div className="text-gray-500 text-center">
                          <p>Biểu đồ VEI sẽ được hiển thị tại đây</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Phân bố Exercise Engagement Index</CardTitle>
                      <CardDescription>
                        Mức độ tương tác của học viên với bài tập
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-60 flex items-center justify-center bg-gray-50 rounded-md">
                        <div className="text-gray-500 text-center">
                          <p>Biểu đồ EEI sẽ được hiển thị tại đây</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="students">
                <Card>
                  <CardHeader>
                    <CardTitle>Dữ liệu học viên</CardTitle>
                    <CardDescription>
                      Phân tích chi tiết về học viên và hành vi học tập
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-96 flex items-center justify-center">
                      <p className="text-gray-500">Nội dung về học viên sẽ được hiển thị tại đây</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="courses">
                <Card>
                  <CardHeader>
                    <CardTitle>Phân tích khóa học</CardTitle>
                    <CardDescription>
                      Thông tin chi tiết về các khóa học và mức độ tương tác
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-96 flex items-center justify-center">
                      <p className="text-gray-500">Nội dung về khóa học sẽ được hiển thị tại đây</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="model">
                <Card>
                  <CardHeader>
                    <CardTitle>Mô hình BSI</CardTitle>
                    <CardDescription>
                      Phân tích hiệu suất và độ chính xác của mô hình dự đoán
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-96 flex items-center justify-center">
                      <p className="text-gray-500">Thông tin về mô hình sẽ được hiển thị tại đây</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="predictions">
                <Card>
                  <CardHeader>
                    <CardTitle>Kết quả dự đoán</CardTitle>
                    <CardDescription>
                      Phân tích kết quả dự đoán độ hài lòng của học viên
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-96 flex items-center justify-center">
                      <p className="text-gray-500">Kết quả dự đoán sẽ được hiển thị tại đây</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
