
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Gauge, Video, ClipboardCheck, MessageCircle, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BSIOverview = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  
  // Mock data for courses matching different satisfaction levels
  const mockCourses = {
    "Rất hài lòng": [
      { 
        id: 1, 
        name: "Lập Trình Web Nâng Cao", 
        bsi: 0.87,
        vei: 0.89, // Video Engagement Index
        eei: 0.92, // Exercise Engagement Index
        csi: 0.85, // Comment Sentiment Index
      },
      { 
        id: 2, 
        name: "Machine Learning cơ bản", 
        bsi: 0.84,
        vei: 0.83, 
        eei: 0.82, 
        csi: 0.88, 
      },
    ],
    "Hài lòng": [
      { 
        id: 3, 
        name: "Python cho người mới bắt đầu", 
        bsi: 0.72,
        vei: 0.75, 
        eei: 0.78, 
        csi: 0.64, 
      },
      { 
        id: 4, 
        name: "Thuật toán cơ bản", 
        bsi: 0.65,
        vei: 0.82, 
        eei: 0.61, 
        csi: 0.70, 
      },
    ],
    "Bình thường": [
      { 
        id: 5, 
        name: "Cơ sở dữ liệu", 
        bsi: 0.56,
        vei: 0.59, 
        eei: 0.62, 
        csi: 0.49, 
      },
      { 
        id: 6, 
        name: "Front-end cơ bản", 
        bsi: 0.51,
        vei: 0.48, 
        eei: 0.52, 
        csi: 0.46, 
      },
    ],
    "Không hài lòng": [
      { 
        id: 7, 
        name: "Đồ họa máy tính", 
        bsi: 0.42,
        vei: 0.45, 
        eei: 0.43, 
        csi: 0.41, 
      },
      { 
        id: 8, 
        name: "IoT cơ bản", 
        bsi: 0.41,
        vei: 0.44, 
        eei: 0.42, 
        csi: 0.40, 
      },
    ],
    "Rất không hài lòng": [
      { 
        id: 9, 
        name: "Kiến trúc máy tính", 
        bsi: 0.25,
        vei: 0.28, 
        eei: 0.27, 
        csi: 0.26, 
      },
      { 
        id: 10, 
        name: "Công nghệ phần mềm", 
        bsi: 0.22,
        vei: 0.25, 
        eei: 0.24, 
        csi: 0.23, 
      },
    ],
  };

  // Criteria explanation for each level - updated thresholds
  const criteriaByLevel = {
    // ... keep existing code (criteria definitions for different satisfaction levels)
  };

  // Define visual styles for each satisfaction level
  const satisfactionStyles = {
    // ... keep existing code (visual styles for different satisfaction levels)
  };

  
  // Function to check if a course meets criteria for a specific level
  const isCourseInLevel = (course, level) => {
    const { vei, eei, csi } = course;

    if (level === 'Rất hài lòng') {
      return vei >= 0.8 && eei >= 0.8 && csi >= 0.8;
    }
    if (level === 'Hài lòng') {
      return vei >= 0.6 && vei < 0.8 &&
             eei >= 0.6 && eei < 0.8 &&
             csi >= 0.6 && csi < 0.8;
    }
    if (level === 'Bình thường') {
      return vei >= 0.5 && vei < 0.6 &&
             eei >= 0.5 && eei < 0.6 &&
             csi >= 0.5 && csi < 0.6;
    }
    if (level === 'Không hài lòng') {
      return vei >= 0.4 && vei < 0.5 &&
             eei >= 0.4 && eei < 0.5 &&
             csi >= 0.4 && csi < 0.5;
    }
    if (level === 'Rất không hài lòng') {
      return vei <= 0.3 && eei <= 0.3 && csi <= 0.3;
    }
    return false;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* ... keep existing code (main content) */}
      </main>
      
      {/* Dialog for showing details when a satisfaction level is clicked */}
      <Dialog open={!!selectedLevel} onOpenChange={() => setSelectedLevel(null)}>
        <DialogContent className="w-full max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className={`text-2xl font-bold ${satisfactionStyles[selectedLevel]?.textColor || ''}`}>
              Chi tiết mức độ: {selectedLevel}
            </DialogTitle>
            <DialogDescription>
              {selectedLevel && criteriaByLevel[selectedLevel]?.description}
            </DialogDescription>
          </DialogHeader>
          
          {selectedLevel && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tiêu chí đánh giá</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {criteriaByLevel[selectedLevel]?.criteria.map((criterion, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-green-600">✓</span> {criterion}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Các khóa học thuộc mức độ này</h3>
                <div className="rounded-md border overflow-x-auto">
                  <Table className="min-w-[900px]">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Tên khóa học</TableHead>
                        <TableHead className="text-center">BSI</TableHead>
                        <TableHead className="text-center">
                          <div className="flex items-center justify-center gap-1">
                            <Video className="h-4 w-4 text-purple-500" /> 
                            <span>VEI</span>
                          </div>
                        </TableHead>
                        <TableHead className="text-center">
                          <div className="flex items-center justify-center gap-1">
                            <ClipboardCheck className="h-4 w-4 text-teal-500" /> 
                            <span>EEI</span>
                          </div>
                        </TableHead>
                        <TableHead className="text-center">
                          <div className="flex items-center justify-center gap-1">
                            <MessageCircle className="h-4 w-4 text-pink-500" /> 
                            <span>CSI</span>
                          </div>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedLevel && mockCourses[selectedLevel]
                        ?.filter(course => isCourseInLevel(course, selectedLevel))
                        .map((course) => (
                          <TableRow key={course.id}>
                            <TableCell className="font-medium">{course.name}</TableCell>
                            <TableCell className="text-center font-semibold">{course.bsi.toFixed(2)}</TableCell>
                            <TableCell className="text-center">{course.vei.toFixed(2)}</TableCell>
                            <TableCell className="text-center">{course.eei.toFixed(2)}</TableCell>
                            <TableCell className="text-center">{course.csi.toFixed(2)}</TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BSIOverview;
