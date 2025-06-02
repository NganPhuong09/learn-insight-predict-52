
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ModelEvaluationContent from '@/components/ModelEvaluationContent';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart, BarChart2, PieChart, LineChart, Users, BookOpen, Calendar } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart";
import {
  PieChart as RechartPieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  Scatter,
  ScatterChart
} from "recharts";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Dữ liệu mẫu cho biểu đồ
// const courseList = [
//   { id: "all", name: "Chọn khóa học" },
//   { id: "ml", name: "Machine Learning Cơ bản" },
//   { id: "py", name: "Lập trình Python" },
//   { id: "ds", name: "Data Science và Phân tích" },
//   { id: "dl", name: "Deep Learning" },
//   { id: "nlp", name: "Xử lý ngôn ngữ tự nhiên" },
// ];

const weekList = [
  { id: "all", name: "Tất cả các tuần" },
  { id: "week1", name: "Tuần 1" },
  { id: "week2", name: "Tuần 2" },
  { id: "week3", name: "Tuần 3" },
  { id: "week4", name: "Tuần 4" },
  { id: "week5", name: "Tuần 5" },
  { id: "week6", name: "Tuần 6" },
  { id: "week7", name: "Tuần 7" },
  { id: "week8", name: "Tuần 8" },
];

// Dữ liệu mẫu cho biểu đồ
const genderData = [
  { name: 'Nam', value: 62 },
  { name: 'Nữ', value: 38 }
];

const ageDistributionData = [
  { age: '18-20', count: 350 },
  { age: '21-23', count: 820 },
  { age: '24-26', count: 520 },
  { age: '27-30', count: 210 },
  { age: '31+', count: 90 }
];

// const topSchoolsData = [
//   { name: 'Đại học Quốc gia Hà Nội', students: 450 },
//   { name: 'Đại học Bách khoa Hà Nội', students: 420 },
//   { name: 'Đại học Quốc gia TP.HCM', students: 380 },
//   { name: 'Đại học FPT', students: 320 },
//   { name: 'Đại học Ngoại thương', students: 290 },
// ];

// const fieldOfStudyData = [
//   { field: 'Công nghệ thông tin', count: 580 },
//   { field: 'Kinh tế', count: 450 },
//   { field: 'Kỹ thuật', count: 380 },
//   { field: 'Khoa học dữ liệu', count: 280 },
//   { field: 'Truyền thông', count: 220 },
//   { field: 'Khác', count: 180 }
// ];

// Dữ liệu về hành vi học tập theo tuần
const learningBehaviorData = {
  ml: {
    week1: [{ week: 'Tuần 1', watchSpeed: 1.0, watchTime: 55, rewindTime: 18, pauseTime: 12 }],
    week2: [{ week: 'Tuần 2', watchSpeed: 1.1, watchTime: 50, rewindTime: 15, pauseTime: 10 }],
    week3: [{ week: 'Tuần 3', watchSpeed: 0.9, watchTime: 60, rewindTime: 20, pauseTime: 15 }],
    week4: [{ week: 'Tuần 4', watchSpeed: 1.0, watchTime: 55, rewindTime: 18, pauseTime: 12 }],
    week5: [{ week: 'Tuần 5', watchSpeed: 1.2, watchTime: 48, rewindTime: 16, pauseTime: 11 }],
    week6: [{ week: 'Tuần 6', watchSpeed: 1.3, watchTime: 45, rewindTime: 14, pauseTime: 9 }],
    week7: [{ week: 'Tuần 7', watchSpeed: 1.1, watchTime: 52, rewindTime: 17, pauseTime: 10 }],
    week8: [{ week: 'Tuần 8', watchSpeed: 1.0, watchTime: 58, rewindTime: 19, pauseTime: 13 }],
    all: [
      { week: 'Tuần 1', watchSpeed: 1.0, watchTime: 55, rewindTime: 18, pauseTime: 12 },
      { week: 'Tuần 2', watchSpeed: 1.1, watchTime: 50, rewindTime: 15, pauseTime: 10 },
      { week: 'Tuần 3', watchSpeed: 0.9, watchTime: 60, rewindTime: 20, pauseTime: 15 },
      { week: 'Tuần 4', watchSpeed: 1.0, watchTime: 55, rewindTime: 18, pauseTime: 12 },
      { week: 'Tuần 5', watchSpeed: 1.2, watchTime: 48, rewindTime: 16, pauseTime: 11 },
      { week: 'Tuần 6', watchSpeed: 1.3, watchTime: 45, rewindTime: 14, pauseTime: 9 },
      { week: 'Tuần 7', watchSpeed: 1.1, watchTime: 52, rewindTime: 17, pauseTime: 10 },
      { week: 'Tuần 8', watchSpeed: 1.0, watchTime: 58, rewindTime: 19, pauseTime: 13 }
    ]
  },
  py: {
    week1: [{ week: 'Tuần 1', watchSpeed: 1.4, watchTime: 35, rewindTime: 8, pauseTime: 5 }],
    week2: [{ week: 'Tuần 2', watchSpeed: 1.5, watchTime: 30, rewindTime: 6, pauseTime: 4 }],
    week3: [{ week: 'Tuần 3', watchSpeed: 1.3, watchTime: 38, rewindTime: 10, pauseTime: 6 }],
    week4: [{ week: 'Tuần 4', watchSpeed: 1.4, watchTime: 35, rewindTime: 8, pauseTime: 5 }],
    week5: [{ week: 'Tuần 5', watchSpeed: 1.6, watchTime: 28, rewindTime: 7, pauseTime: 4 }],
    week6: [{ week: 'Tuần 6', watchSpeed: 1.5, watchTime: 32, rewindTime: 9, pauseTime: 5 }],
    week7: [{ week: 'Tuần 7', watchSpeed: 1.4, watchTime: 36, rewindTime: 9, pauseTime: 6 }],
    week8: [{ week: 'Tuần 8', watchSpeed: 1.3, watchTime: 40, rewindTime: 11, pauseTime: 7 }],
    all: [
      { week: 'Tuần 1', watchSpeed: 1.4, watchTime: 35, rewindTime: 8, pauseTime: 5 },
      { week: 'Tuần 2', watchSpeed: 1.5, watchTime: 30, rewindTime: 6, pauseTime: 4 },
      { week: 'Tuần 3', watchSpeed: 1.3, watchTime: 38, rewindTime: 10, pauseTime: 6 },
      { week: 'Tuần 4', watchSpeed: 1.4, watchTime: 35, rewindTime: 8, pauseTime: 5 },
      { week: 'Tuần 5', watchSpeed: 1.6, watchTime: 28, rewindTime: 7, pauseTime: 4 },
      { week: 'Tuần 6', watchSpeed: 1.5, watchTime: 32, rewindTime: 9, pauseTime: 5 },
      { week: 'Tuần 7', watchSpeed: 1.4, watchTime: 36, rewindTime: 9, pauseTime: 6 },
      { week: 'Tuần 8', watchSpeed: 1.3, watchTime: 40, rewindTime: 11, pauseTime: 7 }
    ]
  },
  ds: {
    week1: [{ week: 'Tuần 1', watchSpeed: 1.1, watchTime: 50, rewindTime: 16, pauseTime: 11 }],
    week2: [{ week: 'Tuần 2', watchSpeed: 1.2, watchTime: 45, rewindTime: 14, pauseTime: 9 }],
    week3: [{ week: 'Tuần 3', watchSpeed: 1.0, watchTime: 55, rewindTime: 18, pauseTime: 12 }],
    week4: [{ week: 'Tuần 4', watchSpeed: 1.1, watchTime: 52, rewindTime: 17, pauseTime: 11 }],
    week5: [{ week: 'Tuần 5', watchSpeed: 1.3, watchTime: 42, rewindTime: 13, pauseTime: 8 }],
    week6: [{ week: 'Tuần 6', watchSpeed: 1.2, watchTime: 48, rewindTime: 15, pauseTime: 10 }],
    week7: [{ week: 'Tuần 7', watchSpeed: 1.1, watchTime: 53, rewindTime: 17, pauseTime: 11 }],
    week8: [{ week: 'Tuần 8', watchSpeed: 1.0, watchTime: 56, rewindTime: 19, pauseTime: 13 }],
    all: [
      { week: 'Tuần 1', watchSpeed: 1.1, watchTime: 50, rewindTime: 16, pauseTime: 11 },
      { week: 'Tuần 2', watchSpeed: 1.2, watchTime: 45, rewindTime: 14, pauseTime: 9 },
      { week: 'Tuần 3', watchSpeed: 1.0, watchTime: 55, rewindTime: 18, pauseTime: 12 },
      { week: 'Tuần 4', watchSpeed: 1.1, watchTime: 52, rewindTime: 17, pauseTime: 11 },
      { week: 'Tuần 5', watchSpeed: 1.3, watchTime: 42, rewindTime: 13, pauseTime: 8 },
      { week: 'Tuần 6', watchSpeed: 1.2, watchTime: 48, rewindTime: 15, pauseTime: 10 },
      { week: 'Tuần 7', watchSpeed: 1.1, watchTime: 53, rewindTime: 17, pauseTime: 11 },
      { week: 'Tuần 8', watchSpeed: 1.0, watchTime: 56, rewindTime: 19, pauseTime: 13 }
    ]
  },
  dl: {
    week1: [{ week: 'Tuần 1', watchSpeed: 0.9, watchTime: 60, rewindTime: 20, pauseTime: 15 }],
    week2: [{ week: 'Tuần 2', watchSpeed: 1.0, watchTime: 55, rewindTime: 17, pauseTime: 12 }],
    week3: [{ week: 'Tuần 3', watchSpeed: 0.8, watchTime: 65, rewindTime: 22, pauseTime: 16 }],
    week4: [{ week: 'Tuần 4', watchSpeed: 0.9, watchTime: 58, rewindTime: 19, pauseTime: 14 }],
    week5: [{ week: 'Tuần 5', watchSpeed: 1.1, watchTime: 52, rewindTime: 16, pauseTime: 11 }],
    week6: [{ week: 'Tuần 6', watchSpeed: 1.0, watchTime: 56, rewindTime: 18, pauseTime: 13 }],
    week7: [{ week: 'Tuần 7', watchSpeed: 0.9, watchTime: 62, rewindTime: 21, pauseTime: 15 }],
    week8: [{ week: 'Tuần 8', watchSpeed: 0.8, watchTime: 66, rewindTime: 23, pauseTime: 17 }],
    all: [
      { week: 'Tuần 1', watchSpeed: 0.9, watchTime: 60, rewindTime: 20, pauseTime: 15 },
      { week: 'Tuần 2', watchSpeed: 1.0, watchTime: 55, rewindTime: 17, pauseTime: 12 },
      { week: 'Tuần 3', watchSpeed: 0.8, watchTime: 65, rewindTime: 22, pauseTime: 16 },
      { week: 'Tuần 4', watchSpeed: 0.9, watchTime: 58, rewindTime: 19, pauseTime: 14 },
      { week: 'Tuần 5', watchSpeed: 1.1, watchTime: 52, rewindTime: 16, pauseTime: 11 },
      { week: 'Tuần 6', watchSpeed: 1.0, watchTime: 56, rewindTime: 18, pauseTime: 13 },
      { week: 'Tuần 7', watchSpeed: 0.9, watchTime: 62, rewindTime: 21, pauseTime: 15 },
      { week: 'Tuần 8', watchSpeed: 0.8, watchTime: 66, rewindTime: 23, pauseTime: 17 }
    ]
  },
  nlp: {
    week1: [{ week: 'Tuần 1', watchSpeed: 1.2, watchTime: 48, rewindTime: 15, pauseTime: 10 }],
    week2: [{ week: 'Tuần 2', watchSpeed: 1.3, watchTime: 42, rewindTime: 13, pauseTime: 8 }],
    week3: [{ week: 'Tuần 3', watchSpeed: 1.1, watchTime: 52, rewindTime: 17, pauseTime: 11 }],
    week4: [{ week: 'Tuần 4', watchSpeed: 1.2, watchTime: 46, rewindTime: 15, pauseTime: 9 }],
    week5: [{ week: 'Tuần 5', watchSpeed: 1.4, watchTime: 38, rewindTime: 12, pauseTime: 7 }],
    week6: [{ week: 'Tuần 6', watchSpeed: 1.3, watchTime: 44, rewindTime: 14, pauseTime: 9 }],
    week7: [{ week: 'Tuần 7', watchSpeed: 1.2, watchTime: 50, rewindTime: 16, pauseTime: 10 }],
    week8: [{ week: 'Tuần 8', watchSpeed: 1.1, watchTime: 54, rewindTime: 18, pauseTime: 12 }],
    all: [
      { week: 'Tuần 1', watchSpeed: 1.2, watchTime: 48, rewindTime: 15, pauseTime: 10 },
      { week: 'Tuần 2', watchSpeed: 1.3, watchTime: 42, rewindTime: 13, pauseTime: 8 },
      { week: 'Tuần 3', watchSpeed: 1.1, watchTime: 52, rewindTime: 17, pauseTime: 11 },
      { week: 'Tuần 4', watchSpeed: 1.2, watchTime: 46, rewindTime: 15, pauseTime: 9 },
      { week: 'Tuần 5', watchSpeed: 1.4, watchTime: 38, rewindTime: 12, pauseTime: 7 },
      { week: 'Tuần 6', watchSpeed: 1.3, watchTime: 44, rewindTime: 14, pauseTime: 9 },
      { week: 'Tuần 7', watchSpeed: 1.2, watchTime: 50, rewindTime: 16, pauseTime: 10 },
      { week: 'Tuần 8', watchSpeed: 1.1, watchTime: 54, rewindTime: 18, pauseTime: 12 }
    ]
  }
};

