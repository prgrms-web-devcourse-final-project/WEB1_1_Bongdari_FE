import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';
import {
  interestCenterType,
  myMessageType,
  myVolunteerType,
  personProfileType,
  reviewType
} from '@/shared/types/person-profile/personProfile';
import { dataTypeWithPage, resType } from '@/shared/types/resType';

// 내 프로필 불러오기
const fetchMyProfile = async () => {
  const res: resType<personProfileType> = await axiosInstance.get(`api/volunteer/profile/me`);
  return res.data;
};

export const useMyProfile = () => {
  return useQuery({
    queryKey: ['myProfile'],
    queryFn: fetchMyProfile
  });
};

// 내 지원현황 불러오기
const fetchMyVolunteer = async (myId: string, page: number = 0) => {
  const res: resType<dataTypeWithPage<myVolunteerType>> = await axiosInstance.get(
    `api/volunteer-applies/volunteer/${myId}?page=${page}&size=5`
  );
  return res.data;
};

export const useMyVolunteer = (myId: string, page: number = 0) => {
  return useQuery({
    queryKey: ['myVolunteer', page],
    queryFn: () => fetchMyVolunteer(myId, page - 1)
  });
};

// 내 받은 메시지 불러오기
const fetchMyMessage = async (page: number = 0) => {
  const res: resType<dataTypeWithPage<myMessageType>> = await axiosInstance.get(`api/note/volunteer?page=${page}`);
  return res.data;
};

export const useMyMessage = (page: number = 0) => {
  return useQuery({
    queryKey: ['myMessage', page],
    queryFn: () => fetchMyMessage(page - 1)
  });
};

// 내 관심기관 불러오기
const fetchMyInterestCenter = async () => {
  const res: resType<interestCenterType[]> = await axiosInstance.get(`/api/interest-centers`);
  return res.data;
};

export const useMyInterestCenterQuery = () => {
  return useQuery({
    queryKey: ['myInterestCenter'],
    queryFn: fetchMyInterestCenter
  });
};

// 내가 남긴 리뷰 불러오기
const fetchMyReview = async (myLoginId: string, page: number = 0) => {
  const res: resType<dataTypeWithPage<reviewType>> = await axiosInstance.get(
    `/api/reviews/volunteer/${myLoginId}?page=${page}`
  );
  return res.data;
};

export const useMyReviewQuery = (myLoginId: string, page: number = 0) => {
  return useQuery({
    queryKey: ['myReview'],
    queryFn: () => fetchMyReview(myLoginId, page - 1)
  });
};
