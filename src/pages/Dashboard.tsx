
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import ModelEvaluationTab from "@/components/ModelEvaluationTab";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview">Tổng quan</TabsTrigger>
            <TabsTrigger value="statistics">Thống kê</TabsTrigger>
            <TabsTrigger value="model">Mô hình</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Tổng quan dự án</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-medium mb-2">Số liệu dữ liệu</h3>
                <p className="text-gray-600">4,298 bản ghi</p>
                <div className="mt-4 h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-medium mb-2">Độ chính xác mô hình</h3>
                <p className="text-gray-600">87%</p>
                <div className="mt-4 h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: "87%" }}></div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-medium mb-2">Xu hướng dự đoán</h3>
                <p className="text-gray-600">Tích cực</p>
                <div className="mt-4 flex items-center">
                  <span className="text-green-500 text-lg">↑</span>
                  <span className="ml-2 text-sm text-gray-500">So với tháng trước</span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="statistics" className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Thống kê chi tiết</h2>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-medium mb-4">Phân phối dữ liệu</h3>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Biểu đồ phân phối dữ liệu</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="model">
            <ModelEvaluationTab />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
