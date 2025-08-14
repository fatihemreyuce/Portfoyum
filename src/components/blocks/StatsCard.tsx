import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar } from "recharts";

interface StatItem { name: string; value: number; }

export default function StatsCard({ title, data }: { title: string; data: StatItem[] }) {
  return (
    <Card className="rounded-2xl">
      <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
      <CardContent className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
