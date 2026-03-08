import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import type { CreateWorkspaceTemplateOptions } from '@metyatech/workspace-template-generator';
import { useWorkspaceLaunchUrl } from './useWorkspaceLaunchUrl.js';

export type WorkspaceLaunchButtonProps = CreateWorkspaceTemplateOptions & {
  className?: string;
  children?: React.ReactNode;
};

export function WorkspaceLaunchButton(
  props: WorkspaceLaunchButtonProps,
): React.JSX.Element {
  const { className, children, ...templateOptions } = props;
  const href = useWorkspaceLaunchUrl(templateOptions);

  return (
    <Link className={clsx('button button--primary', className)} href={href}>
      {children ?? 'ワークスペースを開く'}
    </Link>
  );
}

export default WorkspaceLaunchButton;
