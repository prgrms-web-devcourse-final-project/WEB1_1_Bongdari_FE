import axiosInstance from '@/api/apis';
import { AlertType } from '@/shared/types/alert-type/AlertType';

export const deleteAllNotifications = async (notifications: AlertType[]) => {
  try {
    const ids = notifications.map((notification) => notification.id);

    await axiosInstance.post('/api/notification/read/multiple', { ids });
  } catch (error) {
    console.error('Failed to delete notifications:', error);
  }
};
