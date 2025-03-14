"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { CreditCard, Users, FileText, Package } from "lucide-react";

const widgets = [
  {
    title: "Total Revenue",
    value: 125600,
    prefix: "$",
    change: "12.5% from last month",
    positive: true,
    icon: CreditCard,
  },
  {
    title: "Active Leads",
    value: 48,
    change: "7.2% from last month",
    positive: true,
    icon: Users,
  },
  {
    title: "Proposals Sent",
    value: 32,
    change: "4.1% from last month",
    positive: true,
    icon: FileText,
  },
  {
    title: "Completed Orders",
    value: 18,
    change: "2.3% from last month",
    positive: false,
    icon: Package,
  },
];

const AnalyticsOverview = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 mt-[-10px]">
      {widgets.map((widget, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="bg-background-card text-text shadow-card border border-border rounded-xl p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm text-text-muted">{widget.title}</h3>
              <widget.icon className="text-primary" size={18} />
            </div>
            <div className="mt-2">
              <div className="text-2xl font-semibold">
                <CountUp start={0} end={widget.value} duration={2} prefix={widget.prefix || ""} />
              </div>
              <div className={`text-xs mt-2 font-medium ${widget.positive ? "text-green-600" : "text-red-600"}`}>
                {widget.positive ? "\u2191" : "\u2193"} {widget.change}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AnalyticsOverview;
