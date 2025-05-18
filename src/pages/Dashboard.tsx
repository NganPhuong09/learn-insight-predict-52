
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableCellsSplit } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Dashboard = () => {
  // We'll use this for consistent card styling
  const dashboardCardClass = "hover:shadow-lg transition-shadow duration-200";

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Tổng quan về dữ liệu nghiên cứu và các phân tích</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Data Overview Card */}
            <Link to="/data-overview">
              <Card className={dashboardCardClass}>
                <CardHeader className="pb-2">
                  <CardTitle>Tổng quan dữ liệu</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Xem thông tin về bộ dữ liệu và các biến số nghiên cứu.</p>
                </CardContent>
              </Card>
            </Link>
            
            {/* Data Quality Card */}
            <Link to="/data-quality">
              <Card className={dashboardCardClass}>
                <CardHeader className="pb-2">
                  <CardTitle>Chất lượng dữ liệu</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Kiểm tra và xử lý các vấn đề về chất lượng dữ liệu.</p>
                </CardContent>
              </Card>
            </Link>
            
            {/* BSI Overview Card */}
            <Link to="/bsi-overview">
              <Card className={dashboardCardClass}>
                <CardHeader className="pb-2">
                  <CardTitle>BSI Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Thông tin về chỉ số BSI và cách tính toán.</p>
                </CardContent>
              </Card>
            </Link>

            {/* Model Evaluation Card */}
            <Link to="/model-evaluation">
              <Card className={dashboardCardClass}>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <TableCellsSplit className="mr-2 h-5 w-5" />
                    Mô hình
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Đánh giá và so sánh các mô hình dự đoán.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
