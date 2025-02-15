import React from 'react';

interface SkillBadgeProps {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, level }) => {
  const getLevelColor = () => {
    switch (level) {
      case 'Expert':
        return {
          background: 'bg-gradient-to-r from-green-50 to-green-100',
          text: 'text-green-800',
          border: 'border-green-200',
          progress: 'w-full'
        };
      case 'Advanced':
        return {
          background: 'bg-gradient-to-r from-blue-50 to-blue-100',
          text: 'text-blue-800',
          border: 'border-blue-200',
          progress: 'w-[75%]'
        };
      case 'Intermediate':
        return {
          background: 'bg-gradient-to-r from-yellow-50 to-yellow-100',
          text: 'text-yellow-800',
          border: 'border-yellow-200',
          progress: 'w-[50%]'
        };
      default:
        return {
          background: 'bg-gradient-to-r from-gray-50 to-gray-100',
          text: 'text-gray-800',
          border: 'border-gray-200',
          progress: 'w-[25%]'
        };
    }
  };

  const colors = getLevelColor();

  return (
    <div 
      className={`group relative px-4 py-3 rounded-lg border ${colors.border} ${colors.background} 
        hover:shadow-md transition-all duration-300 cursor-pointer`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className={`font-semibold ${colors.text}`}>{name}</span>
          <span className={`text-sm opacity-75 ${colors.text}`}>{level}</span>
        </div>
        
        {/* Progress bar */}
        <div className="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className={`h-full ${colors.background} ${colors.border} ${colors.progress}
              transition-all duration-500 ease-out group-hover:opacity-100 opacity-75`}
          />
        </div>
      </div>

      {/* Tooltip on hover */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 
        opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className={`${colors.background} ${colors.border} ${colors.text} 
          px-2 py-1 rounded text-sm whitespace-nowrap shadow-lg`}>
          {level === 'Expert' && '5+ years experience'}
          {level === 'Advanced' && '3-5 years experience'}
          {level === 'Intermediate' && '1-3 years experience'}
          {level === 'Beginner' && '< 1 year experience'}
        </div>
        <div className={`w-3 h-3 ${colors.background} ${colors.border} rotate-45 
          absolute -bottom-1.5 left-1/2 transform -translate-x-1/2`} />
      </div>
    </div>
  );
};

export default SkillBadge;