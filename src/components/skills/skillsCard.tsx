import React from 'react';

interface SkillCardProps {
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description }) => {
  return (
    <div className="skill-card">
      <h3 style={{color:"#6566F1",font:"bold"}}>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SkillCard;