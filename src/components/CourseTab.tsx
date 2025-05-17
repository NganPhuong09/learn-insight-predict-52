
import React, { useState } from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

// Sample data for our charts
const courseData = {
  "React Fundamentals": {
    "all": [
      { week: "Week 1", satisfaction: 85, vei: 80, eei: 75, csi: 90 },
      { week: "Week 2", satisfaction: 82, vei: 78, eei: 73, csi: 88 },
      { week: "Week 3", satisfaction: 88, vei: 84, eei: 79, csi: 92 },
      { week: "Week 4", satisfaction: 86, vei: 82, eei: 77, csi: 91 },
      { week: "Week 5", satisfaction: 90, vei: 87, eei: 82, csi: 94 },
      { week: "Week 6", satisfaction: 89, vei: 85, eei: 81, csi: 93 },
      { week: "Week 7", satisfaction: 91, vei: 88, eei: 84, csi: 95 },
      { week: "Week 8", satisfaction: 93, vei: 90, eei: 86, csi: 96 },
    ],
    "week1": [
      { metric: "VEI", value: 80 },
      { metric: "EEI", value: 75 },
      { metric: "CSI", value: 90 },
      { metric: "Overall Satisfaction", value: 85 },
    ],
    "week2": [
      { metric: "VEI", value: 78 },
      { metric: "EEI", value: 73 },
      { metric: "CSI", value: 88 },
      { metric: "Overall Satisfaction", value: 82 },
    ],
    // remaining weeks follow same pattern
    "week3": [
      { metric: "VEI", value: 84 },
      { metric: "EEI", value: 79 },
      { metric: "CSI", value: 92 },
      { metric: "Overall Satisfaction", value: 88 },
    ],
    "week4": [
      { metric: "VEI", value: 82 },
      { metric: "EEI", value: 77 },
      { metric: "CSI", value: 91 },
      { metric: "Overall Satisfaction", value: 86 },
    ],
    "week5": [
      { metric: "VEI", value: 87 },
      { metric: "EEI", value: 82 },
      { metric: "CSI", value: 94 },
      { metric: "Overall Satisfaction", value: 90 },
    ],
    "week6": [
      { metric: "VEI", value: 85 },
      { metric: "EEI", value: 81 },
      { metric: "CSI", value: 93 },
      { metric: "Overall Satisfaction", value: 89 },
    ],
    "week7": [
      { metric: "VEI", value: 88 },
      { metric: "EEI", value: 84 },
      { metric: "CSI", value: 95 },
      { metric: "Overall Satisfaction", value: 91 },
    ],
    "week8": [
      { metric: "VEI", value: 90 },
      { metric: "EEI", value: 86 },
      { metric: "CSI", value: 96 },
      { metric: "Overall Satisfaction", value: 93 },
    ]
  },
  "Advanced TypeScript": {
    "all": [
      { week: "Week 1", satisfaction: 80, vei: 75, eei: 70, csi: 85 },
      { week: "Week 2", satisfaction: 82, vei: 77, eei: 72, csi: 86 },
      { week: "Week 3", satisfaction: 84, vei: 79, eei: 74, csi: 87 },
      { week: "Week 4", satisfaction: 86, vei: 81, eei: 76, csi: 88 },
      { week: "Week 5", satisfaction: 88, vei: 83, eei: 78, csi: 89 },
      { week: "Week 6", satisfaction: 90, vei: 85, eei: 80, csi: 90 },
      { week: "Week 7", satisfaction: 92, vei: 87, eei: 82, csi: 91 },
      { week: "Week 8", satisfaction: 94, vei: 89, eei: 84, csi: 92 },
    ],
    "week1": [
      { metric: "VEI", value: 75 },
      { metric: "EEI", value: 70 },
      { metric: "CSI", value: 85 },
      { metric: "Overall Satisfaction", value: 80 },
    ],
    // Similar pattern for weeks 2-8
    "week2": [
      { metric: "VEI", value: 77 },
      { metric: "EEI", value: 72 },
      { metric: "CSI", value: 86 },
      { metric: "Overall Satisfaction", value: 82 },
    ],
    "week3": [
      { metric: "VEI", value: 79 },
      { metric: "EEI", value: 74 },
      { metric: "CSI", value: 87 },
      { metric: "Overall Satisfaction", value: 84 },
    ],
    "week4": [
      { metric: "VEI", value: 81 },
      { metric: "EEI", value: 76 },
      { metric: "CSI", value: 88 },
      { metric: "Overall Satisfaction", value: 86 },
    ],
    "week5": [
      { metric: "VEI", value: 83 },
      { metric: "EEI", value: 78 },
      { metric: "CSI", value: 89 },
      { metric: "Overall Satisfaction", value: 88 },
    ],
    "week6": [
      { metric: "VEI", value: 85 },
      { metric: "EEI", value: 80 },
      { metric: "CSI", value: 90 },
      { metric: "Overall Satisfaction", value: 90 },
    ],
    "week7": [
      { metric: "VEI", value: 87 },
      { metric: "EEI", value: 82 },
      { metric: "CSI", value: 91 },
      { metric: "Overall Satisfaction", value: 92 },
    ],
    "week8": [
      { metric: "VEI", value: 89 },
      { metric: "EEI", value: 84 },
      { metric: "CSI", value: 92 },
      { metric: "Overall Satisfaction", value: 94 },
    ]
  },
  "Data Science Basics": {
    "all": [
      { week: "Week 1", satisfaction: 75, vei: 70, eei: 65, csi: 80 },
      { week: "Week 2", satisfaction: 78, vei: 73, eei: 68, csi: 82 },
      { week: "Week 3", satisfaction: 81, vei: 76, eei: 71, csi: 84 },
      { week: "Week 4", satisfaction: 84, vei: 79, eei: 74, csi: 86 },
      { week: "Week 5", satisfaction: 87, vei: 82, eei: 77, csi: 88 },
      { week: "Week 6", satisfaction: 90, vei: 85, eei: 80, csi: 90 },
      { week: "Week 7", satisfaction: 93, vei: 88, eei: 83, csi: 92 },
      { week: "Week 8", satisfaction: 96, vei: 91, eei: 86, csi: 94 },
    ],
    "week1": [
      { metric: "VEI", value: 70 },
      { metric: "EEI", value: 65 },
      { metric: "CSI", value: 80 },
      { metric: "Overall Satisfaction", value: 75 },
    ],
    // Similar pattern for weeks 2-8
    "week2": [
      { metric: "VEI", value: 73 },
      { metric: "EEI", value: 68 },
      { metric: "CSI", value: 82 },
      { metric: "Overall Satisfaction", value: 78 },
    ],
    "week3": [
      { metric: "VEI", value: 76 },
      { metric: "EEI", value: 71 },
      { metric: "CSI", value: 84 },
      { metric: "Overall Satisfaction", value: 81 },
    ],
    "week4": [
      { metric: "VEI", value: 79 },
      { metric: "EEI", value: 74 },
      { metric: "CSI", value: 86 },
      { metric: "Overall Satisfaction", value: 84 },
    ],
    "week5": [
      { metric: "VEI", value: 82 },
      { metric: "EEI", value: 77 },
      { metric: "CSI", value: 88 },
      { metric: "Overall Satisfaction", value: 87 },
    ],
    "week6": [
      { metric: "VEI", value: 85 },
      { metric: "EEI", value: 80 },
      { metric: "CSI", value: 90 },
      { metric: "Overall Satisfaction", value: 90 },
    ],
    "week7": [
      { metric: "VEI", value: 88 },
      { metric: "EEI", value: 83 },
      { metric: "CSI", value: 92 },
      { metric: "Overall Satisfaction", value: 93 },
    ],
    "week8": [
      { metric: "VEI", value: 91 },
      { metric: "EEI", value: 86 },
      { metric: "CSI", value: 94 },
      { metric: "Overall Satisfaction", value: 96 },
    ]
  }
};

