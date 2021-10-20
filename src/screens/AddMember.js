import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
//import FormInput from "../components/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { postMember, showModal, hideModal } from "../redux/actions";
import CustomModal from "../components/CustomModal";
import { FormProvider, useForm } from "react-hook-form";
import { FormInput } from "../components/_FormInput";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

const MEMBER_FIELDS = {
  name: "name",
  age: "age",
  job: "job",
  project: "project",
  image: "image",
};
const AddMember = ({ navigation }) => {
  const { modal } = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();

  /*  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [compTime, setCompTime] = useState("");
  const [project, setProject] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState(
    "https://mosano.eu/static/b15c5b4f8122455228ea71dfaec36d31/0a9c8/12e272b0-7538-4595-a3fd-2680bef420fe_rsousa.jpg"
  ); */

  const formMethods = useForm();

  const onSubmit = (form) => {
    dispatch(postMember(form));
    dispatch(showModal());
  };
  /*  const onSubmit = (form) => {
    const data = {
      name: name,
      age: age,
      job: role,
      project: project,
      image: image,
    };
    dispatch(
      postMember({
        name: "Hernani",
        age: "21",
        job: "React Native Dev",
        project: "Mosano",
        image:
          "https://mosano.eu/static/b15c5b4f8122455228ea71dfaec36d31/0a9c8/12e272b0-7538-4595-a3fd-2680bef420fe_rsousa.jpg",
      })
    );
    dispatch(showModal());
  }; */

  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;
  return (
    <KeyboardAvoidingWrapper>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <CustomModal
            displayAlert={modal}
            displayNegativeButton={false}
            displayPosistiveButton={false}
            alertTitleText={"Membro adicionado"}
            alertMessageText={"Membro adcionado com sucesso!"}
            onPressCancelButton={() => {
              dispatch(hideModal());
              navigation.goBack();
            }}
          />
          <View style={{ alignItems: "center", margin: 32 }}>
            <Text style={{ fontWeight: "700", fontSize: 20 }}>
              Adicionar membro
            </Text>
          </View>

          <FormProvider {...formMethods}>
            <FormInput
              name={MEMBER_FIELDS.name}
              label="Nome"
              placeholder="Nome"
              rules={{ required: "Nome is required!" }}
            />
            <FormInput
              name={MEMBER_FIELDS.job}
              label="Cargo"
              placeholder="Cargo"
              rules={{
                required: "Job is required!",
              }}
            />
            <FormInput
              name={MEMBER_FIELDS.age}
              label="Idade"
              placeholder="Idade"
              rules={{
                required: "Age is required!",
              }}
            />
            <FormInput
              name={MEMBER_FIELDS.project}
              label="Projectos em que participou"
              placeholder="Projetos"
              rules={{
                required: "Projects is required!",
              }}
            />
            <FormInput
              name={MEMBER_FIELDS.image}
              label="Url da foto do membro"
              placeholder={"Url"}
              rules={{
                required: "URL is required!",
              }}
            />
          </FormProvider>

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
              onPress={formMethods.handleSubmit(onSubmit)}
            >
              <Text
                style={{ color: "#fff", fontWeight: "700", letterSpacing: 1 }}
              >
                Salvar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  );
  return (
    <View>
      <View>
        <FormInput label="Nome" placeHolder="Nome" onChangeText={setName} />
        <FormInput label="Cargo" placeHolder="Cargo" onChangeText={setRole} />
        <FormInput
          label="Tempo de empresa"
          placeHolder="Tempo de empresa"
          onChangeText={setCompTime}
        />
        <FormInput label="Idade" placeHolder="Idade" onChangeText={setAge} />
        <FormInput
          label="Projetos que participou"
          placeHolder="Projetos que participou"
          onChangeText={setProject}
        />
        <FormInput
          label="Url da foto do membro"
          placeHolder="Url da foto do membro"
        />
      </View>
    </View>
  );
};

export default AddMember;

const styles = StyleSheet.create({});
