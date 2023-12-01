import { TopNavDesktop } from './TopNavDesktop';
import { TopNavMobile } from './TopNavMobile';

export function TopNav(): JSX.Element {
  return (
    <header class="bg-white">
      <TopNavDesktop />
      <TopNavMobile />
    </header>
  );
}
