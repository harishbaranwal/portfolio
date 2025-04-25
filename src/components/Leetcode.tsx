import React, { useState, useEffect } from "react";
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend 
} from "recharts";
import { 
  Card, CardContent, CardDescription, 
  CardHeader, CardTitle 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Table, TableBody, TableCaption, TableCell, 
  TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Code, Award, BarChart3, CheckCircle2, 
  XCircle, Calendar 
} from "lucide-react";

interface LeetcodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking: number;
  contributionPoint: number;
  recentSubmissions: {
    title: string;
    titleSlug: string;
    timestamp: string;
    statusDisplay: string;
    lang: string;
    __typename: string;
  }[];
  matchedUserStats?: {
    totalSubmissionNum: {
      difficulty: string;
      count: number;
      submissions: number;
    }[];
  };
}

const COLORS = ["#22c55e", "#eab308", "#ef4444"];
const DIFFICULTY_COLORS = {
  "Easy": "#22c55e",
  "Medium": "#eab308",
  "Hard": "#ef4444",
  "All": "#3b82f6"
};

const Leetcode = () => {
  const [leetcodeData, setLeetcodeData] = useState<LeetcodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeetcodeData = async () => {
      try {
        const response = await fetch("https://leetcode-api-faisalshohag.vercel.app/akarshrajput");
        
        if (!response.ok) {
          throw new Error(`Failed to fetch LeetCode data: ${response.status}`);
        }
        
        const data = await response.json();
        setLeetcodeData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch LeetCode data");
        console.error("Error fetching LeetCode data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetcodeData();
  }, []);

  const createPieData = () => {
    if (!leetcodeData) return [];
    
    return [
      { name: "Easy", value: leetcodeData.easySolved, color: DIFFICULTY_COLORS.Easy },
      { name: "Medium", value: leetcodeData.mediumSolved, color: DIFFICULTY_COLORS.Medium },
      { name: "Hard", value: leetcodeData.hardSolved, color: DIFFICULTY_COLORS.Hard },
    ];
  };

  const formatDate = (timestamp: string) => {
    return new Date(parseInt(timestamp) * 1000).toLocaleDateString();
  };

  const createBarData = () => {
    if (!leetcodeData) return [];
    
    return [
      {
        name: "Easy",
        solved: leetcodeData.easySolved,
        total: leetcodeData.totalEasy,
        fill: DIFFICULTY_COLORS.Easy
      },
      {
        name: "Medium",
        solved: leetcodeData.mediumSolved,
        total: leetcodeData.totalMedium,
        fill: DIFFICULTY_COLORS.Medium
      },
      {
        name: "Hard",
        solved: leetcodeData.hardSolved,
        total: leetcodeData.totalHard,
        fill: DIFFICULTY_COLORS.Hard
      },
    ];
  };

  if (loading) {
    return (
      <section id="leetcode" className="section-container">
        <h2 className="section-title">LeetCode Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Skeleton className="h-[300px] w-full rounded-lg" />
          <Skeleton className="h-[300px] w-full rounded-lg" />
          <Skeleton className="h-[300px] w-full rounded-lg" />
          <Skeleton className="h-[300px] w-full rounded-lg" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="leetcode" className="section-container">
        <h2 className="section-title">LeetCode Progress</h2>
        <Card className="bg-red-50 dark:bg-red-900/10">
          <CardContent className="pt-6">
            <p className="text-red-600 dark:text-red-400">
              Error loading LeetCode data: {error}
            </p>
          </CardContent>
        </Card>
      </section>
    );
  }

  if (!leetcodeData) return null;

  const pieData = createPieData();
  const barData = createBarData();

  return (
    <section id="leetcode" className="section-container">
      <h2 className="section-title">LeetCode Progress</h2>
      <p className="section-subtitle">
        A snapshot of my problem-solving journey on LeetCode
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Overall Progress
            </CardTitle>
            <CardDescription>
              Solved {leetcodeData.totalSolved} out of {leetcodeData.totalQuestions} problems
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Total Progress</span>
                  <span className="text-sm font-medium">
                    {((leetcodeData.totalSolved / leetcodeData.totalQuestions) * 100).toFixed(1)}%
                  </span>
                </div>
                <Progress 
                  value={(leetcodeData.totalSolved / leetcodeData.totalQuestions) * 100} 
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-green-600">Easy</span>
                  <span className="text-sm font-medium">
                    {leetcodeData.easySolved}/{leetcodeData.totalEasy} 
                    ({((leetcodeData.easySolved / leetcodeData.totalEasy) * 100).toFixed(1)}%)
                  </span>
                </div>
                <Progress 
                  value={(leetcodeData.easySolved / leetcodeData.totalEasy) * 100} 
                  className="bg-green-100" 
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-yellow-600">Medium</span>
                  <span className="text-sm font-medium">
                    {leetcodeData.mediumSolved}/{leetcodeData.totalMedium} 
                    ({((leetcodeData.mediumSolved / leetcodeData.totalMedium) * 100).toFixed(1)}%)
                  </span>
                </div>
                <Progress 
                  value={(leetcodeData.mediumSolved / leetcodeData.totalMedium) * 100} 
                  className="bg-yellow-100" 
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-red-600">Hard</span>
                  <span className="text-sm font-medium">
                    {leetcodeData.hardSolved}/{leetcodeData.totalHard} 
                    ({((leetcodeData.hardSolved / leetcodeData.totalHard) * 100).toFixed(1)}%)
                  </span>
                </div>
                <Progress 
                  value={(leetcodeData.hardSolved / leetcodeData.totalHard) * 100} 
                  className="bg-red-100" 
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Problem Distribution
            </CardTitle>
            <CardDescription>
              Solved problems by difficulty level
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value} problems`, 'Solved']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Recent Submissions
            </CardTitle>
            <CardDescription>
              Latest problem submissions and their status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Problem</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Language</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leetcodeData.recentSubmissions.slice(0, 10).map((submission, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      <a 
                        href={`https://leetcode.com/problems/${submission.titleSlug}/`} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary underline-offset-4 hover:underline"
                      >
                        {submission.title.trim()}
                      </a>
                    </TableCell>
                    <TableCell>{formatDate(submission.timestamp)}</TableCell>
                    <TableCell>
                      {submission.statusDisplay === "Accepted" ? (
                        <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                          <CheckCircle2 className="mr-1 h-3 w-3" />
                          {submission.statusDisplay}
                        </Badge>
                      ) : (
                        <Badge variant="destructive">
                          <XCircle className="mr-1 h-3 w-3" />
                          {submission.statusDisplay}
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {submission.lang}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              LeetCode Stats
            </CardTitle>
            <CardDescription>
              Global ranking and contribution statistics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="rounded-lg bg-card p-4 shadow">
                <h3 className="text-muted-foreground text-sm font-medium">Total Solved</h3>
                <p className="text-3xl font-bold mt-1">{leetcodeData.totalSolved}</p>
              </div>
              <div className="rounded-lg bg-card p-4 shadow">
                <h3 className="text-muted-foreground text-sm font-medium">Global Ranking</h3>
                <p className="text-3xl font-bold mt-1">{leetcodeData.ranking.toLocaleString()}</p>
              </div>
              <div className="rounded-lg bg-card p-4 shadow">
                <h3 className="text-muted-foreground text-sm font-medium">Contribution Points</h3>
                <p className="text-3xl font-bold mt-1">{leetcodeData.contributionPoint}</p>
              </div>
              <div className="rounded-lg bg-card p-4 shadow">
                <h3 className="text-muted-foreground text-sm font-medium">Total Submissions</h3>
                <p className="text-3xl font-bold mt-1">
                  {leetcodeData.matchedUserStats?.totalSubmissionNum[0]?.submissions || 0}
                </p>
              </div>
            </div>

            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={barData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="solved" name="Solved" fill="#8884d8" />
                  <Bar yAxisId="right" dataKey="total" name="Total Problems" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Leetcode;