// Dữ liệu về hành vi làm bài tập theo tuần
const assignmentData = {
  ml: {
    week1: [{ week: 'Tuần 1', quizAttempts: 2.0, quizScore: 68, codingAttempts: 3.2, codingScore: 60 }],
    week2: [{ week: 'Tuần 2', quizAttempts: 2.2, quizScore: 70, codingAttempts: 3.5, codingScore: 62 }],
    week3: [{ week: 'Tuần 3', quizAttempts: 1.8, quizScore: 75, codingAttempts: 3.0, codingScore: 66 }],
    week4: [{ week: 'Tuần 4', quizAttempts: 1.5, quizScore: 80, codingAttempts: 2.5, codingScore: 72 }],
    week5: [{ week: 'Tuần 5', quizAttempts: 1.7, quizScore: 78, codingAttempts: 2.8, codingScore: 70 }],
    week6: [{ week: 'Tuần 6', quizAttempts: 1.6, quizScore: 82, codingAttempts: 2.4, codingScore: 75 }],
    week7: [{ week: 'Tuần 7', quizAttempts: 1.4, quizScore: 85, codingAttempts: 2.2, codingScore: 78 }],
    week8: [{ week: 'Tuần 8', quizAttempts: 1.3, quizScore: 88, codingAttempts: 2.0, codingScore: 82 }],
    all: [
      { week: 'Tuần 1', quizAttempts: 2.0, quizScore: 68, codingAttempts: 3.2, codingScore: 60 },
      { week: 'Tuần 2', quizAttempts: 2.2, quizScore: 70, codingAttempts: 3.5, codingScore: 62 },
      { week: 'Tuần 3', quizAttempts: 1.8, quizScore: 75, codingAttempts: 3.0, codingScore: 66 },
      { week: 'Tuần 4', quizAttempts: 1.5, quizScore: 80, codingAttempts: 2.5, codingScore: 72 },
      { week: 'Tuần 5', quizAttempts: 1.7, quizScore: 78, codingAttempts: 2.8, codingScore: 70 },
      { week: 'Tuần 6', quizAttempts: 1.6, quizScore: 82, codingAttempts: 2.4, codingScore: 75 },
      { week: 'Tuần 7', quizAttempts: 1.4, quizScore: 85, codingAttempts: 2.2, codingScore: 78 },
      { week: 'Tuần 8', quizAttempts: 1.3, quizScore: 88, codingAttempts: 2.0, codingScore: 82 }
    ]
  },
  py: {
    week1: [{ week: 'Tuần 1', quizAttempts: 1.2, quizScore: 82, codingAttempts: 2.5, codingScore: 75 }],
    week2: [{ week: 'Tuần 2', quizAttempts: 1.3, quizScore: 85, codingAttempts: 2.6, codingScore: 78 }],
    week3: [{ week: 'Tuần 3', quizAttempts: 1.1, quizScore: 88, codingAttempts: 2.3, codingScore: 82 }],
    week4: [{ week: 'Tuần 4', quizAttempts: 1.0, quizScore: 90, codingAttempts: 2.0, codingScore: 85 }],
    week5: [{ week: 'Tuần 5', quizAttempts: 1.1, quizScore: 87, codingAttempts: 2.2, codingScore: 80 }],
    week6: [{ week: 'Tuần 6', quizAttempts: 1.0, quizScore: 92, codingAttempts: 1.8, codingScore: 88 }],
    week7: [{ week: 'Tuần 7', quizAttempts: 0.9, quizScore: 94, codingAttempts: 1.6, codingScore: 90 }],
    week8: [{ week: 'Tuần 8', quizAttempts: 0.8, quizScore: 95, codingAttempts: 1.5, codingScore: 92 }],
    all: [
      { week: 'Tuần 1', quizAttempts: 1.2, quizScore: 82, codingAttempts: 2.5, codingScore: 75 },
      { week: 'Tuần 2', quizAttempts: 1.3, quizScore: 85, codingAttempts: 2.6, codingScore: 78 },
      { week: 'Tuần 3', quizAttempts: 1.1, quizScore: 88, codingAttempts: 2.3, codingScore: 82 },
      { week: 'Tuần 4', quizAttempts: 1.0, quizScore: 90, codingAttempts: 2.0, codingScore: 85 },
      { week: 'Tuần 5', quizAttempts: 1.1, quizScore: 87, codingAttempts: 2.2, codingScore: 80 },
      { week: 'Tuần 6', quizAttempts: 1.0, quizScore: 92, codingAttempts: 1.8, codingScore: 88 },
      { week: 'Tuần 7', quizAttempts: 0.9, quizScore: 94, codingAttempts: 1.6, codingScore: 90 },
      { week: 'Tuần 8', quizAttempts: 0.8, quizScore: 95, codingAttempts: 1.5, codingScore: 92 }
    ]
  },
  ds: {
    week1: [{ week: 'Tuần 1', quizAttempts: 1.7, quizScore: 75, codingAttempts: 2.9, codingScore: 68 }],
    week2: [{ week: 'Tuần 2', quizAttempts: 1.9, quizScore: 78, codingAttempts: 3.1, codingScore: 70 }],
    week3: [{ week: 'Tuần 3', quizAttempts: 1.6, quizScore: 82, codingAttempts: 2.7, codingScore: 74 }],
    week4: [{ week: 'Tuần 4', quizAttempts: 1.4, quizScore: 85, codingAttempts: 2.4, codingScore: 78 }],
    week5: [{ week: 'Tuần 5', quizAttempts: 1.5, quizScore: 83, codingAttempts: 2.6, codingScore: 76 }],
    week6: [{ week: 'Tuần 6', quizAttempts: 1.3, quizScore: 87, codingAttempts: 2.2, codingScore: 80 }],
    week7: [{ week: 'Tuần 7', quizAttempts: 1.2, quizScore: 90, codingAttempts: 2.0, codingScore: 84 }],
    week8: [{ week: 'Tuần 8', quizAttempts: 1.1, quizScore: 92, codingAttempts: 1.8, codingScore: 86 }],
    all: [
      { week: 'Tuần 1', quizAttempts: 1.7, quizScore: 75, codingAttempts: 2.9, codingScore: 68 },
      { week: 'Tuần 2', quizAttempts: 1.9, quizScore: 78, codingAttempts: 3.1, codingScore: 70 },
      { week: 'Tuần 3', quizAttempts: 1.6, quizScore: 82, codingAttempts: 2.7, codingScore: 74 },
      { week: 'Tuần 4', quizAttempts: 1.4, quizScore: 85, codingAttempts: 2.4, codingScore: 78 },
      { week: 'Tuần 5', quizAttempts: 1.5, quizScore: 83, codingAttempts: 2.6, codingScore: 76 },
      { week: 'Tuần 6', quizAttempts: 1.3, quizScore: 87, codingAttempts: 2.2, codingScore: 80 },
      { week: 'Tuần 7', quizAttempts: 1.2, quizScore: 90, codingAttempts: 2.0, codingScore: 84 },
      { week: 'Tuần 8', quizAttempts: 1.1, quizScore: 92, codingAttempts: 1.8, codingScore: 86 }
    ]
  },
  dl: {
    week1: [{ week: 'Tuần 1', quizAttempts: 2.3, quizScore: 65, codingAttempts: 3.6, codingScore: 58 }],
    week2: [{ week: 'Tuần 2', quizAttempts: 2.5, quizScore: 68, codingAttempts: 3.8, codingScore: 60 }],
    week3: [{ week: 'Tuần 3', quizAttempts: 2.0, quizScore: 72, codingAttempts: 3.3, codingScore: 64 }],
    week4: [{ week: 'Tuần 4', quizAttempts: 1.8, quizScore: 76, codingAttempts: 2.9, codingScore: 68 }],
    week5: [{ week: 'Tuần 5', quizAttempts: 1.9, quizScore: 74, codingAttempts: 3.1, codingScore: 66 }],
    week6: [{ week: 'Tuần 6', quizAttempts: 1.7, quizScore: 78, codingAttempts: 2.7, codingScore: 70 }],
    week7: [{ week: 'Tuần 7', quizAttempts: 1.6, quizScore: 80, codingAttempts: 2.5, codingScore: 72 }],
    week8: [{ week: 'Tuần 8', quizAttempts: 1.4, quizScore: 83, codingAttempts: 2.2, codingScore: 76 }],
    all: [
      { week: 'Tuần 1', quizAttempts: 2.3, quizScore: 65, codingAttempts: 3.6, codingScore: 58 },
      { week: 'Tuần 2', quizAttempts: 2.5, quizScore: 68, codingAttempts: 3.8, codingScore: 60 },
      { week: 'Tuần 3', quizAttempts: 2.0, quizScore: 72, codingAttempts: 3.3, codingScore: 64 },
      { week: 'Tuần 4', quizAttempts: 1.8, quizScore: 76, codingAttempts: 2.9, codingScore: 68 },
      { week: 'Tuần 5', quizAttempts: 1.9, quizScore: 74, codingAttempts: 3.1, codingScore: 66 },
      { week: 'Tuần 6', quizAttempts: 1.7, quizScore: 78, codingAttempts: 2.7, codingScore: 70 },
      { week: 'Tuần 7', quizAttempts: 1.6, quizScore: 80, codingAttempts: 2.5, codingScore: 72 },
      { week: 'Tuần 8', quizAttempts: 1.4, quizScore: 83, codingAttempts: 2.2, codingScore: 76 }
    ]
  },
  nlp: {
    week1: [{ week: 'Tuần 1', quizAttempts: 1.9, quizScore: 72, codingAttempts: 3.0, codingScore: 65 }],
    week2: [{ week: 'Tuần 2', quizAttempts: 2.1, quizScore: 74, codingAttempts: 3.2, codingScore: 67 }],
    week3: [{ week: 'Tuần 3', quizAttempts: 1.7, quizScore: 78, codingAttempts: 2.8, codingScore: 70 }],
    week4: [{ week: 'Tuần 4', quizAttempts: 1.5, quizScore: 82, codingAttempts: 2.5, codingScore: 74 }],
    week5: [{ week: 'Tuần 5', quizAttempts: 1.6, quizScore: 80, codingAttempts: 2.7, codingScore: 72 }],
    week6: [{ week: 'Tuần 6', quizAttempts: 1.4, quizScore: 84, codingAttempts: 2.3, codingScore: 76 }],
    week7: [{ week: 'Tuần 7', quizAttempts: 1.3, quizScore: 86, codingAttempts: 2.1, codingScore: 78 }],
    week8: [{ week: 'Tuần 8', quizAttempts: 1.2, quizScore: 88, codingAttempts: 1.9, codingScore: 82 }],
    all: [
      { week: 'Tuần 1', quizAttempts: 1.9, quizScore: 72, codingAttempts: 3.0, codingScore: 65 },
      { week: 'Tuần 2', quizAttempts: 2.1, quizScore: 74, codingAttempts: 3.2, codingScore: 67 },
      { week: 'Tuần 3', quizAttempts: 1.7, quizScore: 78, codingAttempts: 2.8, codingScore: 70 },
      { week: 'Tuần 4', quizAttempts: 1.5, quizScore: 82, codingAttempts: 2.5, codingScore: 74 },
      { week: 'Tuần 5', quizAttempts: 1.6, quizScore: 80, codingAttempts: 2.7, codingScore: 72 },
      { week: 'Tuần 6', quizAttempts: 1.4, quizScore: 84, codingAttempts: 2.3, codingScore: 76 },
      { week: 'Tuần 7', quizAttempts: 1.3, quizScore: 86, codingAttempts: 2.1, codingScore: 78 },
      { week: 'Tuần 8', quizAttempts: 1.2, quizScore: 88, codingAttempts: 1.9, codingScore: 82 }
    ]
  }
};

