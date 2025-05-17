
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseTab from "@/components/CourseTab";

const Dashboard = () => {
  // Demo data for the dashboard
  const demoMetrics = {
    totalStudents: 1250,
    activeCourses: 18,
    averageSatisfaction: 87,
    completionRate: 72,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-col gap-6">
            {/* Page header */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Thống kê tổng quát và dữ liệu về các khóa học.
              </p>
            </div>

            {/* Top metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Học viên</CardTitle>
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{demoMetrics.totalStudents}</div>
                  <p className="text-xs text-muted-foreground">
                    +2.5% so với tháng trước
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Khóa học</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{demoMetrics.activeCourses}</div>
                  <p className="text-xs text-muted-foreground">
                    +1 so với tháng trước
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Mức độ hài lòng</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M8 3v3a2 2 0 0 1-2 2H3" />
                    <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
                    <path d="M3 16h3a2 2 0 0 1 2 2v3" />
                    <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{demoMetrics.averageSatisfaction}%</div>
                  <p className="text-xs text-muted-foreground">
                    +1.2% so với tháng trước
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Tỷ lệ hoàn thành</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{demoMetrics.completionRate}%</div>
                  <p className="text-xs text-muted-foreground">
                    +0.5% so với tháng trước
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Main content tabs */}
            <Tabs defaultValue="courses" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Tổng quan</TabsTrigger>
                <TabsTrigger value="courses">Khóa học</TabsTrigger>
                <TabsTrigger value="students">Học viên</TabsTrigger>
              </TabsList>

              {/* Overview tab content */}
              <TabsContent value="overview" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Tổng quan hoạt động</CardTitle>
                    <CardDescription>
                      Thống kê hoạt động của các khóa học trong 30 ngày qua.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-96">
                    {/* Placeholder for overview charts */}
                    <div className="flex items-center justify-center h-full bg-muted/20 rounded-md">
                      <p className="text-muted-foreground">Biểu đồ thống kê hoạt động</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Courses tab content */}
              <TabsContent value="courses">
                <CourseTab />
              </TabsContent>

              {/* Students tab content */}
              <TabsContent value="students" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Danh sách học viên</CardTitle>
                    <CardDescription>
                      Thông tin của tất cả học viên đã đăng ký.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-96">
                    {/* Placeholder for students list */}
                    <div className="flex items-center justify-center h-full bg-muted/20 rounded-md">
                      <p className="text-muted-foreground">Danh sách học viên sẽ hiển thị ở đây</p>
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
