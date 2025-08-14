import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "React", value: 90 },
  { name: "TypeScript", value: 80 },
  { name: "Tailwind CSS", value: 85 },
  { name: "Shadcn UI", value: 70 },
  { name: "Lucide Icons", value: 65 },
];

const COLORS = ["#0ea5e9", "#6366f1", "#f97316", "#22c55e", "#a855f7"];

export default function SkillsDonut() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Teknoloji Yetenek Oranları</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