const commentActivityData = {
  ml: {
    week1: [{ week: 'Tuần 1', comments: 185, questions: 65, answers: 90, reactions: 135 }],
    week2: [{ week: 'Tuần 2', comments: 270, questions: 95, answers: 125, reactions: 200 }],
    week3: [{ week: 'Tuần 3', comments: 210, questions: 75, answers: 100, reactions: 160 }],
    week4: [{ week: 'Tuần 4', comments: 380, questions: 130, answers: 180, reactions: 280 }],
    week5: [{ week: 'Tuần 5', comments: 320, questions: 110, answers: 150, reactions: 230 }],
    week6: [{ week: 'Tuần 6', comments: 350, questions: 120, answers: 165, reactions: 250 }],
    week7: [{ week: 'Tuần 7', comments: 280, questions: 95, answers: 130, reactions: 200 }],
    week8: [{ week: 'Tuần 8', comments: 230, questions: 80, answers: 110, reactions: 170 }],
    all: [
      { week: 'Tuần 1', comments: 185, questions: 65, answers: 90, reactions: 135 },
      { week: 'Tuần 2', comments: 270, questions: 95, answers: 125, reactions: 200 },
      { week: 'Tuần 3', comments: 210, questions: 75, answers: 100, reactions: 160 },
      { week: 'Tuần 4', comments: 380, questions: 130, answers: 180, reactions: 280 },
      { week: 'Tuần 5', comments: 320, questions: 110, answers: 150, reactions: 230 },
      { week: 'Tuần 6', comments: 350, questions: 120, answers: 165, reactions: 250 },
      { week: 'Tuần 7', comments: 280, questions: 95, answers: 130, reactions: 200 },
      { week: 'Tuần 8', comments: 230, questions: 80, answers: 110, reactions: 170 }
    ]
  },
  py: {
    week1: [{ week: 'Tuần 1', comments: 120, questions: 40, answers: 60, reactions: 85 }],
    week2: [{ week: 'Tuần 2', comments: 180, questions: 60, answers: 85, reactions: 130 }],
    week3: [{ week: 'Tuần 3', comments: 150, questions: 50, answers: 70, reactions: 110 }],
    week4: [{ week: 'Tuần 4', comments: 250, questions: 85, answers: 120, reactions: 180 }],
    week5: [{ week: 'Tuần 5', comments: 220, questions: 75, answers: 105, reactions: 160 }],
    week6: [{ week: 'Tuần 6', comments: 240, questions: 80, answers: 115, reactions: 175 }],
    week7: [{ week: 'Tuần 7', comments: 180, questions: 60, answers: 85, reactions: 130 }],
    week8: [{ week: 'Tuần 8', comments: 160, questions: 55, answers: 75, reactions: 115 }],
    all: [
      { week: 'Tuần 1', comments: 120, questions: 40, answers: 60, reactions: 85 },
      { week: 'Tuần 2', comments: 180, questions: 60, answers: 85, reactions: 130 },
      { week: 'Tuần 3', comments: 150, questions: 50, answers: 70, reactions: 110 },
      { week: 'Tuần 4', comments: 250, questions: 85, answers: 120, reactions: 180 },
      { week: 'Tuần 5', comments: 220, questions: 75, answers: 105, reactions: 160 },
      { week: 'Tuần 6', comments: 240, questions: 80, answers: 115, reactions: 175 },
      { week: 'Tuần 7', comments: 180, questions: 60, answers: 85, reactions: 130 },
      { week: 'Tuần 8', comments: 160, questions: 55, answers: 75, reactions: 115 }
    ]
  },
  ds: {
    week1: [{ week: 'Tuần 1', comments: 160, questions: 55, answers: 75, reactions: 115 }],
    week2: [{ week: 'Tuần 2', comments: 230, questions: 80, answers: 110, reactions: 170 }],
    week3: [{ week: 'Tuần 3', comments: 180, questions: 60, answers: 85, reactions: 130 }],
    week4: [{ week: 'Tuần 4', comments: 320, questions: 110, answers: 150, reactions: 230 }],
    week5: [{ week: 'Tuần 5', comments: 280, questions: 95, answers: 130, reactions: 200 }],
    week6: [{ week: 'Tuần 6', comments: 300, questions: 100, answers: 140, reactions: 220 }],
    week7: [{ week: 'Tuần 7', comments: 240, questions: 80, answers: 110, reactions: 170 }],
    week8: [{ week: 'Tuần 8', comments: 200, questions: 70, answers: 95, reactions: 145 }],
    all: [
      { week: 'Tuần 1', comments: 160, questions: 55, answers: 75, reactions: 115 },
      { week: 'Tuần 2', comments: 230, questions: 80, answers: 110, reactions: 170 },
      { week: 'Tuần 3', comments: 180, questions: 60, answers: 85, reactions: 130 },
      { week: 'Tuần 4', comments: 320, questions: 110, answers: 150, reactions: 230 },
      { week: 'Tuần 5', comments: 280, questions: 95, answers: 130, reactions: 200 },
      { week: 'Tuần 6', comments: 300, questions: 100, answers: 140, reactions: 220 },
      { week: 'Tuần 7', comments: 240, questions: 80, answers: 110, reactions: 170 },
      { week: 'Tuần 8', comments: 200, questions: 70, answers: 95, reactions: 145 }
    ]
  },
  dl: {
    week1: [{ week: 'Tuần 1', comments: 200, questions: 70, answers: 95, reactions: 145 }],
    week2: [{ week: 'Tuần 2', comments: 290, questions: 100, answers: 135, reactions: 210 }],
    week3: [{ week: 'Tuần 3', comments: 225, questions: 75, answers: 105, reactions: 165 }],
    week4: [{ week: 'Tuần 4', comments: 410, questions: 140, answers: 190, reactions: 300 }],
    week5: [{ week: 'Tuần 5', comments: 350, questions: 120, answers: 165, reactions: 260 }],
    week6: [{ week: 'Tuần 6', comments: 380, questions: 130, answers: 180, reactions: 275 }],
    week7: [{ week: 'Tuần 7', comments: 300, questions: 100, answers: 140, reactions: 220 }],
    week8: [{ week: 'Tuần 8', comments: 250, questions: 85, answers: 120, reactions: 180 }],
    all: [
      { week: 'Tuần 1', comments: 200, questions: 70, answers: 95, reactions: 145 },
      { week: 'Tuần 2', comments: 290, questions: 100, answers: 135, reactions: 210 },
      { week: 'Tuần 3', comments: 225, questions: 75, answers: 105, reactions: 165 },
      { week: 'Tuần 4', comments: 410, questions: 140, answers: 190, reactions: 300 },
      { week: 'Tuần 5', comments: 350, questions: 120, answers: 165, reactions: 260 },
      { week: 'Tuần 6', comments: 380, questions: 130, answers: 180, reactions: 275 },
      { week: 'Tuần 7', comments: 300, questions: 100, answers: 140, reactions: 220 },
      { week: 'Tuần 8', comments: 250, questions: 85, answers: 120, reactions: 180 }
    ]
  },
  nlp: {
    week1: [{ week: 'Tuần 1', comments: 140, questions: 50, answers: 65, reactions: 100 }],
    week2: [{ week: 'Tuần 2', comments: 210, questions: 70, answers: 100, reactions: 150 }],
    week3: [{ week: 'Tuần 3', comments: 170, questions: 55, answers: 80, reactions: 120 }],
    week4: [{ week: 'Tuần 4', comments: 290, questions: 100, answers: 135, reactions: 210 }],
    week5: [{ week: 'Tuần 5', comments: 250, questions: 85, answers: 120, reactions: 180 }],
    week6: [{ week: 'Tuần 6', comments: 270, questions: 90, answers: 130, reactions: 195 }],
    week7: [{ week: 'Tuần 7', comments: 210, questions: 70, answers: 100, reactions: 150 }],
    week8: [{ week: 'Tuần 8', comments: 180, questions: 60, answers: 85, reactions: 130 }],
    all: [
      { week: 'Tuần 1', comments: 140, questions: 50, answers: 65, reactions: 100 },
      { week: 'Tuần 2', comments: 210, questions: 70, answers: 100, reactions: 150 },
      { week: 'Tuần 3', comments: 170, questions: 55, answers: 80, reactions: 120 },
      { week: 'Tuần 4', comments: 290, questions: 100, answers: 135, reactions: 210 },
      { week: 'Tuần 5', comments: 250, questions: 85, answers: 120, reactions: 180 },
      { week: 'Tuần 6', comments: 270, questions: 90, answers: 130, reactions: 195 },
      { week: 'Tuần 7', comments: 210, questions: 70, answers: 100, reactions: 150 },
      { week: 'Tuần 8', comments: 180, questions: 60, answers: 85, reactions: 130 }
    ]
  }
};

// Dữ liệu cho phần khóa học
// const courseEnrollmentData = [
//   { name: 'Machine Learning Cơ bản', students: 850 },
//   { name: 'Lập trình Python', students: 720 },
//   { name: 'Data Science và Phân tích', students: 680 },
//   { name: 'Deep Learning', students: 520 },
//   { name: 'Xử lý ngôn ngữ tự nhiên', students: 410 }
// ];

