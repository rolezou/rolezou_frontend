import firestore from "@react-native-firebase/firestore";

class EventService {
  static async getAllEvents(): Promise<Event[]> {
    const snapshot = await firestore().collection("events").get();
    const events = snapshot.docs.map((doc) => doc.data()) as Event[];
    return [
      ...events,
      ...events,
      ...events,
      ...events,
      ...events,
      ...events,
      ...events,
      ...events,
      ...events,
      ...events,
    ];
  }

  static async insertEvent() {}
}

export interface Event {
  name: string;
  price: number;
  type: string;
  gender: string;
  date: any;
  userRate?: number;
}

export default EventService;
