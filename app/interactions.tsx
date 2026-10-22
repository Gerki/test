'use client';

import { useEffect } from 'react';

export default function Interactions() {
  useEffect(() => {
    const nav = document.querySelector('.nav');
    const updateNav = () => nav?.classList.toggle('scrolled', window.scrollY > 60);
    updateNav();
    window.addEventListener('scroll', updateNav);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener('scroll', updateNav);
      observer.disconnect();
    };
  }, []);

  return null;
}