const videoDurationData = {
  ml: {
    week1: [
      { duration: '5-10', count: 15 },
      { duration: '10-15', count: 28 },
      { duration: '15-20', count: 22 },
      { duration: '20-25', count: 12 },
      { duration: '25+', count: 8 }
    ],
    week2: [
      { duration: '5-10', count: 18 },
      { duration: '10-15', count: 25 },
      { duration: '15-20', count: 20 },
      { duration: '20-25', count: 10 },
      { duration: '25+', count: 6 }
    ],
    week3: [
      { duration: '5-10', count: 12 },
      { duration: '10-15', count: 30 },
      { duration: '15-20', count: 24 },
      { duration: '20-25', count: 14 },
      { duration: '25+', count: 9 }
    ],
    week4: [
      { duration: '5-10', count: 14 },
      { duration: '10-15', count: 26 },
      { duration: '15-20', count: 23 },
      { duration: '20-25', count: 13 },
      { duration: '25+', count: 7 }
    ],
    week5: [
      { duration: '5-10', count: 16 },
      { duration: '10-15', count: 29 },
      { duration: '15-20', count: 21 },
      { duration: '20-25', count: 11 },
      { duration: '25+', count: 7 }
    ],
    week6: [
      { duration: '5-10', count: 17 },
      { duration: '10-15', count: 27 },
      { duration: '15-20', count: 20 },
      { duration: '20-25', count: 10 },
      { duration: '25+', count: 6 }
    ],
    week7: [
      { duration: '5-10', count: 13 },
      { duration: '10-15', count: 28 },
      { duration: '15-20', count: 24 },
      { duration: '20-25', count: 13 },
      { duration: '25+', count: 8 }
    ],
    week8: [
      { duration: '5-10', count: 15 },
      { duration: '10-15', count: 26 },
      { duration: '15-20', count: 22 },
      { duration: '20-25', count: 12 },
      { duration: '25+', count: 7 }
    ],
    all: [
      { duration: '5-10', count: 15 },
      { duration: '10-15', count: 28 },
      { duration: '15-20', count: 22 },
      { duration: '20-25', count: 12 },
      { duration: '25+', count: 8 }
    ]
  },
  py: {
    week1: [
      { duration: '5-10', count: 22 },
      { duration: '10-15', count: 35 },
      { duration: '15-20', count: 18 },
      { duration: '20-25', count: 9 },
      { duration: '25+', count: 6 }
    ],
    week2: [
      { duration: '5-10', count: 24 },
      { duration: '10-15', count: 32 },
      { duration: '15-20', count: 20 },
      { duration: '20-25', count: 8 },
      { duration: '25+', count: 5 }
    ],
    week3: [
      { duration: '5-10', count: 20 },
      { duration: '10-15', count: 38 },
      { duration: '15-20', count: 16 },
      { duration: '20-25', count: 10 },
      { duration: '25+', count: 7 }
    ],
    week4: [
      { duration: '5-10', count: 23 },
      { duration: '10-15', count: 34 },
      { duration: '15-20', count: 19 },
      { duration: '20-25', count: 8 },
      { duration: '25+', count: 5 }
    ],
    week5: [
      { duration: '5-10', count: 25 },
      { duration: '10-15', count: 36 },
      { duration: '15-20', count: 17 },
      { duration: '20-25', count: 7 },
      { duration: '25+', count: 4 }
    ],
    week6: [
      { duration: '5-10', count: 21 },
      { duration: '10-15', count: 37 },
      { duration: '15-20', count: 19 },
      { duration: '20-25', count: 9 },
      { duration: '25+', count: 6 }
    ],
    week7: [
      { duration: '5-10', count: 24 },
      { duration: '10-15', count: 33 },
      { duration: '15-20', count: 18 },
      { duration: '20-25', count: 8 },
      { duration: '25+', count: 5 }
    ],
    week8: [
      { duration: '5-10', count: 22 },
      { duration: '10-15', count: 36 },
      { duration: '15-20', count: 17 },
      { duration: '20-25', count: 9 },
      { duration: '25+', count: 6 }
    ],
    all: [
      { duration: '5-10', count: 22 },
      { duration: '10-15', count: 35 },
      { duration: '15-20', count: 18 },
      { duration: '20-25', count: 9 },
      { duration: '25+', count: 6 }
    ]
  },
  ds: {
    week1: [
      { duration: '5-10', count: 18 },
      { duration: '10-15', count: 32 },
      { duration: '15-20', count: 20 },
      { duration: '20-25', count: 11 },
      { duration: '25+', count: 7 }
    ],
    week2: [
      { duration: '5-10', count: 20 },
      { duration: '10-15', count: 30 },
      { duration: '15-20', count: 22 },
      { duration: '20-25', count: 9 },
      { duration: '25+', count: 6 }
    ],
    week3: [
      { duration: '5-10', count: 16 },
      { duration: '10-15', count: 34 },
      { duration: '15-20', count: 19 },
      { duration: '20-25', count: 12 },
      { duration: '25+', count: 8 }
    ],
    week4: [
      { duration: '5-10', count: 19 },
      { duration: '10-15', count: 31 },
      { duration: '15-20', count: 21 },
      { duration: '20-25', count: 10 },
      { duration: '25+', count: 7 }
    ],
    week5: [
      { duration: '5-10', count: 21 },
      { duration: '10-15', count: 33 },
      { duration: '15-20', count: 18 },
      { duration: '20-25', count: 9 },
      { duration: '25+', count: 6 }
    ],
    week6: [
      { duration: '5-10', count: 17 },
      { duration: '10-15', count: 32 },
      { duration: '15-20', count: 22 },
      { duration: '20-25', count: 11 },
      { duration: '25+', count: 8 }
    ],
    week7: [
      { duration: '5-10', count: 20 },
      { duration: '10-15', count: 31 },
      { duration: '15-20', count: 20 },
      { duration: '20-25', count: 10 },
      { duration: '25+', count: 7 }
    ],
    week8: [
      { duration: '5-10', count: 18 },
      { duration: '10-15', count: 33 },
      { duration: '15-20', count: 21 },
      { duration: '20-25', count: 10 },
      { duration: '25+', count: 6 }
    ],
    all: [
      { duration: '5-10', count: 18 },
      { duration: '10-15', count: 32 },
      { duration: '15-20', count: 20 },
      { duration: '20-25', count: 11 },
      { duration: '25+', count: 7 }
    ]
  },
  dl: {
    week1: [
      { duration: '5-10', count: 10 },
      { duration: '10-15', count: 25 },
      { duration: '15-20', count: 28 },
      { duration: '20-25', count: 15 },
      { duration: '25+', count: 12 }
    ],
    week2: [
      { duration: '5-10', count: 12 },
      { duration: '10-15', count: 23 },
      { duration: '15-20', count: 30 },
      { duration: '20-25', count: 14 },
      { duration: '25+', count: 10 }
    ],
    week3: [
      { duration: '5-10', count: 9 },
      { duration: '10-15', count: 26 },
      { duration: '15-20', count: 27 },
      { duration: '20-25', count: 16 },
      { duration: '25+', count: 13 }
    ],
    week4: [
      { duration: '5-10', count: 11 },
      { duration: '10-15', count: 24 },
      { duration: '15-20', count: 29 },
      { duration: '20-25', count: 15 },
      { duration: '25+', count: 11 }
    ],
    week5: [
      { duration: '5-10', count: 13 },
      { duration: '10-15', count: 26 },
      { duration: '15-20', count: 27 },
      { duration: '20-25', count: 13 },
      { duration: '25+', count: 9 }
    ],
    week6: [
      { duration: '5-10', count: 10 },
      { duration: '10-15', count: 24 },
      { duration: '15-20', count: 30 },
      { duration: '20-25', count: 15 },
      { duration: '25+', count: 12 }
    ],
    week7: [
      { duration: '5-10', count: 12 },
      { duration: '10-15', count: 25 },
      { duration: '15-20', count: 28 },
      { duration: '20-25', count: 14 },
      { duration: '25+', count: 11 }
    ],
    week8: [
      { duration: '5-10', count: 11 },
      { duration: '10-15', count: 23 },
      { duration: '15-20', count: 29 },
      { duration: '20-25', count: 16 },
      { duration: '25+', count: 12 }
    ],
    all: [
      { duration: '5-10', count: 10 },
      { duration: '10-15', count: 25 },
      { duration: '15-20', count: 28 },
      { duration: '20-25', count: 15 },
      { duration: '25+', count: 12 }
    ]
  },
  nlp: {
    week1: [
      { duration: '5-10', count: 14 },
      { duration: '10-15', count: 30 },
      { duration: '15-20', count: 24 },
      { duration: '20-25', count: 13 },
      { duration: '25+', count: 9 }
    ],
    week2: [
      { duration: '5-10', count: 16 },
      { duration: '10-15', count: 28 },
      { duration: '15-20', count: 26 },
      { duration: '20-25', count: 11 },
      { duration: '25+', count: 8 }
    ],
    week3: [
      { duration: '5-10', count: 13 },
      { duration: '10-15', count: 32 },
      { duration: '15-20', count: 23 },
      { duration: '20-25', count: 14 },
      { duration: '25+', count: 10 }
    ],
    week4: [
      { duration: '5-10', count: 15 },
      { duration: '10-15', count: 29 },
      { duration: '15-20', count: 25 },
      { duration: '20-25', count: 12 },
      { duration: '25+', count: 9 }
    ],
    week5: [
      { duration: '5-10', count: 17 },
      { duration: '10-15', count: 31 },
      { duration: '15-20', count: 22 },
      { duration: '20-25', count: 11 },
      { duration: '25+', count: 8 }
    ],
    week6: [
      { duration: '5-10', count: 14 },
      { duration: '10-15', count: 29 },
      { duration: '15-20', count: 26 },
      { duration: '20-25', count: 13 },
      { duration: '25+', count: 10 }
    ],
    week7: [
      { duration: '5-10', count: 16 },
      { duration: '10-15', count: 28 },
      { duration: '15-20', count: 24 },
      { duration: '20-25', count: 12 },
      { duration: '25+', count: 9 }
    ],
    week8: [
      { duration: '5-10', count: 15 },
      { duration: '10-15', count: 30 },
      { duration: '15-20', count: 25 },
      { duration: '20-25', count: 13 },
      { duration: '25+', count: 9 }
    ],
    all: [
      { duration: '5-10', count: 14 },
      { duration: '10-15', count: 30 },
      { duration: '15-20', count: 24 },
      { duration: '20-25', count: 13 },
      { duration: '25+', count: 9 }
    ]
  }
};

