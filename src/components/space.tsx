import React from 'react';

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
};

const Space: React.FC<Props> = ({ children }) => (
  <div className="space">{children}</div>
);

export default Space;
