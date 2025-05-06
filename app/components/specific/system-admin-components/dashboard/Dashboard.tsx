'use client';
import React from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';

const DashboardContainer = styled.div`
  padding: ${theme.spacing.lg};
  margin: 0 auto;
  background: ${theme.colors.background};
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.sm};
  height: 70%;
  width: 90%;
`;

const Title = styled.h1`
  color: ${theme.colors.textPrimary};
  font-size: ${theme.typography.fontSizes.xl};
  margin-bottom: ${theme.spacing.lg};
  font-weight: ${theme.typography.fontWeights.semibold};
`;

const WelcomeMessage = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.typography.fontSizes.md};
  margin-bottom: ${theme.spacing.xl};
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Title>Dashboard</Title>
      <WelcomeMessage>
        Welcome to the Health Insurance System Admin Dashboard
      </WelcomeMessage>
      {/* Add your dashboard content here */}
    </DashboardContainer>
  );
};

export default Dashboard; 
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,

// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
// import { Plus } from "lucide-react";

// const donutData = [
//   { name: "New companies", value: 3249, color: "#22c55e" },
//   { name: "Repeated", value: 120, color: "#a3a3a3" },
// ];

// const lineData = [
//   { year: 2015, a: 20, b: 10 },
//   { year: 2016, a: 40, b: 30 },
//   { year: 2017, a: 60, b: 50 },
//   { year: 2018, a: 80, b: 60 },
//   { year: 2019, a: 120, b: 90 },
// ];

// const admins = [
//   { name: "John", img: "https://randomuser.me/api/portraits/men/32.jpg" },
//   { name: "Jane", img: "https://randomuser.me/api/portraits/women/44.jpg" },
//   { name: "Alex", img: "https://randomuser.me/api/portraits/men/45.jpg" },
//   { name: "Sara", img: "https://randomuser.me/api/portraits/women/46.jpg" },
// ];

// const companies = [
//   {
//     id: "6579803",
//     name: "Company one",
//     address: "6206 Marjolaine Landing",
//     created: "12.09.2019 - 12:51 PM",
//     license: "LT34526",
//     status: "Active",
//   },
//   {
//     id: "6579808",
//     name: "Company Two",
//     address: "6206 Marjolaine Landing",
//     created: "12.09.2019 - 12:53 PM",
//     license: "LT34526",
//     status: "Pending",
//   },
//   {
//     id: "6579805",
//     name: "Company Three",
//     address: "6206 Marjolaine Landing",
//     created: "12.09.2019 - 12:59 PM",
//     license: "LT34527",
//     status: "Inactive",
//   },
// ];

// function StatusBadge({ status }: { status: string }) {
//   let color = "bg-green-100 text-green-700";
//   if (status === "Pending") color = "bg-yellow-100 text-yellow-700";
//   if (status === "Inactive") color = "bg-red-100 text-red-700";
//   return (
//     <span className={`px-4 py-1 rounded-lg text-sm font-medium ${color}`}>
//       {status}
//     </span>
//   );
// }

// export default function DashboardPage() {
//   return (
//     <div className="flex min-h-screen bg-muted">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white border-r flex flex-col">
//         <div className="h-20 flex items-center justify-center font-bold text-lg text-green-700">
//           Healthinsurance
//         </div>
//         <nav className="flex-1 px-4 py-2 space-y-2">
//           <Button variant="secondary" className="w-full justify-start bg-green-600 text-white hover:bg-green-700">
//             Dashboard
//           </Button>
//           <Button variant="ghost" className="w-full justify-start">
//             + Create New Company
//           </Button>
//           <Button variant="ghost" className="w-full justify-start">
//             Insurance Companies
//           </Button>
//           <Button variant="ghost" className="w-full justify-start">
//             Admins
//           </Button>
//           <Button variant="ghost" className="w-full justify-start">
//             Profile
//           </Button>
//         </nav>
//         <div className="p-4 flex items-center gap-3 border-t">
//           <Avatar>
//             <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
//             <AvatarFallback>JA</AvatarFallback>
//           </Avatar>
//           <div>
//             <div className="font-semibold">John Abraham</div>
//             <div className="text-xs text-muted-foreground">System Admin</div>
//           </div>
//         </div>
//       </aside>
//       {/* Main Content */}
//       <main className="flex-1 p-8 bg-muted min-h-screen">
//         <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           {/* Companies Card */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Companies</CardTitle>
//             </CardHeader>
//             <CardContent className="flex flex-col items-center">
//               <div className="w-32 h-32">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <PieChart>
//                     <Pie
//                       data={donutData}
//                       dataKey="value"
//                       nameKey="name"
//                       cx="50%"
//                       cy="50%"
//                       innerRadius={40}
//                       outerRadius={55}
//                       fill="#8884d8"
//                       stroke="none"
//                     >
//                       {donutData.map((entry, idx) => (
//                         <Cell key={`cell-${idx}`} fill={entry.color} />
//                       ))}
//                     </Pie>
//                   </PieChart>
//                 </ResponsiveContainer>
//               </div>
//               <div className="flex gap-8 mt-4">
//                 <div className="flex flex-col items-center">
//                   <span className="text-2xl font-bold">3249</span>
//                   <span className="text-xs text-muted-foreground">New companies</span>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <span className="text-2xl font-bold">120</span>
//                   <span className="text-xs text-muted-foreground">Repeated</span>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//           {/* Companies Analytics Card */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Companies Analytics</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="w-full h-32">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={lineData}>
//                     <XAxis dataKey="year" />
//                     <YAxis />
//                     <Tooltip />
//                     <Line type="monotone" dataKey="a" stroke="#22c55e" strokeWidth={2} />
//                     <Line type="monotone" dataKey="b" stroke="#3b82f6" strokeWidth={2} />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </CardContent>
//           </Card>
//           {/* Admins Card */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Admins</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="text-sm mb-2">Meet admin and see their ranks to get best results.</div>
//               <div className="flex -space-x-4">
//                 {admins.map((admin, idx) => (
//                   <Avatar key={idx} className="border-2 border-white">
//                     <AvatarImage src={admin.img} />
//                     <AvatarFallback>{admin.name[0]}</AvatarFallback>
//                   </Avatar>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//         {/* Companies Details Table */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Companies Details</CardTitle>
//             <div className="ml-auto">
//               <Button variant="outline" size="sm">
//                 October <Plus className="w-4 h-4 ml-2" />
//               </Button>
//             </div>
//           </CardHeader>
//           <CardContent>
//             <div className="overflow-x-auto">
//               <table className="min-w-full text-sm">
//                 <thead>
//                   <tr className="bg-muted">
//                     <th className="py-3 px-4 text-left font-semibold">ID</th>
//                     <th className="py-3 px-4 text-left font-semibold">Company Name</th>
//                     <th className="py-3 px-4 text-left font-semibold">Address</th>
//                     <th className="py-3 px-4 text-left font-semibold">Created at</th>
//                     <th className="py-3 px-4 text-left font-semibold">License</th>
//                     <th className="py-3 px-4 text-left font-semibold">Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {companies.map((c) => (
//                     <tr key={c.id} className="border-b">
//                       <td className="py-3 px-4">{c.id}</td>
//                       <td className="py-3 px-4">{c.name}</td>
//                       <td className="py-3 px-4">{c.address}</td>
//                       <td className="py-3 px-4">{c.created}</td>
//                       <td className="py-3 px-4">{c.license}</td>
//                       <td className="py-3 px-4">
//                         <StatusBadge status={c.status} />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </CardContent>
//         </Card>
//       </main>
//     </div>
//   );
// }