const videoEngagementData = {
  ml: {
    week1: [
      { id: 'Intro to ML', engagement: 94, duration: 10 },
      { id: 'Linear Regression', engagement: 82, duration: 22 },
      { id: 'Decision Trees', engagement: 76, duration: 25 },
      { id: 'Neural Networks', engagement: 88, duration: 18 },
    ],
    week2: [
      { id: 'Feature Engineering', engagement: 90, duration: 12 },
      { id: 'Model Evaluation', engagement: 85, duration: 20 },
      { id: 'Overfitting', engagement: 80, duration: 15 },
      { id: 'Cross-Validation', engagement: 87, duration: 16 },
    ],
    week3: [
      { id: 'SVM', engagement: 83, duration: 24 },
      { id: 'Random Forests', engagement: 89, duration: 18 },
      { id: 'K-NN', engagement: 91, duration: 14 },
      { id: 'Boosting', engagement: 85, duration: 22 },
    ],
    week4: [
      { id: 'Dimensionality Reduction', engagement: 79, duration: 20 },
      { id: 'PCA', engagement: 84, duration: 18 },
      { id: 'Clustering', engagement: 88, duration: 16 },
      { id: 'K-Means', engagement: 86, duration: 15 },
    ],
    week5: [
      { id: 'Time Series', engagement: 87, duration: 22 },
      { id: 'ARIMA', engagement: 81, duration: 24 },
      { id: 'Forecasting', engagement: 85, duration: 18 },
      { id: 'Seasonality', engagement: 90, duration: 16 },
    ],
    week6: [
      { id: 'Recommender Systems', engagement: 92, duration: 14 },
      { id: 'Collaborative Filtering', engagement: 86, duration: 20 },
      { id: 'Content-Based', engagement: 84, duration: 18 },
      { id: 'Hybrid Models', engagement: 88, duration: 16 },
    ],
    week7: [
      { id: 'NLP Basics', engagement: 93, duration: 12 },
      { id: 'Text Classification', engagement: 87, duration: 20 },
      { id: 'Sentiment Analysis', engagement: 89, duration: 18 },
      { id: 'Word Embeddings', engagement: 85, duration: 22 },
    ],
    week8: [
      { id: 'ML in Production', engagement: 90, duration: 16 },
      { id: 'Model Deployment', engagement: 85, duration: 20 },
      { id: 'ML Ethics', engagement: 94, duration: 14 },
      { id: 'Final Project', engagement: 92, duration: 18 },
    ],
    all: [
      { id: 'Intro to ML', engagement: 94, duration: 10 },
      { id: 'Linear Regression', engagement: 82, duration: 22 },
      { id: 'Decision Trees', engagement: 76, duration: 25 },
      { id: 'Neural Networks', engagement: 88, duration: 18 },
      { id: 'Feature Engineering', engagement: 90, duration: 12 },
      { id: 'Cross-Validation', engagement: 87, duration: 16 },
      { id: 'ML Ethics', engagement: 94, duration: 14 },
      { id: 'Final Project', engagement: 92, duration: 18 },
    ]
  },
  py: {
    week1: [
      { id: 'Python Basics', engagement: 96, duration: 8 },
      { id: 'Data Structures', engagement: 85, duration: 15 },
      { id: 'Functions', engagement: 82, duration: 12 },
      { id: 'OOP in Python', engagement: 78, duration: 20 },
    ],
    week2: [
      { id: 'Lists & Tuples', engagement: 93, duration: 10 },
      { id: 'Dictionaries', engagement: 88, duration: 14 },
      { id: 'Sets', engagement: 86, duration: 12 },
      { id: 'List Comprehension', engagement: 90, duration: 10 },
    ],
    week3: [
      { id: 'Functions Advanced', engagement: 84, duration: 18 },
      { id: 'Lambda Functions', engagement: 89, duration: 12 },
      { id: 'Map & Filter', engagement: 92, duration: 10 },
      { id: 'Decorators', engagement: 80, duration: 16 },
    ],
    week4: [
      { id: 'Classes & Objects', engagement: 82, duration: 18 },
      { id: 'Inheritance', engagement: 78, duration: 16 },
      { id: 'Polymorphism', engagement: 76, duration: 15 },
      { id: 'Encapsulation', engagement: 80, duration: 14 },
    ],
    week5: [
      { id: 'File Handling', engagement: 88, duration: 12 },
      { id: 'Exception Handling', engagement: 85, duration: 14 },
      { id: 'Regular Expressions', engagement: 79, duration: 18 },
      { id: 'Modules', engagement: 90, duration: 10 },
    ],
    week6: [
      { id: 'Numpy', engagement: 94, duration: 16 },
      { id: 'Pandas', engagement: 92, duration: 18 },
      { id: 'Data Analysis', engagement: 89, duration: 20 },
      { id: 'Visualization', engagement: 91, duration: 15 },
    ],
    week7: [
      { id: 'Web Scraping', engagement: 87, duration: 18 },
      { id: 'API Integration', engagement: 90, duration: 16 },
      { id: 'JSON Processing', engagement: 92, duration: 12 },
      { id: 'Database Access', engagement: 85, duration: 20 },
    ],
    week8: [
      { id: 'Web Development', engagement: 86, duration: 22 },
      { id: 'Flask Basics', engagement: 90, duration: 18 },
      { id: 'Django Intro', engagement: 88, duration: 20 },
      { id: 'Final Project', engagement: 95, duration: 15 },
    ],
    all: [
      { id: 'Python Basics', engagement: 96, duration: 8 },
      { id: 'Data Structures', engagement: 85, duration: 15 },
      { id: 'Functions', engagement: 82, duration: 12 },
      { id: 'OOP in Python', engagement: 78, duration: 20 },
      { id: 'Numpy', engagement: 94, duration: 16 },
      { id: 'Pandas', engagement: 92, duration: 18 },
      { id: 'Final Project', engagement: 95, duration: 15 },
    ]
  },
  ds: {
    week1: [
      { id: 'Intro to DS', engagement: 95, duration: 10 },
      { id: 'Data Process', engagement: 86, duration: 18 },
      { id: 'EDA', engagement: 82, duration: 20 },
      { id: 'Data Cleaning', engagement: 79, duration: 16 },
    ],
    week2: [
      { id: 'Statistics Basics', engagement: 88, duration: 15 },
      { id: 'Probability', engagement: 82, duration: 18 },
      { id: 'Distributions', engagement: 80, duration: 20 },
      { id: 'Hypothesis Testing', engagement: 85, duration: 16 },
    ],
    week3: [
      { id: 'Data Viz', engagement: 92, duration: 14 },
      { id: 'Matplotlib', engagement: 88, duration: 16 },
      { id: 'Seaborn', engagement: 90, duration: 15 },
      { id: 'Dashboards', engagement: 86, duration: 20 },
    ],
    week4: [
      { id: 'Feature Eng', engagement: 84, duration: 18 },
      { id: 'Feature Selection', engagement: 82, duration: 16 },
      { id: 'Preprocessing', engagement: 86, duration: 14 },
      { id: 'Missing Data', engagement: 80, duration: 15 },
    ],
    week5: [
      { id: 'Regression', engagement: 85, duration: 22 },
      { id: 'Classification', engagement: 83, duration: 20 },
      { id: 'Model Evaluation', engagement: 87, duration: 18 },
      { id: 'ML Pipeline', engagement: 90, duration: 16 },
    ],
    week6: [
      { id: 'Time Series', engagement: 88, duration: 20 },
      { id: 'Forecasting', engagement: 86, duration: 22 },
      { id: 'ARIMA', engagement: 82, duration: 24 },
      { id: 'Seasonality', engagement: 85, duration: 18 },
    ],
    week7: [
      { id: 'Big Data Intro', engagement: 89, duration: 16 },
      { id: 'Spark Basics', engagement: 84, duration: 20 },
      { id: 'Data Pipelines', engagement: 86, duration: 18 },
      { id: 'ETL Processes', engagement: 82, duration: 22 },
    ],
    week8: [
      { id: 'Deep Learning', engagement: 90, duration: 20 },
      { id: 'Neural Networks', engagement: 87, duration: 24 },
      { id: 'DS in Production', engagement: 92, duration: 16 },
      { id: 'Final Project', engagement: 95, duration: 18 },
    ],
    all: [
      { id: 'Intro to DS', engagement: 95, duration: 10 },
      { id: 'Data Viz', engagement: 92, duration: 14 },
      { id: 'Regression', engagement: 85, duration: 22 },
      { id: 'Classification', engagement: 83, duration: 20 },
      { id: 'Deep Learning', engagement: 90, duration: 20 },
      { id: 'Final Project', engagement: 95, duration: 18 },
    ]
  },
  dl: {
    week1: [
      { id: 'DL Intro', engagement: 93, duration: 12 },
      { id: 'NN Basics', engagement: 85, duration: 20 },
      { id: 'Perceptrons', engagement: 80, duration: 18 },
      { id: 'Activation Fns', engagement: 82, duration: 15 },
    ],
    week2: [
      { id: 'Backpropagation', engagement: 78, duration: 25 },
      { id: 'Gradient Descent', engagement: 80, duration: 22 },
      { id: 'Optimizers', engagement: 82, duration: 18 },
      { id: 'Loss Functions', engagement: 85, duration: 16 },
    ],
    week3: [
      { id: 'CNN Intro', engagement: 90, duration: 15 },
      { id: 'Convolution', engagement: 82, duration: 24 },
      { id: 'Pooling', engagement: 84, duration: 20 },
      { id: 'CNN Architectures', engagement: 86, duration: 22 },
    ],
    week4: [
      { id: 'RNN Intro', engagement: 88, duration: 16 },
      { id: 'LSTM', engagement: 85, duration: 22 },
      { id: 'GRU', engagement: 82, duration: 20 },
      { id: 'Seq2Seq', engagement: 84, duration: 18 },
    ],
    week5: [
      { id: 'Transfer Learning', engagement: 92, duration: 14 },
      { id: 'Fine-tuning', engagement: 88, duration: 18 },
      { id: 'Data Augmentation', engagement: 90, duration: 15 },
      { id: 'Domain Adaptation', engagement: 86, duration: 20 },
    ],
    week6: [
      { id: 'GANs', engagement: 89, duration: 22 },
      { id: 'Autoencoders', engagement: 85, duration: 20 },
      { id: 'VAE', engagement: 87, duration: 18 },
      { id: 'Adversarial Learning', engagement: 83, duration: 24 },
    ],
    week7: [
      { id: 'Transformers', engagement: 94, duration: 18 },
      { id: 'Attention', engagement: 92, duration: 20 },
      { id: 'BERT', engagement: 90, duration: 22 },
      { id: 'GPT', engagement: 95, duration: 16 },
    ],
    week8: [
      { id: 'DL in Production', engagement: 91, duration: 14 },
      { id: 'Model Deployment', engagement: 88, duration: 18 },
      { id: 'DL Ethics', engagement: 92, duration: 15 },
      { id: 'Final Project', engagement: 96, duration: 20 },
    ],
    all: [
      { id: 'DL Intro', engagement: 93, duration: 12 },
      { id: 'CNN Intro', engagement: 90, duration: 15 },
      { id: 'RNN Intro', engagement: 88, duration: 16 },
      { id: 'Transformers', engagement: 94, duration: 18 },
      { id: 'BERT', engagement: 90, duration: 22 },
      { id: 'Final Project', engagement: 96, duration: 20 },
    ]
  },
  nlp: {
    week1: [
      { id: 'NLP Intro', engagement: 92, duration: 10 },
      { id: 'Text Processing', engagement: 85, duration: 18 },
      { id: 'Tokenization', engagement: 88, duration: 14 },
      { id: 'Normalization', engagement: 86, duration: 16 },
    ],
    week2: [
      { id: 'Text Representation', engagement: 84, duration: 18 },
      { id: 'Bag of Words', engagement: 80, duration: 15 },
      { id: 'TF-IDF', engagement: 82, duration: 16 },
      { id: 'N-grams', engagement: 85, duration: 14 },
    ],
    week3: [
      { id: 'Word Embeddings', engagement: 90, duration: 16 },
      { id: 'Word2Vec', engagement: 86, duration: 20 },
      { id: 'GloVe', engagement: 84, duration: 18 },
      { id: 'FastText', engagement: 88, duration: 15 },
    ],
    week4: [
      { id: 'Text Classification', engagement: 89, duration: 14 },
      { id: 'Sentiment Analysis', engagement: 92, duration: 16 },
      { id: 'Named Entity Rec', engagement: 86, duration: 20 },
      { id: 'POS Tagging', engagement: 84, duration: 18 },
    ],
    week5: [
      { id: 'Advanced NLP', engagement: 87, duration: 22 },
      { id: 'Topic Modeling', engagement: 85, duration: 18 },
      { id: 'LDA', engagement: 82, duration: 20 },
      { id: 'Text Summarization', engagement: 89, duration: 16 },
    ],
    week6: [
      { id: 'RNN for NLP', engagement: 90, duration: 18 },
      { id: 'LSTM for Text', engagement: 86, duration: 22 },
      { id: 'Seq2Seq Models', engagement: 84, duration: 24 },
      { id: 'Machine Translation', engagement: 88, duration: 20 },
    ],
    week7: [
      { id: 'Transformers', engagement: 94, duration: 16 },
      { id: 'BERT for NLP', engagement: 92, duration: 20 },
      { id: 'Fine-tuning BERT', engagement: 90, duration: 22 },
      { id: 'Transfer Learning', engagement: 88, duration: 18 },
    ],
    week8: [
      { id: 'NLP in Production', engagement: 91, duration: 14 },
      { id: 'Chatbots', engagement: 93, duration: 16 },
      { id: 'NLP Ethics', engagement: 95, duration: 12 },
      { id: 'Final Project', engagement: 94, duration: 18 },
    ],
    all: [
      { id: 'NLP Intro', engagement: 92, duration: 10 },
      { id: 'Word Embeddings', engagement: 90, duration: 16 },
      { id: 'Sentiment Analysis', engagement: 92, duration: 16 },
      { id: 'Transformers', engagement: 94, duration: 16 },
      { id: 'BERT for NLP', engagement: 92, duration: 20 },
      { id: 'Final Project', engagement: 94, duration: 18 },
    ]
  }
};

