import AsyncStorage from "@react-native-community/async-storage";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

class UserService {
  static async getLoggedUser(): Promise<any> {
    const user = JSON.parse(await AsyncStorage.getItem("USER"));
    const loggedUser = (await firestore().doc(`users/${user.id}`).get()).data();
    return loggedUser;
  }

  static setLoggedUser(user: User): Promise<void> {
    return AsyncStorage.setItem("USER", JSON.stringify(user));
  }
}

export interface User {
  id: string;
  name: string;
  rate: number;
}

export default UserService;
