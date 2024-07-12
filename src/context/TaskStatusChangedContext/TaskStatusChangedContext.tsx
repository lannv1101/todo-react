import React, {
  FC,
  PropsWithChildren,
  ReactElement,
  createContext,
  useState,
} from 'react';

export const TaskStatusChangedContext = createContext({
  updated: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle: () => {},
});

export const TaskStatusChangedContextProvider: FC<
  PropsWithChildren
> = (props): ReactElement => {
  const [updated, setUpdated] = useState(false);

  function toggleHandler() {
    updated ? setUpdated(false) : setUpdated(true);
  }

  return (
    <TaskStatusChangedContext.Provider
      value={{
        updated: updated,
        toggle: toggleHandler,
      }}
    >
      {props.children}
    </TaskStatusChangedContext.Provider>
  );
};