const exerciseCompletionData = {
  ml: {
    week1: [{ course: 'Tuần 1', correct: 80, incorrect: 20 }],
    week2: [{ course: 'Tuần 2', correct: 75, incorrect: 25 }],
    week3: [{ course: 'Tuần 3', correct: 72, incorrect: 28 }],
    week4: [{ course: 'Tuần 4', correct: 78, incorrect: 22 }],
    week5: [{ course: 'Tuần 5', correct: 76, incorrect: 24 }],
    week6: [{ course: 'Tuần 6', correct: 79, incorrect: 21 }],
    week7: [{ course: 'Tuần 7', correct: 82, incorrect: 18 }],
    week8: [{ course: 'Tuần 8', correct: 85, incorrect: 15 }],
    all: [
      { course: 'Tuần 1', correct: 80, incorrect: 20 },
      { course: 'Tuần 2', correct: 75, incorrect: 25 },
      { course: 'Tuần 3', correct: 72, incorrect: 28 },
      { course: 'Tuần 4', correct: 78, incorrect: 22 },
      { course: 'Tuần 5', correct: 76, incorrect: 24 },
      { course: 'Tuần 6', correct: 79, incorrect: 21 },
      { course: 'Tuần 7', correct: 82, incorrect: 18 },
      { course: 'Tuần 8', correct: 85, incorrect: 15 }
    ]
  },
  py: {
    week1: [{ course: 'Tuần 1', correct: 85, incorrect: 15 }],
    week2: [{ course: 'Tuần 2', correct: 82, incorrect: 18 }],
    week3: [{ course: 'Tuần 3', correct: 80, incorrect: 20 }],
    week4: [{ course: 'Tuần 4', correct: 84, incorrect: 16 }],
    week5: [{ course: 'Tuần 5', correct: 83, incorrect: 17 }],
    week6: [{ course: 'Tuần 6', correct: 86, incorrect: 14 }],
    week7: [{ course: 'Tuần 7', correct: 88, incorrect: 12 }],
    week8: [{ course: 'Tuần 8', correct: 90, incorrect: 10 }],
    all: [
      { course: 'Tuần 1', correct: 85, incorrect: 15 },
      { course: 'Tuần 2', correct: 82, incorrect: 18 },
      { course: 'Tuần 3', correct: 80, incorrect: 20 },
      { course: 'Tuần 4', correct: 84, incorrect: 16 },
      { course: 'Tuần 5', correct: 83, incorrect: 17 },
      { course: 'Tuần 6', correct: 86, incorrect: 14 },
      { course: 'Tuần 7', correct: 88, incorrect: 12 },
      { course: 'Tuần 8', correct: 90, incorrect: 10 }
    ]
  },
  ds: {
    week1: [{ course: 'Tuần 1', correct: 78, incorrect: 22 }],
    week2: [{ course: 'Tuần 2', correct: 76, incorrect: 24 }],
    week3: [{ course: 'Tuần 3', correct: 74, incorrect: 26 }],
    week4: [{ course: 'Tuần 4', correct: 80, incorrect: 20 }],
    week5: [{ course: 'Tuần 5', correct: 79, incorrect: 21 }],
    week6: [{ course: 'Tuần 6', correct: 82, incorrect: 18 }],
    week7: [{ course: 'Tuần 7', correct: 84, incorrect: 16 }],
    week8: [{ course: 'Tuần 8', correct: 87, incorrect: 13 }],
    all: [
      { course: 'Tuần 1', correct: 78, incorrect: 22 },
      { course: 'Tuần 2', correct: 76, incorrect: 24 },
      { course: 'Tuần 3', correct: 74, incorrect: 26 },
      { course: 'Tuần 4', correct: 80, incorrect: 20 },
      { course: 'Tuần 5', correct: 79, incorrect: 21 },
      { course: 'Tuần 6', correct: 82, incorrect: 18 },
      { course: 'Tuần 7', correct: 84, incorrect: 16 },
      { course: 'Tuần 8', correct: 87, incorrect: 13 }
    ]
  },
  dl: {
    week1: [{ course: 'Tuần 1', correct: 72, incorrect: 28 }],
    week2: [{ course: 'Tuần 2', correct: 70, incorrect: 30 }],
    week3: [{ course: 'Tuần 3', correct: 68, incorrect: 32 }],
    week4: [{ course: 'Tuần 4', correct: 75, incorrect: 25 }],
    week5: [{ course: 'Tuần 5', correct: 74, incorrect: 26 }],
    week6: [{ course: 'Tuần 6', correct: 76, incorrect: 24 }],
    week7: [{ course: 'Tuần 7', correct: 78, incorrect: 22 }],
    week8: [{ course: 'Tuần 8', correct: 80, incorrect: 20 }],
    all: [
      { course: 'Tuần 1', correct: 72, incorrect: 28 },
      { course: 'Tuần 2', correct: 70, incorrect: 30 },
      { course: 'Tuần 3', correct: 68, incorrect: 32 },
      { course: 'Tuần 4', correct: 75, incorrect: 25 },
      { course: 'Tuần 5', correct: 74, incorrect: 26 },
      { course: 'Tuần 6', correct: 76, incorrect: 24 },
      { course: 'Tuần 7', correct: 78, incorrect: 22 },
      { course: 'Tuần 8', correct: 80, incorrect: 20 }
    ]
  },
  nlp: {
    week1: [{ course: 'Tuần 1', correct: 75, incorrect: 25 }],
    week2: [{ course: 'Tuần 2', correct: 73, incorrect: 27 }],
    week3: [{ course: 'Tuần 3', correct: 70, incorrect: 30 }],
    week4: [{ course: 'Tuần 4', correct: 78, incorrect: 22 }],
    week5: [{ course: 'Tuần 5', correct: 76, incorrect: 24 }],
    week6: [{ course: 'Tuần 6', correct: 80, incorrect: 20 }],
    week7: [{ course: 'Tuần 7', correct: 82, incorrect: 18 }],
    week8: [{ course: 'Tuần 8', correct: 85, incorrect: 15 }],
    all: [
      { course: 'Tuần 1', correct: 75, incorrect: 25 },
      { course: 'Tuần 2', correct: 73, incorrect: 27 },
      { course: 'Tuần 3', correct: 70, incorrect: 30 },
      { course: 'Tuần 4', correct: 78, incorrect: 22 },
      { course: 'Tuần 5', correct: 76, incorrect: 24 },
      { course: 'Tuần 6', correct: 80, incorrect: 20 },
      { course: 'Tuần 7', correct: 82, incorrect: 18 },
      { course: 'Tuần 8', correct: 85, incorrect: 15 }
    ]
  }
};

const scoreOverTimeData = {
  ml: {
    week1: [{ date: '1/4', score: 76 }],
    week2: [{ date: '8/4', score: 78 }],
    week3: [{ date: '15/4', score: 75 }],
    week4: [{ date: '22/4', score: 82 }],
    week5: [{ date: '29/4', score: 84 }],
    week6: [{ date: '6/5', score: 86 }],
    week7: [{ date: '13/5', score: 83 }],
    week8: [{ date: '20/5', score: 88 }],
    all: [
      { date: '1/4', score: 76 },
      { date: '8/4', score: 78 },
      { date: '15/4', score: 75 },
      { date: '22/4', score: 82 },
      { date: '29/4', score: 84 },
      { date: '6/5', score: 86 },
      { date: '13/5', score: 83 },
      { date: '20/5', score: 88 }
    ]
  },
  py: {
    week1: [{ date: '1/4', score: 82 }],
    week2: [{ date: '8/4', score: 85 }],
    week3: [{ date: '15/4', score: 83 }],
    week4: [{ date: '22/4', score: 88 }],
    week5: [{ date: '29/4', score: 90 }],
    week6: [{ date: '6/5', score: 92 }],
    week7: [{ date: '13/5', score: 89 }],
    week8: [{ date: '20/5', score: 94 }],
    all: [
      { date: '1/4', score: 82 },
      { date: '8/4', score: 85 },
      { date: '15/4', score: 83 },
      { date: '22/4', score: 88 },
      { date: '29/4', score: 90 },
      { date: '6/5', score: 92 },
      { date: '13/5', score: 89 },
      { date: '20/5', score: 94 }
    ]
  },
  ds: {
    week1: [{ date: '1/4', score: 78 }],
    week2: [{ date: '8/4', score: 80 }],
    week3: [{ date: '15/4', score: 77 }],
    week4: [{ date: '22/4', score: 84 }],
    week5: [{ date: '29/4', score: 86 }],
    week6: [{ date: '6/5', score: 88 }],
    week7: [{ date: '13/5', score: 85 }],
    week8: [{ date: '20/5', score: 90 }],
    all: [
      { date: '1/4', score: 78 },
      { date: '8/4', score: 80 },
      { date: '15/4', score: 77 },
      { date: '22/4', score: 84 },
      { date: '29/4', score: 86 },
      { date: '6/5', score: 88 },
      { date: '13/5', score: 85 },
      { date: '20/5', score: 90 }
    ]
  },
  dl: {
    week1: [{ date: '1/4', score: 72 }],
    week2: [{ date: '8/4', score: 74 }],
    week3: [{ date: '15/4', score: 70 }],
    week4: [{ date: '22/4', score: 78 }],
    week5: [{ date: '29/4', score: 80 }],
    week6: [{ date: '6/5', score: 82 }],
    week7: [{ date: '13/5', score: 79 }],
    week8: [{ date: '20/5', score: 84 }],
    all: [
      { date: '1/4', score: 72 },
      { date: '8/4', score: 74 },
      { date: '15/4', score: 70 },
      { date: '22/4', score: 78 },
      { date: '29/4', score: 80 },
      { date: '6/5', score: 82 },
      { date: '13/5', score: 79 },
      { date: '20/5', score: 84 }
    ]
  },
  nlp: {
    week1: [{ date: '1/4', score: 75 }],
    week2: [{ date: '8/4', score: 77 }],
    week3: [{ date: '15/4', score: 74 }],
    week4: [{ date: '22/4', score: 80 }],
    week5: [{ date: '29/4', score: 82 }],
    week6: [{ date: '6/5', score: 84 }],
    week7: [{ date: '13/5', score: 81 }],
    week8: [{ date: '20/5', score: 86 }],
    all: [
      { date: '1/4', score: 75 },
      { date: '8/4', score: 77 },
      { date: '15/4', score: 74 },
      { date: '22/4', score: 80 },
      { date: '29/4', score: 82 },
      { date: '6/5', score: 84 },
      { date: '13/5', score: 81 },
      { date: '20/5', score: 86 }
    ]
  }
};

