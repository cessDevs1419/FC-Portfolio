import { useEffect, useRef, useState } from "react";

interface CounterProps {
    end: number;
    duration?: number;
    suffix?: string;
}

const Counter = ({ end, duration = 2000, suffix = "" }: CounterProps) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLHeadingElement | null>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;

                    let start = 0;
                    const increment = end / (duration / 16);

                    const animate = () => {
                        start += increment;
                        if (start < end) {
                            setCount(Math.floor(start));
                            requestAnimationFrame(animate);
                        } else {
                            setCount(end);
                        }
                    };

                    animate();
                }
            },
            { threshold: 0.5 },
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [end, duration]);

    return (
        <h3 ref={ref} className="font-sub text-white m-0 p-0">
            {count}
            {suffix}
        </h3>
    );
};

export default Counter;
