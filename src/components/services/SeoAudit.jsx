import React from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const crawledURLsData = [{ name: "Internal", value: 13, color: "#7DD3FC" }];

const crawlStatusData = [
  { name: "Crawled", value: 27, color: "#22C55E" },
  { name: "Uncrawled", value: 22, color: "#E5E7EB" },
];
const errorDistributionData = [
  { name: "URLs without errors", value: 15, color: "#22C55E" },
  { name: "URLs with errors", value: 3, color: "#EF4444" },
];

const SeoAudit = () => {
  return (
    <div className="p-6 lg:px-36  min-h-screen text-gray-800">
      <div className="sm:flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          Overview
          <span className="text-sm text-gray-400 bg-gray-200 rounded-full w-4 h-4 flex items-center justify-center ">
            ?
          </span>
          <span className="text-sm text-gray-400 font-normal">How to use</span>
        </h1>
        <div className="flex justify-end">
        <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm flex items-center gap-2 bg-white hover:bg-gray-50">
          <span className="text-lg">📄</span>
          Print to PDF
        </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          {/* Crawled URLs Distribution */}
          <Card title="Crawled URLs distribution" count="13">
            <div className="flex items-center justify-between ">
              <div className="w-32 h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={crawledURLsData}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={40}
                      outerRadius={60}
                      startAngle={90}
                      endAngle={450}
                    >
                      {crawledURLsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-sky-300"></div>
                  <span className="text-sm">Internal</span>
                  <span className="text-sm font-semibold ml-auto">13</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Crawl status of links found */}
          <Card title="Crawl status of links found" count="59">
            <div className="flex items-center justify-between ">
              <div className="w-32 h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={crawlStatusData}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={40}
                      outerRadius={60}
                      startAngle={90}
                      endAngle={450}
                    >
                      {crawlStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">Crawled</span>
                  <span className="text-sm font-semibold ml-auto">27</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <span className="text-sm">Uncrawled</span>
                  <span className="text-sm font-semibold ml-auto">22</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Health Score */}
        <Card title="Health Score">
          <div className="flex flex-col items-center py-4">
            <div className="relative w-32 h-32 mb-4">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#E5E7EB"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="url(#healthGradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${93 * 2.51} 251.2`}
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient
                    id="healthGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#F97316" />
                    <stop offset="100%" stopColor="#22C55E" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold">93</span>
              </div>
            </div>
            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
              Good
            </div>
            <p className="text-xs text-gray-500 text-center max-w-48">
              Health Score reflects the proportion of internal URLs on your site
              that don't have errors
            </p>
            <div className="mt-4 w-full">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
              <div className="w-full h-4 bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 rounded"></div>
            </div>
          </div>
        </Card>

        <div className="space-y-2">
          {/* Issues Distribution */}
          <Card title="Issues distribution">
            <div className="space-y-3 py-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-red-500"></div>
                  <span className="text-sm">Errors</span>
                </div>
                <span className="text-sm font-semibold">46</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-yellow-500"></div>
                  <span className="text-sm">Warnings</span>
                </div>
                <span className="text-sm font-semibold">38</span>
              </div>
              <div class="w-full bg-yellow-500 h-2 rounded-full"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-blue-500"></div>
                  <span className="text-sm">Notices</span>
                </div>
                <span className="text-sm font-semibold">3</span>
              </div>
              <div class="w-8 bg-blue-500 h-2 rounded-full"></div>
            </div>
          </Card>

          {/* Error distribution */}
          <Card title="Error distribution" count="18">
            <div className="flex items-center justify-between">
              <div className="w-32 h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={errorDistributionData}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={40}
                      outerRadius={60}
                      startAngle={90}
                      endAngle={450}
                    >
                      {errorDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">URLs without errors</span>
                  <span className="text-sm font-semibold ml-auto">15</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-sm">URLs with errors</span>
                  <span className="text-sm font-semibold ml-auto">3</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Top Issues */}
      <Card title="Top Issues" className="mt-6">
        <div className="flex justify-end mb-4">
          <button className="border border-gray-300 px-3 py-1.5 rounded-lg text-sm bg-white hover:bg-gray-50 flex items-center gap-1">
            <span>📤</span>
            Export all issues
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-gray-500 border-b border-gray-200">
              <tr>
                <th className="pb-3 font-medium">Issue</th>
                <th className="pb-3 font-medium">Crawled</th>
                <th className="pb-3 font-medium">Change</th>
                <th className="pb-3 font-medium">Added</th>
                <th className="pb-3 font-medium">New</th>
                <th className="pb-3 font-medium">Removed</th>
                <th className="pb-3 font-medium">Missing</th>
                <th className="pb-3 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 flex items-center gap-2">
                  <span className="text-red-500">⚠️</span>
                  <span className="text-red-600">Orphan</span>
                </td>
                <td className="py-3">3</td>
                <td className="py-3 text-gray-400">—</td>
                <td className="py-3 text-gray-400">—</td>
                <td className="py-3 text-gray-400">—</td>
                <td className="py-3 text-gray-400">—</td>
                <td className="py-3 text-gray-400">—</td>
                <td className="py-3">
                  <span className="text-gray-400 bg-gray-200 rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    ?
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

const Card = ({ title, children, className = "", count }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className={`bg-white rounded-xl border border-gray-200 shadow-sm p-6 ${className}`}
  >
    <h2 className="font-semibold text-base text-gray-800 mb-4 flex items-center gap-2">
      {title}
      <span className="text-gray-400 bg-gray-200 rounded-full w-4 h-4 flex items-center justify-center text-xs">
        ?
      </span>
      {count && (
        <span className="text-sm text-gray-500 font-normal ml-auto">
          {count}
        </span>
      )}
    </h2>
    {children}
  </motion.div>
);

export default SeoAudit;