// Dữ liệu chi tiết khóa học
const courseDetails = {
  ml: {
    title: "Machine Learning Cơ bản",
    students: 850,
    videos: 42,
    exercises: 68,
    duration: "8 tuần",
    satisfactionLevel: "Hài lòng",
    satisfactionScore: 0.78,
    resources: [
      { type: "Video bài giảng", count: 42 },
      { type: "Bài tập quiz", count: 28 },
      { type: "Bài tập coding", count: 15 },
      { type: "Tài liệu đọc", count: 22 },
      { type: "Thảo luận", count: 8 }
    ]
  },
  py: {
    title: "Lập trình Python",
    students: 720,
    videos: 38,
    exercises: 55,
    duration: "6 tuần",
    satisfactionLevel: "Rất hài lòng",
    satisfactionScore: 0.86,
    resources: [
      { type: "Video bài giảng", count: 38 },
      { type: "Bài tập quiz", count: 25 },
      { type: "Bài tập coding", count: 20 },
      { type: "Tài liệu đọc", count: 15 },
      { type: "Thảo luận", count: 6 }
    ]
  },
  ds: {
    title: "Data Science và Phân tích",
    students: 680,
    videos: 45,
    exercises: 62,
    duration: "10 tuần",
    satisfactionLevel: "Hài lòng",
    satisfactionScore: 0.75,
    resources: [
      { type: "Video bài giảng", count: 45 },
      { type: "Bài tập quiz", count: 30 },
      { type: "Bài tập coding", count: 18 },
      { type: "Tài liệu đọc", count: 25 },
      { type: "Thảo luận", count: 10 }
    ]
  },
  dl: {
    title: "Deep Learning",
    students: 520,
    videos: 40,
    exercises: 58,
    duration: "8 tuần",
    satisfactionLevel: "Hài lòng",
    satisfactionScore: 0.72,
    resources: [
      { type: "Video bài giảng", count: 40 },
      { type: "Bài tập quiz", count: 26 },
      { type: "Bài tập coding", count: 22 },
      { type: "Tài liệu đọc", count: 18 },
      { type: "Thảo luận", count: 7 }
    ]
  },
  nlp: {
    title: "Xử lý ngôn ngữ tự nhiên",
    students: 410,
    videos: 36,
    exercises: 50,
    duration: "8 tuần",
    satisfactionLevel: "Hài lòng",
    satisfactionScore: 0.76,
    resources: [
      { type: "Video bài giảng", count: 36 },
      { type: "Bài tập quiz", count: 22 },
      { type: "Bài tập coding", count: 18 },
      { type: "Tài liệu đọc", count: 20 },
      { type: "Thảo luận", count: 6 }
    ]
  }
};

// Màu sắc cho biểu đồ
const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658'];
const GENDER_COLORS = ['#8884d8', '#FF8042'];

