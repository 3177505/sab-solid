import UiHomepage from '@/components/pages/ui/UiHomepage'

type UiShellProps = {
  variant: 'classic' | 'premium'
}

export default function UiShell({ variant }: UiShellProps) {
  return (
    <article className={`uiShell uiShell--${variant} presentationPage--full`}>
      <UiHomepage variant={variant} />
    </article>
  )
}
