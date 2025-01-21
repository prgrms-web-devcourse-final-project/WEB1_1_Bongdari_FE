import { VolunteerType } from '@/shared/types/aidrq-create-type/AidRqCreateType';

//유효성 검사
export const validateVolunteerData = (data: VolunteerType) => {
  const errors = [];

  if (!data.title) {
    errors.push('제목을 입력해주세요.');
  }

  if (!data.region) {
    errors.push('지역을 선택해주세요.');
  }

  if (data.recruitment_count <= 0) {
    errors.push('모집 인원을 입력해주세요.');
  }

  if (!data.location.address) {
    errors.push('주소를 입력해주세요.');
  }

  if (!data.volunteer_start_date_time || !data.volunteer_end_date_time) {
    errors.push('활동 일시를 선택해주세요.');
  }

  if (data.volunteer_hours <= 0) {
    errors.push('봉사 시간을 입력해주세요.');
  }

  if (!data.content) {
    errors.push('활동 설명을 입력해주세요.');
  }

  if (data.content.length > 1000) {
    errors.push('활동 설명은 1000자 이하로 작성해주세요.');
  }

  // 날짜 검사
  if (data.volunteer_start_date_time && data.volunteer_end_date_time) {
    const startDate = new Date(data.volunteer_start_date_time);
    const endDate = new Date(data.volunteer_end_date_time);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    // 시작일이 내일 이전인지 검사
    if (startDate < tomorrow) {
      errors.push('시작일은 내일 이후여야 합니다.');
    }

    // 종료일이 시작일보다 이른지 검사
    if (endDate < startDate) {
      errors.push('종료일은 시작일 이후여야 합니다.');
    }
  }

  return errors;
};
