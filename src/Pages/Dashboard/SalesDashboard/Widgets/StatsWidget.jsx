import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Users, BarChart } from "lucide-react";

const StatsWidget = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 300);
  }, []);

  const stats = [
    {
      title: "Total Team Members",
      value: 6,
      icon: <Users className="w-5 h-5 text-status-info" />,
      change: "+8%",
      subtext: "vs last month",
      changeColor: "text-status-success",
    },
    {
      title: "Active Members",
      value: 83,
      icon: <Users className="w-5 h-5 text-status-info" />,
      change: "+8%",
      subtext: "vs last month",
      isPercentage: true,
      changeColor: "text-status-success",
    },
    {
      title: "Total Revenue Generated",
      value: 535000,
      icon: <BarChart className="w-5 h-5 text-status-info" />,
      change: "+12%",
      subtext: "vs last quarter",
      isMoney: true,
      changeColor: "text-status-success",
    },
    {
      title: "Avg. Performance Score",
      value: 80,
      icon: <BarChart className="w-5 h-5 text-status-info" />,
      change: "+5%",
      subtext: "vs last quarter",
      isPercentage: true,
      changeColor: "text-status-success",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: animate ? 1 : 0, y: animate ? 0 : 20 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="p-4 rounded-2xl bg-background-card  shadow-card"
        >
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2 text-text-muted">
              {stat.icon}
              <span className="text-sm">{stat.title}</span>
            </div>
            <div className="text-2xl font-bold text-text-default">
              {animate && (
                <CountUp
                  end={stat.value}
                  duration={2}
                  separator=","
                  prefix={stat.isMoney ? "$" : ""}
                  suffix={stat.isPercentage ? "%" : ""}
                />
              )}
            </div>
            <div className={`text-xs font-medium ${stat.changeColor}`}>
              {stat.change} <span className="text-text-muted">{stat.subtext}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsWidget;
