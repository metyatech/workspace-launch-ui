declare module '@docusaurus/router' {
  export interface RouterLocation {
    pathname?: string;
  }

  export function useLocation(): RouterLocation;
}

declare module '@docusaurus/useBaseUrl' {
  export default function useBaseUrl(path: string): string;
}

declare module '@docusaurus/Link' {
  import type { ComponentType, ReactNode } from 'react';

  interface DocusaurusLinkProps {
    href?: string;
    to?: string;
    className?: string;
    children?: ReactNode;
  }

  const Link: ComponentType<DocusaurusLinkProps>;
  export default Link;
}
