import React from 'react';
import { useLocation } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import type { CreateWorkspaceTemplateOptions } from '@metyatech/workspace-template-generator';
import { createWorkspaceTemplate } from '@metyatech/workspace-template-generator';

function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
}

function toRelativePath(pathname: string, baseUrl: string): string {
  if (pathname.startsWith(baseUrl)) {
    return pathname.slice(baseUrl.length);
  }
  return pathname.replace(/^\/+/, '');
}

function sanitizeSegment(segment: string): string {
  return segment.replace(/[^a-zA-Z0-9._-]/g, '_');
}

function buildScopePrefix(pathname: string, baseUrl: string): string {
  const normalizedBase = normalizeBaseUrl(baseUrl);
  const relative = toRelativePath(pathname, normalizedBase)
    .replace(/\/index(?:\.html)?$/, '')
    .replace(/\/+$/, '');

  if (!relative) {
    return '';
  }

  return relative.split('/').filter(Boolean).map(sanitizeSegment).join('__');
}

export function useWorkspaceLaunchUrl(
  options: CreateWorkspaceTemplateOptions,
): string {
  const { workspaceId, ...rest } = options;
  const location = useLocation();
  const baseUrl = useBaseUrl('/');

  const scopePrefix = React.useMemo(
    () => buildScopePrefix(location.pathname ?? '', baseUrl),
    [location.pathname, baseUrl],
  );

  const scopedWorkspaceId = scopePrefix
    ? `${scopePrefix}__${workspaceId}`
    : workspaceId;

  return createWorkspaceTemplate({
    ...rest,
    workspaceId: scopedWorkspaceId,
  });
}
