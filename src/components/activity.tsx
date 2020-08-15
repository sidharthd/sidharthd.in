import React from 'react';

type Props = {
  icon: string;
  label: string;
};

const Activity: React.FC<Props> = ({ icon, label }) => (
  <div className="activity">
    <img className="activity-icon" src={icon} alt="" />
    <span className="activity-label">{label}</span>
  </div>
);

export default Activity;
