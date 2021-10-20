import React, { useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { detailsMember } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { deleteMember } from "../redux/actions";

const MemberDetail = ({ route, navigation }) => {
  const { member } = useSelector((state) => state.membersReducer);
  const id = 4;
  const dispatch = useDispatch();
  const { item } = route.params;

  const getMember = (id) => dispatch(detailsMember(id));

  useEffect(() => {
    getMember(id);
  }, []);

  const onDelete = () => {
    dispatch(deleteMember(item.id));
  };

  if (member === "undefined") {
    return <View></View>;
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Image
          source={{ uri: item.image }}
          resizeMode="cover"
          style={{ width: "100%", height: 400 }}
        />
        <View style={{ marginStart: 16, marginTop: 24 }}>
          <View>
            <Text style={styles.textTitle}>{item.name}</Text>
            <Text>{item.job}</Text>
          </View>
          <View style={{ marginTop: 24 }}>
            <Text style={styles.textTitle}>Idade</Text>
            <Text>{item.age}</Text>
          </View>
          <View style={{ marginTop: 24 }}>
            <Text style={styles.textTitle}>Projetos que participou</Text>
            <Text>{item.project}</Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 24,
          }}
        >
          <View
            style={{
              flex: 1,
              marginStart: 16,
              marginEnd: 16,
              alignItems: "center",
              borderWidth: 2,
              borderColor: "#1E22AA",
            }}
          >
            <TouchableOpacity onPress={() => onDelete()}>
              <View style={{ flexDirection: "row", padding: 16 }}>
                <MaterialIcons
                  color={"#0C0D44"}
                  TouchableOpacity={"70%"}
                  size={30}
                  name="delete"
                />
                <View style={{ justifyContent: "center" }}>
                  <Text
                    style={{
                      color: "#0C0D44",
                      justifyContent: "center",
                      fontWeight: "700",
                      marginStart: 8,
                    }}
                  >
                    Excluir
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              marginEnd: 16,
              marginStart: 8,
              alignItems: "center",
              borderWidth: 2,
              borderColor: "#1E22AA",
              backgroundColor: "#1E22AA",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("EditMember", { item: item })}
            >
              <View
                style={{
                  flexDirection: "row",
                  padding: 16,
                }}
              >
                <MaterialIcons color={"#fff"} size={30} name="edit" />
                <View style={{ justifyContent: "center" }}>
                  <Text
                    style={{
                      color: "#fff",
                      justifyContent: "center",
                      fontWeight: "700",
                      marginStart: 8,
                    }}
                  >
                    Editar
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MemberDetail;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
});
