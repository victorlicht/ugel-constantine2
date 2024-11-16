import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardFooter, 
  CardDescription 
} from '@/components/ui/card';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { getFemaleUsersCount, getMaleUsersCount, getUsersCount } from '@/data/user-data';

interface Metric {
  title: string;
  count: Promise<number> | string;
  change: number;
  sub1: { label: string; count: Promise<number> | number };
  sub2: { label: string; count: Promise<number> | number };
}

const metrics: Metric[] = [
  { 
    title: 'المستخدمون', 
    count: getUsersCount(), 
    change: 8, 
    sub1: { label: 'الذكور', count: getMaleUsersCount() },
    sub2: { label: 'الإناث', count: getFemaleUsersCount() },
  },
  { 
    title: 'الشكاوى', 
    count: '523', 
    change: -5, 
    sub1: { label: 'تم حلها', count: 300 },
    sub2: { label: 'قيد الانتظار', count: 223 },
  },
  { 
    title: 'الأعضاء', 
    count: '3,457', 
    change: 7, 
    sub1: { label: 'عضو نشط', count: 2800 },
    sub2: { label: 'عضو غير نشط', count: 657 },
  },
  { 
    title: 'المنشورات', 
    count: '1,024', 
    change: 4, 
    sub1: { label: 'منشور عام', count: 720 },
    sub2: { label: 'منشور خاص', count: 304 },
  },
];

const MetricCard: React.FC<Metric> = ({ title, count, change, sub1, sub2 }) => (
  <Card className='w-full'>
    <CardHeader>
      <CardTitle className="text-gray-500 text-sm">{title}</CardTitle>
      <CardDescription className="text-xs text-gray-400">
        {change >= 0 ? `Increase` : `Decrease`}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex items-baseline justify-start">
        <span className="text-4xl font-bold text-gray-900">{count}</span>
        <div className={`flex items-center ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change >= 0 ? (
            <ArrowUpRight className="w-4 h-4 mr-1" />
          ) : (
            <ArrowDownRight className="w-4 h-4 mr-1" />
          )}
          <span className="text-sm font-medium">
            {change >= 0 ? `+${change}%` : `${change}%`}
          </span>
        </div>
      </div>
      {/* Sub-category counts */}
      <div className="text-xs text-gray-600 flex justify-around">
        <p>{sub1.label}: {sub1.count}</p>
        <p>{sub2.label}: {sub2.count}</p>
      </div>
    </CardContent>
  </Card>
);

const MetricCards: React.FC = () => (
  <>
    {metrics.map((metric, index) => (
      <MetricCard
        key={index}
        title={metric.title}
        count={metric.count}
        change={metric.change}
        sub1={metric.sub1}
        sub2={metric.sub2}
      />
    ))}
  </>
);

export default MetricCards;
