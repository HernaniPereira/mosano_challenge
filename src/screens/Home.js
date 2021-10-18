import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { getMembers } from "../redux/actions";
import { MaterialIcons } from "@expo/vector-icons";
import CustomModal from "../components/CustomModal";
import { deleteMember } from "../redux/actions";

const Home = ({ navigation }) => {
  const { members } = useSelector((state) => state.membersReducer);
  const dispatch = useDispatch();
  const fetchMembers = () => dispatch(getMembers());
  const [showModal, setShowModal] = useState(false);
  const [itemId, setItemId] = useState(null);

  useEffect(() => {
    fetchMembers();
    const willFocusSubscription = navigation.addListener("focus", () => {
      fetchMembers();
    });
    return willFocusSubscription;
  }, []);

  const handleModal = () => setShowModal(() => !showModal);

  const renderItem = ({ item }) => {
    return (
      <View style={{ flex: 0.5, margin: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MemberDetail", { item: item })}
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
              <Text style={{ marginTop: 4, fontWeight: "400" }}>
                {item.job}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity
            style={{ marginEnd: 12 }}
            onPress={() => {
              handleModal();
              setItemId(item.id);
            }}
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
    );
  };

  const header = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: 32,
          marginEnd: 16,
          marginStart: 16,
          justifyContent: "space-between",
          marginBottom: 30,
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
            onPress={() => navigation.navigate("AddMember")}
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
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <CustomModal
        displayAlert={showModal}
        onPressPositiveButton={() => {
          dispatch(deleteMember(itemId));
          fetchMembers();
          handleModal();
        }}
        onPressNegativeButton={handleModal}
        onPressCancelButton={handleModal}
      />

      <View style={{ flex: 1, marginTop: 24 }}>
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-between" }}
          data={members}
          ListHeaderComponent={header}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(item) => renderItem(item)}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  iOSBackdrop: {
    backgroundColor: "#000000",
    opacity: 0.3,
  },
  androidBackdrop: {
    backgroundColor: "#232f34",
    opacity: 0.32,
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
