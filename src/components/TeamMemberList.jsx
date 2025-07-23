
import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import './TeamMemberList.css';

const teamMembers = [
  { 
    id: 1, name: '조장', icon: '👑', 
    intro: '팀을 이끄는 든든한 리더입니다.',
    mbti: 'ENTJ',
    skills: ['React', 'Leadership', 'Project Management'],
    hobby: '독서',
    color: '#ff4b4b' /* Red */
  },
  { 
    id: 2, name: '조원 2', icon: '💻', 
    intro: '백엔드 개발을 책임집니다.',
    mbti: 'INTP',
    skills: ['Node.js', 'Python', 'Database'],
    hobby: '게임',
    color: '#4b89ff' /* Blue */
  },
  { 
    id: 3, name: '조원 3', icon: '🎨', 
    intro: '디자인과 프론트엔드를 담당합니다.',
    mbti: 'ISFP',
    skills: ['CSS', 'Figma', 'JavaScript'],
    hobby: '그림 그리기',
    color: '#a84bff' /* Purple */
  },
  { 
    id: 4, name: '조원 4', icon: '💡', 
    intro: '기획과 아이디어를 담당합니다.',
    mbti: 'ENFP',
    skills: ['企画', 'Brainstorming', 'Presentation'],
    hobby: '영화 감상',
    color: '#ffc64b' /* Yellow */
  },
  { 
    id: 5, name: '조원 5', icon: '⚙️', 
    intro: '인프라와 배포를 책임집니다.',
    mbti: 'ISTJ',
    skills: ['AWS', 'Docker', 'CI/CD'],
    hobby: '등산',
    color: '#4bffa7' /* Mint */
  },
  { 
    id: 6, name: '조원 6', icon: '🚀', 
    intro: '성능 최적화를 담당합니다.',
    mbti: 'ESTP',
    skills: ['Web Performance', 'Testing', 'Automation'],
    hobby: '자전거 타기',
    color: '#ff7a4b' /* Orange */
  },
];

function TeamMemberList() {
  return (
    <div className="team-member-list">
      {teamMembers.map(member => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}

export default TeamMemberList;

