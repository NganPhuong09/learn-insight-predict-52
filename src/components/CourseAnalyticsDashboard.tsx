import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// --- Type Definitions for the new JSON structure ---
interface GenderEntry {
  gender: number; // e.g., 1 for Male, 2 for Female
  count: number;
  percentage: number;
}

interface WeeklyCommentEntry {
  week: string; // e.g., "2019-10-21 00:00:00"
  num_comments: number;
}

interface WeeklySubmissionEntry {
  week: string; // e.g., "2020-07-13 00:00:00"
  num_submissions: number;
}

// Main data structure from data_issue_3.json
interface FullData {
  genderData?: { [courseId: string]: GenderEntry[] };
  weeklyCourseComments?: { [courseId: string]: WeeklyCommentEntry[] };
  weeklySubmissions?: WeeklySubmissionEntry[]; // This remains overall, not course-specific in the JSON
}

// --- Component Props ---
interface CourseAnalyticsDashboardProps {
  selectedCourseId: string; // ID of the course selected in the parent Dashboard
}

// --- Constants ---
const GENDER_MAP: { [key: number]: string } = {
  1: 'Type 1',
  2: 'Type 2',
  0: 'Type 0',
  // Add more mappings as needed from your actual data
};

const PIE_CHART_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF1919'];

const CourseAnalyticsDashboard: React.FC<CourseAnalyticsDashboardProps> = ({ selectedCourseId }) => {
  const [fullData, setFullData] = useState<FullData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data/data_issue_3.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} - Could not fetch data_issue_3.json.`);
        }
        const jsonData: FullData = await response.json();
        setFullData(jsonData);
        setError(null);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('An unknown error occurred while fetching course data.');
        }
        console.error("Failed to fetch course data:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // --- Data Processing Functions ---

  const getGenderChartData = () => {
    if (!fullData?.genderData || !selectedCourseId || selectedCourseId === "all") return [];
    
    const genderEntries = fullData.genderData[selectedCourseId] || [];
    
    return genderEntries.map(entry => ({
      name: GENDER_MAP[entry.gender] || `Unknown (${entry.gender})`,
      value: entry.count,
    }));
  };

  const getWeeklyCommentsChartData = () => {
    if (!fullData?.weeklyCourseComments || !selectedCourseId || selectedCourseId === "all") return [];

    const commentEntries = fullData.weeklyCourseComments[selectedCourseId] || [];

    return commentEntries
      .map(entry => ({
        week: new Date(entry.week).toLocaleDateString(),
        num_comments: entry.num_comments,
      }))
      .sort((a,b) => new Date(a.week).getTime() - new Date(b.week).getTime());
  };

  const getWeeklySubmissionsChartData = () => {
    // Weekly submissions data is not course-specific in the provided JSON structure,
    // so it will display overall data regardless of selectedCourseId.
    // If it were course-specific, selectedCourseId would be used here similarly.
    if (!fullData?.weeklySubmissions) return [];
    return fullData.weeklySubmissions
      .map(entry => ({
        week: new Date(entry.week).toLocaleDateString(),
        num_submissions: entry.num_submissions,
      }))
      .sort((a,b) => new Date(a.week).getTime() - new Date(b.week).getTime());
  };


  if (loading) {
    return <div className="p-4 text-center">Loading course analytics data...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">Error loading data: {error}</div>;
  }

  if (!fullData || (selectedCourseId === "all" && !fullData.weeklySubmissions)) {
     // Only show "No data" if "all" is selected AND there's no overall weekly submissions data
     // Or if a specific course is selected but it yields no data for any chart.
    if (selectedCourseId !== "all" && getGenderChartData().length === 0 && getWeeklyCommentsChartData().length === 0 && getWeeklySubmissionsChartData().length === 0) {
        return <div className="p-4 text-center">No specific analytics data available for the selected course.</div>;
    }
    if (selectedCourseId === "all" && getWeeklySubmissionsChartData().length === 0){
        return <div className="p-4 text-center">No overall submission data available to display.</div>;
    }
  }


  const genderChartData = getGenderChartData();
  const weeklyCommentsData = getWeeklyCommentsChartData();
  const weeklySubmissionsData = getWeeklySubmissionsChartData(); // Remains overall

  // Determine if any relevant chart has data, especially when a specific course is selected
  const hasSpecificCourseData = selectedCourseId !== "all" && (genderChartData.length > 0 || weeklyCommentsData.length > 0);
  const hasOverallData = weeklySubmissionsData.length > 0;


  if (selectedCourseId !== "all" && !hasSpecificCourseData && !hasOverallData) {
    return <div className="p-4 text-center bg-white rounded-lg shadow">No analytics data found for the selected course.</div>;
  }
   if (selectedCourseId === "all" && !hasOverallData) {
    return <div className="p-4 text-center bg-white rounded-lg shadow">No overall submission data to display.</div>;
  }


  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 p-4">
      {/* Chart 1: Gender Distribution (Pie Chart) - Only if a specific course is selected and data exists */}
      {selectedCourseId !== "all" && genderChartData.length > 0 ? (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 text-center">Gender Distribution</h3>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={genderChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent, value }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {genderChartData.map((entry, index) => (
                  <Cell key={`cell-gender-${index}`} fill={PIE_CHART_COLORS[index % PIE_CHART_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value, name) => [value, name]} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      ) : selectedCourseId !== "all" ? <p className="text-center p-4 bg-white rounded-lg shadow">No gender data for this course.</p> : null}

      {/* Chart 2: Weekly Course Comments (Bar Chart) - Only if a specific course is selected and data exists */}
      {selectedCourseId !== "all" && weeklyCommentsData.length > 0 ? (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 text-center">Weekly Course Comments</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={weeklyCommentsData} margin={{ top: 5, right: 30, left: 20, bottom: 50 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" angle={-45} textAnchor="end" height={70} interval="preserveStartEnd" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend verticalAlign="top" />
              <Bar dataKey="num_comments" fill="#82ca9d" name="Comments" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : selectedCourseId !== "all" ? <p className="text-center p-4 bg-white rounded-lg shadow">No weekly comment data for this course.</p> : null}

      {/* Chart 3: Weekly Submissions (Line Chart) - Always shown if data exists, as it's overall */}
      {weeklySubmissionsData.length > 0 ? (
        <div className={`bg-white p-6 rounded-lg shadow xl:col-span-2`}>
          <h3 className="text-xl font-semibold mb-4 text-center">Weekly Submissions (Overall)</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={weeklySubmissionsData} margin={{ top: 5, right: 30, left: 20, bottom: 70 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" angle={-45} textAnchor="end" height={90} interval="preserveStartEnd" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend verticalAlign="top" />
              <Line type="monotone" dataKey="num_submissions" stroke="#8884d8" name="Submissions" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : <p className={`text-center p-4 bg-white rounded-lg shadow ${selectedCourseId === "all" || (!genderChartData.length && !weeklyCommentsData.length) ? 'xl:col-span-2' : ''}`}>No weekly submission data to display.</p>}
    </div>
  );
};

export default CourseAnalyticsDashboard;