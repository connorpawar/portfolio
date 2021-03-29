import { NextRouter } from 'next/router';

export const handleNavClick = (router: NextRouter, href: string) => (
  e: any
) => {
  e.preventDefault();
  router.push(href).then(() => window.scrollTo(0, 0));
};

export const handleNavAwayClick = (href: string) => (e: any) => {
  e.preventDefault();
  window.location.href = href;
};