// Colors for our charts
const chartColors = {
  satisfaction: "#9b87f5",
  vei: "#0EA5E9",
  eei: "#F97316",
  csi: "#8B5CF6"
};

const CourseTab = () => {
  const [selectedCourse, setSelectedCourse] = useState("React Fundamentals");
  const [selectedWeek, setSelectedWeek] = useState("all");
  
  // Custom formatter for chart tooltips
  const tooltipFormatter = (value: number) => [`${value}%`, "Điểm số"];
  
  // Function to render appropriate chart based on selected week
  const renderChart = () => {
    if (selectedWeek === "all") {
      // Render line chart for all weeks
      return (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart 
            data={courseData[selectedCourse][selectedWeek]}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis domain={[0, 100]} />
            <Tooltip formatter={tooltipFormatter} />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="satisfaction" 
              name="Mức độ hài lòng" 
              stroke={chartColors.satisfaction} 
              activeDot={{ r: 8 }} 
              strokeWidth={2}
            />
            <Line type="monotone" dataKey="vei" name="VEI" stroke={chartColors.vei} strokeWidth={2} />
            <Line type="monotone" dataKey="eei" name="EEI" stroke={chartColors.eei} strokeWidth={2} />
            <Line type="monotone" dataKey="csi" name="CSI" stroke={chartColors.csi} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      );
    } else {
      // Render bar chart for specific week
      return (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={courseData[selectedCourse][selectedWeek]}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="metric" />
            <YAxis domain={[0, 100]} />
            <Tooltip formatter={tooltipFormatter} />
            <Legend />
            <Bar 
              dataKey="value" 
              name="Điểm số" 
              fill={chartColors.satisfaction}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      );
    }
  };

  return (
    <div className="w-full space-y-6 p-4">
      {/* Course selection */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="w-full md:w-1/2">
          <label className="block text-sm font-medium mb-2">Chọn khóa học:</label>
          <Select
            value={selectedCourse}
            onValueChange={setSelectedCourse}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Chọn khóa học" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="React Fundamentals">React Fundamentals</SelectItem>
              <SelectItem value="Advanced TypeScript">Advanced TypeScript</SelectItem>
              <SelectItem value="Data Science Basics">Data Science Basics</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Week selection */}
        <div className="w-full md:w-1/2">
          <label className="block text-sm font-medium mb-2">Chọn thời gian:</label>
          <Select
            value={selectedWeek}
            onValueChange={setSelectedWeek}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Chọn thời gian" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả các tuần</SelectItem>
              <SelectItem value="week1">Tuần 1</SelectItem>
              <SelectItem value="week2">Tuần 2</SelectItem>
              <SelectItem value="week3">Tuần 3</SelectItem>
              <SelectItem value="week4">Tuần 4</SelectItem>
              <SelectItem value="week5">Tuần 5</SelectItem>
              <SelectItem value="week6">Tuần 6</SelectItem>
              <SelectItem value="week7">Tuần 7</SelectItem>
              <SelectItem value="week8">Tuần 8</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Chart card */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>
            {selectedCourse} - {selectedWeek === "all" ? "Tất cả các tuần" : `Tuần ${selectedWeek.replace('week', '')}`}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {renderChart()}
        </CardContent>
      </Card>

      {/* Info cards */}
      {selectedWeek !== "all" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Chỉ số VEI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {courseData[selectedCourse][selectedWeek].find(item => item.metric === "VEI").value}%
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Chỉ số đánh giá giá trị khóa học
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Chỉ số EEI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                {courseData[selectedCourse][selectedWeek].find(item => item.metric === "EEI").value}%
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Chỉ số đánh giá hiệu quả học tập
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Chỉ số CSI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                {courseData[selectedCourse][selectedWeek].find(item => item.metric === "CSI").value}%
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Chỉ số đánh giá sự hài lòng của khách hàng
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CourseTab;
