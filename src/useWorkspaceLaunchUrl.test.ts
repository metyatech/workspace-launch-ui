import { renderHook } from '@testing-library/react';
import { useWorkspaceLaunchUrl } from './useWorkspaceLaunchUrl.js';
import { vi, describe, it, expect } from 'vitest';

const mockUseLocation = vi.fn(() => ({ pathname: '/docs/guide/index.html' }));

vi.mock('@docusaurus/router', () => ({
  useLocation: () => mockUseLocation(),
}));

vi.mock('@docusaurus/useBaseUrl', () => ({
  default: vi.fn((path) => path),
}));

vi.mock('@metyatech/workspace-template-generator', () => ({
  createWorkspaceTemplate: vi.fn((opts) => `vscode://metyatech.workspace-launch/open?workspaceId=${opts.workspaceId}`),
}));

describe('useWorkspaceLaunchUrl', () => {
  it('should generate a scoped workspaceId based on pathname', () => {
    mockUseLocation.mockReturnValue({ pathname: '/docs/guide/index.html' });
    const { result } = renderHook(() =>
      useWorkspaceLaunchUrl({
        workspaceId: 'test-ws',
        structure: [],
      }),
    );

    expect(result.current).toContain('guide__test-ws');
  });

  it('should handle root pathname', () => {
    mockUseLocation.mockReturnValue({ pathname: '/' });

    const { result } = renderHook(() =>
      useWorkspaceLaunchUrl({
        workspaceId: 'test-ws',
        structure: [],
      }),
    );

    expect(result.current).toContain('test-ws');
    expect(result.current).not.toContain('__test-ws');
  });
});
