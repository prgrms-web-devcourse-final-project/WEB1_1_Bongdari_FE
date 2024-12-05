export type RecruitUIState = '모집중' | '모집완료' | '종료';
export type RecruitAPIState = 'RECRUITING' | 'CLOSED' | 'COMPLETED';

const recruitStatusMapping: Record<RecruitUIState, RecruitAPIState> = {
  모집중: 'RECRUITING',
  모집완료: 'CLOSED',
  종료: 'COMPLETED'
} as const;

export default recruitStatusMapping;

export const statusToKorean: Record<RecruitAPIState, RecruitUIState> = {
  RECRUITING: '모집중',
  CLOSED: '모집완료',
  COMPLETED: '종료'
} as const;
