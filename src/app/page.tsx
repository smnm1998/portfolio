'use client';

// import 문
import { useEffect, useRef, useState } from 'react';
import '@/components/main/main.scss';

// 메인 컴포넌트
export default function Page() {
    // 이벤트 핸들러
    const bow = () => alert('🙇‍♂️');
    const textRef = useRef<HTMLParagraphElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isInitial, setIsInitial] = useState(true);

    // useEffect 훅
    useEffect(() => {
        const handleMouseEnter = () => {
            setIsHovered(true);
            setIsInitial(false);
        };

        const handleMouseLeave = () => {
            setIsHovered(false);
        };

        const textElement = textRef.current;
        if (textElement) {
            textElement.addEventListener('mouseenter', handleMouseEnter);
            textElement.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (textElement) {
                textElement.removeEventListener('mouseenter', handleMouseEnter);
                textElement.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    // JSX 반환
    return (
        <div className="main-container">
            <p ref={textRef} className="typing-effect" onClick={bow}>
                LEESEMIN PORTFOLIO
            </p>
            {!isInitial && (
                <div
                    className={`expand-bg ${isHovered ? 'expand' : 'contract'}`}
                ></div>
            )}
        </div>
    );
}
