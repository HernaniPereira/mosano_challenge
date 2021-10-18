import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const CustomModal = ({
  displayAlert,
  onPressPositiveButton,
  onPressNegativeButton,
  onPressCancelButton,
}) => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setShowModal(displayAlert);
  }, [displayAlert]);

  const onPositiveButtonPress = () => {
    onPressPositiveButton();
  };
  const onNegativeButtonPress = () => {
    onPressNegativeButton();
  };
  const onCancelButtonPress = () => {
    onPressCancelButton();
  };
  console.log("custom modal", showModal);
  return (
    <Modal visible={showModal} transparent={true} animationType={"fade"}>
      <View style={styles.mainOuterComponent}>
        <View style={styles.container}>
          <View style={styles.top}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Text style={styles.textTitle}>Excluir membro</Text>
              <TouchableOpacity onPress={() => onCancelButtonPress()}>
                <MaterialIcons
                  color={"#0C0D44"}
                  TouchableOpacity={"70%"}
                  size={30}
                  name="close"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.middle}>
            <Text style={styles.alertMessageTextStyle}>
              Tem a certeza que deseja excluir este membro?
            </Text>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity
              style={styles.cancel}
              onPress={() => onNegativeButtonPress()}
            >
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.action}
              onPress={() => onPositiveButtonPress()}
            >
              <Text style={styles.actionText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

CustomModal.propTypes = {
  displayAlert: PropTypes.bool,
  onPressPositiveButton: PropTypes.func,
  onPressNegativeButton: PropTypes.func,
  onPressCancelButton: PropTypes.func,
};

export default CustomModal;

const styles = StyleSheet.create({
  mainOuterComponent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000088",
  },
  container: {
    width: "80%",
    paddingStart: 16,
    paddingBottom: 24,
    paddingEnd: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    //borderWidth: 1,
    //borderColor: "#ff0000",
  },
  top: {
    width: "100%",
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    //borderWidth: 1,
    //borderColor: "#00FF00",
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
  textTitle: {
    fontWeight: "700",
    fontSize: 24,
  },
  middle: {
    marginTop: 16,
    width: "100%",
    //borderWidth: 1,
    //borderColor: "#FF6600",
    padding: 4,
    color: "#FFFFFF",
    fontSize: 16,
    marginVertical: 2,
  },
  bottom: {
    width: "100%",
    marginTop: 32,
    //borderWidth: 1,
    //borderColor: "#0066FF",
    flexDirection: "row",
    padding: 4,
    justifyContent: "space-evenly",
  },
  alertMessageTextStyle: {
    textAlign: "justify",
    padding: 2,
  },
  cancel: {
    flex: 0.5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#1E22AA",
    marginEnd: 8,
  },
  action: {
    flex: 0.5,
    height: 50,
    padding: 10,
    marginStart: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E22AA",
  },
  actionText: {
    color: "#fff",
    fontWeight: "700",
  },
  cancelText: {
    fontWeight: "700",
  },
});
