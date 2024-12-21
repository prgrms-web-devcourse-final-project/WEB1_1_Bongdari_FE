import axiosInstance from '@/api/apis';
import {
  interestCenterType,
  myMessageType,
  myVolunteerType,
  personProfileType,
  reviewType
} from '@/shared/types/person-profile/personProfile';
import { dataTypeWithPage, resType } from '@/shared/types/resType';

export const fetchMyProfile = async () => {
  try {
    const res: resType<personProfileType> = await axiosInstance.get(`api/volunteer/profile/me`);
    console.log('fetchMyProfile data', res.data);
    if (res.code >= 200 && res.code < 300) return res.data;
    else console.log(`fetchMyProfile res ${res.code}`);
  } catch (e) {
    console.error(e);
  }
};

export const fetchMyVolunteer = async (myId: string, page: number = 0) => {
  try {
    const res: resType<dataTypeWithPage<myVolunteerType>> = await axiosInstance.get(
      `api/volunteer-applies/volunteer/${myId}?page=${page}`
    );
    console.log('fetchMyVolunteer data', res.data);
    if (res.code >= 200 && res.code < 300) return res.data;
    else console.log(`fetchMyVolunteer res ${res.code}`);
  } catch (e) {
    console.error(e);
  }
};

export const fetchMyMessage = async (page: number = 0) => {
  try {
    const res: resType<dataTypeWithPage<myMessageType>> = await axiosInstance.get(`api/note/volunteer?page=${page}`);
    console.log('fetchMyMessage data', res.data);
    if (res.code >= 200 && res.code < 300) return res.data;
    else console.log(`fetchMyMessage res ${res.code}`);
  } catch (e) {
    console.error(e);
  }
};

export const fetchMyInterestCenter = async () => {
  try {
    const res: resType<interestCenterType[]> = await axiosInstance.get(`/api/interest-centers`);
    console.log('fetchMyInterestCenter data', res.data);
    if (res.code >= 200 && res.code < 300) return res.data;
    else console.log(`fetchMyInterestCenter res ${res.code}`);
  } catch (e) {
    console.error(e);
  }
};

export const fetchMyReview = async (myLoginId: string, page: number = 0) => {
  try {
    const res: resType<dataTypeWithPage<reviewType>> = await axiosInstance.get(
      `/api/reviews/volunteer/${myLoginId}?page=${page}`
    );
    console.log('fetchMyReview data', res.data);
    if (res.code >= 200 && res.code < 300) return res.data;
    else console.log(`fetchMyReview res ${res.code}`);
  } catch (e) {
    console.error(e);
  }
};
