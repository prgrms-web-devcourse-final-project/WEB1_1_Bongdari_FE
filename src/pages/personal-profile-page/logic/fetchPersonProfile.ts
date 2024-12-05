import axios from 'axios';
import circleCat from '../circleCat.jpg';

export const fetchPersonProfile = async (userId: string) => {
  try {
    const res = await axios.get(import.meta.env.VITE_APP_BASE_URL + `/api/volunteer/profile/${userId}`);
    console.log('testest', res);

    if (res.status === 200) return res.data;
    else if (res.status === 400)
      return {
        id: '??',
        nickname: 'tmpProfile',
        imgUrl: circleCat,
        introduce:
          '안녕 잘지내니 나는 잘지내 그래 너도 잘지내라 그래 나도 잘지낼게 안녕 잘지내니 나는 잘지내 그래 너도 잘지내라 그래 나도 잘지낼게 안녕 잘지내니 나는 잘지내 그래 너도 잘지내라 그래 나도 잘지낼게 ',
        tier: 'white',
        totalVolunteerHours: 30,
        totalVolunteerCount: 9
      };
  } catch (e) {
    console.error(e);
    console.error(`error fetching api/profile/${userId} from pages/personal-profile-page/logic/fetchPersonProfile.ts`);
  }
};
