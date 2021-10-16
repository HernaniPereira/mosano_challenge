import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { getMembers } from "../redux/actions";
import { MaterialIcons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const { members } = useSelector((state) => state.membersReducer);
  const dispatch = useDispatch();
  console.log(members);
  const fetchMembers = () => dispatch(getMembers());

  useEffect(() => {
    fetchMembers();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          marginVertical: 12,
          flex: 0.5,
          margin: 10,
        }}
      >
        <View>
          <Image
            source={{ uri: item.image }}
            resizeMode="cover"
            style={{ width: "100%", height: 200 }}
          />
          <View>
            <Text style={{ fontWeight: "bold", marginTop: 8 }}>
              {item.name}
            </Text>
            <Text style={{ marginTop: 4, fontWeight: "400" }}>{item.job}</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <TouchableOpacity
              style={{ marginEnd: 12 }}
              onPress={() => alert("delete")}
            >
              <MaterialIcons
                color={"#0C0D44"}
                TouchableOpacity={"70%"}
                size={30}
                name="delete"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginStart: 12 }}
              onPress={() => alert("edit")}
            >
              <MaterialIcons color={"#1E22AA"} size={30} name="edit" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 32,
          marginEnd: 16,
          marginStart: 16,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ letterSpacing: 1, fontWeight: "bold", fontSize: 25 }}>
            MOSANO
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ height: 50, backgroundColor: "#1E22AA" }}
            onPress={() => console.log("")}
          >
            <Text
              style={{
                color: "#fff",
                flex: 1,
                textAlign: "center",
                textAlignVertical: "center",
                fontWeight: "700",
              }}
            >
              Adicionar Membro
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, marginTop: 24 }}>
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-between" }}
          data={members}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
