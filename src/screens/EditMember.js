import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import FormInput from "../components/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { editMember, showModal, hideModal } from "../redux/actions";
import CustomModal from "../components/CustomModal";

const EditMember = ({ route }) => {
  const dispatch = useDispatch();
  const { item } = route.params;
  const { modal } = useSelector((state) => state.modalReducer);

  const [id, setId] = useState(item.id);
  const [name, setName] = useState(item.name);
  const [role, setRole] = useState(item.job);
  const [compTime, setCompTime] = useState("");
  const [project, setProject] = useState(item.project);
  const [age, setAge] = useState(item.age.toString());
  const [image, setImage] = useState(
    "https://mosano.eu/static/b15c5b4f8122455228ea71dfaec36d31/0a9c8/12e272b0-7538-4595-a3fd-2680bef420fe_rsousa.jpg"
  );

  const onSubmit = () => {
    dispatch(
      editMember({
        name: name,
        age: parseInt(age),
        job: role,
        project: project,
        image: image,
        id: id,
      })
    );
    dispatch(showModal());
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <CustomModal
            displayAlert={modal}
            displayNegativeButton={false}
            displayPosistiveButton={false}
            alertTitleText={"Membro Editado"}
            alertMessageText={"Membro editado com sucesso!"}
            onPressCancelButton={() => {
              dispatch(hideModal());
              navigation.goBack();
            }}
          />
          <FormInput label={"Nome"} onChangeText={setName} value={name} />
          <FormInput label={"Cargo"} value={role} onChangeText={setRole} />
          <FormInput
            keyboardType={"numeric"}
            label={"Idade"}
            value={age}
            onChangeText={setAge}
          />
          <FormInput label={"Tempo de empresa"} value={"Tempo de empresa"} />
          <FormInput
            label={"Projetos que participou"}
            value={project}
            onChangeText={setProject}
          />
          <FormInput
            label={"URL da foto do membro"}
            value={image}
            onChangeText={setImage}
          />

          <View
            style={{
              alignItems: "center",
              justifyContent: "flex-end",
              flex: 1,
              alignItems: "stretch",
              margin: 16,
            }}
          >
            <TouchableOpacity
              style={{
                padding: 16,
                backgroundColor: "#1E22AA",
                alignItems: "center",
              }}
              onPress={() => onSubmit()}
            >
              <Text
                style={{ color: "#fff", fontWeight: "700", letterSpacing: 1 }}
              >
                Salvar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditMember;

const styles = StyleSheet.create({});
