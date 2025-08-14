// src/components/SkillsDonut.tsx
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export type DataItem = { name: string; value: number };

const data: DataItem[] = [
  { name: "React", value: 90 },
  { name: "TypeScript", value: 80 },
  { name: "Tailwind CSS", value: 85 },
  { name: "shadcn/ui", value: 70 },
  { name: "Lucide", value: 65 },
];

const COLORS = ["#0ea5e9", "#6366f1", "#f97316", "#22c55e", "#a855f7"];

export default function SkillsDonut() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-center text-2xl font-bold">Teknoloji Yetenek Oranları</h2>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              dataKey="value"
              paddingAngle={5}
            >
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
