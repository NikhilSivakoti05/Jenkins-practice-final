import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

export default function CountUpStats() {
  // 🔹 Internal CountUp animation
  const CountUp = ({
    to,
    from = 0,
    direction = "up",
    delay = 0,
    duration = 2,
    className = "",
    startWhen = true,
    separator = "",
  }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(direction === "down" ? to : from);

    const damping = 20 + 40 * (1 / duration);
    const stiffness = 100 * (1 / duration);
    const springValue = useSpring(motionValue, { damping, stiffness });

    const isInView = useInView(ref, { once: true, margin: "0px" });

    const getDecimalPlaces = (num) => {
      const str = num.toString();
      if (str.includes(".")) {
        const decimals = str.split(".")[1];
        if (parseInt(decimals) !== 0) return decimals.length;
      }
      return 0;
    };

    const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

    useEffect(() => {
      if (ref.current) {
        ref.current.textContent = String(direction === "down" ? to : from);
      }
    }, [from, to, direction]);

    useEffect(() => {
      if (isInView && startWhen) {
        const timeoutId = setTimeout(() => {
          motionValue.set(direction === "down" ? from : to);
        }, delay * 1000);
        return () => clearTimeout(timeoutId);
      }
    }, [isInView, startWhen, motionValue, direction, from, to, delay]);

    useEffect(() => {
      const unsubscribe = springValue.on("change", (latest) => {
        if (ref.current) {
          const hasDecimals = maxDecimals > 0;
          const options = {
            useGrouping: !!separator,
            minimumFractionDigits: hasDecimals ? maxDecimals : 0,
            maximumFractionDigits: hasDecimals ? maxDecimals : 0,
          };
          const formattedNumber = Intl.NumberFormat("en-US", options).format(latest);
          ref.current.textContent = separator
            ? formattedNumber.replace(/,/g, separator)
            : formattedNumber;
        }
      });
      return () => unsubscribe();
    }, [springValue, separator, maxDecimals]);

    return <span className={className} ref={ref} />;
  };

  // 🔹 Statistics data
  const stats = [
    { id: 1, label: "Drone Bodies", to: 100 },
    { id: 2, label: "Enclosure", to: 100 },
    { id: 3, label: "CNC Milling", to: 100 },
    { id: 4, label: "Car Toys", to: 100 },
  ];

  // 🔹 Render layout
  return (
    <section id="products" className="bg-white py-20">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="max-w-6xl mx-auto text-center">
          {/* 🔸 Heading Section */}
          <div className="flex flex-col items-center mb-12">
            
            <h2 className="text-5xl font-display font-bold mb-4 text-gray-900">
              Products We Delivered
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A snapshot of our latest delivery performance across multiple categories.
            </p>
          </div>

          {/* 🔸 Numbers Section */}
          <div className="flex flex-wrap justify-center items-center gap-16 mt-10">
            {stats.map((stat, index) => (
              <div key={stat.id} className="flex flex-col items-center">
                <CountUp
                  from={0}
                  to={stat.to}
                  separator=","
                  duration={1.5}
                  delay={index * 0.2}
                  className="text-6xl font-bold text-pulse-500"
                />
                <span className="mt-3 text-gray-700 text-lg font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