const INITIAL_ITEMS_TO_DISPLAY = 50; // Show 50 items initially
const ITEMS_TO_LOAD_MORE = 100;      // Load 100 more items on click

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState("all");
  const [selectedWeek, setSelectedWeek] = useState("all");
  const [activeTab, setActiveTab] = useState("overview");

  // State for managing the full list of courses
  const [allCourses, setAllCourses] = useState<{ id: string; name: string }[]>([]);
  // State for the courses currently rendered in the dropdown
  const [displayedCourses, setDisplayedCourses] = useState<{ id: string; name: string }[]>([]);
  // State to track how many items are visible (for the "Load More" logic)
  const [visibleCourseCount, setVisibleCourseCount] = useState(INITIAL_ITEMS_TO_DISPLAY);

  // Handler to load more courses into the displayed list
  const handleLoadMoreCourses = () => {
    setVisibleCourseCount(prevCount => {
      const newCount = Math.min(prevCount + ITEMS_TO_LOAD_MORE, allCourses.length);
      setDisplayedCourses(allCourses.slice(0, newCount));
      return newCount;
    });
  };

  // const [courseList, setCourseList] = useState<{ id: string; name: string }[]>([
  //   { id: "all", name: "Chọn khóa học" }
  // ]);

  useEffect(() => {
    // Tải courseList từ file JSONL trong thư mục public/data
    fetch('/data/translated_courseList.jsonl')
      .then(res => res.text())
      .then(text => {
        const lines = text.split('\n').filter(line => line.trim() !== '');
        const parsedData = lines.map(line => JSON.parse(line));
        
        // Ensure "Chọn khóa học" is always the first option and filter out any other "all" id from data
        const coursesFromData = parsedData.filter(c => c.id !== "all");
        const completeCourseList = [{ id: "all", name: "Chọn khóa học" }, ...coursesFromData];
        
        setAllCourses(completeCourseList);
        // Set the initially displayed courses based on INITIAL_ITEMS_TO_DISPLAY
        setDisplayedCourses(completeCourseList.slice(0, INITIAL_ITEMS_TO_DISPLAY));
        // Reset visible count to initial, in case this effect runs again
        setVisibleCourseCount(INITIAL_ITEMS_TO_DISPLAY);
      })
      .catch((error) => {
        console.error("Error fetching courseList.jsonl:", error);
        // If error, set a default list
        const defaultList = [{ id: "all", name: "Chọn khóa học" }];
        setAllCourses(defaultList);
        setDisplayedCourses(defaultList);
        setVisibleCourseCount(defaultList.length);
      });
  }, []); // Empty dependency array ensures this runs once on mount

  // Giả lập tải dữ liệu
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Lấy dữ liệu dựa trên khóa học và tuần đã chọn
  const getLearningBehaviorData = () => {
    if (selectedCourse === "all") return [];
    if (selectedWeek === "all") return learningBehaviorData[selectedCourse].all;
    return learningBehaviorData[selectedCourse][selectedWeek] || [];
  };
  
  const getAssignmentData = () => {
    if (selectedCourse === "all") return [];
    if (selectedWeek === "all") return assignmentData[selectedCourse].all;
    return assignmentData[selectedCourse][selectedWeek] || [];
  };
  
  const getCommentActivityData = () => {
    if (selectedCourse === "all") return [];
    if (selectedWeek === "all") return commentActivityData[selectedCourse].all;
    return commentActivityData[selectedCourse][selectedWeek] || [];
  };
  
  const getVideoDurationData = () => {
    if (selectedCourse === "all") return [];
    if (selectedWeek === "all") return videoDurationData[selectedCourse].all;
    return videoDurationData[selectedCourse][selectedWeek] || [];
  };
  
  const getVideoEngagementData = () => {
    if (selectedCourse === "all") return [];
    if (selectedWeek === "all") return videoEngagementData[selectedCourse].all;
    return videoEngagementData[selectedCourse][selectedWeek] || [];
  };
  
  const getExerciseCompletionData = () => {
    if (selectedCourse === "all") return [];
    if (selectedWeek === "all") return exerciseCompletionData[selectedCourse].all;
    return exerciseCompletionData[selectedCourse][selectedWeek] || [];
  };
  
  const getScoreOverTimeData = () => {
    if (selectedCourse === "all") return [];
    if (selectedWeek === "all") return scoreOverTimeData[selectedCourse].all;
    return scoreOverTimeData[selectedCourse][selectedWeek] || [];
  };
  
  const getCourseDetail = () => {
    return courseDetails[selectedCourse];
  };

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
            
            <Tabs defaultValue="overview" className="space-y-6" value={activeTab} onValueChange={setActiveTab}>
  <TabsList className="grid w-full grid-cols-3 gap-2 text-center">
    <TabsTrigger value="overview">Tổng quan</TabsTrigger>
    <TabsTrigger value="courses">Khóa học</TabsTrigger>
    <TabsTrigger value="model">Mô hình</TabsTrigger>
  </TabsList>



  {/* 👇 Di chuyển dropdown chọn khóa học + tuần xuống đây */}
  {/* {activeTab === "courses" && (
    <div className="flex flex-wrap items-center gap-4 mt-4 px-2">
      <Select value={selectedCourse} onValueChange={setSelectedCourse}>
        <SelectTrigger className="w-[180px] h-8 text-xs">
          <SelectValue placeholder="Chọn khóa học" />
        </SelectTrigger>
        <SelectContent>
          {courseList.map((course) => (
            <SelectItem key={course.id} value={course.id}>
              {course.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select> */}
  {activeTab === "courses" && (
    <div className="flex flex-wrap items-center gap-4 mt-4 px-2">
      <Select value={selectedCourse} onValueChange={setSelectedCourse}>
        <SelectTrigger className="w-[180px] h-8 text-xs">
          <SelectValue placeholder="Chọn khóa học" />
        </SelectTrigger>
        <SelectContent className="max-h-72 overflow-y-auto">
          {/* MODIFIED: Map over displayedCourses instead of courseList */}
          {displayedCourses.map((course) => (
            <SelectItem key={course.id} value={course.id}>
              {course.name}
            </SelectItem>
          ))}
          {/* NEW: "Load More" button/div */}
          {allCourses.length > 0 && visibleCourseCount < allCourses.length && (
            <div
              onClick={(e) => {
                // Prevent the select dropdown from closing when "Load More" is clicked
                e.stopPropagation(); 
                handleLoadMoreCourses();
              }}
              // Basic styling for the "Load More" item - adjust as needed
              className="text-center py-2 px-3 text-xs text-blue-600 cursor-pointer hover:bg-gray-100"
            >
              Tải thêm ({allCourses.length - visibleCourseCount} nữa)
            </div>
          )}
        </SelectContent>
      </Select>

      {selectedCourse !== "all" && (
        <Select value={selectedWeek} onValueChange={setSelectedWeek}>
          <SelectTrigger className="w-[150px] h-8 text-xs">
            <SelectValue placeholder="Chọn tuần" />
          </SelectTrigger>
          <SelectContent>
            {weekList.map((week) => (
              <SelectItem key={week.id} value={week.id}>
                {week.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  )}
              
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
                    <div className="h-80">
                      {loading ? (
                        <div className="h-full w-full flex items-center justify-center">
                          <Skeleton className="h-[300px] w-full rounded" />
                        </div>
                      ) : (
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsLineChart
                            data={scoreOverTimeData.ml.all}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis domain={[50, 100]} />
                            <Tooltip />
                            <Legend />
                            <Line
                              type="monotone"
                              dataKey="score"
                              name="Điểm hài lòng trung bình"
                              stroke="#8884d8"
                              activeDot={{ r: 8 }}
                            />
                          </RechartsLineChart>
                        </ResponsiveContainer>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="courses" className="space-y-6">
                {selectedCourse !== "all" && getCourseDetail() && (
                  <Card>
                    <CardHeader>
                      <CardTitle>{getCourseDetail().title}</CardTitle>
                      <CardDescription>Thông tin chi tiết về khóa học</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold">{getCourseDetail().students}</div>
                          <div className="text-sm text-gray-500">Học viên</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold">{getCourseDetail().videos}</div>
                          <div className="text-sm text-gray-500">Videos</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold">{getCourseDetail().exercises}</div>
                          <div className="text-sm text-gray-500">Bài tập</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold">{getCourseDetail().duration}</div>
                          <div className="text-sm text-gray-500">Thời lượng</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold">{getCourseDetail().satisfactionScore.toFixed(2)}</div>
                          <div className="text-sm text-gray-500">Điểm BSI</div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">Tài nguyên khóa học</h3>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Loại tài nguyên</TableHead>
                              <TableHead className="text-right">Số lượng</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {getCourseDetail().resources.map((resource, index) => (
                              <TableRow key={index}>
                                <TableCell>{resource.type}</TableCell>
                                <TableCell className="text-right">{resource.count}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                {selectedCourse !== "all" && (
                  <>
                    {/* Thông tin học viên & nền tảng học tập */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Phân bố giới tính (Pie chart) */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <PieChart className="h-5 w-5 text-research-primary" />
                            <span>Phân bố giới tính</span>
                          </CardTitle>
                          <CardDescription>
                            Tỉ lệ nam/nữ trong tổng số học viên
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-[300px]">
                            {loading ? (
                              <div className="h-full w-full flex items-center justify-center">
                                <Skeleton className="h-[250px] w-[250px] rounded-full" />
                              </div>
                            ) : (
                              <ChartContainer
                                config={{
                                  male: { label: "Nam" },
                                  female: { label: "Nữ" }
                                }}
                              >
                                <RechartPieChart>
                                  <Pie
                                    data={genderData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                  >
                                    {genderData.map((entry, index) => (
                                      <Cell key={`cell-${index}`} fill={GENDER_COLORS[index % GENDER_COLORS.length]} />
                                    ))}
                                  </Pie>
                                  <ChartTooltip content={<ChartTooltipContent />} />
                                  <ChartLegend content={<ChartLegendContent />} />
                                </RechartPieChart>
                              </ChartContainer>
                            )}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Phân bố độ tuổi (Bar chart)
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <BarChart2 className="h-5 w-5 text-research-primary" />
                            <span>Phân bố độ tuổi</span>
                          </CardTitle>
                          <CardDescription>
                            Phân bố học viên theo nhóm tuổi
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-[300px]">
                            {loading ? (
                              <div className="h-full w-full flex flex-col gap-2 justify-center">
                                <Skeleton className="h-8 w-full" />
                                <Skeleton className="h-8 w-3/4" />
                                <Skeleton className="h-8 w-5/6" />
                                <Skeleton className="h-8 w-1/2" />
                                <Skeleton className="h-8 w-1/4" />
                              </div>
                            ) : (
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={ageDistributionData}>
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="age" />
                                  <YAxis />
                                  <Tooltip />
                                  <Legend />
                                  <Bar dataKey="count" name="Số lượng học viên" fill="#8884d8" />
                                </BarChart>
                              </ResponsiveContainer>
                            )}
                          </div>
                        </CardContent>
                      </Card> */}
                    </div>

                    {/* Hành vi học tập - Đã thay đổi thành biểu đồ cột theo tuần */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <LineChart className="h-5 w-5 text-research-primary" />
                          <span>Hành vi học tập theo tuần</span>
                        </CardTitle>
                        <CardDescription>
                          Phân tích các chỉ số học tập (tốc độ xem, thời gian tương tác)
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[300px]">
                          {loading ? (
                            <div className="h-full w-full flex justify-center items-center">
                              <Skeleton className="h-[250px] w-full" />
                            </div>
                          ) : (
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart
                                data={getLearningBehaviorData()}
                                margin={{
                                  top: 20,
                                  right: 30,
                                  left: 20,
                                  bottom: 5,
                                }}
                              >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="week" />
                                <YAxis yAxisId="left" orientation="left" />
                                <YAxis yAxisId="right" orientation="right" domain={[0, 2]} />
                                <Tooltip />
                                <Legend />
                                <Bar yAxisId="right" dataKey="watchSpeed" name="Tốc độ xem TB" fill="#8884d8" />
                                <Bar yAxisId="left" dataKey="watchTime" name="Thời gian xem (phút)" fill="#82ca9d" />
                                <Bar yAxisId="left" dataKey="rewindTime" name="Thời gian tua lại (phút)" fill="#ffc658" />
                                <Bar yAxisId="left" dataKey="pauseTime" name="Thời gian tạm dừng (phút)" fill="#ff8042" />
                              </BarChart>
                            </ResponsiveContainer>
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Hành vi làm bài tập và Tương tác xã hội */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Hành vi làm bài tập - Đã thay đổi thành biểu đồ cột theo tuần */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <BarChart2 className="h-5 w-5 text-research-primary" />
                            <span>Hành vi làm bài tập theo tuần</span>
                          </CardTitle>
                          <CardDescription>
                            Phân tích số lần thử và điểm số theo loại bài tập
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-[300px]">
                            {loading ? (
                              <div className="h-full w-full flex flex-col gap-2 justify-center">
                                <Skeleton className="h-8 w-full" />
                                <Skeleton className="h-8 w-4/5" />
                                <Skeleton className="h-8 w-3/4" />
                                <Skeleton className="h-8 w-2/3" />
                              </div>
                            ) : (
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                  data={getAssignmentData()}
                                  margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                  }}
                                >
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="week" />
                                  <YAxis yAxisId="left" orientation="left" />
                                  <YAxis 
                                    yAxisId="right" 
                                    orientation="right" 
                                    domain={[0, 100]} 
                                    unit="%" 
                                  />
                                  <Tooltip />
                                  <Legend />
                                  <Bar yAxisId="left" dataKey="quizAttempts" name="Số lần thử Quiz" fill="#8884d8" />
                                  <Bar yAxisId="left" dataKey="codingAttempts" name="Số lần thử Coding" fill="#d884d8" />
                                  <Bar yAxisId="right" dataKey="quizScore" name="Điểm Quiz" fill="#82ca9d" />
                                  <Bar yAxisId="right" dataKey="codingScore" name="Điểm Coding" fill="#ffc658" />
                                </BarChart>
                              </ResponsiveContainer>
                            )}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Tương tác xã hội - Đã thay đổi thành biểu đồ cột theo tuần */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <LineChart className="h-5 w-5 text-research-primary" />
                            <span>Tương tác xã hội theo tuần</span>
                          </CardTitle>
                          <CardDescription>
                            Phân tích các hoạt động tương tác
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-[300px]">
                            {loading ? (
                              <div className="h-full w-full flex justify-center items-center">
                                <Skeleton className="h-[250px] w-full" />
                              </div>
                            ) : (
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                  data={getCommentActivityData()}
                                  margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                  }}
                                >
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="week" />
                                  <YAxis />
                                  <Tooltip />
                                  <Legend />
                                  <Bar dataKey="comments" name="Bình luận" fill="#8884d8" />
                                  <Bar dataKey="questions" name="Câu hỏi" fill="#82ca9d" />
                                  <Bar dataKey="answers" name="Trả lời" fill="#ffc658" />
                                  <Bar dataKey="reactions" name="Phản ứng" fill="#ff8042" />
                                </BarChart>
                              </ResponsiveContainer>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Phân tích video */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Histogram độ dài video */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <BarChart2 className="h-5 w-5 text-research-primary" />
                            <span>Độ dài video</span>
                          </CardTitle>
                          <CardDescription>
                            Phân bố độ dài video (phút)
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-[300px]">
                            {loading ? (
                              <div className="h-full w-full flex flex-col gap-2 justify-center">
                                <Skeleton className="h-8 w-3/4" />
                                <Skeleton className="h-8 w-full" />
                                <Skeleton className="h-8 w-2/3" />
                                <Skeleton className="h-8 w-1/3" />
                                <Skeleton className="h-8 w-1/4" />
                              </div>
                            ) : (
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={getVideoDurationData()}>
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="duration" />
                                  <YAxis />
                                  <Tooltip />
                                  <Legend />
                                  <Bar dataKey="count" name="Số lượng video" fill="#82ca9d" />
                                </BarChart>
                              </ResponsiveContainer>
                            )}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Scatter plot video engagement */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <LineChart className="h-5 w-5 text-research-primary" />
                            <span>Tương tác video</span>
                          </CardTitle>
                          <CardDescription>
                            Mức độ tương tác theo độ dài video
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-[300px]">
                            {loading ? (
                              <div className="h-full w-full flex justify-center items-center">
                                <Skeleton className="h-[250px] w-[250px]" />
                              </div>
                            ) : (
                              <ResponsiveContainer width="100%" height="100%">
                                <ScatterChart
                                  margin={{
                                    top: 20,
                                    right: 20,
                                    bottom: 20,
                                    left: 20,
                                  }}
                                >
                                  <CartesianGrid />
                                  <XAxis 
                                    type="number" 
                                    dataKey="duration" 
                                    name="Độ dài (phút)" 
                                    unit="phút"
                                  />
                                  <YAxis 
                                    type="number" 
                                    dataKey="engagement" 
                                    name="Mức độ tương tác" 
                                    unit="%"
                                  />
                                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                                  <Scatter name="Video" data={getVideoEngagementData()} fill="#8884d8" />
                                </ScatterChart>
                              </ResponsiveContainer>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Bài tập theo khóa học - Stacked bar & Line plot */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Stacked bar chart hoàn thành bài tập */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <BarChart2 className="h-5 w-5 text-research-primary" />
                            <span>Hoàn thành bài tập</span>
                          </CardTitle>
                          <CardDescription>
                            Tỉ lệ hoàn thành bài tập đúng theo khóa học
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-[300px]">
                            {loading ? (
                              <div className="h-full w-full flex flex-col gap-2 justify-center">
                                <Skeleton className="h-8 w-full" />
                                <Skeleton className="h-8 w-4/5" />
                                <Skeleton className="h-8 w-3/4" />
                                <Skeleton className="h-8 w-2/3" />
                                <Skeleton className="h-8 w-1/2" />
                              </div>
                            ) : (
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                  data={getExerciseCompletionData()}
                                  margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                  }}
                                >
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="course" />
                                  <YAxis />
                                  <Tooltip />
                                  <Legend />
                                  <Bar dataKey="correct" name="Đúng" stackId="a" fill="#82ca9d" />
                                  <Bar dataKey="incorrect" name="Sai" stackId="a" fill="#ff8042" />
                                </BarChart>
                              </ResponsiveContainer>
                            )}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Line plot điểm số theo thời gian */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <LineChart className="h-5 w-5 text-research-primary" />
                            <span>Điểm số theo thời gian</span>
                          </CardTitle>
                          <CardDescription>
                            Tiến độ điểm số trung bình theo thời gian
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-[300px]">
                            {loading ? (
                              <div className="h-full w-full flex justify-center items-center">
                                <Skeleton className="h-[250px] w-full" />
                              </div>
                            ) : (
                              <ResponsiveContainer width="100%" height="100%">
                                <RechartsLineChart
                                  data={getScoreOverTimeData()}
                                  margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                  }}
                                >
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="date" />
                                  <YAxis domain={[50, 100]} />
                                  <Tooltip />
                                  <Legend />
                                  <Line
                                    type="monotone"
                                    dataKey="score"
                                    name="Điểm trung bình"
                                    stroke="#8884d8"
                                    activeDot={{ r: 8 }}
                                  />
                                </RechartsLineChart>
                              </ResponsiveContainer>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                )}
              </TabsContent>
              
              <TabsContent value="model">
                <Card>
                  <CardContent>
                    <ModelEvaluationContent />
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
