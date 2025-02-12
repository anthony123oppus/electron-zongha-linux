import{ useRef } from 'react';
import styles from '../styles/Navbar.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface CurveProps {
    isActive : boolean
}

export default function Curve({ isActive } : CurveProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useGSAP(() => {
    if (svgRef.current) {
      const path = svgRef.current.querySelector('path');
      if (isActive) {
        gsap.to(path, {
          opacity: 1,
          attr: { d: `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0` },
          duration: 1,
          ease: 'power3.out'
        });
      } else {
        gsap.to(path, {
          opacity: 1,
          attr: { d: `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0` },
          duration: 0.8,
          ease: 'power3.out'
        });
      }
    }
  }, [isActive]);

  return (
    <svg ref={svgRef} className={styles.svgCurve}>
      <path
        d={
          typeof window !== 'undefined'
            ? `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`
            : '' // Fallback for SSR
        }
      />
    </svg>
  );
}