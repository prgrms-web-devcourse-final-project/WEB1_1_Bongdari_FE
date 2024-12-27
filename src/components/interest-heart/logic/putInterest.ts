// import axiosInstance from '@/api/apis';
// import { interestType } from '@/shared/types/interest/interestType';
// import { resType } from '@/shared/types/resType';

// export const postInterest = async (center_id: string) => {
//   try {
//     const res: resType<interestType> = await axiosInstance.post(`/api/interest-center`, {
//       center_id: center_id
//     });
//     console.log('interest post Response:', res);

//     if (res.code >= 200 && res.code < 300) return res.data;
//     else console.log(`deleteInterest res ${res.code}`);
//   } catch (e) {
//     console.error('POST Error:', e);
//   }
// };

// export const deleteInterest = async (center_id: string) => {
//   try {
//     const res: resType<string> = await axiosInstance.delete(`/api/interest-center/${center_id}`);
//     console.log('interest Delete Response:', res);

//     if (res.code >= 200 && res.code < 300) return res.data;
//     else console.log(`deleteInterest res ${res.code}`);
//   } catch (e) {
//     console.error('DELETE Error:', e);
//   }
// };
