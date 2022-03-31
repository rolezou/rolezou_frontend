import {
  faChevronDown,
  faList,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import EventCard from "../../components/EventCard";
import useEffectAsync from "../../services/AsyncEffect";
import EventService, { Event } from "../../services/EventService";
import UserService, { User } from "../../services/UserService";
import Header from "../../shared/components/Header";
import { FilterButton, FilterHeader } from "./styles";

export default function Home() {
  let [events, setEvents] = useState<Event[]>([]);
  let [user, setUser] = useState<User>(null);

  useEffectAsync(async () => {
    const events = await EventService.getAllEvents();
    setEvents(events);

    const user = await UserService.getLoggedUser();
    setUser(user);
  });

  if (!user) return null;

  return (
    <>
      <Header />
      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <ScrollView>
          <FilterHeader>
            <FilterButton>
              <Text>
                Filtrar <FontAwesomeIcon icon={faChevronDown} />
              </Text>
            </FilterButton>
          </FilterHeader>
          {events.map((a, index) => (
            <SafeAreaView>
              <ScrollView style={{ marginVertical: 10 }}>
                <EventCard event={{ ...a, userRate: user.rate }} />
              </ScrollView>
            </SafeAreaView>
          ))}
        </ScrollView>
      </View>
    </>
  );
}
