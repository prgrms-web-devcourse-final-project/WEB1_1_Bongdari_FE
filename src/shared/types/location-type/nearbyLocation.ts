export interface Coordinates {
  lat: number;
  lng: number;
}

export interface GetActivitiesParams {
  latitude: number;
  longitude: number;
  radius?: number;
  page?: number;
  size?: number;
}

export interface Activity {
  id: number;
  title: string;
  content: string;
  location: {
    latitude: number;
    longitude: number;
  };
}
