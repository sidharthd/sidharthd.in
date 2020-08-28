import React from 'react';

type Props = {
  children: string;
  error?: boolean;
  success?: boolean;
};

const Message: React.FC<Props> = ({ children, error, success }) => {
  const className = `message ${error && 'message-error'} ${success &&
    'message-success'}`;
  return <div className={className}>{children}</div>;
};

export default Message;
