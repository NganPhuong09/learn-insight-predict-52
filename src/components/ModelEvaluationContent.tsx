import React, { useState } from "react";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, RefreshCw } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

// Define types for our model data
type ModelResult = {
  method: string;
  processing: string;
  svm: number;
  cnn: number;
  completeness: number;
  consistency: number;
  timeliness: number;
  accuracy: number;
  reliability: number;
  relevance: number;
};

const ModelEvaluation = () => {
  // State for model results data
  const [modelResults, setModelResults] = useState<ModelResult[]>([
    {
      method: "PCA",
      processing: "Raw",
      svm: 0.78,
      cnn: 0.75,
      completeness: 0.95,
      consistency: 0.92,
      timeliness: 0.87,
      accuracy: 0.82,
      reliability: 0.84,
      relevance: 0.89
    },
    {
      method: "PCA",
      processing: "Processed",
      svm: 0.84,
      cnn: 0.82,
      completeness: 0.97,
      consistency: 0.95,
      timeliness: 0.90,
      accuracy: 0.88,
      reliability: 0.89,
      relevance: 0.92
    },
    {
      method: "AHP",
      processing: "Raw",
      svm: 0.76,
      cnn: 0.71,
      completeness: 0.91,
      consistency: 0.88,
      timeliness: 0.82,
      accuracy: 0.79,
      reliability: 0.81,
      relevance: 0.85
    },
    {
      method: "AHP",
      processing: "Processed",
      svm: 0.82,
      cnn: 0.79,
      completeness: 0.94,
      consistency: 0.93,
      timeliness: 0.86,
      accuracy: 0.85,
      reliability: 0.87,
      relevance: 0.91
    },
    {
      method: "CRITIC",
      processing: "Raw",
      svm: 0.80,
      cnn: 0.77,
      completeness: 0.93,
      consistency: 0.90,
      timeliness: 0.88,
      accuracy: 0.83,
      reliability: 0.85,
      relevance: 0.87
    },
    {
      method: "CRITIC",
      processing: "Processed",
      svm: 0.88,
      cnn: 0.86,
      completeness: 0.98,
      consistency: 0.96,
      timeliness: 0.92,
      accuracy: 0.91,
      reliability: 0.93,
      relevance: 0.95
    }
  ]);

  // Find the best model for each category
  const bestSVM = Math.max(...modelResults.map(item => item.svm));
  const bestCNN = Math.max(...modelResults.map(item => item.cnn));
  
  // Get the best overall pipeline
  const getBestPipeline = () => {
    let bestItem = modelResults[0];
    let highestScore = (bestItem.svm + bestItem.cnn) / 2;
    
    modelResults.forEach(item => {
      const avgScore = (item.svm + item.cnn) / 2;
      if (avgScore > highestScore) {
        highestScore = avgScore;
        bestItem = item;
      }
    });
    
    return `${bestItem.method} (${bestItem.processing})`;
  };

  // Get the best performing model overall (SVM or CNN)
const getBestModel = () => {
  const avgSVM = modelResults.reduce((sum, r) => sum + r.svm, 0) / modelResults.length;
  const avgCNN = modelResults.reduce((sum, r) => sum + r.cnn, 0) / modelResults.length;
  return avgSVM > avgCNN ? "SVM" : "CNN";
};
  
  // States for training schedule
  const [scheduleType, setScheduleType] = useState("weekly");
  const [autoUpdate, setAutoUpdate] = useState(true);
  const [modelStatus, setModelStatus] = useState("Đã cập nhật");
  
  // Simulating running a model
  const handleRunModel = () => {
    setModelStatus("Đang chạy...");
    setTimeout(() => {
      setModelStatus("Đã cập nhật");
      // This would be where real model updates would happen
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="p-6 space-y-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-gray-800">Đánh giá mô hình</h2>
          
          <Tabs defaultValue="results">
            <TabsList className="mb-4">
              <TabsTrigger value="results">Kết quả mô hình</TabsTrigger>
              <TabsTrigger value="scheduling">Lập lịch huấn luyện</TabsTrigger>
            </TabsList>
            
            <TabsContent value="results" className="space-y-4">
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Bảng dưới đây hiển thị kết quả đánh giá mô hình, với sự kết hợp giữa các phương pháp chuẩn bị dữ liệu
                  (PCA, AHP, CRITIC) và các mô hình học máy (SVM, CNN). Đồng thời hiển thị các chỉ số đánh giá chất lượng
                  dữ liệu theo các tiêu chí <Link to="/data-quality" className="text-research-primary hover:underline font-medium">Hard Dimensions và Soft Dimensions</Link>.
                </p>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableCaption>Bảng đánh giá mô hình và chất lượng dữ liệu</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead colSpan={2}>Phương pháp</TableHead>
                      <TableHead colSpan={2} className="text-center">Mô hình</TableHead>
                      <TableHead colSpan={3} className="text-center">Hard Dimensions</TableHead>
                      <TableHead colSpan={3} className="text-center">Soft Dimensions</TableHead>
                    </TableRow>
                    <TableRow>
                      <TableHead>Data</TableHead>
                      <TableHead>Processing</TableHead>
                      <TableHead className="text-center">SVM</TableHead>
                      <TableHead className="text-center">CNN</TableHead>
                      <TableHead className="text-center">Completeness</TableHead>
                      <TableHead className="text-center">Consistency</TableHead>
                      <TableHead className="text-center">Timeliness</TableHead>
                      <TableHead className="text-center">Accuracy</TableHead>
                      <TableHead className="text-center">Reliability</TableHead>
                      <TableHead className="text-center">Relevance</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {modelResults.map((result, index) => (
                      <TableRow key={index} className={
                        (result.svm === bestSVM || result.cnn === bestCNN) 
                          ? "bg-amber-50" 
                          : ""
                      }>
                        <TableCell className="font-medium">{result.method}</TableCell>
                        <TableCell>{result.processing}</TableCell>
                        <TableCell className={`text-center ${result.svm === bestSVM ? "font-bold text-amber-600" : ""}`}>
                          {result.svm.toFixed(2)}
                          {result.svm === bestSVM && <Badge className="ml-2 bg-amber-500">Best</Badge>}
                        </TableCell>
                        <TableCell className={`text-center ${result.cnn === bestCNN ? "font-bold text-amber-600" : ""}`}>
                          {result.cnn.toFixed(2)}
                          {result.cnn === bestCNN && <Badge className="ml-2 bg-amber-500">Best</Badge>}
                        </TableCell>
                        <TableCell className="text-center">{result.completeness.toFixed(2)}</TableCell>
                        <TableCell className="text-center">{result.consistency.toFixed(2)}</TableCell>
                        <TableCell className="text-center">{result.timeliness.toFixed(2)}</TableCell>
                        <TableCell className="text-center">{result.accuracy.toFixed(2)}</TableCell>
                        <TableCell className="text-center">{result.reliability.toFixed(2)}</TableCell>
                        <TableCell className="text-center">{result.relevance.toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={10} className="text-right">
                        <div>Phương pháp xử lý tốt nhất: <span className="font-bold text-amber-600">{getBestPipeline()}</span></div>
                        <div>Mô hình học máy tốt nhất: <span className="font-bold text-amber-600">{getBestModel()}</span></div>
                      </TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
              
              <div className="flex justify-center mt-6">
                <Button 
                  onClick={handleRunModel}
                  className="flex items-center gap-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  Chạy lại mô hình
                </Button>
              </div>
              
              <div className="mt-4 p-4 border rounded-lg bg-gray-50">
                <p className="text-sm text-gray-600">
                  Trạng thái mô hình: <span className="font-medium">{modelStatus}</span>
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="scheduling" className="space-y-6">
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Lập lịch huấn luyện mô hình</h3>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="schedule-type">Tần suất huấn luyện</Label>
                      <Select value={scheduleType} onValueChange={setScheduleType}>
                        <SelectTrigger id="schedule-type">
                          <SelectValue placeholder="Chọn tần suất huấn luyện" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Hàng ngày</SelectItem>
                          <SelectItem value="weekly">Hàng tuần</SelectItem>
                          <SelectItem value="monthly">Hàng tháng</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Switch 
                          id="auto-update" 
                          checked={autoUpdate} 
                          onCheckedChange={setAutoUpdate} 
                        />
                        <Label htmlFor="auto-update">Cập nhật khi có dữ liệu mới</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-semibold mb-2">Lịch sử cập nhật gần đây</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span>Cập nhật gần nhất: 15/05/2023, 14:30</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span>Lần cập nhật kế tiếp: 22/05/2023, 14:30</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button onClick={handleRunModel} className="flex items-center gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Huấn luyện ngay
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default ModelEvaluation;
