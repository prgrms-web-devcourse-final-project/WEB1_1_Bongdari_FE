import axiosInstance from '@/api/apis';
import {
  myMessageDetailType,
  myMessageType,
  myVolunteerType,
  personProfileType
} from '@/shared/types/person-profile/personProfile';
import { dataTypeWithPage, resType } from '@/shared/types/resType';
import axios from 'axios';

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

export const fetchMyMessageDetail = async (message_id: number) => {
  try {
    const res: resType<myMessageDetailType> = await axiosInstance.get(`api/note/volunteer/${message_id}`);
    console.log('fetchMyMessageDetail data', res.data);
    if (res.code >= 200 && res.code < 300) return res.data;
    else console.log(`fetchMyMessageDetail res ${res.code}`);
  } catch (e) {
    console.error(e);
  }
};

export const fetchMyInterestCenter = async () => {
  try {
    const res = await axios.get(import.meta.env.VITE_APP_BASE_URL + `/api/interest-centers`);
    console.log('fetchMyInterestCenter data', res.data);
    if (res.status === 200) return res.data;
    else if (res.status === 400) console.log('fetchMyInterestCenter res 400');
    else if (res.status === 500) console.log('fetchMyInterestCenter res 500');
  } catch (e) {
    console.error(e);
  }
};

export const fetchMyReview = async (myLoginId: string, page: number = 1) => {
  try {
    const res = await axios.get(import.meta.env.VITE_APP_BASE_URL + `/api/reviews/volunteer/${myLoginId}?page=${page}`);
    console.log('fetchMyReview data', res.data);
    if (res.status === 200) return res.data;
    else if (res.status === 400) console.log('fetchMyReview res 400');
    else if (res.status === 500) console.log('fetchMyReview res 500');
  } catch (e) {
    console.error(e);
  }
};
