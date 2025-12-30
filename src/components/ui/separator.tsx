import { Separator as SeparatorPrimitive } from '@base-ui/react/separator';

import { cn } from '@/lib/utils';

function Separator({ className, orientation = 'horizontal', ...props }: SeparatorPrimitive.Props) {
  return (
    <SeparatorPrimitive
      className={cn(
        'bg-border shrink-0',
        // Horizontal: changed h-px to h-[0.5px]
        'data-[orientation=horizontal]:h-[0.5px] data-[orientation=horizontal]:w-full',
        // Vertical: changed w-px to w-[0.5px]
        "data-[orientation=vertical]:w-px data-[orientation=vertical]:not-[[class^='h-']]:not-[[class*='_h-']]:self-stretch",
        className
      )}
      data-slot="separator"
      orientation={orientation}
      {...props}
    />
  );
}

export { Separator };
