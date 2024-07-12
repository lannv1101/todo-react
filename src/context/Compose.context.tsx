import React, { FC, ReactNode } from 'react';

interface IComposeContext {
  components?: FC<{ children?: ReactNode }>[];
  children?: ReactNode | undefined;
}

export default function ComposeContext(
  props: IComposeContext,
) {
  const { components = [], children } = props;

  return (
    <>
      {components.reduceRight((acc, Comp: any) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
}
